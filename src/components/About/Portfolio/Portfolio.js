import { useContext } from 'react';
import { ThemeContext } from '../../../store/ThemeContext';
import ImgWithFallback from '../../ImgWithFallback';
import Container from '../../Layout/Container';
import Card from '../../UI/Card/Card';
import Tags from '../../UI/Tags/Tags';
import H2Title from '../../UI/Titles/H2Title';
import H3Title from '../../UI/Titles/H3Title';
import classes from './Portfolio.module.css';

import logoPlaystore from '../../../assets/logos/logo-google-playstore.svg';
import eisMitStilLight from '../../../assets/portfolio/screenshot-eis-mit-stil-light.jpg';
import eisMitStilLightWEBP from '../../../assets/portfolio/screenshot-eis-mit-stil-light.webp';
import eisMitStilDark from '../../../assets/portfolio/screenshot-eis-mit-stil-dark.jpg';
import eisMitStilDarkWEBP from '../../../assets/portfolio/screenshot-eis-mit-stil-dark.webp';
import Button from '../../UI/Button/Button';

const tags = ['React', 'Ionic', 'NodeJS mit Express', 'MongoDB mit Mongoose'];

const portfolio = [
  {
    title: 'Screenshot Vegan Ice Cream App Eis mit Stil',
    imageSrc: eisMitStilLightWEBP,
    imageSrcDark: eisMitStilDarkWEBP,
    imageFallback: eisMitStilLight,
    imageFallbackDark: eisMitStilDark,
  },
];

const Portfolio = () => {
  const { isLight } = useContext(ThemeContext);

  return (
    <Container className={classes['container--portfolio']}>
      <H2Title>Portfolio</H2Title>
      <div className={classes['portfolio']}>
        <Card className={classes['card--customized']}>
          <div className={classes['card-header']}>
            <H3Title>Vegan Ice Cream App "Eis mit Stil"</H3Title>
          </div>
          <section className={classes.section}>
            <Tags tags={tags} />
          </section>
          <section className={classes.section}>
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
          </section>
          <section className={`${classes.section} ${classes.btns}`}>
            <a href='https://eis-mit-stil.netlify.app' target='_blank' rel='noreferrer'>
              <Button ariaLabel='link'>Zur App</Button>
            </a>
            <a
              href='https://play.google.com/store/apps/details?id=eismitstil.app'
              target='_blank'
              rel='noreferrer'
            >
              <img src={logoPlaystore} className={classes.logo} alt='Logo Google Playstore' />
            </a>
          </section>
          <section className={`${classes.section} ${classes['iframe-box']}`}>
            <iframe
              className={classes.iframe}
              src='https://www.youtube-nocookie.com/embed/yX4nKrUdzc4'
              title='Michael Flohr: Eis mit Stil – Vegan Ice Cream App'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </section>
        </Card>
        <div className={classes['image--main']}>
          <a href='https://eis-mit-stil.netlify.app' target='_blank' rel='noreferrer'>
            <ImgWithFallback
              src={
                isLight ? portfolio[0].imageSrc : portfolio[0].imageSrcDark || portfolio[0].imageSrc
              }
              fallback={
                isLight
                  ? portfolio[0].imageFallback
                  : portfolio[0].imageFallbackDark || portfolio[0].imageFallback
              }
              alt={portfolio[0].title}
            />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Portfolio;
