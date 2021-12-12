import classes from './Images.module.css';

import image1 from '../../assets/michael-flohr_2021_web.jpg';
import image2 from '../../assets/michael-flohr_2019_web.jpg';
import laptop from '../../assets/laptop-javascript-clement-helardot-unsplash.jpg';

const photos = [
  { src: image1, class: classes.imageBox1, alt: 'Michael Flohr (1)' },
  { src: image2, class: classes.imageBox2, alt: 'Michael Flohr (2)' },
  { src: laptop, class: classes.imageBox3, alt: 'Laptop Beispielbild Clement Helardot Unsplash' },
];

const Images = () => {
  return (
    <div className={classes.images}>
      {photos.map((photo) => (
        <div key={photo.alt} className={photo.class}>
          <img className={classes.image} src={photo.src} alt={photo.alt} />
        </div>
      ))}
    </div>
  );
};

export default Images;
