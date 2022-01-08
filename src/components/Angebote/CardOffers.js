import { useState } from 'react';
import KeyPoint from '../SVG/KeyPoint';
import Card from '../UI/Card/Card';
import List from '../UI/List/List';
import H2Title from '../UI/Titles/H2Title';
import H3Title from '../UI/Titles/H3Title';
import ActivityPoint from '../UI/ActivityPoint/ActivityPoint';
import ImgWithFallback from '../ImgWithFallback';
import classes from './CardOffers.module.css';
import ButtonExpand from '../UI/Button/ButtonExpand';

const CardOffers = ({ offer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => setIsExpanded((prev) => !prev);

  return (
    <Card className={classes['card-customize']}>
      <div className={classes.image}>
        <ImgWithFallback src={offer.imageSrc} fallback={offer.imageFallback} alt={offer.title} />
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
        <ButtonExpand
          onClick={handleExpandClick}
          isExpanded={isExpanded}
          ariaExpanded={isExpanded}
          ariaLabel='expand references'
        />
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
