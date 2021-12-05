import { useNavigate } from 'react-router-dom';
import Container from '../Layout/Container';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import Section from '../UI/Section';

import classes from './PublicationsDetails.module.css';
import QuotesCarousel from './QuotesCarousel';

const theses = [
  {
    id: '1',
    title: 'Macht und Einfluss',
    text: 'In der Thüringer Kulturpolitik akkumuliert eine kleine, im Meinungsmainstream angesiedelte, sich strukturell immer wieder selbst in einem veränderungshemmenden Kreislauf reproduzierende Gruppe von Akteuren Macht und Einfluss.',
  },
  {
    id: '2',
    title: 'Abhängigkeiten und enger Kulturbegriff',
    text: 'Das Handeln der dominanten Akteure ist von wechselseitigen Abhängigkeiten geprägt und weitgehend einem engen Kulturbegriff zuzuordnen.',
  },
  {
    id: '3',
    title: 'Legislative',
    text: 'Die Legislative besitzt eine geringe Relevanz. Das Politikfeld wird von der Exekutive aus gesteuert. Nur vereinzelte Abgeordnete interessieren sich umfassend für dieses Politikfeld, das kaum vielversprechende Karrierewege ermöglicht.',
  },
  {
    id: '4',
    title: 'Nutzer:innen-Perspektive',
    text: 'Die Nutzer des Kulturangebots werden, dem bildungsbürgerlichen Ideal entsprechend, vorwiegend als zu bildende und zu kultivierende Objekte erachtet, über und für die ausgewählte Akteure entscheiden, aber nicht mit diesen oder aus deren Perspektive.',
  },
  {
    id: '5',
    title: 'Stabilisierung und Konzentration von Geld',
    text: 'Öffentliche Kulturfördermittel stabilisieren den Status quo, werden in historischer Kontinuität stehend vergeben und sind überwiegend symbolisch und vertraglich fest gebunden. Der Matthäus-Effekt führt zu einer Konzentration der Gelder.',
  },
  {
    id: '6',
    title: 'Gerechtigkeit',
    text: 'Das herrschende Gerechtigkeitsverständnis bezieht sich auf die historische Bedeutung von Einrichtungen, nicht auf den Ausgleich zwischen Sparten, kulturell-künstlerischen Strömungen und räumlich bedingten Unterschieden.',
  },
  {
    id: '7',
    title: 'Geografische Konzentration',
    text: 'Die kulturpolitischen Prioritäten und Förderinstrumente des Landes führen zu einer Zentralisierung bzw. geografischen Konzentration der kulturellen Aktivitäten und der Interessenvertretung auf den mittelthüringischen Raum entlang der horizontalen Hauptverkehrsachse und nachgeordnet auf historisch bedeutende Residenzstädte.',
  },
  {
    id: '8',
    title: 'Stimmung im Politikfeld',
    text: 'Die Thüringer Kulturpolitik zeichnet sich durch eine protektionistische Ausrichtung der Bestandswahrung, ein weitestgehend homogenes Interesse an Kontinuität, eine geringe Veränderungsbereitschaft und eine pessimistische, teils resignierende und von Verlustangst bestimmte Perspektive auf die Zukunft aus.',
  },
  {
    id: '9',
    title: 'Emotionalisierung',
    text: 'Die Emotionalisierung von Aushandlungsprozessen lässt sachlich fundierte Argumente in den Hintergrund rücken.',
  },
  {
    id: '10',
    title: 'Additive Kulturpolitik und Steigerungslogik',
    text: 'Das Paradigma der additiven Kulturpolitik und die Steigerungslogik stehen für den Grundkonsens kongruenter Ziele im Politikfeld. Eine dynamische Stabilisierung im Sinne Hartmut Rosas ist festzustellen: Nur durch Wachstum und Beschleunigung gelingt es kulturpolitisch Handelnden, die bestehende kulturelle Infrastruktur aufrechtzuerhalten',
  },
  {
    id: '11',
    title: 'Überforderung durch Allzuständigkeit',
    text: 'Kulturpolitik hat eine querliegende Funktion über die Politikfelder Medien-, Bildungs-, Wissenschafts-, Wirtschafts-, Infrastruktur-, Bau-, Arbeits-, Jugend-, Familien-, Sozial-, Justiz- und Umweltpolitik. Die proklamierte Gesellschaftsrelevanz und Allzuständigkeit überfordert kulturpolitische Akteure und führt zu einem Rückzug auf das originäre Tätigkeitsfeld von Kunst und Kultur im engeren Sinne.',
  },
  {
    id: '12',
    title: 'Soziale Homophilie und preferential attachment',
    text: 'Im policy-Netzwerk wirken die Mechanismen der sozialen Homophilie und des preferential attachment. Mit anderen Worten: Es werden bevorzugt Bindungen zum einen zu ähnlichen und gleichgesinnten Akteuren und zum anderen zu im Politikfeld zentralen Akteuren aufgebaut bzw. unterhalten.',
  },
  {
    id: '13',
    title: 'Binnenorientierung und Selbstwirksamkeit',
    text: 'Das Politikfeld der Kulturpolitik in Thüringen zeichnet sich durch eine selbstreferenzielle Binnenorientierung (geografisch, diskursiv) und eine geringe Selbstwirksamkeits­erwartung aus.',
  },
  {
    id: '14',
    title: 'Repräsentation im Politiknetzwerk',
    text: 'Wissenschaftliche, ausbildende, touristische und wirtschaftliche Akteure und deren Perspektiven sind im Politikfeld erheblich unterrepräsentiert, wodurch deren finanzielle Möglichkeiten, Forschungsergebnisse und Multiplikatorenpotenziale kaum in kulturpolitische Entscheidungsprozesse und das künstlerisch-kulturelle Schaffen einfließen.',
  },
];

const KulturpolitikDetails = () => {
  const navigate = useNavigate();
  const pageBackHandler = () => navigate('/veroeffentlichungen');

  return (
    <Container>
      <div className={classes['buttons-box']}>
        <Button onClick={pageBackHandler}>Zurück</Button>
        <a
          href='https://www.transcript-verlag.de/shopMedia/openaccess/pdf/oa9783839442555.pdf'
          target='_blank'
          rel='noreferrer'
        >
          <Button>Download</Button>
        </a>
      </div>
      <Section>
        <div className={classes['col-left']}>
          <h1>Kulturpolitik in Thüringen</h1>
        </div>
        <div className={classes['col-right']}>
          <h2>Praktiken – Governance – Netzwerke</h2>
          <p>
            Kaum ein Politikfeld ist so vielfältig, symbolisch besetzt und normativ aufgeladen wie
            die Kulturpolitik. Im kooperativ-föderalistisch organisierten deutschen Bundesstaat sind
            es die Länder, die formal die Hauptverantwortung über das kulturelle Leben sowie den
            Erhalt und die Gestaltung der bestehenden Kulturinfrastruktur. Bislang liegen leider nur
            wenige politikwissenschaftliche Studien über dieses Politikfeld vor.
          </p>
          <p>
            Im Rahmen meiner Dissertation widmete ich mich dem selbsternannten “Kulturland
            Thüringen”. Die im transcript Verlag auch in der Open Access-Version erschienene
            Publikation{' '}
            <a href='https://www.transcript-verlag.de/978-3-8376-4255-1/kulturpolitik-in-thueringen/?number=978-3-8394-4255-5'>
              Kulturpolitik in Thüringen. Praktiken – Governance – Netzwerke
            </a>{' '}
            bestätigt, bestärkt, präzisiert und stützt empirisch wesentliche Befunde der Polemik{' '}
            <a href='https://www.sueddeutsche.de/kultur/debatte-um-streitschrift-der-kulturinfarkt-lieber-ein-streit-der-sich-lohnt-1.1311177'>
              Der Kulturinfarkt
            </a>{' '}
            (Haselbach et al. 2012), in der die Autoren den unmittelbar bevorstehenden Kollaps der
            Kulturpolitik diagnostizieren und über die ein heftiger öffentlich-medial ausgetragener
            Streit entbrannte. Meine Politikfeldanalyse führt zu der Erkenntnis: Die
            Landeskulturpolitik in Thüringen befindet sich in einer systemimmanenten Sinn- und
            Strukturkrise.
          </p>
          <p>
            Ausgehend von einer Dokumentenanalyse und den Ergebnissen leitfadengestützter
            Experteninterviews und einer quantitativen Netzwerkerhebung unter kulturpolitischen
            Akteuren zielt die Forschungsarbeit darauf ab, die inhaltliche Gestaltung des
            Politikfelds (policy) zu beschreiben und zu erklären sowie die Effekte der policy
            aufzudecken. Der theoretische Ansatz des akteurzentrierten Institutionalismus (Mayntz,
            Scharpf 1995; Scharpf 2006) rahmt die Politikfeldanalyse.
          </p>
        </div>
      </Section>
      <Section>
        <div className={classes['col-left']}>
          <h3>Thesen zur Kulturpolitik in Thüringen</h3>
        </div>
        <div className={`${classes['cards-box']} ${classes['col-right']}`}>
          {theses.map((these) => (
            <Card key={these.id} className={classes['card-theses']}>
              <div className={classes['card-header']}>
                <div className={classes['card-number']}>{these.id}.</div>
                <h4>{these.title}</h4>
              </div>
              <p>{these.text}</p>
            </Card>
          ))}
        </div>
      </Section>
      <Section>
        <div className={classes['col-left']}>
          <h3>Zitate und Rezensionen</h3>
        </div>
        <div className={`${classes['quotes-box']} ${classes['col-right']}`}>
          <QuotesCarousel />
        </div>
      </Section>
    </Container>
  );
};

export default KulturpolitikDetails;
