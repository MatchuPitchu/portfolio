import Container from '../Layout/Container';
import H2Title from '../UI/Titles/H2Title';
import Tags from '../UI/Tags/Tags';
import ImagesIceCreamApp from './WebDev/ImagesIceCreamApp';
import classes from './WebDev.module.css';
import H3Title from '../UI/Titles/H3Title';

const tags = ['React', 'Ionic', 'NodeJS mit Express', 'MongoDB mit Mongoose'];

const WebDev = () => {
  return (
    <section className={classes.webdev} id='webdev'>
      <Container className={classes.container}>
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
        <Container className={classes['customize-container']}>
          <div className={classes.presentation}>
            <h3>Portfolio</h3>
            <h4>Vegan Ice Cream App "Eis mit Stil"</h4>
            <Tags className={classes.tags} tags={tags} />
            <p>
              Als Abschlussprojekt an der WBS Coding School realisierte ich eine Vegan Ice Cream
              App, die ich als Herzensprojekt weiterentwickeln möchte, wenn es meine Zeit erlaubt.
            </p>
            <p>
              Worum geht es? Regelmäßig – und nicht nur im Sommer – begebe ich mich auf die Suche
              nach veganem Eis. Egal an welchem Ort ich mich befinde. Ich liebe veganes Eis. Damit
              meine ich aber nicht dieses von manchen Eisläden einfach als vegan bezeichnete
              Sorbet-Wasser-Gemisch. Nein: Ich mag richtig cremiges veganes Eis – allein mit
              gefrorenem Wasser lasse ich mich nur ungern abspeisen. Doch die Suche war für mich
              immer beschwerlich. Ich musste mich durch Google mit allerlei Suchbegriffen quälen.
              Auch auf Google Maps stellten sich viele vegane Eis-"Fundstellen" als unzutreffend
              heraus. Dies gab mir den Impuls, eine eigene Plattform aufzubauen, auf der veganes Eis
              gefunden, eingetragen und bewertet werden kann.
            </p>
            <iframe
              className={classes.iframe}
              src='https://www.youtube-nocookie.com/embed/yX4nKrUdzc4'
              title='Michael Flohr: Eis mit Stil – Vegan Ice Cream App'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
            <div className={classes.images}>
              <ImagesIceCreamApp />
            </div>
          </div>
        </Container>
      </Container>
    </section>
  );
};

export default WebDev;
