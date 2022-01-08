import { Link } from 'react-router-dom';
import Container from '../components/Layout/Container';
import H1Title from '../components/UI/Titles/H1Title';
import Sigma from '../components/Publications/Kulturpolitik/graph/Sigma';
import Legend from '../components/Publications/Kulturpolitik/graph/Legend';
import classes from './NetzwerkeKulturpolitik.module.css';
import H2Title from '../components/UI/Titles/H2Title';

// import data from '../components/Publications/Kulturpolitik/data/v7th_Ziele_Liste_gephi (edges csv) Directed V5_Variable Akteursgruppe (Filter 6 k.n.einschätzen).json';

// const regex = /\d+/;
// const transformedNodes = data.nodes
//   .map((item) => {
//     if (item.attributes['Weighted Degree'] === '0.0') return undefined;
//     return {
//       key: item.id.match(regex)[0],
//       attributes: {
//         label: item.label.trim(),
//         x: item.x,
//         y: item.y,
//         size: item.size * 0.1,
//         color: item.color,
//         weightedInDegree: item.attributes['Weighted In-Degree'],
//         weightedDegree: item.attributes['Weighted Degree'],
//         weightedOutDegree: item.attributes['Weighted Out-Degree'],
//         group: item.attributes['Akteursgruppe'],
//         // city: item.attributes.Ort,
//       },
//     };
//   })
//   .filter((item) => item !== undefined);

// const transformedEdges = data.edges
//   .map((item) => {
//     if (item.size === 1.0) {
//       return {
//         key: item.id,
//         source: item.source.match(regex)[0],
//         target: item.target.match(regex)[0],
//         attributes: {
//           color: item.color,
//           size: item.size * 0.3,
//           force: item.attributes['Attribut Farbe nach Weight eingefügt'],
//         },
//       };
//     }
//   })
//   .filter((item) => item !== undefined);

// const transformedData = {
//   nodes: [...transformedNodes],
//   edges: [...transformedEdges],
// };

const infoAndCoopNetworkLinks = [
  { title: 'nie', class: classes.infoAndCoop1 },
  { title: 'sehr selten', class: classes.infoAndCoop2 },
  { title: 'selten', class: classes.infoAndCoop3 },
  { title: 'gelegentlich', class: classes.infoAndCoop4 },
  { title: 'oft', class: classes.infoAndCoop5 },
  { title: 'sehr oft', class: classes.infoAndCoop6 },
];

const goalsLinksFilteredWeak = [
  { title: 'gar nicht', class: classes.goals1 },
  { title: 'schwach', class: classes.goals2 },
];

const goalsLinksFilteredStrong = [
  { title: 'hoch', class: classes.goals3 },
  { title: 'sehr hoch', class: classes.goals4 },
];

const goalsLinksFilteredNoIdea = [{ title: 'kann nicht einschätzen', class: classes.goals0 }];

const Network = () => {
  // console.log(transformedData);
  // console.log(JSON.stringify(transformedData));

  return (
    <Container className={classes['container-customized']}>
      <section className={classes.description}>
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
        <p>
          <i>
            Hinweis: Die Netzwerkgrafiken können auf Smartphones nur beschränkt entdeckt werden.
            Erst auf einem größeren Display sind mehr Funktionen freigeschaltet und Details
            sichtbar.
          </i>
        </p>
      </section>
      <section className={classes.description}>
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
      </section>
      <Sigma dataPath='/data/01_networkInfoExchange.json' />
      <Legend links={infoAndCoopNetworkLinks} />

      <section className={classes.description}>
        <H2Title className={classes.title}>Kooperationsbeziehungen</H2Title>
      </section>
      <Sigma dataPath='/data/02_networkCooperation.json' />
      <Legend links={infoAndCoopNetworkLinks} />

      <section className={classes.description}>
        <H2Title className={classes.title}>Netzwerke der kulturpolitischen Ziele</H2Title>
        <p>gefiltert »schwach« und »gar nicht«</p>
      </section>
      <Sigma dataPath='/data/03_networkGoalsFiltered1-2.json' />
      <Legend links={goalsLinksFilteredWeak} />

      <section className={classes.description}>
        <p>gefiltert »hoch« und »sehr hoch«</p>
      </section>
      <Sigma dataPath='/data/04_networkGoalsFiltered4-5.json' />
      <Legend links={goalsLinksFilteredStrong} />

      <section className={classes.description}>
        <p>gefiltert »kann ich nicht einschätzen«</p>
      </section>
      <Sigma dataPath='/data/05_networkGoalsFiltered6.json' />
      <Legend links={goalsLinksFilteredNoIdea} />
    </Container>
  );
};

export default Network;
