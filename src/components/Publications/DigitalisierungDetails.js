import Container from '../Layout/Container';
import ButtonsPublicationDetails from '../UI/Button/ButtonsPublicationDetails';
import Section from '../UI/Section/Section';
import classes from './PublicationsDetails.module.css';

const DigitalisierungsDetails = () => {
  return (
    <Container className={classes['container-customized']}>
      <ButtonsPublicationDetails
        text='Ansicht'
        href='https://www.researchgate.net/publication/346082640_Transformation_durch_Digitalisierung_gestalten_Die_plattform_n_als_Vernetzungs-_und_Kollaborationsplattform_fur_nachhaltige_Hochschulen'
      />
      <Section>
        <div className={classes['col-left']}>
          <h1>Transformation durch Digitalisierung gestalten</h1>
        </div>
        <div className={classes['col-right']}>
          <h2>
            Die plattform n als Vernetzungs- und Kollaborationsplattform für nachhaltige Hochschulen
          </h2>
          <p>
            Aus dem Symposium Digitalisierung und Nachhaltigkeit: Chancen und Perspektiven für
            Deutsche Hochschulen, das im Frühjahr 2019 an der Hochschule für Angewandte
            Wissenschaften Hamburg stattfand, ist ein schöner Sammelband entstanden. Im fünften
            Kapitel widme ich mich dem Themenfeld Digitalisierung, Nachhaltigkeit und Hochschule.
          </p>
          <p>
            Das <i>netzwerk n</i> betreibt seit 2014 die Onlineplattform <i>plattform n</i>, die
            darauf ausgerichtet ist, der Community von nachhaltigkeitsengagierten Einzelpersonen und
            Initiativen an Hochschulen in Deutschland ein wertefundiertes Tool zur Vernetzung,
            Kooperation und externen Kommunikation der eigenen Tätigkeiten bereitzustellen. Das
            Innovationspotenzial der Plattform ergibt sich daraus, dass sie Open Source, Green IT,
            Gemeinnützigkeit, Datenschutz, Privatsphäre sowie intuitive und umfassende
            Funktionalität verbindet. Zudem wird sie in einem Verbund aus sozial-ökologisch
            orientierten gemeinnützigen Organisationen kooperativ weiterentwickelt und solidarisch
            kofinanziert. Als digitales Tool für nachhaltige Hochschulen trägt die{' '}
            <i>plattform n</i> zur Umsetzung der Sustainable Development Goals der Agenda 2030 und
            des Nationalen Aktionsplans im Weltaktionsprogramm Bildung für nachhaltige Entwicklung
            in Deutschland bei und zeigt, welche Hebelwirkung die Digitalisierung für die
            Transformation von Hochschulen in Richtung einer nachhaltigen Entwicklung entfalten
            kann. Der Beitrag bietet einen Überblick über das Handlungsfeld der nachhaltigen
            Hochschulentwicklung, setzt es in Relation zur Digitalisierung, stellt die{' '}
            <i>plattform n</i> als zukunftsweisendes, wertefundiertes Tool der
            Hochschultransformation vor und gibt letztlich einen Ausblick, in welche Richtung die
            Plattform weiterzudenken und weiterzuentwickeln ist.
          </p>
          <img
            src='https://vg02.met.vgwort.de/na/227af450c51f4668ac0ce43dfefe2bdd'
            width='1'
            height='1'
            alt='Zählmarke VG Wort'
          />
        </div>
      </Section>
    </Container>
  );
};

export default DigitalisierungsDetails;
