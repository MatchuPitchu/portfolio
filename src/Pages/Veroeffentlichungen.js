import classes from './Veroeffentlichungen.module.css';
import Digitalisierung from '../components/Publications/Digitalisierung';
import Suffizienz from '../components/Publications/Suffizienz';
import Netzwerke from '../components/Publications/Netzwerke';
import BNE from '../components/Publications/BNE';

import Container from '../components/UI/Container';

const Veroeffentlichungen = () => {
  return (
    <Container className={classes['customize-container']}>
      <Digitalisierung />
      <Suffizienz />
      <Netzwerke />
      <BNE />
    </Container>
  );
};

export default Veroeffentlichungen;
