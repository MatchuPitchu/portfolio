import Digitalisierung from '../components/Publications/Digitalisierung';
import Suffizienz from '../components/Publications/Suffizienz';
import Netzwerke from '../components/Publications/Netzwerke';
import Kulturpolitik from '../components/Publications/Kulturpolitik/Kulturpolitik';
import BNE from '../components/Publications/BNE';
import RestPublications from '../components/Publications/RestPublications';

import Container from '../components/Layout/Container';

const Veroeffentlichungen = () => {
  return (
    <Container>
      <Digitalisierung />
      <Suffizienz />
      <Netzwerke />
      <Kulturpolitik />
      <BNE />
      <RestPublications />
    </Container>
  );
};

export default Veroeffentlichungen;
