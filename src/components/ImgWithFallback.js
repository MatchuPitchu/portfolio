const ImgWithFallback = ({
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
    <picture>
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
