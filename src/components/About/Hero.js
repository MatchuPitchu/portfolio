import Images from './Images';
import Container from '../Layout/Container';
import Pointer from '../UI/Pointer/Pointer';
import classes from './Hero.module.css';
import H1Title from '../UI/Titles/H1Title';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <H1Title>
        <div className={classes.title}>Dr</div>
        <div className={classes.firstName}>Michael</div>
        <div className={classes.lastName}>Flohr</div>
      </H1Title>
      <Container className={classes['customize-container']}>
        <div className={classes.presentation}>
          <h2>über mich</h2>
          <p>
            Studium, Engagement und berufliche Aktivitäten führten mich in allerlei Themenfelder:
            von Musik, über Wirtschaft, Politik, Kultur, interkulturelle Kommunikation, nachhaltige
            Entwicklung, Digitalisierung bis zur Full-Stack Web- & App-Entwicklung. Jedes Puzzleteil
            hat meinen Blick auf die Welt verändert und mich bereichert. Sowieso bin ich davon
            überzeugt: Nur inter- und transdiziplinär lässt sich die Welt verstehen und zu einem
            nachhaltigeren Ort verwandeln.
          </p>
        </div>
        <div className={classes.images}>
          <Images />
        </div>
      </Container>
      <Pointer to='/#tabs' />
    </section>
  );
};

export default Hero;
