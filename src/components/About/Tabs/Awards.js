import AnimatingItem from '../../UI/CSSTransition/AnimatingItem';
import StationPoint from '../../UI/StationPoint/StationPoint';
import classes from './Tabs.module.css';

const awards = [
  {
    date: 'Publikationsförderung Dissertation',
    content: 'FAZIT-STIFTUNG & Norbert und Mechthild Kleinheyer Stiftung',
  },
  {
    date: 'Abschlussstipendium Promotion',
    content: 'Universität Erfurt',
  },
  {
    date: 'Promotionsstipendium',
    content: 'Konrad-Adenauer-Stiftung',
  },
  {
    date: 'Mobilitätsstipendium',
    content: 'Deutsch-Französisches Institut Frankreich-Bibliothek',
  },
  {
    date: 'Studienstipendium',
    content: 'Studienstiftung des deutschen Volkes',
  },
  {
    date: 'Sonderpreis Kulturberatung',
    content: 'Ideenwettbewerb Jena-Weimar 2010',
  },
  {
    date: 'Stipendium Kulturprojekt',
    content: 'Deutsch-Französisches Jugendwerk',
  },
  {
    date: 'Preise Musikwettbewerbe',
    content: 'Klavier: u.a. Jugend Musiziert',
  },
];

const Awards = ({ isOpen }) => {
  return (
    <AnimatingItem show={isOpen}>
      <div className={classes['cv-box']}>
        {awards.map((item, index) => (
          <StationPoint key={index} item={item} className={classes['cv-box__awards']} />
        ))}
      </div>
    </AnimatingItem>
  );
};

export default Awards;
