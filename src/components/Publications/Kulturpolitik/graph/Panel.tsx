import { FC, useState } from 'react';
import AnimateHeight from 'react-animate-height';
import ButtonExpand from '../../../UI/Button/ButtonExpand';
import classes from './Panel.module.css';

interface Props {
  title: string;
}

const Panel: FC<Props> = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleExpandClick = () => setIsExpanded((prev) => !prev);

  return (
    <div className={classes.panel}>
      <div className={classes['filter-header']}>
        <div>{title}</div>
        <ButtonExpand
          onClick={handleExpandClick}
          isExpanded={isExpanded}
          ariaExpanded={isExpanded}
          ariaLabel='expand references'
        />
      </div>

      <AnimateHeight duration={300} height={isExpanded ? 'auto' : 0}>
        {children}
      </AnimateHeight>
    </div>
  );
};

export default Panel;
