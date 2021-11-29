import ButtonsPublication from './ButtonsPublication';
import Card from '../UI/Card/Card';
import Tags from './Tags';
import classes from './Publications.module.css';

import coverKulturpolitik from '../../assets/Cover Flohr 2018 Kulturpolitik in Thüringen.jpg';

const tags = [
  'Kulturpolitik',
  'Politikwissenschaft',
  'Politikfeldanalyse',
  'Governance',
  'Akteurzentrierter Institutionalismus',
  'Netzwerkforschung',
  'Kulturmanagement',
  'Kultur- und Kunstförderung',
  'Kulturverwaltung',
  'Praktiken',
  'Thüringen',
  'Open Access',
];

const Kulturpolitik = () => {
  return (
    <Card className={classes['card-customize']}>
      <div className={classes.cover}>
        <img src={coverKulturpolitik} alt='Kulturpolitik in Thüringen' />
      </div>
      <div className={classes.content}>
        <h2>Kulturpolitik in Thüringen</h2>
        <div className={classes.description}>
          <p>
            Kaum ein Politikfeld ist so vielfältig, symbolisch besetzt und normativ aufgeladen wie
            die Kulturpolitik. Bislang liegen nur vereinzelte politikwissenschaftliche Studien über
            dieses Politikfeld vor. Mit meiner Dissertation stoße ich in diese Lücke und widme mich
            dem selbsternannten "Kulturland" Thüringen. Viele Erkenntnisse stehen sinnbildlich für
            die allgemeine System- und Strukturkrise der Kulturpolitik.
          </p>
        </div>
        <Tags tags={tags} />
        <ButtonsPublication
          url='https://www.transcript-verlag.de/978-3-8376-4255-1/kulturpolitik-in-thueringen/?number=978-3-8394-4255-5'
          path='kulturpolitik'
        />
      </div>
    </Card>
  );
};

export default Kulturpolitik;
