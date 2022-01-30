const ImgWithFallback = ({
  classPicture,
  className,
  src,
  srcset,
  fallback,
  fallbackSrcset,
  sizes,
  alt,
  type = 'image/webp',
  ...rest
}) => {
  return (
    <picture className={classPicture}>
      <source srcSet={srcset} sizes={sizes} type={type} />
      <img
        srcSet={fallbackSrcset}
        sizes={sizes}
        src={fallback}
        alt={alt}
        {...rest}
        className={className}
      />
    </picture>
  );
};

export default ImgWithFallback;
