import classes from './Home.module.css';
import Hero from '../components/About/Hero';
import Kompetenzen from '../components/About/Kompetenzen';
import Container from '../components/Layout/Container';
import Card from '../components/UI/Card/Card';

const Introduction = () => {
  return (
    <div className={classes.container}>
      <Hero />
      <Container className={classes['tabs-container']}>
        <Card>
          <ul className={classes.tabs} id='tabs'>
            <li>Kompetenzen</li>
            <li>Auszeichnungen</li>
            <li>Test</li>
          </ul>
          <Kompetenzen />
        </Card>
      </Container>
      {/* <Card className={`${classes.col} ${classes['card-customize']} `}>
        <h3>Interdisziplinär</h3>
        <h2>
          Nachhaltigkeit
          <br />
          Politik
          <br />
          Programmierung
        </h2>
        <p>
          Mein Thema ist der Wandel. Nicht nur der in der Welt, sondern auch für mich persönlich.
          Studium, Engagement und berufliche Tätigkeiten führten mich schon in allerlei Bereiche:
          von Musik, über Wirtschaft, Politik, Kultur, Interkulturelle Kommunikation, nachhaltige
          Entwicklung, Digitalisierung bis zur Full-Stack Web & App Entwicklung. Für jedes
          Puzzleteil bin ich dankbar, denn interdisziplinär lässt sich die Welt besser erfassen.
        </p>
        <Button>Test</Button>
      </Card> */}
    </div>
  );
};

export default Introduction;
