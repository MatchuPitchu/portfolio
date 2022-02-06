import Card from '../UI/Card/Card';
import Cover from '../UI/Cover/Cover';
import Tags from '../UI/Tags/Tags';
import ButtonsPublication from '../UI/Button/ButtonsPublication';
import classes from './Publications.module.css';

import coverTransformationJPG from '../../assets/Cover Flohr 2021 Digitalisierung und Nachhaltigkeit 2021 978-3-662-61534-8.jpg';
import coverTransformationWEBP from '../../assets/webp/Cover Flohr 2021 Digitalisierung und Nachhaltigkeit 2021 978-3-662-61534-8.webp';

const tags = [
  'Nachhaltigkeit',
  'Digitalisierung',
  'Transformation',
  'Hochschule',
  'Plattform',
  'Open Source',
  'Green IT',
];
const path = 'digitalisierung';

const Digitalisierung = () => {
  return (
    <Card className={classes['card-customize']}>
      <Cover
        path={path}
        coverJPG={coverTransformationJPG}
        coverWEBP={coverTransformationWEBP}
        alt='Transformation durch Digitalisierung gestalten'
      />
      <div className={classes.content}>
        <h2 className={classes.h2}>Digitalisierung und Nachhaltigkeit</h2>
        <p>
          Im fünften Kapitel dieses Sammelbandes schreibe ich über das Themenfeld Digitalisierung,
          Nachhaltigkeit und Hochschule. Als Fallbeispiel dient die Online-Plattform{' '}
          <i>plattform n</i>, auf der sich Engagierte für mehr Nachhaltigkeit an Hochschulen
          organisieren und austauschen. Die Plattform basiert umfänglich auf den Prinzipien Open
          Source, Greent IT, Gemeinnützigkeit, Datenschutz und Privatsphäre.
        </p>
        <Tags tags={tags} />
        <ButtonsPublication
          url='https://www.researchgate.net/publication/346082640_Transformation_durch_Digitalisierung_gestalten_Die_plattform_n_als_Vernetzungs-_und_Kollaborationsplattform_fur_nachhaltige_Hochschulen'
          path={path}
        />
      </div>
    </Card>
  );
};

export default Digitalisierung;
