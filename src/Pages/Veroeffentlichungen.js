import classes from './Veroeffentlichungen.module.css';
import Digitalisierung from '../components/Publications/Digitalisierung';
import Suffizienz from '../components/Publications/Suffizienz';
import Netzwerke from '../components/Publications/Netzwerke';
import Kulturpolitik from '../components/Publications/Kulturpolitik/Kulturpolitik';
import BNE from '../components/Publications/BNE';

import Container from '../components/Layout/Container';

const Veroeffentlichungen = () => {
  return (
    <Container className={classes['customize-container']}>
      <Digitalisierung />
      <Suffizienz />
      <Netzwerke />
      <Kulturpolitik />
      <BNE />
    </Container>
  );
};

export default Veroeffentlichungen;
