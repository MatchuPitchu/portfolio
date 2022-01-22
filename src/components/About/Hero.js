import H1Title from '../UI/Titles/H1Title';
import Container from '../Layout/Container';
import Images from './Images';
import Pointer from '../UI/Pointer/Pointer';
import classes from './Hero.module.css';

import michael1JPG from '../../assets/michael-flohr_2021_web.jpg';
import michael1WEBP from '../../assets/webp/michael-flohr_2021_web.webp';
import michael2JPG from '../../assets/michael-flohr_2019_web.jpg';
import michael2WEBP from '../../assets/webp/michael-flohr_2019_web.webp';
import laptopJPG from '../../assets/laptop-javascript-clement-helardot-unsplash.jpg';
import laptopWEBP from '../../assets/webp/laptop-javascript-clement-helardot-unsplash.webp';

const photos = [
  { src: michael1WEBP, fallback: michael1JPG, class: classes.imageBox1, alt: 'Michael Flohr' },
  { src: michael2WEBP, fallback: michael2JPG, class: classes.imageBox2, alt: 'Michael Flohr' },
  {
    src: laptopWEBP,
    fallback: laptopJPG,
    class: classes.imageBox3,
    alt: 'Laptop Beispielbild Clement Helardot Unsplash',
  },
];

const Hero = () => {
  return (
    <section className={classes.hero}>
      <H1Title>
        <div className={classes.title}>Dr</div>
        <div className={classes.firstName}>Michael</div>
        <div className={classes.lastName}>Flohr</div>
      </H1Title>
      <Container className={classes['customize-container']}>
        <div className={classes.presentation}>
          <h2>über mich</h2>
          <p>
            Studium, Engagement und berufliche Aktivitäten führten mich in allerlei Themenfelder:
            von Musik, über Wirtschaft, Politik, Kultur, interkulturelle Kommunikation, nachhaltige
            Entwicklung, Digitalisierung bis zur Full-Stack Web- & App-Entwicklung. Jedes Puzzleteil
            hat meinen Blick auf die Welt verändert und mich bereichert. Sowieso bin ich davon
            überzeugt: Nur inter- und transdiziplinär lässt sich die Welt verstehen und zu einem
            nachhaltigeren Ort verwandeln.
          </p>
        </div>
        <div className={classes.images}>
          <Images photos={photos} />
        </div>
      </Container>
      <Pointer to='/#profil' />
    </section>
  );
};

export default Hero;
