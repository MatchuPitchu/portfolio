import { FC, useEffect, useMemo, useState } from 'react';
import { useSigma } from 'react-sigma-v2';
import { keyBy, mapValues, sortBy, values } from 'lodash';

import { FiltersState, Group } from './types';
import Panel from './Panel';
import classes from './GroupsPanel.module.css';

interface Props {
  groups: Group[];
  filters: FiltersState;
  toggleGroup: (group: Group) => void;
  setGroups: (isAll?: boolean) => void;
}

const GroupsPanel: FC<Props> = ({ groups, filters, toggleGroup, setGroups }) => {
  const sigma = useSigma();
  const graph = sigma.getGraph();

  const nodesPerGroup = useMemo(() => {
    const index: Record<string, number> = {};
    graph.forEachNode((_, { group }) => (index[group] = (index[group] || 0) + 1));
    return index;
  }, [graph]);

  const maxNodesPerGroup = useMemo(() => Math.max(...values(nodesPerGroup)), [nodesPerGroup]);
  const visibleGroupsCount = useMemo(() => Object.keys(filters.groups).length, [filters]);

  const [visibleNodesPerGroup, setVisibleNodesPerGroup] =
    useState<Record<string, number>>(nodesPerGroup);

  useEffect(() => {
    // To ensure the graphology instance has up to data "hidden" values for
    // nodes, we wait for next frame before reindexing. This won't matter in the
    // UX, because of the visible nodes bar width transition.
    requestAnimationFrame(() => {
      const index: Record<string, number> = {};
      graph.forEachNode(
        (_, { group, hidden }) => !hidden && (index[group] = (index[group] || 0) + 1)
      );
      setVisibleNodesPerGroup(index);
    });
  }, [filters, graph]);

  const sortedGroups = useMemo(
    () =>
      sortBy(groups, (group) => (group.key === 'unknown' ? Infinity : -nodesPerGroup[group.key])),
    [groups, nodesPerGroup]
  );

  return (
    <Panel
      title={
        <>
          Categories
          {visibleGroupsCount < groups.length ? (
            <span className='text-muted text-small'>
              {' '}
              ({visibleGroupsCount} / {groups.length})
            </span>
          ) : (
            ''
          )}
        </>
      }
    >
      <p>Click a category to show/hide related pages from the network.</p>
      <p className={classes.buttons}>
        <button className={classes.btn} onClick={() => setGroups(true)}>
          Check all
        </button>{' '}
        <button className={classes.btn} onClick={() => setGroups()}>
          Uncheck all
        </button>
      </p>
      <ul>
        {sortedGroups.map((group) => {
          const nodesCount = nodesPerGroup[group.key];
          const visibleNodesCount = visibleNodesPerGroup[group.key] || 0;
          return (
            <li
              className={classes['caption-row']}
              key={group.key}
              title={`${nodesCount} page${nodesCount > 1 ? 's' : ''}${
                visibleNodesCount !== nodesCount ? ` (nur ${visibleNodesCount} sichtbar)` : ''
              }`}
            >
              <input
                type='checkbox'
                checked={filters.groups.find((item) => item.key === group.key)?.value || false}
                onChange={() => {
                  // console.log(filters.groups.find((item) => item.key === group.key)?.value);
                  toggleGroup(group);
                }}
                id={`group-${group.key}`}
              />
              <label htmlFor={`group-${group.key}`}>
                <span className={classes.circle} />{' '}
                <div className={classes['node-label']}>
                  <span>{group.key}</span>
                  <div
                    className={classes.bar}
                    style={{ width: (100 * nodesCount) / maxNodesPerGroup + '%' }}
                  >
                    <div
                      className={classes['inside-bar']}
                      style={{
                        width: (100 * visibleNodesCount) / nodesCount + '%',
                      }}
                    />
                  </div>
                </div>
              </label>
            </li>
          );
        })}
      </ul>
    </Panel>

    // <Panel
    //   title={
    //     <>
    //       Categories
    //       {visibleGroupsCount < groups.length ? (
    //         <span className='text-muted text-small'>
    //           {' '}
    //           ({visibleGroupsCount} / {groups.length})
    //         </span>
    //       ) : (
    //         ''
    //       )}
    //     </>
    //   }
    // >
    //   <p>
    //     <i className='text-muted'>Click a category to show/hide related pages from the network.</i>
    //   </p>
    //   <p className='buttons'>
    //     <button
    //       className='btn'
    //       onClick={() => setGroups(mapValues(keyBy(groups, 'key'), () => true))}
    //     >
    //       Check all
    //     </button>{' '}
    //     <button className='btn' onClick={() => setGroups({})}>
    //       Uncheck all
    //     </button>
    //   </p>
    //   <ul>
    //     {sortedGroups.map((group) => {
    //       const nodesCount = nodesPerGroup[group.key];
    //       const visibleNodesCount = visibleNodesPerGroup[group.key] || 0;
    //       return (
    //         <li
    //           className='caption-row'
    //           key={group.key}
    //           title={`${nodesCount} page${nodesCount > 1 ? 's' : ''}${
    //             visibleNodesCount !== nodesCount ? ` (only ${visibleNodesCount} visible)` : ''
    //           }`}
    //         >
    //           <input
    //             type='checkbox'
    //             checked={filters.groups[group.key] || false}
    //             onChange={() => toggleGroup(group.key)}
    //             id={`group-${group.key}`}
    //           />
    //           <label htmlFor={`group-${group.key}`}>
    //             <span
    //               className='circle'
    //               style={{
    //                 backgroundImage: `url(${process.env.PUBLIC_URL}/images/${group.image})`,
    //               }}
    //             />{' '}
    //             <div className='node-label'>
    //               <span>{group.key}</span>
    //               <div
    //                 className='bar'
    //                 style={{ width: (100 * nodesCount) / maxNodesPerGroup + '%' }}
    //               >
    //                 <div
    //                   className='inside-bar'
    //                   style={{
    //                     width: (100 * visibleNodesCount) / nodesCount + '%',
    //                   }}
    //                 />
    //               </div>
    //             </div>
    //           </label>
    //         </li>
    //       );
    //     })}
    //   </ul>
    // </Panel>
  );
};

export default GroupsPanel;
