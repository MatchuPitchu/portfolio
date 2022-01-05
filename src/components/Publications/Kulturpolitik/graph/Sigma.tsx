import { FC } from 'react';
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
  return (
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
  );
};

export default Graph;
