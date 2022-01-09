import { FC, useEffect, useState } from 'react';
import { useSigma } from 'react-sigma-v2';
import { FiltersState } from './types';
import classes from './GraphDescription.module.css';

interface Props {
  filters: FiltersState;
  description?: string;
}

function prettyPercentage(val: number): string {
  return (val * 100).toFixed(1) + '%';
}

const GraphDescription: FC<Props> = ({ filters, description }) => {
  const sigma = useSigma();
  const graph = sigma.getGraph();

  const [visibleItems, setVisibleItems] = useState<{ nodes: number; edges: number }>({
    nodes: 0,
    edges: 0,
  });

  useEffect(() => {
    // To ensure the graphology instance has up to data "hidden" values for
    // nodes, we wait for next frame before reindexing. This won't matter in the
    // UX, because of the visible nodes bar width transition.
    requestAnimationFrame(() => {
      const index = { nodes: 0, edges: 0 };
      graph.forEachNode((_, { hidden }) => !hidden && index.nodes++);
      graph.forEachEdge(
        (_, _2, _3, _4, source, target) => !source.hidden && !target.hidden && index.edges++
      );
      setVisibleItems(index);
    });
  }, [filters, graph]);

  return (
    <div className={classes.description}>
      {description && <div>{description}</div>}
      <div>
        {graph.order} node{graph.order > 1 ? 's' : ''}
        {visibleItems.nodes !== graph.order
          ? ` (${prettyPercentage(visibleItems.nodes / graph.order)} angezeigt)`
          : ''}
      </div>
      <div>
        {graph.size} edge
        {graph.size > 1 ? 's' : ''}
        {visibleItems.edges !== graph.size
          ? ` (${prettyPercentage(visibleItems.edges / graph.size)} angezeigt)`
          : ''}
      </div>
    </div>
  );
};

export default GraphDescription;
