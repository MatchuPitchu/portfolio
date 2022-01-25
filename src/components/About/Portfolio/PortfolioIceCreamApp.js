import { useContext } from 'react';
import { ThemeContext } from '../../../store/ThemeContext';
import ImgWithFallback from '../../ImgWithFallback';
import KeyPoint from '../../SVG/KeyPoint';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import List from '../../UI/List/List';
import Tags from '../../UI/Tags/Tags';
import H3Title from '../../UI/Titles/H3Title';
import LazyIframe from './LazyIframe';
import classes from './PortfolioItem.module.css';

import logoPlaystore from '../../../assets/logos/logo-google-playstore.svg';
import eisMitStilLight from '../../../assets/portfolio/screenshot-eis-mit-stil-light.jpg';
import eisMitStilLightWEBP from '../../../assets/portfolio/screenshot-eis-mit-stil-light.webp';
import eisMitStilDark from '../../../assets/portfolio/screenshot-eis-mit-stil-dark.jpg';
import eisMitStilDarkWEBP from '../../../assets/portfolio/screenshot-eis-mit-stil-dark.webp';

const portfolio = {
  title: 'Screenshot Vegan Ice Cream App Eis mit Stil',
  imageSrc: eisMitStilLightWEBP,
  imageSrcDark: eisMitStilDarkWEBP,
  imageFallback: eisMitStilLight,
  imageFallbackDark: eisMitStilDark,
};

const tags = ['React', 'Ionic', 'NodeJS mit Express', 'MongoDB mit Mongoose'];

const PortfolioIceCreamApp = () => {
  const { isLight } = useContext(ThemeContext);

  return (
    <div className={classes['portfolio-item']}>
      <Card className={classes['card--customized']}>
        <div className={classes['card-header']}>
          <H3Title>Vegan Ice Cream App</H3Title>
        </div>
        <section className={classes.section}>
          <Tags tags={tags} />
        </section>
        <section className={classes.section}>
          <p>
            Als Abschlussprojekt an der WBS Coding School realisierte ich die Vegan Ice Cream App
            "Eis mit Stil", die ich als Herzensprojekt weiterentwickeln möchte, wenn es meine Zeit
            erlaubt.
          </p>
          <p>
            Worum geht es? Regelmäßig – und nicht nur im Sommer – begebe ich mich auf die Suche nach
            veganem Eis. Egal an welchem Ort ich mich befinde. Ich liebe veganes Eis. Damit meine
            ich aber nicht dieses von manchen Eisläden einfach als vegan bezeichnete
            Sorbet-Wasser-Gemisch. Nein: Ich mag richtig cremiges veganes Eis – allein mit
            gefrorenem Wasser lasse ich mich nur ungern abspeisen. Doch die Suche war für mich immer
            beschwerlich. Ich musste mich durch Google mit allerlei Suchbegriffen quälen. Auch auf
            Google Maps stellten sich viele vegane Eis-"Fundstellen" als unzutreffend heraus. Dies
            gab mir den Impuls, eine eigene Plattform aufzubauen, auf der veganes Eis gefunden,
            eingetragen und bewertet werden kann.
          </p>
          <List>
            {[
              'Eisläden mit veganem Angebot finden',
              'neue Eisläden auf der Karte eintragen',
              'Eis-Erlebnis und veganes Angebot bewerten',
              'Top-Eisläden als Favoriten speichern',
            ].map((item) => (
              <li>
                <KeyPoint className={classes['keypoint-customize']} />
                {item}
              </li>
            ))}
          </List>
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
          <LazyIframe
            url='https://www.youtube-nocookie.com/embed/yX4nKrUdzc4'
            title='Michael Flohr: Eis mit Stil – Vegan Ice Cream App'
          />
        </section>
      </Card>
      <div className={classes['image--main']}>
        <a href='https://eis-mit-stil.netlify.app' target='_blank' rel='noreferrer'>
          <ImgWithFallback
            src={isLight ? portfolio.imageSrc : portfolio.imageSrcDark || portfolio.imageSrc}
            fallback={
              isLight
                ? portfolio.imageFallback
                : portfolio.imageFallbackDark || portfolio.imageFallback
            }
            alt={portfolio.title}
          />
        </a>
      </div>
    </div>
  );
};

export default PortfolioIceCreamApp;
