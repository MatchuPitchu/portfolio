const ImgWithFallback = ({ src, fallback, alt, type = 'image/webp', ...rest }) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img src={fallback} alt={alt} {...rest} />
    </picture>
  );
};

export default ImgWithFallback;
