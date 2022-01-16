import Legend from '../../components/Publications/Kulturpolitik/graph/Legend';
import Sigma from '../../components/Publications/Kulturpolitik/graph/Sigma';
import H2Title from '../../components/UI/Titles/H2Title';
import classes from './NetzwerkeKulturpolitik.module.css';

const infoAndCoopNetworkLinks = [
  { title: 'nie', class: classes.infoAndCoop1 },
  { title: 'sehr selten', class: classes.infoAndCoop2 },
  { title: 'selten', class: classes.infoAndCoop3 },
  { title: 'gelegentlich', class: classes.infoAndCoop4 },
  { title: 'oft', class: classes.infoAndCoop5 },
  { title: 'sehr oft', class: classes.infoAndCoop6 },
];

const Informationen = () => {
  return (
    <section className={classes.section}>
      <H2Title className={classes.title}>Informationsaustausch</H2Title>
      <p className={classes.p}>
        Ein <i>policy</i>-Netzwerk formiert sich grundlegend über den Austausch von Informationen.
        Um im Wettstreit um kulturpolitische Vorstellungen, Argumente und Gedanken Gehör zu finden
        und um die Deutungshoheit über Problemlösungen im Politikfeld gewinnen zu können, ist der
        Zugang zu den mehrheitlich als wichtig und einflussreich erachteten Akteuren eine notwendige
        Voraussetzung. Das Informationsnetzwerk zeigt, wie der Zugang zu Informationen innerhalb des
        Netzwerks strukturiert ist und über welche Pfade Inhalte und Diskurse diffundieren können.
        Der Austausch organisiert sich über jegliche Kommunikationsgelegenheiten, die Personen
        während und außerhalb ihrer beruflichen Tätigkeit erschließen: z.B. persönliche Treffen,
        Telefonate, Briefe, Mails, Kurzmitteilungen, Newsletter oder soziale Medien. Je nach
        Intensität sind die Verbindungen in unterschiedlich intensiven Grüntönen eingefärbt. Das
        helle Rot bedeutet, dass keine Information fließt, das heißt ein Akteur erachtet den anderen
        zwar als wichtig für die Kulturpolitik in Thüringen, hat mit ihm aber bisher keinen
        Austausch initiiert. Je größer der Akteur dargestellt ist, desto intensiver gehen bei ihm
        Informationen ein.
      </p>
      <p className={classes.p}>
        Die Netzwerkkarte zeigt zum einen anschaulich, wie sich das Politikfeld auf die
        Staatskanzlei, also die kulturfördernde Exekutive, ausrichtet. Zum anderen konzentrieren
        sich die Informationsströme auf Akteure, die ihren Sitz im mittelthüringischen Raum haben.
        Für die dort ansässigen Akteure besteht eine hohe Wahrscheinlichkeit, zeitnah von
        politischen Entwicklungen zu erfahren und fehlerhafte Informationen mit anderen abgleichen
        zu können. Demgegenüber hängen die Akteure, die im Netzwerk und auch geografisch peripher
        liegen, von wenigen Informationssträngen ab.
      </p>
      <img
        src='https://vg02.met.vgwort.de/na/792d670d5edc46f89c80cf0dfe93a608'
        width='1'
        height='1'
        alt='Zählmarke VG Wort'
      />
      <Sigma dataPath='/data/01_networkInfoExchange.json' />
      <Legend links={infoAndCoopNetworkLinks} />
    </section>
  );
};

export default Informationen;
