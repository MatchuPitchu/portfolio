import Container from '../Layout/Container';
import ButtonsPublicationDetails from '../UI/Button/ButtonsPublicationDetails';
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
            Diesem Artikel liegt die Annahme zugrunde, dass Hochschulen in Deutschland die
            entscheidenden Umsetzungsorte für die Große Transformation sind. Dies begründet sich
            darauf, dass Hochschulen erstens als Wissensspeicher und -generatoren eine hohe
            gesellschaftliche Anerkennung genießen, zweitens die Kapazitäten besitzen, die
            ökologischen, sozialen, technischen und ökonomischen Herausforderungen einer
            nachhaltigen Entwicklung zu bearbeiten, und drittens eine Hebelwirkung ausüben bzw. eine
            Vorbildfunktion für gesellschaftliche Prozesse innehaben. Sie eignen sich als
            modellhafte Transformationsorte, da sie einerseits eine gut abgegrenzte und
            überschaubare räumliche und organisationale Struktur vorweisen und andererseits in
            dieser Struktur das generierte und erworbene Wissen in Synergie von Forschung, Lehre,
            Betrieb und Hochschul-Governance unmittelbar in die Praxis der Hochschule übertragen
            werden kann; kurzum: Transformative Ansätze können an Hochschulen erprobt, eingeübt und
            angepasst werden und letztlich auf gesamtgesellschaftliche Entwicklungen ausstrahlen,
            die wiederum auf den Transformationsort Hochschule zurückwirken.
          </p>
          <p>
            Das <i>netzwerk n</i> hat seit der Vereinsgründung im Jahr 2012 ein umfassendes
            Erfahrungs- und Systemwissen erworben, wo Hebelpunkte bestehen, um die nachhaltige
            Entwicklung hochschulübergreifend und innerhalb der heterogen strukturierten und
            gesteuerten Organisation Hochschule zu befördern und zu beschleunigen. Die
            Beziehungsebene zwischen Akteuren, womit sowohl individuelle als auch kollektive und
            korporative Akteure gemeint sind, trat dabei beständig als wesentliche Kategorie hervor,
            um Veränderungen an Hochschulen erklären und gestalten zu können.
          </p>
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

          <img
            src='https://vg02.met.vgwort.de/na/9250c8276d2b44349e1c845a08194cc7'
            width='1'
            height='1'
            alt='Zählmarke VG Wort'
          />
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
