import { Link } from 'react-router-dom';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import classes from './Publications.module.css';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import List from '../UI/List';
import KeyPoint from '../SVG/KeyPoint';

import coverNachhaltigkeitsnetzwerke from '../../assets/Cover Flohr 2019 Nachhaltigkeitsnetzwerke von Hochschulinitiativen.jpg';

const pub = {
  subtitle: 'Die transformative Kraft von Verbindungen',
  abstract: [
    'Netzwerk, Vernetzung und Beziehung sind omnipräsente, aber häufig symbolisch verwendete Begriffe, wenn über die Transformation von Hochschulen in Richtung einer nachhaltigen Entwicklung gesprochen und nachgedacht wird. Wissenschaftliche Betrachtungen aus netzwerkanalytischer Perspektive liegen bislang nicht vor. In einem praxisorientierten Artikel zielte ich darauf ab, in diese Lücke zu stoßen, indem ich die Vernetzung von Mitgliedern von Nachhaltigkeitsinitiativen an Hochschulen offengelegt und somit die Einbettung dieser Gruppen in eine Netzwerkstruktur explorativ erkundet habe. Rahmend habe ich die erhobenen Daten und die daraus abgeleiteten Erkenntnisse mit dem Erfahrungswissen der Formate und Aktivitäten des netzwerk n kontextualisiert. Letztlich ist diese kleine Studie als Plädoyer zu lesen, die transformative Kraft der Beziehungsebene stärker in den Blick zu nehmen und zu aktivieren, um Transformationsprozesse an Hochschulen erklären und gestalten zu können.',
  ],
  specific: {
    title: 'Rahmendaten',
    content: [
      {
        id: '1',
        title: 'Stichprobe:',
        p: '114 Mitglieder von 18 Nachhaltigkeitsinitiativen aus neun Bundesländern und dem deutschsprachigen Ausland',
        href: '',
      },
      {
        id: '2',
        title: 'Einbezogene Hochschultypen:',
        p: 'Universitäten, Technische Universitäten, Fachhochschulen und Privathochschulen',
        href: '',
      },
      {
        id: '3',
        title: 'Erhebungszeitraum:',
        p: 'April bis August 2018',
        href: '',
      },
    ],
  },
};

const tags = ['Netzwerke', 'Vernetzung', 'Nachhaltigkeit', 'Hochschule', 'Explorativ'];

const Netzwerke = () => {
  return (
    <Card className={classes['card-customize']}>
      <div className={classes.cover}>
        <img src={coverNachhaltigkeitsnetzwerke} alt='Nachhaltigkeitsnetzwerke an Hochschulen' />
      </div>
      <div className={classes.content}>
        <h2>Netzwerke für die nachhaltige Entwicklung an Hochschulen</h2>
        <div className={classes.description}>
          <p>
            Netzwerk, Vernetzung und Beziehung sind omnipräsente Begriffe, wenn es um Transformation
            und Veränderung hin zu mehr Nachhaltigkeit geht. In dieser kleinen, explorativen Studie
            schaue ich mir Netzwerke an Hochschulen an, die im Themenfeld Nachhaltigkeit aktiv sind.
          </p>
        </div>
        <div className={classes.tags}>
          {tags.map((tag) => (
            <span key={tag} className={classes.tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={classes.buttons}>
          <div>
            <a
              href='https://www.researchgate.net/publication/331894285_Nachhaltigkeitsnetzwerke_an_Hochschulen_Die_transformative_Kraft_von_Verbindungen'
              target='_blank'
              rel='noreferrer'
            >
              <Button>Ansicht</Button>
            </a>
          </div>
          <div>
            <Link to='Nachhaltigkeitsnetzwerke an Hochschulen'>
              <Button>Mehr lesen</Button>
            </Link>
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

export default Netzwerke;
