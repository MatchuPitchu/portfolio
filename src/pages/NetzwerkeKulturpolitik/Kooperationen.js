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

const Kooperationen = () => {
  return (
    <section className={classes.section}>
      <H2Title className={classes.title}>Kooperationsbeziehungen</H2Title>
      <p className={classes.p}>
        Während der Informationsaustausch für ein weiches und basales Kriterium für die Bindung
        zwischen Akteuren steht, sind Kooperationen wie u.a. gemeinsame Projekte, Veranstaltungen,
        Initiativen oder Texte ein robusteres Kriterium für stabile und intensive Beziehungen, zumal
        sie zugleich institutionalisierte Informationskanäle abbilden.
      </p>
      <p className={classes.p}>
        Die Daten des Kooperationsnetzwerks weisen - wie zu erwarten war - eine sehr hohe
        Korrelation mit dem Informationsnetzwerk auf. Das für Kultur zuständige Exekutivorgan, die
        Thüringer Staatskanzlei, erlangt den höchsten Kooperationswert, dient somit unter allen
        Akteuren des Netzwerks als häufigste Partnerin für Projekte, Veranstaltungen, Initiativen,
        Texte oder Ähnliches. Es wird deutlich, dass die Exekutive der zentrale Bezugspunkt für
        kulturpolitisches Handeln in Thüringen ist und dass Akteure ein Interesse daran haben,
        möglichst intensive und stabile Verbindungen zur zuständigen Staatskanzlei aufzubauen.
        Bezogen auf das gesamte Netzwerk tauschen die Akteure etwas intensiver Informationen aus als
        sie kooperieren. Auffällig sind einige Akteure, bei denen die gewichteten Indegrees im
        Kooperationsnetzwerk erheblich niedriger als im Informationsnetzwerk ausfallen: Dies trifft
        auf die Landtagsfraktionen <i>Die Linke</i> (-28 %), <i>CDU</i> (-30 %), <i>Grüne</i> (-31
        %) und <i>SPD</i> (-20 %), auf die Kulturverbände <i>LAG Soziokultur</i> (-12 %) und{' '}
        <i>Deutscher Kulturrat</i> (-33 %) sowie auf den Medienakteur <i>Mediengruppe Thüringen</i>{' '}
        (-13 %) zu.
      </p>
      <p className={classes.p}>
        Die abweichenden Werte bedeuten, dass diese Akteure im Netzwerk eher als Informationsquellen
        oder Multiplikatoren kulturpolitischer Inhalte denn als Kooperationspartner wahrgenommen
        werden bzw. wirken. Besonders auffällig ist, dass alle relevanten Landtagsfraktionen
        betroffen sind – außer die AfD, die sich jedoch selbst nicht als kulturpolitischer Akteur
        sieht und vom Netzwerk ebenso nicht als relevant für die Kulturpolitik eingestuft wird. Die
        Vertreter:innen der Legislative nehmen eine andere Rolle als die der Exekutive ein und
        erfüllen – wenn überhaupt – informatorische Funktionen für das Netzwerk. Die Möglichkeit,
        auf politische Prozesse einzuwirken, verorten die Akteure dagegen in der ausführenden
        Gewalt.
      </p>
      <img
        src='https://vg02.met.vgwort.de/na/eb5f7ebd8e9b4ae188587efac123893f'
        width='1'
        height='1'
        alt='Zählmarke VG Wort'
      />
      <Sigma dataPath='/data/02_networkCooperation.json' />
      <Legend links={infoAndCoopNetworkLinks} />
    </section>
  );
};

export default Kooperationen;
