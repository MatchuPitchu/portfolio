import Images from './Images';
import Container from '../Layout/Container';
import Pointer from '../UI/Pointer/Pointer';
import classes from './Hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes['title-container']}>
        <h1 className={classes.name}>
          <span className={classes.title}>Dr</span>{' '}
          <span className={classes.firstName}>Michael</span>{' '}
          <span className={classes.lastName}>Flohr</span>
        </h1>
      </div>
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
