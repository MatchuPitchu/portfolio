import { Link, Outlet } from 'react-router-dom';
import Container from '../../components/Layout/Container';
import Button from '../../components/UI/Button/Button';
import H1Title from '../../components/UI/Titles/H1Title';
import classes from './NetzwerkeKulturpolitik.module.css';

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

const Network = () => {
  // console.log(transformedData);
  // console.log(JSON.stringify(transformedData));

  return (
    <section className={classes.section}>
      <Container className={classes['container-customized']}>
        <H1Title classTitle={classes.h1}>Netzwerke in der Thüringer Kulturpolitik</H1Title>
        <p className={classes.p}>
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
        <p className={classes.p}>
          <i>
            Hinweis: Die Netzwerkgrafiken können auf Smartphones nur beschränkt entdeckt werden.
            Erst auf einem größeren Display sind mehr Funktionen freigeschaltet (wie die Suche und
            das Hovern über Knotenpunkte) und Details sichtbar.
          </i>
        </p>
        <div className={classes.buttons}>
          <Link to='informationsnetzwerk'>
            <Button ariaLabel='more information'>Information</Button>
          </Link>
          <Link to='kooperationsnetzwerk'>
            <Button ariaLabel='more information'>Kooperation</Button>
          </Link>
          <Link to='zielnetzwerk'>
            <Button ariaLabel='more information'>Ziele</Button>
          </Link>
        </div>
        <Outlet />
      </Container>
    </section>
  );
};

export default Network;
