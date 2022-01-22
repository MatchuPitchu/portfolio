import { useState } from 'react';
import Container from '../Layout/Container';
import Card from '../UI/Card/Card';
import H2Title from '../UI/Titles/H2Title';
import Kompetenzen from './Tabs/Kompetenzen';
import Work from './Tabs/Work';
import Education from './Tabs/Education';
import Awards from './Tabs/Awards';
import Engagement from './Tabs/Engagement';
import classes from './About.module.css';
import Pointer from '../UI/Pointer/Pointer';

const tabs = [
  { area: 'skills', title: 'Kompetenzen' },
  { area: 'work', title: 'Beruf' },
  { area: 'education', title: 'Ausbildung' },
  { area: 'awards', title: 'Auszeichnungen' },
  { area: 'engagement', title: 'Engagement' },
];

const About = () => {
  const [isOpen, setIsOpen] = useState({
    skills: true,
    work: false,
    education: false,
    awards: false,
    engagement: false,
  });

  const onClickHandler = (tab) => {
    switch (tab) {
      case 'work':
        setIsOpen({
          skills: false,
          work: true,
          education: false,
          awards: false,
          engagement: false,
        });
        break;
      case 'education':
        setIsOpen({
          skills: false,
          work: false,
          education: true,
          awards: false,
          engagement: false,
        });
        break;
      case 'awards':
        setIsOpen({
          skills: false,
          work: false,
          education: false,
          awards: true,
          engagement: false,
        });
        break;
      case 'engagement':
        setIsOpen({
          skills: false,
          work: false,
          education: false,
          awards: false,
          engagement: true,
        });
        break;
      default:
        setIsOpen({
          skills: true,
          work: false,
          education: false,
          awards: false,
          engagement: false,
        });
    }
  };

  return (
    // id for scroll btn
    <section className={classes.section} id='profil'>
      <Container className={classes.container}>
        <div>
          <H2Title className={classes['h2-customized']}>Profil</H2Title>
          <p className={classes.p}>
            In meinem Leben habe ich mich bereits mit allerlei Themen beschäftigt. Diese Übersicht
            fasst die fachlichen Bereiche zusammen, in denen ich mich wohlfühle und die ich mit
            meinen haupt- und freiberuflichen Tätigkeiten auch weiterhin mitgestalten möchte.
          </p>
        </div>
        <Card className={classes['card-customized']}>
          <ul className={classes.tabs}>
            {tabs.map((tab, index) => (
              <li
                key={index}
                className={isOpen[tab.area] ? classes.active : ''}
                onClick={() => onClickHandler(tab.area)}
              >
                {tab.title}
              </li>
            ))}
          </ul>
          <div className={classes['tabs-content']}>
            <Kompetenzen isOpen={isOpen.skills} />
            <Work isOpen={isOpen.work} />
            <Education isOpen={isOpen.education} />
            <Awards isOpen={isOpen.awards} />
            <Engagement isOpen={isOpen.engagement} />
          </div>
        </Card>
      </Container>
      <Pointer to='/#webdev' />
    </section>
  );
};

export default About;
