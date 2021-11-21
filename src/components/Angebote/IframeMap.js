import classes from './IframeMap.module.css';

const IframeMap = () => {
  return (
    <iframe
      className={classes.iframe}
      title='map'
      src='https://datawrapper.dwcdn.net/EN7JW/10/'
      frameBorder='0'
      scrolling='no'
      aria-label='chart'
    />
  );
};

export default IframeMap;
