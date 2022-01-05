import { Link } from 'react-router-dom';
import Container from '../components/Layout/Container';
import H1Title from '../components/UI/Titles/H1Title';
import Sigma from '../components/Publications/Kulturpolitik/graph/Sigma';
import Legend from '../components/Publications/Kulturpolitik/graph/Legend';
import classes from './NetzwerkeKulturpolitik.module.css';
import H2Title from '../components/UI/Titles/H2Title';

// import data from '../components/Publications/Kulturpolitik/data/network.json';

// const regex = /\d+/;
// const transformedNodes = data.nodes.map((item) => {
//   return {
//     key: item.id.match(regex)[0],
//     attributes: {
//       label: item.label.trim(),
//       x: item.x,
//       y: item.y,
//       size: item.size * 0.1,
//       color: item.color,
//       weightedInDegree: item.attributes['Weighted In-Degree'],
//       weightedDegree: item.attributes['Weighted Degree'],
//       weightedOutDegree: item.attributes['Weighted Out-Degree'],
//       group: item.attributes['Akteursgruppe'],
//       city: item.attributes.Ort,
//     },
//   };
// });

// const transformedEdges = data.edges.map((item) => {
//   return {
//     key: item.id,
//     source: item.source.match(regex)[0],
//     target: item.target.match(regex)[0],
//     attributes: {
//       color: item.color,
//       size: item.size * 0.3,
//       force: item.attributes['Attribut Farbe nach Weight eingefügt'],
//     },
//   };
// });

// const transformedData = {
//   nodes: [...transformedNodes],
//   edges: [...transformedEdges],
// };

const links = [
  { title: 'nie', class: classes.link1 },
  { title: 'sehr selten', class: classes.link2 },
  { title: 'selten', class: classes.link3 },
  { title: 'gelegentlich', class: classes.link4 },
  { title: 'oft', class: classes.link5 },
  { title: 'sehr oft', class: classes.link6 },
];

const Network = () => {
  // console.log(data);
  // console.log(JSON.stringify(transformedData));

  return (
    <Container className={classes['container-customized']}>
      <div className={classes.description}>
        <H1Title classTitle={classes.title}>Netzwerke in der Thüringer Kulturpolitik</H1Title>
        <p>
          Im Rahmen meiner{' '}
          <Link to='/veroeffentlichungen/kulturpolitik'>
            Dissertation über die Kulturpolitik in Thüringen
          </Link>{' '}
          führte ich unter anderem eine quantitative Netzwerkanalyse durch. Dieser methodische
          Ansatz hilft zu verstehen, welche Akteure sich dem Politikfeld der Kulturpolitik zugehörig
          fühlen, in welcher Beziehung sie zueinander stehen und wie sie interagieren. Das
          methodische Vorgehen und die Ergebnisse können ausführlich in der Open
          Access-Veröffentlichung nachgelesen werden. Hier möchte ich nur ein paar Auszüge
          vorstellen.
        </p>
        <H2Title className={classes.title}>Informationsaustausch</H2Title>
        <p>
          Ein <i>policy</i>-Netzwerk formiert sich grundlegend über den Austausch von Informationen.
          Um im Wettstreit um kulturpolitische Vorstellungen, Argumente und Gedanken Gehör zu finden
          und um die Deutungshoheit über Problemlösungen im Politikfeld gewinnen zu können, ist der
          Zugang zu den mehrheitlich als wichtig und einflussreich erachteten Akteuren eine
          notwendige Voraussetzung. Das Informationsnetzwerk zeigt, wie der Zugang zu Informationen
          innerhalb des Netzwerks strukturiert ist und über welche Pfade Inhalte und Diskurse
          diffundieren können. Der Austausch organisiert sich über jegliche
          Kommunikationsgelegenheiten, die Personen während und außerhalb ihrer beruflichen
          Tätigkeit erschließen: z.B. persönliche Treffen, Telefonate, Briefe, Mails,
          Kurzmitteilungen, Newsletter oder soziale Medien. Je nach Intensität sind die Verbindungen
          in unterschiedlich intensiven Grüntönen eingefärbt. Das helle Rot bedeutet, dass keine
          Information fließt, das heißt ein Akteur erachtet den anderen zwar als wichtig für die
          Kulturpolitik in Thüringen, hat mit ihm aber bisher keinen Austausch initiiert. Je größer
          der Akteur dargestellt ist, desto intensiver gehen bei ihm Informationen ein.
        </p>
        <p>
          Die Netzwerkkarte zeigt zum einen anschaulich, wie sich das Politikfeld auf die
          Staatskanzlei, also die kulturfördernde Exekutive, ausrichtet. Zum anderen konzentrieren
          sich die Informationsströme auf Akteure, die ihren Sitz im mittelthüringischen Raum haben.
          Für die dort ansässigen Akteure besteht eine hohe Wahrscheinlichkeit, zeitnah von
          politischen Entwicklungen zu erfahren und fehlerhafte Informationen mit anderen abgleichen
          zu können. Demgegenüber hängen die Akteure, die im Netzwerk und auch geografisch peripher
          liegen, von wenigen Informationssträngen ab.
        </p>
        <p>
          <i>
            Hinweis: Die Netzwerkgrafiken können auf Smartphones nur beschränkt entdeckt werden.
            Erst auf einem größeren Display sind mehr Funktionen freigeschaltet und Details zu
            entdecken.
          </i>
        </p>
      </div>
      <Sigma dataPath='/data/01_networkInfoExchange.json' />
      <Legend links={links} />

      {/* <Sigma dataPath='/data/02_networkInfoExchangeGeo.json' /> */}
    </Container>
  );
};

export default Network;
