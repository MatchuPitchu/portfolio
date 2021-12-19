import { useState } from 'react';
import KeyPoint from '../SVG/KeyPoint';
import Card from '../UI/Card/Card';
import List from '../UI/List/List';
import H2Title from '../UI/Titles/H2Title';
import H3Title from '../UI/Titles/H2Title';
import ActivityPoint from '../UI/ActivityPoint/ActivityPoint';
import classes from './CardOffers.module.css';

const CardOffers = ({ offer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => setIsExpanded((prev) => !prev);

  return (
    <Card className={classes['card-customize']}>
      <div className={classes.image}>
        <img src={offer.image} alt={offer.title} />
      </div>
      <div className={classes['card-header']}>
        <H2Title>{offer.title}</H2Title>
      </div>
      <div className={classes.description}>
        <p>{offer.description}</p>
      </div>
      <div className={classes['activity-box']}>
        <H3Title>Bereiche</H3Title>
        {offer.activities.map((item, index) => (
          <ActivityPoint key={index} item={item} />
        ))}
      </div>
      <div className={classes.references}>
        <H3Title>Referenzen</H3Title>
        <button onClick={handleExpandClick} aria-expanded={isExpanded}>
          <svg
            className={isExpanded ? classes['rotate-open'] : classes['rotate-closed']}
            focusable='false'
            viewBox='0 0 24 24'
            aria-hidden='true'
            data-testid='ExpandMoreIcon'
          >
            <path d='M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z'></path>
          </svg>
        </button>
      </div>
      <div className={`${classes.panel} ${isExpanded ? classes.active : ''}`}>
        {isExpanded && (
          <List>
            {offer.references.map((reference, index) => (
              <li key={index}>
                <KeyPoint className={classes['keypoint-customize']} />
                {reference}
              </li>
            ))}
          </List>
        )}
      </div>
    </Card>
  );
};

export default CardOffers;
