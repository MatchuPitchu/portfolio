import { useRef } from 'react';
import useIntersectionObserver from '@react-hook/intersection-observer';
import classes from './LazyIframe.module.css';

const LazyIframe = ({ url, title }) => {
  const containerRef = useRef();
  const lockRef = useRef(false);
  const { isIntersecting } = useIntersectionObserver(containerRef);
  if (isIntersecting && !lockRef.current) {
    lockRef.current = true;
  }
  return (
    <div className={classes['iframe-container']} ref={containerRef}>
      {lockRef.current && (
        <iframe
          className={classes.iframe}
          src={url}
          title={title}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default LazyIframe;
