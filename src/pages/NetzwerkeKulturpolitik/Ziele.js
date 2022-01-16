import { useState, useContext } from 'react';
import { ThemeContext } from '../../store/ThemeContext';
import Legend from '../../components/Publications/Kulturpolitik/graph/Legend';
import Sigma from '../../components/Publications/Kulturpolitik/graph/Sigma';
import Card from '../../components/UI/Card/Card';
import AnimatingItem from '../../components/UI/CSSTransition/AnimatingItem';
import H2Title from '../../components/UI/Titles/H2Title';
import classes from './NetzwerkeKulturpolitik.module.css';

import legendGoalsNoIdeaLight from '../../assets/graph/legend-goals-filtered-no-idea-light.svg';
import legendGoalsNoIdeaDark from '../../assets/graph/legend-goals-filtered-no-idea-dark.svg';

const goalsLinksFilteredWeak = [
  { title: 'gar nicht', class: classes.goals1 },
  { title: 'schwach', class: classes.goals2 },
];

const goalsLinksFilteredStrong = [
  { title: 'hoch', class: classes.goals3 },
  { title: 'sehr hoch', class: classes.goals4 },
];

// const goalsLinksFilteredNoIdea = [{ title: 'kann nicht einschätzen', class: classes.goals0 }];

const Ziele = () => {
  const { isLight } = useContext(ThemeContext);

  const [isOpen, setIsOpen] = useState({
    goalsWeak: true,
    goalsFilteredStrong: false,
    goalsFilteredNoIdea: false,
  });

  const onClickHandler = (tab) => {
    switch (tab) {
      case 'goalsWeak':
        setIsOpen({
          goalsWeak: true,
          goalsFilteredStrong: false,
          goalsFilteredNoIdea: false,
        });
        break;
      case 'goalsFilteredStrong':
        setIsOpen({
          goalsWeak: false,
          goalsFilteredStrong: true,
          goalsFilteredNoIdea: false,
        });
        break;
      case 'goalsFilteredNoIdea':
        setIsOpen({
          goalsWeak: false,
          goalsFilteredStrong: false,
          goalsFilteredNoIdea: true,
        });
        break;
      default:
        setIsOpen({
          goalsWeak: true,
          goalsFilteredStrong: false,
          goalsFilteredNoIdea: false,
        });
    }
  };

  return (
    <section className={classes.section}>
      <H2Title className={classes.title}>Netzwerk der Ziele</H2Title>
      <p className={classes.p}>
        Akteure gehen Koalitionen ein, um ihre Ziele, Argumente und Ideen im politischen Prozess
        prominent zu platzieren und vertreten zu sehen. Während sich Landtagsfraktionen in einer
        formalisierten und vertraglich geregelten Koalition zusammenschließen, um eine
        parlamentarische Mehrheit für die Regierungsarbeit zu stabilisieren, können Koalitionen
        angelehnt an das <i>Advocacy Coalition Framework</i> allgemein als konkurrierende
        Beziehungsnetzwerke, in die sich Akteure mit kongruenten Werten und Überzeugungen begeben,
        verstanden werden. Die Dynamik und der Grad möglicher Veränderungen im Politikfeld hängen
        maßgeblich davon ab, ob widerstreitende Überzeugungen erstens existieren und ob sie zweitens
        im politischen Prozess wahrgenommen werden.
      </p>
      <p className={classes.p}>
        In meiner Forschungsarbeit zeige ich, dass in der Kulturpolitik die Grundsätze des Bewahrens
        und der Pflege des Tradierten prioritär sind. Die Analyse des Netzwerks der
        kulturpolitischen Ziele bietet eine Erklärung, warum das Zielgefüge des Politikfelds überaus
        stabil und beständig ist. Lediglich 5 % aller Relationen im Netzwerk beziehen sich auf keine
        oder eine schwache Übereinstimmung. Nur dort besteht das Potenzial für einen Wettstreit
        konkurrierender Ziele und konträrer Ansätze. Für den Rest gilt, dass sich die Akteure
        überwiegend wohl fühlen und kaum inhaltliche Konflikte sehen. Der Anteil an Kanten mit
        mittlerer Übereinstimmung beträgt 27 %, von hoch und sehr hoch übereinstimmenden Zielen 68 %
        – mehr als zwei Drittel aller bewerteten Relationen lassen also auf ein gemeinsames
        Überzeugungssystem schließen.
      </p>
      <p className={classes.p}>
        Abgesehen von der Mediengruppe kristallisiert sich das Bild eines konfliktarmen Netzwerks
        heraus, in dem gegensätzliche Positionen nur punktuell und zerstreut ausgeprägt sind – nur
        ungefähr ein Viertel der insgesamt 259 Akteure sind davon betroffen. Dass außerdem die
        kulturpolitischen Ziele der Staatskanzlei lediglich einmal und zudem von einem lokal
        wirkenden soziokulturellen Akteur abgelehnt werden, deutet auf eine mäßige
        Veränderungsdynamik im Politikfeld hin. Die Filterung der hohen und sehr hohen
        Übereinstimmung bestätigt, dass die überwältigende Mehrheit des <i>policy</i>-Netzwerks die
        Ziele des Exekutivorgans teilt und unterstützt. 73 % aller eingehenden Verbindungen der
        Staatskanzlei drücken eine hohe oder sehr hohe Akzeptanz aus. Eine Kausalität ist schwer
        nachzuweisen, dennoch erhärtet sich der Eindruck, dass die finanziellen Abhängigkeiten und
        die enge Verflechtung zwischen kulturpolitisch Handelnden und Exekutive die
        Konfliktbereitschaft mindert oder sogar neutralisiert.
      </p>
      <img
        src='https://vg02.met.vgwort.de/na/8027a7558aaa488d91d89e1405c9ba28'
        width='1'
        height='1'
        alt='Zählmarke VG Wort'
      />
      <Card className={classes['card-customized']}>
        <ul className={classes.tabs}>
          <li className={isOpen.goalsWeak ? classes.active : ''} onClick={onClickHandler}>
            schwache Übereinstimmung
          </li>
          <li
            className={isOpen.goalsFilteredStrong ? classes.active : ''}
            onClick={() => onClickHandler('goalsFilteredStrong')}
          >
            starke Übereinstimmung
          </li>
          <li
            className={isOpen.goalsFilteredNoIdea ? classes.active : ''}
            onClick={() => onClickHandler('goalsFilteredNoIdea')}
          >
            keine Einschätzung möglich
          </li>
        </ul>
        <div className={classes['tabs-content']}>
          <AnimatingItem show={isOpen.goalsWeak}>
            <div className={classes['tab-box']}>
              <Sigma
                dataPath='/data/03_networkGoalsFiltered1-2.json'
                description={'gefiltert »schwach« und »gar nicht«'}
              />
              <Legend links={goalsLinksFilteredWeak} />
            </div>
          </AnimatingItem>
          <AnimatingItem show={isOpen.goalsFilteredStrong}>
            <div className={classes['tab-box']}>
              <Sigma
                dataPath='/data/04_networkGoalsFiltered4-5.json'
                description={'gefiltert »hoch« und »sehr hoch«'}
              />
              <Legend links={goalsLinksFilteredStrong} />
            </div>
          </AnimatingItem>
          <AnimatingItem show={isOpen.goalsFilteredNoIdea}>
            <div className={classes['tab-box']}>
              <Sigma
                dataPath='/data/05_networkGoalsFiltered6.json'
                description={'gefiltert »kann ich nicht einschätzen«'}
              />
              <div className={classes['legend-img']}>
                <img
                  src={isLight ? legendGoalsNoIdeaLight : legendGoalsNoIdeaDark}
                  alt='Legende Netzwerk der kulturpolitischen Ziele (kann Akteur nicht einschätzen)'
                />
              </div>
            </div>
          </AnimatingItem>
        </div>
      </Card>
    </section>
  );
};

export default Ziele;
