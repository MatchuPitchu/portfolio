import Card from '../UI/Card/Card';
import ButtonsPublication from './ButtonsPublication';
import Tags from '../UI/Tags/Tags';
import classes from './Publications.module.css';

import coverBNE from '../../assets/Cover Flohr 2017 Studie Staatliche Förderung außerschulischer BNE in Deutschland.jpg';

const tags = [
  'Bildung für nachhaltige Entwicklung',
  'informelle Bildung',
  'non-formale Bildung',
  'außerschulisch',
  'Förderung',
  'Weltaktionsprogramm BNE',
];

const BNE = () => {
  return (
    <Card className={classes['card-customize']}>
      <div className={classes.cover}>
        <img
          src={coverBNE}
          alt='Die staatliche Förderung der außerschulischen BNE in Deutschland'
        />
      </div>
      <div className={classes.content}>
        <h2>Die staatliche Förderung der außerschulischen BNE in Deutschland</h2>
        <div className={classes.description}>
          <p>
            Im Rahmen des Monitorings des Weltaktionsprogramms Bildung für nachhaltige Entwicklung
            (WAP BNE) wurde ich vom Institut Futur der FU Berlin beauftragt, einen ersten Überblick
            über die öffentliche Landes- und Bundesförderung der außerschulischen BNE in Deutschland
            zu erfassen.
          </p>
        </div>
        <Tags tags={tags} />
        <ButtonsPublication
          url='https://www.researchgate.net/publication/321193032_Un-bezahlbar_un-zahlbar_Die_staatliche_Forderung_der_ausserschulischen_Bildung_fur_nachhaltige_Entwicklung_in_Deutschland_im_Zeitraum_2011_bis_2016'
          path='bne'
        />
      </div>
    </Card>
  );
};

export default BNE;
