import Card from '../../UI/Card/Card';
import Cover from '../../UI/Cover/Cover';
import Tags from '../../UI/Tags/Tags';
import ButtonsPublication from '../../UI/Button/ButtonsPublication';
import classes from '../Publications.module.css';

import coverKulturpolitikJPG from '../../../assets/Cover Flohr 2018 Kulturpolitik in Thüringen.jpg';
import coverKulturpolitikWEBP from '../../../assets/webp/Cover Flohr 2018 Kulturpolitik in Thüringen.webp';

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
const path = 'kulturpolitik';

const Kulturpolitik = () => {
  return (
    <Card className={classes['card-customize']}>
      <Cover
        path={path}
        coverJPG={coverKulturpolitikJPG}
        coverWEBP={coverKulturpolitikWEBP}
        alt='Kulturpolitik in Thüringen'
      />
      <div className={classes.content}>
        <h2 className={classes.h2}>Kulturpolitik in Thüringen</h2>
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
