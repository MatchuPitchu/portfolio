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
            In meinem Leben habe ich mich bereits mit vielf??ltigen Themen tiefergehend besch??ftigt.
            Hier k??nnen Sie sich durchklicken, um einen ??berblick ??ber die Bereiche zu erhalten, in
            denen ich mich wohlf??hle und Expertise habe. Diese Felder m??chte ich auch weiterhin
            hauptberuflich und als Freelancer mitgestalten.
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
    </section>
  );
};

export default About;
