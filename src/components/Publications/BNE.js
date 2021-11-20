import classes from './Publications.module.css';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';

import coverBNE from '../../assets/Cover Flohr 2017 Studie Staatliche Förderung außerschulischer BNE in Deutschland.jpg';

const pub = {
  subtitle: '(Un-)bezahlbar, (un-)zählbar?',
  abstract: [
    'Im Rahmen des Monitorings des Weltaktionsprogramms Bildung für nachhaltige Entwicklung (WAP BNE) erstellt das Institut Futur der Freien Universität Berlin Studien über die Situation der BNE in Deutschland in den vielfältigen Handlungsbereichen wie frühkindliche Bildung, Schule, berufliche Bildung, Hochschule, non-formales und informelles Lernen/Jugend sowie Kommunen. Für den Nationalen Aktionsplan, der im Juni 2017 von der Nationalen Plattform BNE als Resultat eines breit angelegten, partizipativen Multi-Stakeholder-Prozesses, an dem Bund, Länder, Kommunen, Zivilgesellschaft und Wissenschaft beteiligt waren, verabschiedet wurde, formulierte das Fachforum Non-formales und informelles Lernen/Jugend sieben Handlungsfelder, 30 Ziele und 77 Maßnahmen. Diese Zahlen zeugen von dem breiten potenziell zu bearbeitendem Handlungsspektrum der außerschulischen Bildung, die erheblich schwerer abzustecken ist als die formale Bildung, insbesondere da „das non-formale und informelle Lernen nicht institutionell verfasst und nicht strukturell finanziert“ ist, wie die Expert*innen des Fachforums betonen. Wie bereits die Arbeit dieses Gremiums erkennen ließ, fehlt eine systematische Erfassung der Fördersummen und eine ressortübergreifende Förderkonzeption der außerschulischen BNE in den Bundesländern und in den Bundesministerien. Diese Lücke ist besonders bedenklich vor dem Hintergrund, dass der außerschulische Bildungsbereich eine entscheidende, komplementäre Bedeutung in der Umsetzung von jeglichen Bildungsaktivitäten im Kontext BNE aufweist und mehr als 60% der ausgezeichneten Projekte im Rahmen der UN-Dekade BNE (2005-14) auf sich vereinte.',
    'Der Föderalismus mit seiner vertikalen Kompetenzverteilung mündet auf der Landesebene in vielfältigen, exemplarischen Ansätzen, die einer genaueren Betrachtung bedürfen. Die herausfordernde Seite des föderalen Systems zeigte sich im Erstellungsprozess des Nationalen Aktionsplans im WAP: Der Bund hat einen Multi-Stakeholder-Prozess angestoßen, ohne über die Kompetenzen und den Mitteleinsatz der Länder in den bearbeiteten Themenfeldern verfügen zu können. In diesem Kontext ist unabhängig einer inhaltlichen Übereinstimmung per se mit Widerstand der Bundesländer zu rechnen. Aus diesem Grund enthält die veröffentlichte Version des Nationalen Aktionsplans viele sprachliche, von einigen Expert*innen der Fachforen überwiegend unerwünschte bzw. nicht vorgesehene Abschwächungen und Prüfaufträge, die nicht unbedingt als Zeichen eines ausgeprägten politischen Willens der Bundesländer, BNE in allen Bildungsbereichen strukturell zu verankern, zu deuten sind.',
    'Umso wichtiger erscheint ein nüchterner Blick auf die finanziellen Rahmenbedingungen und die praktizierten Förderinstrumente sowie über die zu bewältigenden Herausforderungen zur Stärkung der außerschulischen BNE in Deutschland. Dies sollte 2017 mein unter Mitwirkung von Mandy Singer-Brodowski verfasster Monitoring-Bericht leisten, der zugleich angesichts struktureller Erfassungshürden als erster heuristischer Aufschlag zu verstehen ist und (noch) nicht dem Anspruch einer systematischen und vollständigen Erfassung gerecht werden kann.',
  ],
};

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
            <Button>Mehr lesen</Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BNE;
