const ImgWithFallback = ({ className, src, fallback, alt, type = 'image/webp', ...rest }) => {
  return (
    <picture className={className} >
      <source srcSet={src} type={type} />
      <img src={fallback} alt={alt} {...rest} />
    </picture>
  );
};

export default ImgWithFallback;
