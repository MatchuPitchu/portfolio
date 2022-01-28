import Container from '../components/Layout/Container';
import Digitalisierung from '../components/Publications/Digitalisierung';
import Suffizienz from '../components/Publications/Suffizienz';
import Netzwerke from '../components/Publications/Netzwerke';
import Kulturpolitik from '../components/Publications/Kulturpolitik/Kulturpolitik';
import BNE from '../components/Publications/BNE';
import RestPublications from '../components/Publications/RestPublications';
import classes from './Veroeffentlichungen.module.css';
import H1Title from '../components/UI/Titles/H1Title';

const Veroeffentlichungen = () => {
  return (
    <section className={classes.publications}>
      <Container className={classes['container-summary-customized']}>
        <H1Title classTitle={classes.h1}>Veröffentlichungen</H1Title>
        <p className={classes.p}>
          In dieser Sammlung finden Sie kleinere und größere Studien und Artikel, in denen ich
          Forschungsergebnisse oder Erfahrungswissen verschriftlicht habe. Thematisch habe ich mich
          einer größeren Palette gewidmet: von der Digitalisierung, über nachhaltige und suffiziente
          Hochschulen, der Bildung für nachhaltige Entwicklung bis zur Kulturpolitik.
        </p>
      </Container>
      <Container className={classes['container-customized']}>
        <Digitalisierung />
        <Suffizienz />
        <Netzwerke />
        <Kulturpolitik />
        <BNE />
        <RestPublications />
      </Container>
    </section>
  );
};

export default Veroeffentlichungen;
