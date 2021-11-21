import Card from '../UI/Card/Card';
import ButtonsPublication from './ButtonsPublication';
import Tags from './Tags';
import classes from './Publications.module.css';

import coverSuffizienz from '../../assets/Cover Flohr & Markus 2020 Suffizienz an Hochschulen im ländlichen Raum.png';

const tags = [
  'Suffizienz',
  'Effizienz',
  'Konsistenz',
  'Hochschule',
  'Nachhaltigkeit',
  'Ländlicher Raum',
  'Good Practices',
];

const Suffizienz = () => {
  return (
    <Card className={classes['card-customize']}>
      <div className={classes.cover}>
        <img src={coverSuffizienz} alt='Suffizienz an Hochschulen im ländlichen Raum' />
      </div>
      <div className={classes.content}>
        <h2>Suffizienz an Hochschulen im ländlichen Raum</h2>
        <div className={classes.description}>
          <p>
            Bislang steht die Nachhaltigkeitsstrategie der Suffizienz politisch, wirtschaftlich und
            gesellschaftlich im übermächtigen Schatten der Effizienz. Im Rahmen des von der
            Europäischen Union in der NOPLANETB-Initiative geförderten Projekts “Suffiziente
            Hochschulen im ländlichen Raum” (Oktober 2019 bis August 2020) nahm ich die Suffizienz
            als unabdingbare Nachhaltigkeitsstrategie in den Blick.
          </p>
        </div>
        <Tags tags={tags} />
        <ButtonsPublication
          url='https://www.researchgate.net/publication/342991904_Suffizienz_an_Hochschulen_im_landlichen_Raum'
          path='suffizienz-an-hochschulen'
        />
      </div>
    </Card>
  );
};

export default Suffizienz;
