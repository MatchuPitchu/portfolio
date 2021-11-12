import { useState } from 'react';
import { NodeGroup } from 'react-move';
import Surface from '../components/SVG/Surface'; // this is just a responsive SVG
import { scaleLinear, scaleBand } from 'd3-scale';
import { easeExpInOut } from 'd3-ease';
import { ascending, max } from 'd3-array';

import classes from './About.module.css';

// **************************************************
//  SVG Layout
// **************************************************
const view = [1000, 450]; // [width, height]
const trbl = [10, 10, 30, 10]; // [top, right, bottom, left] margins

const dims = [
  // Adjusted dimensions [width, height]
  view[0] - trbl[1] - trbl[3],
  view[1] - trbl[0] - trbl[2],
];

// **************************************************
//  Mock Data
// **************************************************
const letters = [
  { letter: 'A', frequency: 0.8 },
  { letter: 'B', frequency: 0.5 },
  { letter: 'C', frequency: 0.1 },
  { letter: 'D', frequency: 0.6 },
  { letter: 'E', frequency: 0.9 },
];

const y = scaleLinear()
  .range([dims[1], 0])
  .domain([0, max(letters, (d) => d.frequency)]);

const About = () => {
  const [sortAlpha, setSortAlpha] = useState(true);

  const update = () => {
    setSortAlpha((prev) => !prev);
  };

  const sorted = letters
    .sort(sortAlpha ? (a, b) => ascending(a.letter, b.letter) : (a, b) => b.frequency - a.frequency)
    .slice(0);

  const scale = scaleBand()
    .rangeRound([0, dims[0]])
    .domain(sorted.map((d) => d.letter))
    .padding(0.1);

  const width = scale.bandwidth();

  return (
    <div className={classes.container}>
      <button className={classes.btn} onClick={update}>{`Sortieren: ${
        sortAlpha ? 'nach Wert' : 'alphabetisch'
      }`}</button>
      <Surface view={view} trbl={trbl}>
        <NodeGroup
          data={sorted}
          keyAccessor={(d) => d.letter}
          start={() => ({
            opacity: 1e-6,
            x: 1e-6,
          })}
          enter={(d) => ({
            opacity: [0.7],
            x: [scale(d.letter)],
            timing: { duration: 750, ease: easeExpInOut },
          })}
          update={(d, i) => ({
            opacity: [0.7],
            x: [scale(d.letter)],
            timing: { duration: 750, delay: i * 50, ease: easeExpInOut },
          })}
          leave={() => ({
            opacity: [1e-6],
            x: [scale.range()[1]],
            timing: { duration: 750, ease: easeExpInOut },
          })}
        >
          {(nodes) => (
            <g>
              {nodes.map(({ key, data, state: { x, opacity } }) => (
                <g key={key} transform={`translate(${x},0)`}>
                  <rect
                    height={dims[1] - y(data.frequency)}
                    y={y(data.frequency)}
                    fill='#F7CC4B'
                    width={width}
                    opacity={opacity}
                  />
                  <text x={scale.bandwidth() / 2} y={dims[1] + 20} dx='-.35em' fill='#3a3a3a'>
                    {data.letter}
                  </text>
                </g>
              ))}
            </g>
          )}
        </NodeGroup>
      </Surface>
    </div>
  );
};

export default About;
