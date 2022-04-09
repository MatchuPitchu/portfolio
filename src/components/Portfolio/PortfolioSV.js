import ImgWithFallback from '../ImgWithFallback';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import Tags from '../UI/Tags/Tags';
import H3Title from '../UI/Titles/H3Title';
import classes from './PortfolioItem.module.css';

import svappJPG from '../../assets/portfolio/screenshot-sv-app.jpg';
import svappWEBP from '../../assets/portfolio/screenshot-sv-app.webp';

const portfolio = {
  title: 'Screenshot Mein SV-App',
  imageSrc: svappWEBP,
  imageFallback: svappJPG,
};

const tags = ['WordPress', 'GeneratePress', 'Templates', 'Design'];

const PortfolioSV = () => {
  return (
    <div className={classes['portfolio-item']}>
      <Card className={classes['card--customized']}>
        <div className={classes['card-header']}>
          <H3Title>Mein SV-Wissen</H3Title>
        </div>
        <section className={classes.section}>
          <Tags tags={tags} />
        </section>
        <section className={classes.section}>
          <p>
            Für den Verein{' '}
            <a href='https://schuleeingesichtgeben.de/' target='_blank' rel='noreferrer'>
              Schule ein Gesicht geben e.V.
            </a>{' '}
            habe ich das gestalterische und funktionale Template für die Web-App "Mein SV-Wissen:
            Die App für eure Schülervertretung" erstellt. WordPress und das leichtgewichtige und
            sehr gut adaptierbare GeneratePress-Theme dienten als Basis.
          </p>
          <p>
            Das Ziel der App ist das Empowerment von Schülervertretungen in Deutschland. Zahlreiche
            interaktive Inhalte und Wissensbausteine lassen nach und nach einen großen
            Wissensspeicher entstehen, der Schüler:innen helfen soll, ihre eigene Schule
            mitzugestalten und ihre Rechte wahrzunehmen.
          </p>
        </section>
        <section className={`${classes.section} ${classes.btns}`}>
          <a href='https://eis-mit-stil.netlify.app' target='_blank' rel='noreferrer'>
            <Button ariaLabel='link'>Zur SV-App</Button>
          </a>
        </section>
      </Card>
      <div className={classes['image--main']}>
        <ImgWithFallback
          src={portfolio.imageSrc}
          fallback={portfolio.imageFallback}
          alt={portfolio.title}
        />
      </div>
    </div>
  );
};

export default PortfolioSV;
