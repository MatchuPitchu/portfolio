import classes from './Images.module.css';
import ImgWithFallback from '../ImgWithFallback';

// do not change name of michael-flohr_2021_web-w1200.jpg since it is used for Open Graph in index.html
import michael1JPG from '../../assets/michael-flohr_2021_web-w1200.jpg';
import michael1JPGmobile from '../../assets/michael-flohr_2021_web-w240.jpg';
import michael1WEBP from '../../assets/webp/michael-flohr_2021_web-w1200.webp';
import michael1WEBPmobile from '../../assets/webp/michael-flohr_2021_web-w240.webp';
import michael2JPG from '../../assets/michael-flohr_2019_web-w390.jpg';
import michael2JPGmobile from '../../assets/michael-flohr_2019_web-w210.jpg';
import michael2WEBP from '../../assets/webp/michael-flohr_2019_web-w390.webp';
import michael2WEBPmobile from '../../assets/webp/michael-flohr_2019_web-w210.webp';
import laptopJPG from '../../assets/laptop-javascript-clement-helardot-unsplash-w1920.jpg';
import laptopJPGmobile from '../../assets/laptop-javascript-clement-helardot-unsplash-w240.jpg';
import laptopWEBP from '../../assets/webp/laptop-javascript-clement-helardot-unsplash-w1920.webp';
import laptopWEBPmobile from '../../assets/webp/laptop-javascript-clement-helardot-unsplash-w240.webp';

const photos = [
  {
    src: michael1WEBP,
    srcset: `${michael1WEBPmobile} 240w, ${michael1WEBP} 1200w`,
    fallback: michael1JPG,
    fallbackSrcset: `${michael1JPGmobile} 240w, ${michael1JPG} 1200w`,
    sizes: '240px, 1200px',
    class: classes.imageBox1,
    alt: 'Michael Flohr',
  },
  {
    src: michael2WEBP,
    srcset: `${michael2WEBPmobile} 210w, ${michael2WEBP} 390w`,
    fallback: michael2JPG,
    fallbackSrcset: `${michael2JPGmobile} 210w, ${michael2JPG} 390w`,
    sizes: '210px, 390px',
    class: classes.imageBox2,
    alt: 'Michael Flohr',
  },
  {
    src: laptopWEBP,
    srcset: `${laptopWEBPmobile} 240w, ${laptopWEBP} 1920w`,
    fallback: laptopJPG,
    fallbackSrcset: `${laptopJPGmobile} 240w, ${laptopJPG} 1920w`,
    sizes: '240px, 1920px',
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
            srcset={photo.srcset}
            fallback={photo.fallback}
            fallbackSrcset={photo.fallbackSrcset}
            sizes={`(max-width: 576px) ${photo.sizes}`}
            className={classes.image}
            alt={photo.alt}
          />
        </div>
      ))}
    </div>
  );
};

export default Images;
