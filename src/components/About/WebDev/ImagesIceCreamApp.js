import classes from './ImagesIceCreamApp.module.css';
import ImgWithFallback from '../../ImgWithFallback';

// OPTIMIZE IMAGES

import appHome from '../../../assets/portfolio/eis-mit-stil-home-light.PNG';
// import michael1WEBP from '../../../assets/webp/michael-flohr_2021_web.webp';
import appEntdecken from '../../../assets/portfolio/eis-mit-stil-entdecken-dark.PNG';
// import michael2WEBP from '../../../assets/webp/michael-flohr_2019_web.webp';
import appGraphic from '../../../assets/portfolio/eis-mit-stil-vorstellungsgrafik-app-2-normal.png';
// import laptopWEBP from '../../../assets/webp/laptop-javascript-clement-helardot-unsplash.webp';

const photos = [
  { src: '', fallback: appHome, alt: 'Michael Flohr' },
  { src: '', fallback: appEntdecken, alt: 'Michael Flohr' },
  {
    src: '',
    fallback: appGraphic,
    alt: 'Laptop Beispielbild Clement Helardot Unsplash',
  },
];

const ImagesIceCreamApp = () => {
  return (
    <div className={classes.images}>
      <div className={classes['slider-first']} />
      {photos.map((photo) => (
        <div key={photo.src} className={classes['img-box']}>
          <ImgWithFallback
            src={photo.src}
            fallback={photo.fallback}
            className={classes.image}
            alt={photo.alt}
          />
        </div>
      ))}
      <div className={classes['slider-last']} />
    </div>
  );
};

export default ImagesIceCreamApp;
