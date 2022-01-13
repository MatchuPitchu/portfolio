import Card from '../UI/Card/Card';
import Cover from '../UI/Cover/Cover';
import Tags from '../UI/Tags/Tags';
import ButtonsPublication from '../UI/Button/ButtonsPublication';
import classes from './Publications.module.css';

import coverSuffizienzJPG from '../../assets/Cover Flohr & Markus 2020 Suffizienz an Hochschulen im ländlichen Raum.png';
import coverSuffizienzWEBP from '../../assets/webp/Cover Flohr & Markus 2020 Suffizienz an Hochschulen im ländlichen Raum.webp';

const tags = [
  'Suffizienz',
  'Effizienz',
  'Konsistenz',
  'Hochschule',
  'Nachhaltigkeit',
  'Ländlicher Raum',
  'Good Practices',
];
const path = 'suffizienz-an-hochschulen';

const Suffizienz = () => {
  return (
    <Card className={classes['card-customize']}>
      <Cover
        path={path}
        coverJPG={coverSuffizienzJPG}
        coverWEBP={coverSuffizienzWEBP}
        alt='Suffizienz an Hochschulen im ländlichen Raum'
      />
      <div className={classes.content}>
        <h2>Suffizienz an Hochschulen im ländlichen Raum</h2>
        <p>
          Bislang steht die Nachhaltigkeitsstrategie der Suffizienz politisch, wirtschaftlich und
          gesellschaftlich im übermächtigen Schatten der Effizienz. Im Rahmen des von der
          Europäischen Union in der NOPLANETB-Initiative geförderten Projekts “Suffiziente
          Hochschulen im ländlichen Raum” (Oktober 2019 bis August 2020) nahm ich die Suffizienz als
          unabdingbare Nachhaltigkeitsstrategie in den Blick.
        </p>
        <Tags tags={tags} />
        <ButtonsPublication
          url='https://www.researchgate.net/publication/342991904_Suffizienz_an_Hochschulen_im_landlichen_Raum'
          path={path}
        />
      </div>
    </Card>
  );
};

export default Suffizienz;
