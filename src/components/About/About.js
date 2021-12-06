import { useState } from 'react';
import Container from '../Layout/Container';
import Card from '../UI/Card/Card';
import Kompetenzen from './Kompetenzen';
import Involvement from './Involvement';
import classes from './About.module.css';

const About = () => {
  const [isOpen, setIsOpen] = useState({
    skills: true,
    education: false,
    awards: false,
    involvement: false,
  });

  const onClickHandler = (tab) => {
    switch (tab) {
      case 'education':
        setIsOpen({
          skills: false,
          education: true,
          awards: false,
          involvement: false,
        });
        break;
      case 'awards':
        setIsOpen({
          skills: false,
          education: false,
          awards: true,
          involvement: false,
        });
        break;
      case 'involvement':
        setIsOpen({
          skills: false,
          education: false,
          awards: false,
          involvement: true,
        });
        break;
      default:
        setIsOpen({
          skills: true,
          education: false,
          awards: false,
          involvement: false,
        });
    }
  };

  return (
    <Container className={classes['tabs-container']}>
      <Card>
        <ul className={classes.tabs} id='tabs'>
          <li className={isOpen.skills ? classes.active : ''} onClick={onClickHandler}>
            Kompetenzen
          </li>
          <li
            className={isOpen.education ? classes.active : ''}
            onClick={() => onClickHandler('education')}
          >
            Ausbildung
          </li>
          <li
            className={isOpen.awards ? classes.active : ''}
            onClick={() => onClickHandler('awards')}
          >
            Stipendien & Auszeichnungen
          </li>
          <li
            className={isOpen.involvement ? classes.active : ''}
            onClick={() => onClickHandler('involvement')}
          >
            Engagement
          </li>
        </ul>
        <div className={classes['tabs-content']}>
          {isOpen.skills && <Kompetenzen />}
          {isOpen.involvement && <Involvement />}
        </div>
      </Card>
    </Container>
  );
};

export default About;
