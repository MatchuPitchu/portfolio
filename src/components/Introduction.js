import classes from './Introduction.module.css';
import Button from './UI/Button/Button';
import Card from './UI/Card/Card';
import image1 from '../assets/michael_flohr_2021_web.jpg';
import image2 from '../assets/michael_flohr_2019_web.jpg';

const Introduction = () => {
  return (
    <div className={classes.container}>
      <div className={classes.col}>
        <div className={classes.imageBox1}>
          <img src={image1} alt='Foto Michael Flohr' />
        </div>
        <div className={classes.imageBox2}>
          <img src={image2} alt='Foto Michael Flohr' />
        </div>
      </div>
      <Card className={`${classes.col} ${classes.alignRight}`}>
        <h2>Wandel</h2>
        <h3>
          Nachhaltigkeit
          <br />
          Programmierung
          <br />
          Politik
        </h3>
        <p>
          Mein Thema ist der Wandel. Nicht nur der in der Welt, sondern auch für mich persönlich.
          Studium, Engagement und berufliche Tätigkeiten führten mich schon in allerlei Bereiche:
          von Musik, über Wirtschaft, Politik, Kultur, Interkulturelle Kommunikation, nachhaltige
          Entwicklung, Digitalisierung bis zur Full-Stack Web & App Entwicklung. Für jedes
          Puzzleteil bin ich dankbar, denn interdisziplinär lässt sich das große Ganze der Welt
          meiner Meinung nach besser erfassen und erfahren.
        </p>
        <Button>Test</Button>
      </Card>
    </div>
  );
};

export default Introduction;
