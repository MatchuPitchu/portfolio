import { FC, useRef } from 'react';
import {
  ControlsContainer,
  SearchControl,
  SigmaContainer,
  FullScreenControl,
  ZoomControl,
} from 'react-sigma-v2';
import 'react-sigma-v2/lib/react-sigma-v2.css';
import CustomGraph from './CustomGraph';
import classes from './Sigma.module.css';

interface Props {
  dataPath: string;
}

const Graph: FC<Props> = ({ dataPath }) => {
  const overlayRef = useRef<HTMLDivElement | null>(null);

  // first mouse scroll does not lead to zooming in graph
  // when user clicks on graph, mouse events are possible with graph
  const activateClickInGraph = () => {
    overlayRef.current!.style.pointerEvents = 'none';
  };

  return (
    <div className={classes['sigma-container']}>
      <div
        className={classes.overlay}
        ref={overlayRef}
        style={{ pointerEvents: 'all' }}
        onClick={activateClickInGraph}
      />
      <SigmaContainer className={classes.sigma} style={{ height: '60vh', width: '100%' }}>
        <CustomGraph dataPath={dataPath} />
        <ControlsContainer className={classes.controls} position={'top-right'}>
          <SearchControl className={classes.searchbar} />
        </ControlsContainer>
        <ControlsContainer className={classes.controls} position={'bottom-right'}>
          <FullScreenControl className={classes.btn} />
          <ZoomControl className={classes.btn} />
        </ControlsContainer>
      </SigmaContainer>
    </div>
  );
};

export default Graph;
