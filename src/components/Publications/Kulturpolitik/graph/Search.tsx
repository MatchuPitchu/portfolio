import { KeyboardEvent, ChangeEvent, FC, useEffect, useState, useCallback } from 'react';
import { useSigma } from 'react-sigma-v2';
import { Attributes } from 'graphology-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { FiltersState } from './types';
import classes from './Search.module.css';

interface Props {
  filters: FiltersState;
}

/**
 * This component is basically a fork from React-sigma-v2's SearchControl
 * component, to get some minor adjustments:
 * 1. We need to hide hidden nodes from results
 * 2. We need custom markup
 */
const Search: FC<Props> = ({ filters }) => {
  const sigma = useSigma();

  const [search, setSearch] = useState<string>('');
  const [values, setValues] = useState<Array<{ id: string; label: string }>>([]);
  const [selected, setSelected] = useState<string | null>(null);

  const refreshValues = useCallback(() => {
    const newValues: Array<{ id: string; label: string }> = [];
    const lcSearch = search.toLowerCase();

    if (!selected && search.length > 1) {
      sigma.getGraph().forEachNode((key: string, attributes: Attributes): void => {
        if (
          !attributes.hidden &&
          attributes.label &&
          attributes.label.toLowerCase().indexOf(lcSearch) === 0
        )
          newValues.push({ id: key, label: attributes.label });
      });
    }

    setValues(newValues);
  }, [search, selected, sigma]);

  // Refresh values when search is updated
  useEffect(() => refreshValues(), [search, refreshValues]);

  // Refresh values when filters are updated (but wait a frame first)
  useEffect(() => {
    requestAnimationFrame(refreshValues);
  }, [filters, refreshValues]);

  useEffect(() => {
    if (!selected) return;

    sigma.getGraph().setNodeAttribute(selected, 'highlighted', true);
    const nodeDisplayData = sigma.getNodeDisplayData(selected);

    if (nodeDisplayData) {
      sigma.getCamera().animate({ ...nodeDisplayData, ratio: 0.7 }, { duration: 600 });
    }

    return () => {
      sigma.getGraph().setNodeAttribute(selected, 'highlighted', false);
    };
  }, [selected, sigma]);

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const searchString = target.value;
    const valueItem = values.find((value) => value.label === searchString);

    if (valueItem) {
      setSearch(valueItem.label);
      setValues([]);
      setSelected(valueItem.id);
    } else {
      setSelected(null);
      setSearch(searchString);
      sigma.getCamera().animatedReset({ duration: 600 });
    }
  };

  const onKeyPress = ({ key }: KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter' && values.length) {
      setSearch(values[0].label);
      setSelected(values[0].id);
    }
  };

  return (
    <div className={classes.searchbar}>
      <Icon className={classes['searchbar__icon']} icon='search' />
      <input
        className={classes['searchbar__input']}
        type='search'
        placeholder='Suche Akteure ...'
        list='nodes'
        value={search}
        onChange={onInputChange}
        onKeyPress={onKeyPress}
      />
      <datalist className={classes['searchbar__list']} id='nodes'>
        {values.map((value: { id: string; label: string }) => (
          <option key={value.id} value={value.label}>
            {value.label}
          </option>
        ))}
      </datalist>
    </div>
  );
};

export default Search;
