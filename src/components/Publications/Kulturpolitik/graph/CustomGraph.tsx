import { FC, useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../../../../store/ThemeContext';
import Graph from 'graphology';
import { Attributes } from 'graphology-types';
import circlepack from 'graphology-layout/circlepack';
import { useDebounce } from '../../../../hooks/useDebounce';
import { useSigma, useRegisterEvents, useLoadGraph, useSetSettings } from 'react-sigma-v2';

interface Props {
  dataPath: string;
}

const CustomGraph: FC<Props> = ({ dataPath }) => {
  const { isLight } = useContext(ThemeContext);

  const sigma = useSigma();
  const registerEvents = useRegisterEvents();
  const loadGraph = useLoadGraph();
  const setSettings = useSetSettings();

  // State for the graph hovered node
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  // Here we debounce the value to avoid having too much highlights refresh when
  // moving the mouse over the graph:
  const debouncedHoveredNode = useDebounce(hoveredNode, 50);

  // When component mount, set sigma settings + register events
  useEffect(() => {
    // Register Sigma events
    registerEvents({
      enterNode: ({ node }) => setHoveredNode(node),
      leaveNode: () => setHoveredNode(null),
    });
  }, [sigma, registerEvents]);

  // When graph url changes, compute graph and load it in sigma
  useEffect(() => {
    setHoveredNode(null);
    const fetchGraph = async () => {
      try {
        const response = await fetch(dataPath);
        if (response.ok) {
          const data = await response.json();
          const graph = Graph.from(data);
          circlepack.assign(graph);
          loadGraph(graph);
        } else {
          console.log('Cannot retrieve graph', response);
        }
      } catch (error) {
        console.log('Cannot retrieve graph', error);
      }
    };
    fetchGraph();
  }, [dataPath, loadGraph]);

  // When hoverer node change, update the reducers
  useEffect(() => {
    setSettings({
      nodeReducer: (node: string, data: { [key: string]: unknown }) => {
        const graph = sigma.getGraph();
        const newData: Attributes = { ...data, highlighted: data.highlighted || false };

        if (hoveredNode) {
          if (
            node === hoveredNode ||
            (graph.neighbors(hoveredNode) as Array<string>).includes(node)
          ) {
            newData.highlighted = true;
          } else {
            newData.color = isLight ? '#f1f1f1' : '#4D4632';
            newData.highlighted = false;
          }
        }
        return newData;
      },
      edgeReducer: (edge: string, data: { [key: string]: unknown }) => {
        const graph = sigma.getGraph();
        const newData = { ...data, hidden: false };
        if (hoveredNode && !(graph.extremities(edge) as Array<string>).includes(hoveredNode)) {
          newData.hidden = true;
        }
        return newData;
      },
      labelFont: 'Jost',
      labelSize: 10,
      labelColor: { color: isLight ? '#3a3a3a' : '#878787' },
      hideEdgesOnMove: true,
      hideLabelsOnMove: true,
    });
  }, [sigma, setSettings, hoveredNode, isLight]);

  return null;
};

export default CustomGraph;
