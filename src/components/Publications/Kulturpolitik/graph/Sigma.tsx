import { FC, useRef, useState, useEffect, useCallback } from 'react';
import {
  ControlsContainer,
  SearchControl,
  SigmaContainer,
  FullScreenControl,
  ZoomControl,
} from 'react-sigma-v2';
import 'react-sigma-v2/lib/react-sigma-v2.css';
import GraphSettingsController from './GraphSettingsController';
import classes from './Sigma.module.css';

import { Dataset, FiltersState, Group } from './types';
import drawLabel from './canvas-utils';
import GraphEventsController from './GraphEventsController';
import GraphDescription from './GraphDescription';
import Search from './Search';
import GraphDataController from './GraphDataController';
import GroupsPanel from './GroupsPanel';

interface Props {
  dataPath: string;
  description?: string;
}

const Graph: FC<Props> = ({ dataPath, description }) => {
  const [showContents, setShowContents] = useState(false);
  const [dataReady, setDataReady] = useState(false);
  const [dataset, setDataset] = useState<Dataset | null>(null);
  const [filtersState, setFiltersState] = useState<FiltersState>({ groups: [] });
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const overlayRef = useRef<HTMLDivElement | null>(null);

  // first mouse scroll does not lead to zooming in graph
  // when user clicks on graph, mouse events are possible with graph
  const activateClickInGraph = () => {
    overlayRef.current!.style.pointerEvents = 'none';
  };

  const dataHandler = useCallback((data: Dataset) => {
    setDataset(data);
    setFiltersState({ groups: data.groups });
    // requestAnimationFrame(() => setDataReady(true));
  }, []);

  const groupsGeneralHandler = (isAll?: boolean) => {
    const newFilters = filtersState.groups.map((item) => ({
      key: item.key,
      value: isAll ? true : false,
    }));
    setFiltersState((_) => ({ groups: newFilters }));
  };

  const toggleFilter = (group: Group) => {
    const newFilters = filtersState.groups.map((item) => {
      if (item.key === group.key) return { key: item.key, value: !item.value };
      return item;
    });
    setFiltersState((_) => ({ groups: newFilters }));
  };

  return (
    <div className={classes['sigma-container']}>
      <div
        className={classes.overlay}
        ref={overlayRef}
        style={{ pointerEvents: 'all' }}
        onClick={activateClickInGraph}
      />
      <SigmaContainer
        initialSettings={{
          labelRenderer: drawLabel,
        }}
        className={classes.sigma}
        style={{ height: '94vh', width: '100%' }}
      >
        <GraphEventsController setHoveredNode={setHoveredNode} />
        <GraphDataController
          dataPath={dataPath}
          filters={filtersState}
          transferData={dataHandler}
        />
        <GraphSettingsController hoveredNode={hoveredNode} dataPath={dataPath} />

        <ControlsContainer className={classes.controls} position={'top-left'}>
          {dataset && <GraphDescription description={description} filters={filtersState} />}
        </ControlsContainer>
        <ControlsContainer className={classes.controls} position={'top-right'}>
          {/* <Search filters={filtersState} /> */}
          <SearchControl className={classes.searchbar} />
        </ControlsContainer>
        <ControlsContainer className={classes.controls} position={'bottom-right'}>
          <FullScreenControl className={classes.btn} />
          <ZoomControl className={classes.btn} />
        </ControlsContainer>
        {dataset && (
          <ControlsContainer className={classes.controls} position={'bottom-left'}>
            {/* <Search filters={filtersState} /> */}
            {/* <DescriptionPanel /> */}
            <GroupsPanel
              groups={dataset.groups}
              filters={filtersState}
              setGroups={(isAll) => groupsGeneralHandler(isAll)}
              toggleGroup={(group) => toggleFilter(group)}
            />
          </ControlsContainer>
        )}
      </SigmaContainer>
    </div>
  );
};

export default Graph;
