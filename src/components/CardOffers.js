import { useState } from 'react';

import classes from './CardOffers.module.css';

const CardOffers = ({ offer }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => setExpanded((prev) => !prev);

  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <div className={classes.cardTitleLine}>
          <div className={classes.title}>{offer.title}</div>
        </div>
        <div className={classes.image}>
          <img src={offer.image} alt={offer.title} />
        </div>
      </div>
      <div className={classes.description}>
        <p>Kurzbeschreibung</p>
      </div>
      <div className={classes.references}>
        <div>Referenzen</div>
        <button onClick={handleExpandClick} aria-expanded={expanded}>
          <svg
            className={expanded ? classes['rotate-open'] : classes['rotate-closed']}
            focusable='false'
            viewBox='0 0 24 24'
            aria-hidden='true'
            data-testid='ExpandMoreIcon'
          >
            <path d='M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z'></path>
          </svg>
        </button>
      </div>
      {expanded && (
        <div className={classes.list}>
          <ul>
            {offer.references.map((ref, index) => (
              <li key={index}>
                <div>
                  <svg
                    className={classes.listIcon}
                    focusable='false'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                    data-testid='ExpandMoreIcon'
                  >
                    <path d='M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z'></path>
                  </svg>
                </div>
                {ref}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CardOffers;
