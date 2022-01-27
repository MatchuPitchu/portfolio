import { Link } from 'react-router-dom';
import Container from '../components/Layout/Container';
import H1Title from '../components/UI/Titles/H1Title';
import classes from './Kontakt.module.css';

const Kontakt = () => {
  return (
    <Container className={classes['container-customized']}>
      <H1Title>Kontakt</H1Title>
      <p>
        Schreiben Sie mir, wenn Sie einen Freelancer suchen und in den unter{' '}
        <Link to='/angebote'>Angebote</Link> aufgezählten Bereichen freiberufliche Unterstützung
        brauchen. Lassen Sie uns gerne ins Gespräch kommen. Ich freue mich auf Ihre Nachricht.
      </p>
      {/* HEX Codierung */}
      <a
        className={classes.a}
        href='&#x6d;&#x61;&#x69;&#x6c;&#x74;&#x6f;&#x3a;&#x6d;&#x2e;&#x66;&#x6c;&#x6f;&#x68;&#x72;&#x40;&#x70;&#x6f;&#x73;&#x74;&#x65;&#x6f;&#x2e;&#x64;&#x65;?subject=Kontaktanfrage über Website'
      >
        &#x6d;&#x2e;&#x66;&#x6c;&#x6f;&#x68;&#x72;&#x40;&#x70;&#x6f;&#x73;&#x74;&#x65;&#x6f;&#x2e;&#x64;&#x65;
      </a>
    </Container>
  );
};

export default Kontakt;
