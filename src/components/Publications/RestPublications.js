import Card from '../UI/Card/Card';
import H2Title from '../UI/Titles/H2Title';
import StationPoint from '../UI/StationPoint/StationPoint';
import classes from './Publications.module.css';

const restPublications = [
  {
    date: '2021',
    organization: 'Heckmann, A.; Flohr, M.; Schröpfer, L.; Ostermeier, J.',
    content: `Vielfältig wirksam sein. Das netzwerk n und die Nachhaltigkeitstransformation an Hochschulen. In: Matheis, A.; Schwender, C. (Hg.): Als gäbe es ein Morgen - Nachhaltigkeit wollen, sollen, können. Weimar/Lahn: Metropolis.`,
    href: 'https://www.metropolis-verlag.de/Als-gaebe-es-ein-Morgen/1454/book.do',
  },
  {
    date: '2021',
    organization: 'Flohr, Michael',
    content: `Transformation durch Digitalisierung gestalten: Die plattform n als Vernetzungs- und Kollaborationsplattform für nachhaltige Hochschulen. In: Leal Filho, Walter (Hg.): Digitalisierung und Nachhaltigkeit. Heidelberg: Springer Spektrum. https://doi.org/10.1007/978-3-662-61534-8_5`,
    href: 'https://www.researchgate.net/publication/346082640_Transformation_durch_Digitalisierung_gestalten_Die_plattform_n_als_Vernetzungs-_und_Kollaborationsplattform_fur_nachhaltige_Hochschulen?_sg=Yrzxc7mXL2h6azL6DT0q2oFx0ngdIeQKSFOkM3ZW48E4EWtvhaTEquHej2_LFZq21T-iN1_xjb0zWnl1wCdkUeXxvZU6vvbo2NY1IK-q.v7PiPgV5ECwmrNZg1Ey2HsduR9Aa6e2lbeXbjw4_bF7vljLY3_7HnPn71QEQdbul6CTYNr5FSqi18dRlL_h5HQ',
  },
  {
    date: '2020',
    organization: 'Flohr, Michael',
    content: `Rezension zu Thomas Schmidt: Macht und Struktur im Theater. Asymmetrien der Macht. Wiesbaden: Springer VS 2019. In: Kulturpolitische Mitteilungen. Nr. 169. II/2020. S. 72.`,
    href: 'https://www.researchgate.net/publication/342691415_Rezension_zu_Thomas_Schmidt_Macht_und_Struktur_im_Theater_Asymmetrien_der_Macht_Wiesbaden_Springer_VS_2019_In_Kulturpolitische_Mitteilungen_Nr_169_II2020_S_72',
  },
  {
    date: '2019',
    organization: 'Flohr, Michael',
    content: `Die Welt braucht Dich: die Wirkkraft studentischen Engagements für nachhaltige Hochschulen. In: Eine Welt Netz NRW (Hg.): OpenMind. Ein Beitrag zur Bildung für nachhaltige Entwicklung an Hochschulen in NRW. S. 30-32.`,
    href: 'https://www.researchgate.net/publication/340862631_Die_Welt_braucht_Dich_die_Wirkkraft_studentischen_Engagements_fur_nachhaltige_Hochschulen',
  },
  {
    date: '2017',
    organization: 'Flohr, Michael',
    content: `Rezension zu Kilian H. Lembke: Kommunale Kulturpolitik. Strukturen, Prozesse und Netzwerke. Bielefeld: transcript 2017. In: Kulturmanagement Network.`,
    href: 'https://www.researchgate.net/publication/332567072_Rezension_zu_Kilian_H_Lembke_Kommunale_Kulturpolitik_Strukturen_Prozesse_und_Netzwerke_Bielefeld_transcript_2017',
  },
  {
    date: '2016',
    organization: 'Singer-Brodowski, Mandy unter Mitwirkung von Flohr, Michael',
    content: `Lessons Learned - 25 Jahre BNE und außerschulische Umweltbildung in Thüringen. Eine Studie zu Entwicklungsstand & Perspektiven. Erfurt: Heinrich-Böll-Stiftung Thüringen.`,
    href: 'https://www.researchgate.net/publication/302543934_Lessons_Learned_25_Jahre_BNE_und_ausserschulische_Umweltbildung_in_Thuringen_Eine_Studie_zu_Entwicklungsstand_Perspektiven',
  },
  {
    date: '2016',
    organization: 'Flohr, Michael',
    content: `Rezension zu Simon A. Frank: Kulturmanagement und Social Media. Neue interdisziplinäre Perspektiven auf eine User-generated Culture im Kulturbetrieb. Bielefeld: transcript 2016. In: Kulturpolitische Mitteilungen. Nr. 152. I/2016. S. 70-71.`,
    href: 'https://www.researchgate.net/publication/332567135_Rezension_zu_Simon_A_Frank_Kulturmanagement_und_Social_Media_Neue_interdisziplinare_Perspektiven_auf_eine_User-generated_Culture_im_Kulturbetrieb_Bielefeld_transcript_2016',
  },
  {
    date: '2015',
    organization: 'Flohr, Michael',
    content: `Rezension zu Sieglinde Lang: Partizipatives Kulturmanagement. Interdisziplinäre Verhandlungen zwischen Kunst, Kultur und Öffentlichkeit. Bielefeld: transcript 2015. In: Kulturpolitische Mitteilungen. Nr. 151. IV/2015. S. 68.`,
    href: 'https://www.researchgate.net/publication/332567131_Rezension_zu_Sieglinde_Lang_Partizipatives_Kulturmanagement_Interdisziplinare_Verhandlungen_zwischen_Kunst_Kultur_und_Offentlichkeit_Bielefeld_transcript_2015',
  },
  {
    date: '2015',
    organization: 'Flohr, Michael',
    content: `Ein starkes Signal für eine zeitgemäße Kulturpolitik. Das 5. Thüringer Kulturforum zwischen inhaltlicher Tiefe und überholter Tagungsmethode. In: Kulturpolitische Mitteilungen. Nr. 149. II/2015. S. 13-15.`,
    href: 'https://www.researchgate.net/publication/332567057_Ein_starkes_Signal_fur_eine_zeitgemasse_Kulturpolitik_Das_5_Thuringer_Kulturforum_zwischen_inhaltlicher_Tiefe_und_uberholter_Tagungsmethode',
  },
  {
    date: '2015',
    organization: 'Flohr, Michael',
    content: `Rezension zu Gary S. Schaal / Matthias Lemke / Claudia Ritzi (Hg.): Die Ökonomisierung der Politik in Deutschland. Eine vergleichende Politikfeldanalyse. Wiesbaden: Springer VS 2014. In: Kulturpolitische Mitteilungen. Nr. 148. I/2015. S. 72-73.`,
    href: 'https://www.researchgate.net/publication/332566976_Rezension_zu_Gary_S_Schaal_Matthias_Lemke_Claudia_Ritzi_Hg_Die_Okonomisierung_der_Politik_in_Deutschland_Eine_vergleichende_Politikfeldanalyse_Wiesbaden_Springer_VS_2014',
  },
  {
    date: '2014',
    organization: 'Flohr, Michael',
    content: `Was wäre wenn? Die kulturpolitischen Pläne einer rot-rot-grünen Landesregierung in Thüringen. In: Kulturpolitische Mitteilungen. Nr. 147. IV/2014. S. 10-11.`,
    href: 'https://www.researchgate.net/publication/332566896_Was_ware_wenn_Die_kulturpolitischen_Plane_einer_rot-rot-grunen_Landesregierung_in_Thuringen',
  },
  {
    date: '2014',
    organization: 'Flohr, Michael',
    content: `Die Probleme der Thüringer Musikschulen. Auftakt zu einer neuen Legislatur. In: Kulturpolitische Mitteilungen. Nr. 146. III/2014. S. 11-13.`,
    href: 'https://www.researchgate.net/publication/332566974_Die_Probleme_der_Thuringer_Musikschulen_Auftakt_zu_einer_neuen_Legislatur',
  },
  {
    date: '2014',
    organization: 'Flohr, Michael',
    content: `Ein Kulturnetzwerk aus einem Guss. Die elsässischen cartes culture als Modell für die regionale Kulturpolitik. In: Kulturpolitische Mitteilungen. Nr. 145. II/2014. S. 68.`,
    href: 'https://www.researchgate.net/publication/332566967_Ein_Kulturnetzwerk_aus_einem_Guss_Die_elsassischen_cartes_culture_als_Modell_fur_die_regionale_Kulturpolitik',
  },
];

const RestPublications = () => {
  return (
    <Card className={`${classes['card-customize']} ${classes['restPubs-customize']}`}>
      <H2Title className={classes['h2-customize']}>Weitere Veröffentlichungen</H2Title>
      {restPublications.map((item, index) => (
        <StationPoint key={index} item={item} className={classes['rest-publication-box']} />
      ))}
    </Card>
  );
};

export default RestPublications;
