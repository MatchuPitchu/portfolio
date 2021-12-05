import { useState } from 'react';

import classes from './CardOffers.module.css';
import KeyPoint from '../SVG/KeyPoint';
import Card from '../UI/Card/Card';
import List from '../UI/List/List';

const CardOffers = ({ offer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => setIsExpanded((prev) => !prev);

  return (
    <Card className={classes['card-customize']}>
      <div className={classes.image}>
        <img src={offer.image} alt={offer.title} />
      </div>
      <div className={classes.cardTitleLine}>
        <h2>{offer.title}</h2>
      </div>
      <div className={classes.description}>
        <p>Kurzbeschreibung</p>
      </div>
      <div className={classes.references}>
        <h3>Referenzen</h3>
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
