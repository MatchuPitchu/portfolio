import { FC, useEffect, useContext } from 'react';
import { ThemeContext } from '../../../../store/ThemeContext';
import { drawHover } from './canvas-utils';
import { useDebounce } from '../../../../hooks/useDebounce';
import { Attributes } from 'graphology-types';
import { useSigma, useSetSettings } from 'react-sigma-v2';

interface Props {
  dataPath: string;
  hoveredNode: string | null;
}

const GraphSettingsController: FC<Props> = ({ dataPath, hoveredNode, children }) => {
  const { isLight } = useContext(ThemeContext);

  const sigma = useSigma();
  const setSettings = useSetSettings();

  // debounce value to avoid having too much highlights refresh when moving mouse over graph
  const debouncedHoveredNode = useDebounce(hoveredNode, 50);

  // initialize settings that require to know the graph and/or the sigma instance
  useEffect(() => {
    sigma.setSetting('hoverRenderer', (context, data, settings) =>
      drawHover(context, { ...sigma.getNodeDisplayData(data.key), ...data }, settings)
    );
  }, [sigma]);

  // when node is hovered, update node and edge reducers to highlight its neigbors
  useEffect(() => {
    setSettings({
      nodeReducer: (node: string, data: { [key: string]: unknown }) => {
        const graph = sigma.getGraph();
        const newData: Attributes = { ...data, highlighted: data.highlighted || false };

        if (debouncedHoveredNode) {
          if (
            node === debouncedHoveredNode ||
            (graph.neighbors(debouncedHoveredNode) as Array<string>).includes(node)
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
        if (
          debouncedHoveredNode &&
          !(graph.extremities(edge) as Array<string>).includes(debouncedHoveredNode)
        ) {
          newData.hidden = true;
        }
        return newData;
      },
      labelFont: 'Jost',
      labelSize: 11,
      labelColor: { color: isLight ? '#3a3a3a' : '#878787' },
      labelWeight: '500',
      hideEdgesOnMove: true,
      hideLabelsOnMove: true,
      labelRenderedSizeThreshold: 10,
    });
  }, [sigma, setSettings, debouncedHoveredNode, isLight]);

  return <>{children}</>;
};

export default GraphSettingsController;
