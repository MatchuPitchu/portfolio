import classes from './Introduction.module.css';
import Button from '../components/UI/Button/Button';
import Card from '../components/UI/Card/Card';
import image1 from '../assets/michael-flohr_2021_web.jpg';
import image2 from '../assets/michael-flohr_2019_web.jpg';
import Hero from '../components/Layout/Hero';

const Introduction = () => {
  return (
    <div className={classes.container}>
      <Hero />
      <div className={classes.col}>
        <div className={classes.imageBox1}>
          <img src={image1} alt='Foto Michael Flohr' />
        </div>
        <div className={classes.imageBox2}>
          <img src={image2} alt='Foto Michael Flohr' />
        </div>
      </div>
      <Card className={`${classes.col} ${classes.alignRight}`}>
        <h2>Interdisziplinär</h2>
        <h3>
          Nachhaltigkeit
          <br />
          Politik
          <br />
          Programmierung
        </h3>
        <p>
          Mein Thema ist der Wandel. Nicht nur der in der Welt, sondern auch für mich persönlich.
          Studium, Engagement und berufliche Tätigkeiten führten mich schon in allerlei Bereiche:
          von Musik, über Wirtschaft, Politik, Kultur, Interkulturelle Kommunikation, nachhaltige
          Entwicklung, Digitalisierung bis zur Full-Stack Web & App Entwicklung. Für jedes
          Puzzleteil bin ich dankbar, denn interdisziplinär lässt sich die Welt besser erfassen.
        </p>
        <Button>Test</Button>
      </Card>
    </div>
  );
};

export default Introduction;
