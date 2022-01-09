import { useSigma } from 'react-sigma-v2';
import { FC, useEffect } from 'react';
import Graph from 'graphology';
import circlepack from 'graphology-layout/circlepack';
import { useLoadGraph } from 'react-sigma-v2';

import { Dataset, FiltersState } from './types';

interface Props {
  dataPath: string;
  filters: FiltersState;
  transferData: (data: Dataset) => void;
}

const GraphDataController: FC<Props> = ({ dataPath, filters, transferData, children }) => {
  const sigma = useSigma();
  const graph = sigma.getGraph();

  const loadGraph = useLoadGraph();

  // compute graph and load it in sigma
  useEffect(() => {
    const fetchGraph = async () => {
      try {
        const response = await fetch(dataPath);
        const data = await response.json();
        const graph = Graph.from(data);
        circlepack.assign(graph);
        loadGraph(graph);
        transferData(data);
      } catch (error) {
        console.log('Cannot retrieve graph', error);
      }
    };
    fetchGraph();

    return () => graph.clear();
  }, [dataPath, loadGraph, transferData, graph]);

  // Apply filters to graphology:
  useEffect(() => {
    const { groups } = filters;
    graph.forEachNode((node, { group }) => {
      const index = groups.findIndex((item) => item.key === group);
      graph.setNodeAttribute(node, 'hidden', !groups[index]?.value);
    });
  }, [graph, filters]);

  return <>{children}</>;
};

export default GraphDataController;
