import Container from '../Layout/Container';
import ButtonsPublicationDetails from './ButtonsPublicationDetails';
import KeyPoint from '../SVG/KeyPoint';
import List from '../UI/List/List';
import Section from '../UI/Section/Section';
import classes from './PublicationsDetails.module.css';

const data = [
  {
    id: '1',
    title: 'Stichprobe',
    p: '114 Mitglieder von 18 Nachhaltigkeitsinitiativen aus neun Bundesländern und dem deutschsprachigen Ausland',
  },
  {
    id: '2',
    title: 'Einbezogene Hochschultypen',
    p: 'Universitäten, Technische Universitäten, Fachhochschulen und Privathochschulen',
  },
  {
    id: '3',
    title: 'Erhebungszeitraum',
    p: 'April bis August 2018',
  },
];

const NetzwerkeDetails = () => {
  const specificData = data?.map((item) => {
    return (
      <li key={item.id}>
        <KeyPoint />
        <div className={classes.text}>
          <div className={classes.title}>{item.title}</div>
          <div>{item.p}</div>
        </div>
      </li>
    );
  });

  return (
    <Container className={classes['container-customized']}>
      <ButtonsPublicationDetails
        text='Download'
        href='https://www.researchgate.net/publication/331894285_Nachhaltigkeitsnetzwerke_an_Hochschulen_Die_transformative_Kraft_von_Verbindungen'
      />
      <Section>
        <div className={classes['col-left']}>
          <h1>Netzwerke für die nachhaltige Entwicklung an Hochschulen</h1>
        </div>
        <div className={classes['col-right']}>
          <h2>Die transformative Kraft von Verbindungen</h2>
          <p>
            Netzwerk, Vernetzung und Beziehung sind omnipräsente, aber häufig symbolisch verwendete
            Begriffe, wenn über die Transformation von Hochschulen in Richtung einer nachhaltigen
            Entwicklung gesprochen wird. Wissenschaftliche Betrachtungen aus einer
            Netzwerkperspektive liegen bislang nicht vor. Mit diesem explorativen und
            praxisorientierten Artikel habe ich mir vorgenommen, in diese Lücke zu stoßen. Mein Ziel
            war es, die Vernetzung von Mitgliedern von Nachhaltigkeitsinitiativen an Hochschulen
            offenzulegen und die Einbettung dieser Gruppen in eine Netzwerkstruktur zu erkunden.
          </p>
          <p>
            Rahmend habe ich die erhobenen Daten und die daraus abgeleiteten Erkenntnisse mit dem
            Erfahrungswissen der Formate und Aktivitäten des <i>netzwerk n</i> kontextualisiert.
            Letztlich ist diese kleine Studie als Plädoyer zu lesen, die transformative Kraft der
            Beziehungsebene stärker in den Blick zu nehmen, um Transformationsprozesse an
            Hochschulen erklären und gestalten zu können.
          </p>
        </div>
      </Section>
      <Section>
        <div className={classes['col-left']}>
          <h3>Rahmendaten</h3>
        </div>
        <div className={classes['col-right']}>
          <List>{specificData}</List>
        </div>
      </Section>
    </Container>
  );
};

export default NetzwerkeDetails;
