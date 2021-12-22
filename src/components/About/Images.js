import classes from './Images.module.css';

import michael1JPG from '../../assets/michael-flohr_2021_web.jpg';
import michael1WEBP from '../../assets/webp/michael-flohr_2021_web.webp';
import michael2JPG from '../../assets/michael-flohr_2019_web.jpg';
import michael2WEBP from '../../assets/webp/michael-flohr_2019_web.webp';
import laptopJPG from '../../assets/laptop-javascript-clement-helardot-unsplash.jpg';
import laptopWEBP from '../../assets/webp/laptop-javascript-clement-helardot-unsplash.webp';
import ImgWithFallback from '../ImgWithFallback';

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

const Images = () => {
  return (
    <div className={classes.images}>
      {photos.map((photo) => (
        <div key={photo.src} className={photo.class}>
          <ImgWithFallback
            src={photo.src}
            fallback={photo.fallback}
            className={classes.image}
            alt={photo.alt}
          />
        </div>
      ))}
    </div>
  );
};

export default Images;
