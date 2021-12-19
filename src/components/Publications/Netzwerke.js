import Card from '../UI/Card/Card';
import ButtonsPublication from './ButtonsPublication';
import Tags from '../UI/Tags/Tags';
import classes from './Publications.module.css';

import coverNachhaltigkeitsnetzwerke from '../../assets/Cover Flohr 2019 Nachhaltigkeitsnetzwerke von Hochschulinitiativen.jpg';

const tags = ['Netzwerke', 'Vernetzung', 'Nachhaltigkeit', 'Hochschule', 'Explorativ'];

const Netzwerke = () => {
  return (
    <Card className={classes['card-customize']}>
      <div className={classes.cover} id='test'>
        <img src={coverNachhaltigkeitsnetzwerke} alt='Nachhaltigkeitsnetzwerke an Hochschulen' />
      </div>
      <div className={classes.content}>
        <h2>Netzwerke für die nachhaltige Entwicklung an Hochschulen</h2>
        <p>
          Netzwerk, Vernetzung und Beziehung sind omnipräsente Begriffe, wenn es um Transformation
          und Veränderung hin zu mehr Nachhaltigkeit geht. In dieser kleinen, explorativen Studie
          schaue ich mir Netzwerke an Hochschulen an, die im Themenfeld Nachhaltigkeit aktiv sind.
        </p>
        <Tags tags={tags} />
        <ButtonsPublication
          url='https://www.researchgate.net/publication/331894285_Nachhaltigkeitsnetzwerke_an_Hochschulen_Die_transformative_Kraft_von_Verbindungen'
          path='nachhaltigkeitsnetzwerke-an-hochschulen'
        />
      </div>
    </Card>
  );
};

export default Netzwerke;
