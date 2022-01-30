import { Link } from 'react-router-dom';
import HeadingWrapper from '../components/Layout/HeadingWrapper';
import H1Title from '../components/UI/Titles/H1Title';
import Container from '../components/Layout/Container';
import ImgWithFallback from '../components/ImgWithFallback';
import classes from './Kontakt.module.css';

import imgProfilWEBP from '../assets/webp/michael-flohr-2021_web-profil-w220.webp';
import imgProfilJPG from '../assets/michael-flohr-2021_web-profil-w220.jpg';

const Kontakt = () => {
  return (
    <HeadingWrapper className={classes.wrapper}>
      <H1Title>Kontakt</H1Title>
      <p>
        Schreiben Sie mir, wenn Sie einen Freelancer suchen und in den unter{' '}
        <Link to='/angebote'>Angebote</Link> aufgezählten Bereichen freiberufliche Unterstützung
        brauchen. Lassen Sie uns gerne ins Gespräch kommen. Ich freue mich auf Ihre Nachricht.
      </p>
      <Container className={classes['container--contact']}>
        <div className={classes['img-box']}>
          <ImgWithFallback
            src={imgProfilWEBP}
            fallback={imgProfilJPG}
            alt='Profilbild Michael Flohr'
            className={classes.img}
          />
        </div>
        <div className={classes['data-box']}>
          <h2>
            <span className={classes.name}>Michael Flohr</span>
            <span className={classes.city}>Berlin</span>
          </h2>
        </div>
        <div className={classes['btn-box']}>
          <a
            // HEX Codierung
            href='&#x6d;&#x61;&#x69;&#x6c;&#x74;&#x6f;&#x3a;&#x6d;&#x2e;&#x66;&#x6c;&#x6f;&#x68;&#x72;&#x40;&#x70;&#x6f;&#x73;&#x74;&#x65;&#x6f;&#x2e;&#x64;&#x65;?subject=Kontaktanfrage über Website'
          >
            <button className={classes.btn}>E-Mail schreiben </button>
          </a>
        </div>
      </Container>
    </HeadingWrapper>
  );
};

export default Kontakt;
