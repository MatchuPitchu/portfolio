import classes from './Home.module.css';
import Hero from '../components/About/Hero';
import About from '../components/About/About';

const Introduction = () => {
  return (
    <div className={classes.container}>
      <Hero />
      <About />
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
