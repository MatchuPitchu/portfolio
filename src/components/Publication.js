import { useState } from 'react';

import classes from './Publication.module.css';
import Card from './UI/Card/Card';

const Publication = ({ pub }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => setExpanded((prev) => !prev);

  return (
    <Card className={classes['card-customize']}>
      <div className={classes.content}>
        <h2>{pub.title}</h2>
        <div className={classes.description}>
          {pub?.abstract?.map((paragraphe) => (
            <p>{paragraphe}</p>
          ))}
        </div>
      </div>
      <div className={classes.image}>
        <img src={pub.image} alt={pub.title} />
      </div>
    </Card>
  );
};

export default Publication;
