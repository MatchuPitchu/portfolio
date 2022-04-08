import H1Title from '../components/UI/Titles/H1Title';
import Portfolio from '../components/Portfolio/Portfolio';
import classes from './Webentwicklung.module.css';
import HeadingWrapper from '../components/Layout/HeadingWrapper';

const Webentwicklung = () => {
  return (
    <section className={classes.webdev}>
      <HeadingWrapper>
        <H1Title classTitle={classes.h1}>Webentwicklung</H1Title>
        <p className={classes.p}>
          2021 habe ich mich mit Leidenschaft und Wissbegierde intensiver in die Web- und
          App-Entwicklung begeben und entschieden, meinen beruflichen Fokus vollkommen darauf zu
          legen – sei es als Webentwickler, IT-Manager, IT-Berater oder an der Schnittstelle all
          dieser Bereiche. Und gerne mit Sinn, was für mich bedeutet, einen Beitrag zur nachhaltigen
          Entwicklung unserer Gesellschaft leisten zu können.
        </p>
        <p>
          Vor diesem entschiedenen Schritt in die Webentwicklung habe ich u.a. beim{' '}
          <a href='https://www.netzwerk-n.org/' target='_blank' rel='noreferrer'>
            netzwerk n
          </a>{' '}
          eine Open Source-Plattform für Nachhaltigkeitsengagement an Hochschulen mitentwickelt –
          die{' '}
          <a href='https://www.plattform-n.org/' target='_blank' rel='noreferrer'>
            plattform n
          </a>
          . In diesem Rahmen habe ich die Schnittstelle zwischen Programmierung und Bedürfnissen der
          Community und des Projektteams bedient. Durch die umfassende Weiterbildung zum "Full Stack
          Web & App Developer" an der{' '}
          <a href='https://www.wbscodingschool.com/' target='_blank' rel='noreferrer'>
            WBS Coding School Berlin
          </a>{' '}
          vertiefte ich mein Wissen und meine Fähigkeiten in einem modernen Tech-Stack für die
          Webentwicklung. Nun arbeite ich als Frontend-Entwickler bei{' '}
          <a href='https://www.team-neusta.de/' target='_blank' rel='noreferrer'>
            team neusta
          </a>
          , auch wenn ich dies vor ein paar Jahren noch nicht wirklich als berufliche Option auf dem
          Schirm hatte. Das hat mir einmal mehr gezeigt, dass im Leben alles möglich ist, wenn nur
          die intrinsische Motivation und der Spaß vorhanden ist.
        </p>
      </HeadingWrapper>
      <Portfolio />
    </section>
  );
};

export default Webentwicklung;
