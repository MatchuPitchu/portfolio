import { FC, useEffect, useRef, useState } from 'react';
import AnimateHeight from 'react-animate-height';
import ButtonExpand from '../../../UI/Button/ButtonExpand';
import classes from './Panel.module.css';

const DURATION = 300;

const Panel: FC<{ title: JSX.Element | string; initiallyDeployed?: boolean }> = ({
  title,
  initiallyDeployed,
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const dom = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isExpanded)
      setTimeout(() => {
        if (dom.current)
          dom.current.parentElement!.scrollTo({
            top: dom.current.offsetTop - 5,
            behavior: 'smooth',
          });
      }, DURATION);
  }, [isExpanded]);

  const handleExpandClick = () => setIsExpanded((prev) => !prev);

  return (
    <div className={classes.panel} ref={dom}>
      <div className={classes['filter-header']}>
        <div>{title}</div>
        <ButtonExpand
          onClick={handleExpandClick}
          isExpanded={isExpanded}
          ariaExpanded={isExpanded}
          ariaLabel='expand references'
        />
      </div>

      <AnimateHeight duration={DURATION} height={isExpanded ? 'auto' : 0}>
        {children}
      </AnimateHeight>
    </div>
  );
};

export default Panel;
