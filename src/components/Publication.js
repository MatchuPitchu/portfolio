import { useState } from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import classes from './Publication.module.css';
import Card from './UI/Card/Card';
import Button from './UI/Button/Button';
import List from './UI/List';
import KeyPoint from './SVG/KeyPoint';

const Publication = ({ pub }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => setExpanded((prev) => !prev);

  return (
    <Card className={classes['card-customize']}>
      <div className={classes.content}>
        <h2>{pub.title}</h2>
        {pub.subtitle && <div className={classes.subtitle}>{pub.subtitle}</div>}
        <div className={classes.description}>
          {pub?.abstract?.map((paragraphe, index) => (
            <p key={index}>{paragraphe}</p>
          ))}
        </div>
      </div>
      <div className={classes.sideCol}>
        <div>
          <img src={pub.image} alt={pub.title} />
          <a href={pub.href} target='_blank' rel='noreferrer'>
            <Button width='180' height='60'>
              Ansicht
            </Button>
          </a>
        </div>
        {pub.specific && (
          <div>
            <h3>{pub.specific.title}</h3>
            <List>
              {pub?.specific?.content?.map((item) => (
                <li key={item.id}>
                  <KeyPoint />
                  <div className={classes.text}>
                    <span>{item.title}</span>
                    {item.p}
                  </div>
                  {item.href && (
                    <a className={classes.link} href={item.href} target='_blank' rel='noreferrer'>
                      <Icon className={classes.icon} icon={['fa', 'external-link-alt']} />
                    </a>
                  )}
                </li>
              ))}
            </List>
          </div>
        )}
      </div>
    </Card>
  );
};

export default Publication;
