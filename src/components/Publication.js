import { useState } from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import classes from './Publication.module.css';
import Card from './UI/Card/Card';
import Button from './UI/Button/Button';
import List from './UI/List';
import KeyPoint from './SVG/KeyPoint';

import coverTransformation from '../assets/Cover Flohr 2021 Digitalisierung und Nachhaltigkeit 2021 978-3-662-61534-8.jpg';

const pub = {
  id: '1',
  title: 'Transformation durch Digitalisierung gestalten',
  image: coverTransformation,
  abstract: [
    'Aus dem Symposium Digitalisierung und Nachhaltigkeit: Chancen und Perspektiven für Deutsche Hochschulen, das im Frühjahr 2019 an der Hochschule für Angewandte Wissenschaften Hamburg stattfand, ist ein schöner Sammelband entstanden. Im fünften Kapitel widme ich mich dem Themenfeld Digitalisierung, Nachhaltigkeit und Hochschule.',
    'Das netzwerk n betreibt seit 2014 die Onlineplattform plattform n, die darauf ausgerichtet ist, der Community von nachhaltigkeitsengagierten Einzelpersonen und Initiativen an Hochschulen in Deutschland ein wertefundiertes Tool zur Vernetzung, Kooperation und externen Kommunikation der eigenen Tätigkeiten bereitzustellen. Das Innovationspotenzial der Plattform ergibt sich daraus, dass sie Open Source, Green IT, Gemeinnützigkeit, Datenschutz, Privatsphäre sowie intuitive und umfassende Funktionalität verbindet. Zudem wird sie in einem Verbund aus sozial-ökologisch orientierten gemeinnützigen Organisationen kooperativ weiterentwickelt und solidarisch kofinanziert. Als digitales Tool für nachhaltige Hochschulen trägt die plattform n zur Umsetzung der Sustainable Development Goals der Agenda 2030 und des Nationalen Aktionsplans im Weltaktionsprogramm Bildung für nachhaltige Entwicklung in Deutschland bei und zeigt, welche Hebelwirkung die Digitalisierung für die Transformation von Hochschulen in Richtung einer nachhaltigen Entwicklung entfalten kann. Der Beitrag bietet einen Überblick über das Handlungsfeld der nachhaltigen Hochschulentwicklung, setzt es in Relation zur Digitalisierung, stellt die plattform n als zukunftsweisendes, wertefundiertes Tool der Hochschultransformation vor und gibt letztlich einen Ausblick, in welche Richtung die Plattform weiterzudenken und weiterzuentwickeln ist.',
  ],
  href: 'https://www.researchgate.net/publication/346082640_Transformation_durch_Digitalisierung_gestalten_Die_plattform_n_als_Vernetzungs-_und_Kollaborationsplattform_fur_nachhaltige_Hochschulen',
};

const tags = [
  'Nachhaltigkeit',
  'Digitalisierung',
  'Transformation',
  'Hochschule',
  'Open Source',
  'Plattform',
];

const Publication = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => setExpanded((prev) => !prev);

  return (
    <Card className={classes['card-customize']}>
      <img
        className={classes.cover}
        src={coverTransformation}
        alt='Transformation durch Digitalisierung gestalten'
      />
      <div className={classes.content}>
        <h2>Transformation durch Digitalisierung gestalten</h2>
        <div className={classes.description}>
          <p>
            Im fünften Kapitel dieses Sammelbandes schreibe ich über das Themenfeld Digitalisierung,
            Nachhaltigkeit und Hochschule.
          </p>
        </div>
        <div className={classes.tags}>
          {tags.map((tag) => (
            <span className={classes.tag}>{tag}</span>
          ))}
        </div>
        <div className={classes.buttons}>
          <div>
            <a
              href='https://www.researchgate.net/publication/346082640_Transformation_durch_Digitalisierung_gestalten_Die_plattform_n_als_Vernetzungs-_und_Kollaborationsplattform_fur_nachhaltige_Hochschulen'
              target='_blank'
              rel='noreferrer'
            >
              <Button>Ansicht</Button>
            </a>
          </div>
          <div>
            <Button>Mehr lesen</Button>
          </div>
        </div>
      </div>

      {/* <div className={classes.sideCol}>
        {pub.specific && (
          <div>
            <h3>{pub.specific.title}</h3>
            <List>
              {pub?.specific?.content?.map((item) => (
                <li key={item.id}>
                  <KeyPoint />
                  <div className={classes.text}>
                    <span>{item.title}</span>
                    {item.p}
                  </div>
                  {item.href && (
                    <a className={classes.link} href={item.href} target='_blank' rel='noreferrer'>
                      <Icon className={classes.icon} icon={['fa', 'external-link-alt']} />
                    </a>
                  )}
                </li>
              ))}
            </List>
          </div>
        )}
      </div> */}
    </Card>
  );
};

export default Publication;
