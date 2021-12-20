import Container from '../components/Layout/Container';
import H1Title from '../components/UI/Titles/H1Title';
import classes from './Impressum.module.css';

const Impressum = () => {
  return (
    <Container className={classes['container-customized']}>
      <H1Title>Impressum</H1Title>
      <div>
        <p>Michael Flohr</p>
        <p>Ehrenfelsstraße 13, 10318 Berlin</p>
      </div>
      <div>
        <p>
          <span className={classes.bold}>Telefon:</span> +49 1577 536 22 85
        </p>
        <p>
          <span className={classes.bold}>E-Mail:</span> m.flohr@posteo.de
        </p>
      </div>
      <p>
        <span className={classes.bold}>Umsatzsteuer-Identifikationsnummer:</span> Ich bin gemäß §19
        UStG nicht umsatzsteuerpflichtig.
      </p>
      <p>
        <span className={classes.bold}>V.i.S.d § 55 Abs. 2 RStV:</span> Michael Flohr,
        Ehrenfelsstraße 13, 10318 Berlin
      </p>
    </Container>
  );
};

export default Impressum;
