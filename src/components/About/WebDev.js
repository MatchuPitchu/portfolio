import Container from '../Layout/Container';
import H2Title from '../UI/Titles/H2Title';
import Portfolio from './Portfolio/Portfolio';
import classes from './WebDev.module.css';

const WebDev = () => {
  return (
    <section className={classes.webdev} id='webdev'>
      <Container className={classes['container--webdev']}>
        <div>
          <H2Title className={classes['h2-customized']}>Webentwicklung</H2Title>
          <p className={classes.p}>
            2021 habe ich mich mit Leidenschaft und Wissbegierde intensiver in die Web- und
            App-Entwicklung gestürzt und entschieden, meinen beruflichen Fokus darauf zu legen, sei
            es als Webentwickler, IT-Manager, IT-Berater oder an der Schnittstelle all dieser
            Bereiche – gerne mit Sinn, also mit einem Beitrag zur nachhaltigen Entwicklung unserer
            Gesellschaft. Zuvor habe ich u.a. beim{' '}
            <a href='https://www.netzwerk-n.org/' target='_blank' rel='noreferrer'>
              netzwerk n
            </a>{' '}
            eine Open Source-Plattform für Nachhaltigkeitsengagement an Hochschulen mitentwickelt –
            die{' '}
            <a href='https://www.plattform-n.org/' target='_blank' rel='noreferrer'>
              plattform n
            </a>
            . Auf dieser Plattform sind mittlerweile über 10.000 Nutzer:innen angemeldet, die sich
            in Gruppen und Projekten organisieren, sich austauschen und hilfreiche Tools für ihr
            Engagement bereitgestellt bekommen. Das Besondere dieser Plattform sind zum einen die
            Werte, die dahinter stecken: Open Source, Green IT, Gemeinnützigkeit, Datenschutz und
            Privatsphäre. Zum anderen ist die plattform n Teil eines Verbundes von
            sozial-ökologischen Plattformen, die sich unter dem Dach der{' '}
            <a href='https://wechange.de/' target='_blank' rel='noreferrer'>
              Wechange Genossenschaft
            </a>{' '}
            zusammengefunden haben, um gemeinsam die technische und konzeptionelle Weiterentwicklung
            zu beschleunigen.
          </p>
          <p>
            Nachdem ich in diesem Rahmen die Schnittstelle zwischen Programmierung und Bedürfnissen
            der Community und des Projektteams bediente, kam mir der Gedanken, warum nicht auch
            selbst programmieren. Die umfassende und tiefgehende Weiterbildung zum Full Stack Web &
            App Developer an der WBS Coding School Berlin öffnete mir diese Tür. Und nun arbeite ich
            tatsächlich als Webentwickler, auch wenn ich dies zuvor nicht wirklich auf dem Schirm
            hatte. Das hat mir einmal mehr gezeigt, dass im Leben alles möglich ist, wenn nur die
            intrinsische Motivation vorhanden ist.
          </p>
        </div>
        <Portfolio />
      </Container>
    </section>
  );
};

export default WebDev;
