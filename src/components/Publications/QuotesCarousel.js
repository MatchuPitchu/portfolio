import { useState } from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import Card from '../UI/Card/Card';
import classes from './QuotesCarousel.module.css';

const quotes = [
  {
    id: '1',
    text: 'Flohrs Werk lässt sich als ostdeutsche Fortschreibung des 2012 erschienenen ›Kulturinfarkts‹ lesen, einer 2012 kontrovers diskutierten Streitschrift westdeutscher Kulturmanager und Kulturmanagementforscher. Michael Flohr hat eine wertvolle Studie vorgelegt. Eine breite öffentliche Wahrnehmung erfährt seine Arbeit zurecht.',
    author: 'Harald Schiller',
    origin: 'Kulturmanagement Network, 08.08.2019',
    href: 'https://www.kulturmanagement.net/Themen/Buchrezension-Kulturpolitik-in-Thueringen-Praktiken-Governance-Netzwerke,4010',
  },
  {
    id: '2',
    text: 'Ich kann allen Interessierten an Themen der Kulturpolitik und an der Entwicklung der ostdeutschen Länder, hier insbesondere Thüringens, die Lektüre dieses ausgezeichneten, klugen, tiefgründigen und sehr lesenswerten Buches nur empfehlen.',
    author: 'Prof. Dr. Thomas Schmidt',
    origin:
      'Direktor Masterprogramm Theater- und Orchestermanagement an der Hochschule für Musik und Darstellende Kunst Frankfurt am Main, socialnet, 21.10.2019',
    href: 'https://www.socialnet.de/rezensionen/25072.php',
  },
  {
    id: '3',
    text: 'Wer ein empirisch ebenso präzise wie kritisch gearbeitetes Bild der dichten und geschichtsträchtigen Kulturlandschaft Thüringens sucht, der lese diese Studie. Es gibt derzeit nichts Informativeres und Besseres.',
    author: 'Prof. Dr. Frank Ettrich',
    origin: 'ehem. Direktor der Willy Brandt School of Public Policy an der Universität Erfurt',
    href: '',
  },
  {
    id: '4',
    text: 'Wirksame Kulturpolitik braucht neben engagierten Akteur*innen und ausreichenden Ressourcen auch Evidenz und theoretische Unterfütterung. Michael Flohr hat für das Kulturland Thüringen wichtige und bereichernde Analysen vorgelegt.',
    author: 'Prof. Dr. Benjamin-Immanuel Hoff',
    origin:
      'Minister für Kultur, Bundes- und Europaangelegenheiten und Chef der Staatskanzlei des Freistaats Thüringen',
    href: '',
  },
  {
    id: '5',
    text: 'Wer über die Breite und Vielfalt der Thüringer Kulturpolitik etwas wissen möchte: Mit diesem Buch wird sie und er umfassend, verständlich und in guter Sprache bedient.',
    author: 'apl. Prof. Dr. Alexander Thumfart',
    origin: 'u.a. Mitglied im Kulturausschuss Landeshauptstadt Erfurt',
    href: '',
  },
  {
    id: '6',
    text: 'Analytische Arbeiten sind rar. Vor diesem Hintergrund muss die Dissertation von Michael Flohr über Thüringen interessieren; sie ist in diesem Umfang und Methodenmix bislang singulär – in der fachlichen Qualität wie in der guten Lesbarkeit.',
    author: 'Dr. Tobias J. Knoblich',
    origin:
      'Präsident der Kulturpolitischen Gesellschaft und Dezernent für Kultur und Stadtentwicklung der Landeshauptstadt Erfurt, Kulturpolitische Mitteilungen, 4 (2018)',
    href: '../../assets/pdf/2018_12-Rezension-Kulturpolitik-in-Thüringen-Tobias-Knoblich-in-Kulturpolitische-Mitteilungen-Nr.-163.pdf',
  },
  {
    id: '7',
    text: 'Und so entzieht sich letztlich ein ganzes Land der im Grunde fortwährend zu führenden Debatte, warum und wofür es öffentliches Geld für Theater, Orchester, Museen, Schlösser, Gärten, Musik, Literatur und Kunst ausgibt. […] Insofern liefert jetzt das Buch Kulturpolitik in Thüringen als beschreibende und kritische Bestandsaufnahme Anlässe genug, darüber hinaus zu gehen. Wenn Kultur ein Lebensmittel ist, auf das zu verzichten uns nicht möglich ist, muss sie auch als lebendig begriffen werden.',
    author: 'Michael Helbing',
    origin:
      'Thüringer Landeszeitung, Leitartikel »Warum und wofür. Debattenkultur fehlt’s an Kulturdebatten«, 08.11.2018',
    href: '../../assets/pdf/2018_11_08-TLZ-Eichsfeld-Leitartikel-Kulturpolitik-in-Thüringen.pdf',
  },
  {
    id: '8',
    text: 'Die zentralen Erkenntnisse dieser Forschungsarbeit belegen den wissenschaftlichen Mehrwert seiner Methodik und die Wichtigkeit von kulturpolitischer Forschung aus der Perspektive und mit dem Instrumentarium der Politikwissenschaft. Der Autor bietet einen umfassenden Einblick in die Strukturen und Netzwerke, aber besonders auch in die Beziehungen und Verstrickungen thüringischer Kulturpolitik.',
    author: 'Dr. Kilian H. Lembke',
    origin: 'Portal für Politikwissenschaft, 19.08.2019',
    href: 'https://www.pw-portal.de/schlaglichter/40781-kulturpolitik-in-thueringen',
  },
  {
    id: '9',
    text: 'Mit seinem Buch Kulturpolitik in Thüringen hat Michael Flohr gerade eine sehr lesenswerte und überaus detaillierte Studie zur kulturpolitischen Situation im Freistaat vorgelegt. Wir sprachen mit ihm über mitgeschleppte Traditionshäuser, abgehängte Regionen und prekäre Beschäftigung in der Soziokultur.',
    author: 'Kathleen Kröger',
    origin:
      'Interview in heft für literatur, stadt und alltag, Nr. 53, »Ein mühsamer Lobbyprozess«',
    href: '../../assets/pdf/2018_10-hEFt53-Interview_Flohr_Kulturpolitik.pdf',
  },
  {
    id: '10',
    text: 'Das ist ein brisantes Thema, das im Landtagswahljahr 2019 in Thüringen, vielleicht, ein wenig mehr öffentliche Aufmerksamkeit und Diskussionen hervorrufen könnte.',
    author: 'Dr. Michael Plote',
    origin: 'miplotex, 08.01.2019',
    href: 'https://miplotex.de/2019/01/thueringer-museumshefte/#more-1841',
  },
  {
    id: '11',
    text: 'Autor beschäftigt sich mit dem Kreislauf der Thüringer Kulturpolitik. Ein Buch beschreibt und kritisiert Strukturen sowie Inhalte der Kulturpolitik. Sie sei zentralistisch und auf Bestandswahrung ausgerichtet.',
    author: 'Michael Helbing',
    origin: 'Thüringer Allgemeine, 08.11.2018',
    href: '../../assets/pdf/2018_11_08-Thüringer-Allgemeine-zu-Buch-Kulturpolitik-in-Thüringen.pdf',
  },
  {
    id: '12',
    text: 'Kulturminister Hoff hält das Buch für eine ›wichtige Beschreibung des Ist-Stands‹ und will dieser, im Grundsatz jedenfalls, nicht widersprechen.',
    author: 'Michael Helbing',
    origin:
      'Thüringer Allgemeine, »›Danke, staatstragende Opposition! Es ist ein Traum‹ . Kulturminister freut sich über Große Anfrage der CDU und reagiert auf das aktuelle Buch Kulturpolitik in Thüringen«, 20.12.2018',
    href: '../../assets/pdf/2018_12_10-Thüringer-Allgemeine-Kulturminister-Hoff-reagiert-auf-Buch-Kulturpolitik-in-Thüringen.pdf',
  },
  {
    id: '13',
    text: 'Kulturpolitik in Thüringen ist in der Kultur- und Politikwissenschaft ein weites und weithin kaum beackertes Feld. Jetzt liegt eine Studie vor, die theoretisch, analytisch und praktisch dieses Feld bestellt und bewertet.« »Der Politikwissenschaftler provoziert pointiert mit seiner Doktorarbeit, formuliert eigene Positionen, belegt und begründet sie mit nachvollziehbaren Argumenten und Erkenntnissen.',
    author: 'Dr. Michael Plote',
    origin: 'Thüringer Museumshefte, 2|2018',
    href: '../../assets/pdf/2019_01-Rezension-Kulturpolitik-in-Thüringen-Michael-Plote-in-Thüringer-Museumshefte-2018-2.pdf',
  },
  {
    id: '14',
    text: 'Kulturpolitischer Rundumschlag. CDU-Landtagsfraktion stellt Regierung 238 Fragen zu allen möglichen Themen. Antworten werden wohl ein halbes Jahr brauchen.',
    author: 'Michael Helbing',
    origin: 'Thüringer Allgemeine, 27.11.2018',
    href: '../../assets/pdf/2018_11_27-Thüringer-Allgemeine-Kulturpolitischer-Rundumschlag.pdf',
  },
  {
    id: '15',
    text: 'Die Lektüre dieses praxisnahen Buches lohnt sowohl für Wissenschaftler und Studierende als auch für Praktiker, ehrenamtlich Engagierte und Kultur- und Kunstinteressierte.',
    author: 'WortMelder',
    origin: 'Das News-Portal der Universität Erfurt, 14.06.2018',
    href: 'https://aktuell.uni-erfurt.de/2018/06/14/wie-funktioniert-die-thueringer-kulturpolitik/',
  },
];

const QuotesCarousel = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    if (index === 0) setIndex(quotes.length - 1); // restart carousel at the end
    if (index > 0) setIndex(index - 1);
  };

  const nextSlide = () => {
    if (index === quotes.length - 1) setIndex(0); // restart carousel at the beginning
    if (index < quotes.length - 1) setIndex(index + 1);
  };

  const findQuote = quotes.find((quote) => +quote.id === index + 1);

  return (
    <div className={classes['cards-box']}>
      {findQuote.href && (
        <a
          href={findQuote.href}
          target='_blank'
          rel='noreferrer'
          download
          className={classes['slider-link']}
        >
          <Icon className={classes.mark} icon={['fa', 'external-link-alt']} />
          Rezension
        </a>
      )}
      <div className={classes['slider-btn']}>
        <button className={classes.btn} onClick={prevSlide}>
          <Icon icon={['fa', 'caret-left']} />
        </button>
        <div>
          Zitat {index + 1} von {quotes.length}
        </div>
        <button className={classes.btn} onClick={nextSlide}>
          <Icon icon={['fa', 'caret-right']} />
        </button>
      </div>
      {quotes.map((quote, i) => (
        <div
          key={quote.id}
          className={i === index ? ` ${classes.card} ${classes.active}` : classes.card}
        >
          {i === index && (
            <Card className={classes.quote}>
              <Icon className={classes.mark} icon={['fa', 'quote-left']} />
              <p className={classes.text}>{quote.text}</p>
              <p className={classes.author}>{quote.author}</p>
              <div className={classes.origin}>{quote.origin}</div>
            </Card>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuotesCarousel;
