import { resetCookieConsentValue } from 'react-cookie-consent';
import H1Title from '../components/UI/Titles/H1Title';
import classes from './Datenschutz.module.css';
import Button from '../components/UI/Button/Button';
import HeadingWrapper from '../components/Layout/HeadingWrapper';

const Datenschutz = () => {
  const handleResetConsent = () => resetCookieConsentValue();

  return (
    <HeadingWrapper className={classes.wrapper}>
      <H1Title classTitle={classes.h1}>Datenschutzerklärung</H1Title>
      <section>
        <h2 className={classes.h2}>1. Datenschutz auf einen Blick</h2>
        <h3 className={classes.h3}>Allgemeine Hinweise</h3>
        <p>
          Die folgenden Hinweise geben einen einfachen überblick darüber, was mit Ihren
          personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten
          sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche
          Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
          Datenschutzerklärung.
        </p>
        <h3 className={classes.h3}>Datenerfassung auf dieser Website</h3>
        <h4 className={classes.h4}>
          Wer ist verantwortlich für die Datenerfassung auf dieser Website?
        </h4>
        <p>
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
          Kontaktdaten können Sie dem Abschnitt "Hinweis zur Verantwortlichen Stelle" in dieser
          Datenschutzerklärung entnehmen.
        </p>
        <h4 className={classes.h4}>Wie erfassen wir Ihre Daten?</h4>
        <p>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es
          sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
        </p>
        <p>
          Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch
          unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser,
          Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
          automatisch, sobald Sie diese Website betreten.
        </p>
        <h4 className={classes.h4}>Wofür nutzen wir Ihre Daten?</h4>
        <p>
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
          gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
        </p>
        <h4 className={classes.h4}>Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
        <p>
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck
          Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die
          Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
          Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft
          widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der
          Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
          Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
        </p>
        <p>
          Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns
          wenden.
        </p>
        <h3 className={classes.h3}>Analyse-Tools und Tools von Drittanbietern</h3>
        <p>
          Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das
          geschieht vor allem mit sogenannten Analyseprogrammen.
        </p>
        <p>
          Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden
          Datenschutzerklärung.
        </p>
      </section>
      <section>
        <h2 className={classes.h2}>2. Hosting</h2>
        <h3 className={classes.h3}>Externes Hosting</h3>
        <p>
          Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die
          personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des
          Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und
          Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige
          Daten, die über eine Website generiert werden, handeln.
        </p>
        <p>
          Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren
          potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer
          sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen
          professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende
          Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von
          Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 Abs. 1 TTDSG, soweit die Einwilligung die
          Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z.B.
          Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit
          widerrufbar.
        </p>
        <p>
          Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner
          Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten
          befolgen.
        </p>
        <p>Wir setzen folgenden Hoster ein:</p>
        <p>
          netlify, San Francisco, USA
          <br />
          Datenschutzerklärung: https://www.netlify.com/privacy
        </p>
      </section>
      <section>
        <h2 className={classes.h2}>3. Allgemeine Hinweise und Pflicht&shy;informationen</h2>
        <h3 className={classes.h3}>Datenschutz</h3>
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
          behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
          Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        </p>
        <p>
          Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
          Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können.
          Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie
          nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
        </p>
        <p>
          Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation
          per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem
          Zugriff durch Dritte ist nicht möglich.
        </p>
        <h3 className={classes.h3}>Hinweis zur verantwortlichen Stelle</h3>
        <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
        <p>
          Michael Flohr
          <br />
          Ehrenfelsstraße 13
          <br />
          10318 Berlin
        </p>
        <p>
          Telefon: +49 1577 536 22 85
          <br />
          E-Mail: m.flohr@posteo.de
        </p>
        <p>
          Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder
          gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen
          Daten (z.B. Namen, E-Mail-Adressen o. ä.) entscheidet.
        </p>
        <h3 className={classes.h3}>Speicherdauer</h3>
        <p>
          Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt
          wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die
          Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder
          eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir
          keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen
          Daten haben (z.B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten
          Fall erfolgt die Löschung nach Fortfall dieser Gründe.
        </p>
        <h3 className={classes.h3}>
          Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website
        </h3>
        <p>
          Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre
          personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2
          lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet
          werden. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in
          Ihr Endgerät (z.B. via Device-Fingerprinting) eingewilligt haben, erfolgt die
          Datenverarbeitung zusätzlich auf Grundlage von &sect; 25 Abs. 1 TTDSG. Die Einwilligung
          ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung
          vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art.
          6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung
          einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c
          DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses
          nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. über die jeweils im Einzelfall einschlägigen
          Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.
        </p>
        <h3 className={classes.h3}>
          Hinweis zur Datenweitergabe in die USA und sonstige Drittstaaten
        </h3>
        <p>
          Wir verwenden unter anderem Tools von Unternehmen mit Sitz in den USA oder sonstigen
          datenschutzrechtlich nicht sicheren Drittstaaten. Wenn diese Tools aktiv sind, können Ihre
          personenbezogene Daten in diese Drittstaaten übertragen und dort verarbeitet werden. Wir
          weisen darauf hin, dass in diesen Ländern kein mit der EU vergleichbares Datenschutzniveau
          garantiert werden kann. Beispielsweise sind US-Unternehmen dazu verpflichtet,
          personenbezogene Daten an Sicherheitsbehörden herauszugeben, ohne dass Sie als Betroffener
          hiergegen gerichtlich vorgehen könnten. Es kann daher nicht ausgeschlossen werden, dass
          US-Behörden (z.B. Geheimdienste) Ihre auf US-Servern befindlichen Daten zu
          überwachungszwecken verarbeiten, auswerten und dauerhaft speichern. Wir haben auf diese
          Verarbeitungstätigkeiten keinen Einfluss.
        </p>
        <h3 className={classes.h3}>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
        <p>
          Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich.
          Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der
          bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
        </p>
        <h3 className={classes.h3}>
          Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung
          (Art. 21 DSGVO)
        </h3>
        <p>
          WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT,
          HABEN SIE JEDERZEIT DAS RECHT, AUS GRüNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION
          ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES
          GILT AUCH FüR EIN AUF DIESE BESTIMMUNGEN GESTüTZTES PROFILING. DIE JEWEILIGE
          RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER
          DATENSCHUTZERKLäRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN
          PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KöNNEN ZWINGENDE
          SCHUTZWüRDIGE GRüNDE FüR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND
          FREIHEITEN üBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSüBUNG ODER
          VERTEIDIGUNG VON RECHTSANSPRüCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
        </p>
        <p>
          WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN
          SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER
          PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FüR DAS
          PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE
          WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER
          DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
        </p>
        <h3 className={classes.h3}>
          Beschwerde&shy;recht bei der zuständigen Aufsichts&shy;behörde
        </h3>
        <p>
          Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
          Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres
          Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht
          unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
        </p>
        <h3 className={classes.h3}>Recht auf Daten&shy;übertrag&shy;barkeit</h3>
        <p>
          Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung
          eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen,
          maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte übertragung der
          Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch
          machbar ist.
        </p>
        <h3 className={classes.h3}>SSL- bzw. TLS-Verschlüsselung</h3>
        <p>
          Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der übertragung vertraulicher
          Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber
          senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
          daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem
          Schloss-Symbol in Ihrer Browserzeile.
        </p>
        <p>
          Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns
          übermitteln, nicht von Dritten mitgelesen werden.
        </p>
        <h3 className={classes.h3}>Auskunft, Löschung und Berichtigung</h3>
        <p>
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
          unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft
          und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder
          Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten
          können Sie sich jederzeit an uns wenden.
        </p>
        <h3 className={classes.h3}>Recht auf Einschränkung der Verarbeitung</h3>
        <p>
          Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
          verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der
          Verarbeitung besteht in folgenden Fällen:
        </p>
        <ul>
          <li>
            Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten,
            benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben
            Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
            verlangen.
          </li>
          <li>
            Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht,
            können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.
          </li>
          <li>
            Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung,
            Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht,
            statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
            verlangen.
          </li>
          <li>
            Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung
            zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht,
            wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung
            Ihrer personenbezogenen Daten zu verlangen.
          </li>
        </ul>
        <p>
          Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese
          Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur
          Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte
          einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen
          öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet
          werden.
        </p>
        <h3 className={classes.h3}>Widerspruch gegen Werbe-E-Mails</h3>
        <p>
          Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur
          übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird
          hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche
          Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch
          Spam-E-Mails, vor.
        </p>
      </section>
      <section>
        <h2 className={classes.h2}>4. Datenerfassung auf dieser Website</h2>
        <h3 className={classes.h3}>Kontaktformular</h3>
        <p>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
          Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
          der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
          wir nicht ohne Ihre Einwilligung weiter.
        </p>
        <p>
          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern
          Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
          vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
          Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
          gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs.
          1 lit. a DSGVO) sofern diese abgefragt wurde.
        </p>
        <p>
          Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur
          Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die
          Datenspeicherung entfällt (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende
          gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
        </p>
        <h3 className={classes.h3}>Anfrage per E-Mail, Telefon oder Telefax</h3>
        <p>
          Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive
          aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der
          Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir
          nicht ohne Ihre Einwilligung weiter.
        </p>
        <p>
          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern
          Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
          vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
          Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
          gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs.
          1 lit. a DSGVO) sofern diese abgefragt wurde.
        </p>
        <p>
          Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns
          zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für
          die Datenspeicherung entfällt (z.B. nach abgeschlossener Bearbeitung Ihres Anliegens).
          Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen –
          bleiben unberührt.
        </p>
        <h3 className={classes.h3}>Nutzung von VG Wort Zählpixel</h3>
        <p>
          In die Website ist die Funktion „Zählpixel“ der Verwertungsgesellschaft Wort integriert.
          Damit ist es der VG Wort möglich, Daten zu Seitenaufrufen zuerfassen, damit entsprechende
          Tantiemen ausgeschüttet werden können. Nur so kann die Autorenvergütung für Texte im
          Internet ermittelt werden.
        </p>
        <h3 className={classes.h3}>Nutzung von Google Analytics</h3>
        <p>
          Wir verwenden Google Analytics, um die Website-Nutzung zu analysieren. Die daraus
          gewonnenen Daten werden genutzt, um unsere Website sowie Werbemaßnahmen zu optimieren.
        </p>
        <p>
          Google Analytics ist ein Webanalysedienst, der von <i>Google Inc.</i> (1600 Amphitheatre
          Parkway, Mountain View, CA 94043, United States) betrieben und bereitgestellt wird. Google
          verarbeitet die Daten zur Website-Nutzung in unserem Auftrag und verpflichtet sich
          vertraglich zu Maßnahmen, um die Vertraulichkeit der verarbeiteten Daten zu gewährleisten.
        </p>
        <p>Während Ihres Website-Besuchs werden u.a. folgende Daten aufgezeichnet:</p>
        <ul>
          <li>Aufgerufene Seiten</li>
          <li>
            Ihr Verhalten auf den Seiten (beispielsweise Klicks, Scroll-Verhalten und Verweildauer)
          </li>
          <li>Ihr ungefährer Standort (Land und Stadt)</li>
          <li>
            Ihre IP-Adresse (in gekürzter Form, sodass keine eindeutige Zuordnung möglich ist)
          </li>
          <li>
            Technische Informationen wie Browser, Internetanbieter, Endgerät und Bildschirmauflösung
          </li>
          <li>
            Herkunftsquelle Ihres Besuchs (d.h. über welche Website bzw. über welches Werbemittel
            Sie zu uns gekommen sind)
          </li>
        </ul>
        <p>Diese Daten werden an einen Server von Google in den USA übertragen.</p>
        <p>
          Google Analytics speichert Cookies in Ihrem Webbrowser für die Dauer von zwei Jahren seit
          Ihrem letzten Besuch. Sie können die Cookies allerdings jederzeit in Ihrem Browser
          löschen. Diese Cookies enthalten eine zufallsgenerierte User-ID, mit der Sie bei
          zukünftigen Website-Besuchen wiedererkannt werden können.
        </p>
        <p>
          Die aufgezeichneten Daten werden zusammen mit der zufallsgenerierten User-ID gespeichert,
          was die Auswertung pseudonymer Nutzerprofile ermöglicht. Diese nutzerbezogenen Daten
          werden automatisch nach 14 Monaten gelöscht. Sonstige Daten bleiben in aggregierter Form
          unbefristet gespeichert.
        </p>
        <p>
          Sollten Sie mit der Erfassung nicht einverstanden sein, können Sie diese mit der
          einmaligen Installation des{' '}
          <a
            href='https://tools.google.com/dlpage/gaoptout?hl=de'
            target='_blank'
            rel='noopener noreferrer'
          >
            Browser-Add-ons zur Deaktivierung von Google Analytics
          </a>{' '}
          unterbinden oder durch das Ablehnen der Cookies über unseren Cookie Einstellungsdialog.
        </p>
        <p>
          <i>
            Quelle für Mustertext Google Analytics:{' '}
            <a href='traffic3.net' target='_blank' rel='noopener noreferrer'>
              traffic3.net
            </a>
          </i>
        </p>
        <p>
          Klicken Sie auf diesen Button, um Ihre einmal getätigte Cookie Consent-Antwort (egal ob
          Zustimmung oder Ablehnung) zurückzusetzen. Beim nächsten Aufruf der Webseite können Sie
          sich dann neu entscheiden, ob Sie der Nutzung von Cookies zustimmen oder dies ablehnen
          wollen.
        </p>
        <div className={classes['btn-box']}>
          <Button onClick={handleResetConsent}>Reset Cookie Consent</Button>
        </div>
      </section>
      <section>
        <h2 className={classes.h2}>5. Plugins und Tools</h2>
        <h3 className={classes.h3}>YouTube mit erweitertem Datenschutz</h3>
        <p>
          Diese Website bindet Videos der YouTube ein. Betreiber der Seiten ist die Google Ireland
          Limited ("Google"), Gordon House, Barrow Street, Dublin 4, Irland.
        </p>
        <p>
          Wir nutzen YouTube im erweiterten Datenschutzmodus. Dieser Modus bewirkt laut YouTube,
          dass YouTube keine Informationen über die Besucher auf dieser Website speichert, bevor
          diese sich das Video ansehen. Die Weitergabe von Daten an YouTube-Partner wird durch den
          erweiterten Datenschutzmodus hingegen nicht zwingend ausgeschlossen. So stellt YouTube –
          unabhängig davon, ob Sie sich ein Video ansehen – eine Verbindung zum Google
          DoubleClick-Netzwerk her.
        </p>
        <p>
          Sobald Sie ein YouTube-Video auf dieser Website starten, wird eine Verbindung zu den
          Servern von YouTube hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche unserer
          Seiten Sie besucht haben. Wenn Sie in Ihrem YouTube-Account eingeloggt sind, ermöglichen
          Sie YouTube, Ihr Surfverhalten direkt Ihrem persönlichen Profil zuzuordnen. Dies können
          Sie verhindern, indem Sie sich aus Ihrem YouTube-Account ausloggen.
        </p>
        <p>
          Des Weiteren kann YouTube nach Starten eines Videos verschiedene Cookies auf Ihrem
          Endgerät speichern oder vergleichbare Wiedererkennungstechnologien (z.B.
          Device-Fingerprinting) einsetzen. Auf diese Weise kann YouTube Informationen über Besucher
          dieser Website erhalten. Diese Informationen werden u.a. verwendet, um Videostatistiken zu
          erfassen, die Anwenderfreundlichkeit zu verbessern und Betrugsversuchen vorzubeugen.
        </p>
        <p>
          Gegebenenfalls können nach dem Start eines YouTube-Videos weitere
          Datenverarbeitungsvorgänge ausgelöst werden, auf die wir keinen Einfluss haben.
        </p>
        <p>
          Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden Darstellung unserer
          Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f
          DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die
          Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und &sect; 25
          Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf
          Informationen im Endgerät des Nutzers (z.B. Device-Fingerprinting) im Sinne des TTDSG
          umfasst. Die Einwilligung ist jederzeit widerrufbar.
        </p>
        <p>
          Weitere Informationen über Datenschutz bei YouTube finden Sie in deren
          Datenschutzerklärung unter:{' '}
          <a
            href='https://policies.google.com/privacy?hl=de'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://policies.google.com/privacy?hl=de
          </a>
          .
        </p>
        <h3 className={classes.h3}>Google Web Fonts</h3>
        <p>
          Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten sogenannte Web Fonts, die
          von Google bereitgestellt werden. Die Google Fonts werden lokal gehostet, also auf einem
          von Google unabhängigen Webserver. Dadurch besteht keine Verbindung zu einem Google Server
          und somit findet auch keine Datenübertragung an Google statt.
        </p>
        <p>
          Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine Standardschrift von Ihrem Computer
          genutzt.
        </p>
        <p>
          Weitere Informationen zu Google Web Fonts finden Sie unter{' '}
          <a
            href='https://developers.google.com/fonts/faq'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://developers.google.com/fonts/faq
          </a>{' '}
          und in der Datenschutzerklärung von Google:{' '}
          <a
            href='https://policies.google.com/privacy?hl=de'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://policies.google.com/privacy?hl=de
          </a>
          .
        </p>
        <h3 className={classes.h3}>Font Awesome</h3>
        <p>
          Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten und Symbolen Font
          Awesome. Anbieter ist die Fonticons, Inc., 6 Porter Road Apartment 3R, Cambridge,
          Massachusetts, USA.
        </p>
        <p>
          Beim Aufruf einer Seite lädt Ihr Browser die benötigten Fonts in ihren Browsercache, um
          Texte, Schriftarten und Symbole korrekt anzuzeigen. Zu diesem Zweck muss der von Ihnen
          verwendete Browser Verbindung zu den Servern von Font Awesome aufnehmen. Hierdurch erlangt
          Font Awesome Kenntnis darüber, dass über Ihre IP-Adresse diese Website aufgerufen wurde.
          Die Nutzung von Font Awesome erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir
          haben ein berechtigtes Interesse an der einheitlichen Darstellung des Schriftbildes auf
          unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die
          Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und &sect; 25
          Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf
          Informationen im Endgerät des Nutzers (z.B. Device-Fingerprinting) im Sinne des TTDSG
          umfasst. Die Einwilligung ist jederzeit widerrufbar.
        </p>
        <p>
          Wenn Ihr Browser Font Awesome nicht unterstützt, wird eine Standardschrift von Ihrem
          Computer genutzt.
        </p>
        <p>
          Weitere Informationen zu Font Awesome finden Sieund in der Datenschutzerklärung von Font
          Awesome unter:{' '}
          <a href='https://fontawesome.com/privacy' target='_blank' rel='noopener noreferrer'>
            https://fontawesome.com/privacy
          </a>
          .
        </p>
      </section>
      <p>
        Quelle: <a href='https://www.e-recht24.de'>https://www.e-recht24.de</a>
      </p>
    </HeadingWrapper>
  );
};

export default Datenschutz;
