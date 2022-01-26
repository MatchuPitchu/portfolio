import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../store/ThemeContext';
import ImgWithFallback from '../ImgWithFallback';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import Tags from '../UI/Tags/Tags';
import H3Title from '../UI/Titles/H3Title';

import classes from './PortfolioItem.module.css';

import plattformJPG from '../../assets/portfolio/screenshot-plattform-n.png';
import plattformWEBP from '../../assets/portfolio/screenshot-plattform-n.webp';

const portfolio = {
  title: 'Screenshot Vegan Ice Cream App Eis mit Stil',
  imageSrc: plattformWEBP,
  imageFallback: plattformJPG,
};

const tags = ['Projektmanagement', 'Community-Management', 'React Relaunch'];

const PortfolioPlattformN = () => {
  const { isLight } = useContext(ThemeContext);

  return (
    <div className={classes['portfolio-item']}>
      <Card className={`${classes['card--customized']} ${classes['card--customized-sm']}`}>
        <div className={classes['card-header']}>
          <H3Title>Plattform n</H3Title>
        </div>
        <section className={classes.section}>
          <Tags tags={tags} />
        </section>
        <section className={classes.section}>
          <p>
            In meiner ehrenamtlichen und später beruflichen Tätigkeit war ich seit den Anfängen 2014
            bis 2021 unmittelbar in den Aufbau, das Community- und Projektmanagement der{' '}
            <a href='https://plattform-n.org/' target='_blank' rel='noreferrer'>
              Open Source-Kollaborationsplattform <i>plattform n</i>
            </a>{' '}
            involviert. Ziel der Plattform ist es, das Engagement für nachhaltige Hochschulen zu
            erleichtern und zu fördern. Das Besondere dabei sind auch die Werte, die dahinter
            stecken: Open Source, Green IT, Gemeinnützigkeit, Datenschutz und Privatsphäre.
            Mittlerweile ist die Community auf 11.000 Nutzer:innen in über 180 Gruppen und über
            1.000 Projekten angewachsen. Eine Erfolgsgeschichte, wie aus Ideen Projekte und konkrete
            Veränderungen in der Realität erwachsen können.
          </p>
          <p>
            Einen ausführlichen Einblick in die Geschichte und das Konzept der plattform n findet
            sich in diesem <Link to='/veroeffentlichungen/digitalisierung'>Artikel</Link>.
            Gegenwärtig werden erste Schritte umgesetzt, die in den Relaunch des Designs und der
            Code-Basis mit React münden sollen. Dies geschieht im Verbund mit ähnlich aufgebauten
            sozial-ökologisch orientierten Plattformen, die sich unter dem Dach der{' '}
            <a href='https://wechange.de/' target='_blank' rel='noreferrer'>
              wechange eG
            </a>{' '}
            zusammengefunden haben.
          </p>
        </section>
        <section className={`${classes.section} ${classes.btns}`}>
          <a href='https://plattform-n.org' target='_blank' rel='noreferrer'>
            <Button ariaLabel='link'>Zur Plattform</Button>
          </a>
        </section>
      </Card>
      <div className={`${classes['image--main']} ${classes['image-cutted-out']}`}>
        <ImgWithFallback
          src={isLight ? portfolio.imageSrc : portfolio.imageSrcDark || portfolio.imageSrc}
          fallback={
            isLight
              ? portfolio.imageFallback
              : portfolio.imageFallbackDark || portfolio.imageFallback
          }
          alt={portfolio.title}
        />
      </div>
    </div>
  );
};

export default PortfolioPlattformN;
