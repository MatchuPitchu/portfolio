import H1Title from '../UI/Titles/H1Title';
import Container from '../Layout/Container';
import Images from './Images';
import Pointer from '../UI/Pointer/Pointer';
import classes from './Hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <H1Title classTitle={classes.h1}>
        <span className={classes['h1--title']}>Dr</span>
        <span className={classes['h1--firstName']}>Michael</span>
        <span className={classes['h1--lastName']}>Flohr</span>
        <span className={classes['h1--subtitle']}>Webentwicklung & Nachhaltigkeit</span>
      </H1Title>
      <Container className={classes['container-customized']}>
        <div className={classes.presentation}>
          <h2>über mich</h2>
          <p>
            Studium, Engagement und berufliche Aktivitäten führten mich in allerlei Themenfelder:
            von Musik, über Wirtschaft, Politik, Kulturmanagement, interkulturelle Kommunikation,
            nachhaltige Entwicklung, Digitalisierung bis zur Web- & App-Entwicklung. Jedes
            Puzzleteil hat mir eine neue Perspektive eröffnet und mich bereichert. Sowieso bin ich
            davon überzeugt: Nur mit dem Blick über den eigenen Tellerrand hinaus und dem Suchen
            jenseits des eigenen Horizonts – also inter- und transdiziplinär – lässt sich die Welt
            erfassen; und so gestalten, dass sie ein nachhaltigerer, lebenswerter und
            zukunftsfähiger Ort für uns Menschen wird.
          </p>
        </div>
        <div className={classes.images}>
          <Images />
        </div>
      </Container>
      <Pointer to='/#profil' />
    </section>
  );
};

export default Hero;
