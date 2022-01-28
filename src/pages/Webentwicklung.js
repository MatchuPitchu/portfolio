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
          App-Entwicklung gestürzt und entschieden, meinen beruflichen Fokus darauf zu legen, sei es
          als Webentwickler, IT-Manager, IT-Berater oder an der Schnittstelle all dieser Bereiche –
          gerne mit Sinn, also mit einem Beitrag zur nachhaltigen Entwicklung unserer Gesellschaft.
          Zuvor habe ich u.a. beim{' '}
          <a href='https://www.netzwerk-n.org/' target='_blank' rel='noreferrer'>
            netzwerk n
          </a>{' '}
          eine Open Source-Plattform für Nachhaltigkeitsengagement an Hochschulen mitentwickelt –
          die{' '}
          <a href='https://www.plattform-n.org/' target='_blank' rel='noreferrer'>
            plattform n
          </a>
          .
        </p>
        <p>
          Nachdem ich in diesem Rahmen die Schnittstelle zwischen Programmierung und Bedürfnissen
          der Community und des Projektteams bediente, kam mir der Gedanken, warum nicht auch selbst
          programmieren. Die umfassende und tiefgehende Weiterbildung zum Full Stack Web & App
          Developer an der WBS Coding School Berlin öffnete mir diese Tür. Und nun arbeite ich
          tatsächlich als Webentwickler, auch wenn ich dies zuvor nicht wirklich auf dem Schirm
          hatte. Das hat mir einmal mehr gezeigt, dass im Leben alles möglich ist, wenn nur die
          intrinsische Motivation vorhanden ist.
        </p>
      </HeadingWrapper>
      <Portfolio />
    </section>
  );
};

export default Webentwicklung;
