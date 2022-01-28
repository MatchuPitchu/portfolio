import HeadingWrapper from '../components/Layout/HeadingWrapper';
import H1Title from '../components/UI/Titles/H1Title';
import classes from './Impressum.module.css';

const Impressum = () => {
  return (
    <HeadingWrapper className={classes.wrapper}>
      <H1Title>Impressum</H1Title>
      <div>
        <p>Michael Flohr</p>
        <p>Ehrenfelsstraße 13, 10318 Berlin</p>
      </div>
      <div>
        <p>
          <b>Telefon:</b> +49 1577 536 22 85
        </p>
        <p>
          <b>E-Mail:</b> m.flohr@posteo.de
        </p>
      </div>
      <p>
        <b>Umsatzsteuer-Identifikationsnummer:</b> Ich bin gemäß §19 UStG nicht
        umsatzsteuerpflichtig.
      </p>
      <p>
        <b>V.i.S.d § 55 Abs. 2 RStV:</b> Michael Flohr, Ehrenfelsstraße 13, 10318 Berlin
      </p>
    </HeadingWrapper>
  );
};

export default Impressum;
