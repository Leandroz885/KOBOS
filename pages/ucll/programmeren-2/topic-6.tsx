import Image from "next/image";
import {
  RVPresentation,
  RVSlide,
  CodeBlock,
  Code,
} from "../../../components/RevealComponents";
import { StatusBox } from "../../../components/StatusBox";
import { TwoColumns } from "../../../components/TwoColumns";
import MazeGif from "../../../public/programmeren-2/maze-pathfinding.gif";
import MazeExample1 from "../../../public/programmeren-2/maze-example-1.png";
import MazeExample2 from "../../../public/programmeren-2/maze-example-2.png";
import MazeExample3 from "../../../public/programmeren-2/maze-example-3.png";
import MazeExample4 from "../../../public/programmeren-2/maze-example-4.png";
import MazeExample5 from "../../../public/programmeren-2/maze-example-5.png";
import { CenteredImage } from "../../../components/CenteredImage";
import { AlgorithmBox } from "../../../components/AlgorithmBox";
import { DownloadPdfButton } from "../../../components/DownloadPdfButton";
import { useRouter } from "next/router";

const Les = () => {
  const router = useRouter();
  return (
    <RVPresentation>
      <RVSlide>
        <h2>Programmeren 2</h2>
        <h1>Topic 6: algoritmes ontwerpen</h1>
        <DownloadPdfButton routerPathName={router.pathname} />
      </RVSlide>
      <RVSlide>
        <h2>Overzicht</h2>
        <ul>
          <li>Wat zijn algoritmes?</li>
          <li>Algoritme van Euclides</li>
          <li>Algoritme voor doolhoven</li>
          <li>Informatica in context: doel en domeinen</li>
        </ul>
      </RVSlide>
      <VorigeLes />
      <WatIsAlgoritme />
      <GGD />
      <Doolhof />
      <InformaticaDisciplines />
    </RVPresentation>
  );
};

const VorigeLes = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Terugkoppeling naar vorige lessen</h1>
      </RVSlide>
      <RVSlide>
        <h2>Algoritmes</h2>
        <p>
          Zelfde vraag als vorige les: hoe zou je het concept 'algoritme'
          uitleggen?
        </p>
        <StatusBox variant="remember" delayed>
          Een algoritme is een voorschrift om in een eindig aantal stappen een
          welbepaalde taak uit te voeren.
        </StatusBox>
      </RVSlide>
      <RVSlide>
        <h2>Resultaten</h2>
        <p>Wat zijn de resultaten van de volgende algoritmes?</p>
        <ul>
          <li>Cijferen (bv. een deling van twee grote getallen)</li>
          <li>Minimax-algoritme in een schaakprogramma</li>
          <li>Een GPS de route naar de campus laten berekenen</li>
          <li>
            Een neuraal netwerk initialiseren met willekeurige gewichten, en dan
            laten trainen op invoer
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Resultaten: algemeen</h2>
        <p>Wat is het resultaat van een algoritme in het algemeen?</p>
        <StatusBox variant="remember" delayed>
          Door de uitvoering van een algoritme wordt een gegeven beginsituatie
          getransformeerd tot een beoogde eindsituatie.
        </StatusBox>
        <p className="fragment">
          Opgelet: <i>transformeren</i> betekent niet noodzakelijk dat de
          beginsituatie altijd overschreven wordt. Denk bv. aan cijferen in de
          lagere school.
        </p>
      </RVSlide>
    </RVSlide>
  );
};

const WatIsAlgoritme = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Het begrip 'algoritme'</h1>
      </RVSlide>
      <RVSlide>
        <h2>Etymologie (oorsprong)</h2>
        <p>
          Arabisch: al-Ḵwārizmī → bijnaam van de wiskundige Abū Ja‘far Muhammad
          ibn Mūsa
        </p>
        <p>Grieks: arithmos → nummer</p>
        <p>
          Middeleeuws Europa schakelde over naar Arabisch talstelsel →
          'algoritme' als rekenprocedure
        </p>
        <p>17de eeuw: Leibniz veralgemeent de term 'algoritme</p>
      </RVSlide>
      <RVSlide>
        <h2>Uitvoeren vs opstellen</h2>
        <p>
          Algoritmes <b>uitvoeren</b> is 'eenvoudig'.
        </p>
        <p>
          Algoritmes <b>opstellen</b> is moeilijk. Het vereist creativiteit en
          analytisch denken.
        </p>
        <p>
          In beide gevallen is accuraatheid belangrijk: geen ruimte voor vrije
          interpretatie.
        </p>
        <p>
          Computers hebben een voordeel qua uitvoering: ze volgen exact
          instructies en maken geen fouten.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Eigenschappen</h2>
        <p>Een goed algoritme is:</p>
        <ul>
          <li>Voldoende algemeen</li>
          <li>
            Ondubbelzinnig:{" "}
            <ul>
              <li>De basistaken zijn simpel genoeg</li>
              <li>Duidelijke volgorde (cfr. controlestructuren)</li>
              <li>Duidelijke begin- en eindsituatie</li>
            </ul>
          </li>
          <li>Altijd eindigend</li>
          <li>Correct: het doet wat gevraagd is</li>
          <li>Begrijpbaar (voor mensen)</li>
          <li>(Efficiënt)</li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Evalueer</h2>
        <p>
          Vergelijk de kenmerken van een goed algoritme met enkele algoritmes
          uit vorige lessen:
        </p>
        <ol>
          <li>
            Kaarten sorteren door ze telkens willekeurig omhoog te gooien en op
            te rapen
          </li>
          <li>Minimax-algoritme</li>
          <li>Bubble sort</li>
          <li>Neuraal netwerk trainen</li>
        </ol>
        <p>
          Let zeker op <b>eindigheid</b>, <b>correctheid</b>,{" "}
          <b>begrijpbaarheid</b> en <b>efficiëntie</b>.
        </p>
      </RVSlide>
    </RVSlide>
  );
};

const GGD = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h2>Zelf opstellen: voorbeeld 1</h2>
        <h1>Algoritme van Euclides</h1>
      </RVSlide>
      <RVSlide>
        <h2>Algoritme van Euclides</h2>
        <p>
          Dit algoritme bepaalt de grootste gemene deler (GGD) van twee
          getallen. Het werd in circa. 300 v.Chr. beschreven door Euclides.
        </p>
        <p>
          <b>Doel van de les</b>: zelf het algoritme proberen af te leiden.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Voorbeelden</h2>
        <p>Probeer met de hand de GGD van volgende getallen te vinden:</p>
        <ol>
          <li>25 en 5</li>
          <li>50 en 20</li>
          <li>180 en 120</li>
        </ol>
        <p>
          <b>Denk telkens goed na wat je precies doet</b>. Probeer het proces in
          je hoofd expliciet te maken in de vorm van een stappenplan in
          mensentaal. Schrijf het op op papier of digitaal.
        </p>
        <p>
          Test je algoritme uit door het aan een medestudent te geven en hen de
          GGD te laten bepalen van volgende getallen:
        </p>
        <ol>
          <li>210 en 45</li>
          <li>252 en 105</li>
        </ol>
      </RVSlide>
      <RVSlide>
        <h2>Oplossing in mensentaal</h2>
        <AlgorithmBox>
          <p>
            Invoer: 2 positieve gehele getallen <Code>x</Code> en <Code>y</Code>
            .
          </p>
          <ol>
            <li>
              Bepaal de rest <Code>r</Code> van <Code>x / y</Code>
            </li>
            <li>
              Als <Code>r = 0</Code>, geef dan <Code>y</Code> als resultaat en
              stop
            </li>
            <li>
              Als <Code>r ≠ 0</Code>, vervang <Code>x</Code> door <Code>y</Code>{" "}
              en <Code>y</Code> door <Code>r</Code> en ga terug naar stap 1
            </li>
          </ol>
          <p>
            Uitvoer: een positief getal dat de GGD is van <Code>x</Code> en{" "}
            <Code>y</Code>.
          </p>
          <p>Is dit algoritme eindig?</p>
          <p>Is het correct en efficiënt? → moeilijker aan te tonen</p>
        </AlgorithmBox>
      </RVSlide>
      <RVSlide>
        <h2>Programmeren</h2>
        <p>Probeer dit algoritme nu te programmeren in Python:</p>
        <ul>
          <li>Schrijf het algoritme als een functie die je kan oproepen</li>
          <li>
            Je mag recursie gebruiken (cfr. les rond AI), maar dit hoeft niet
          </li>
          <li>
            Welke andere programmeerconcepten ga je nodig hebben? En welke
            wiskundeconcepten?
          </li>
          <li>
            Schrijf de voorbeelden uit vorige slides op als testen door middel
            van <Code>assert</Code>. Controleer dat je code slaagt op alle
            testen
          </li>
        </ul>
        <StatusBox variant="info">
          Geen idee (meer) hoe <Code>assert</Code> werkt? Zoek zelf online op!
          Probeer een antwoord te vinden binnen 120s.
        </StatusBox>
      </RVSlide>
    </RVSlide>
  );
};

const Doolhof = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h2>Zelf opstellen: voorbeeld 2</h2>
        <h1>Doolhoven doorkruisen</h1>
      </RVSlide>
      <RVSlide>
        <h2>Paden en doolhoven</h2>
        <TwoColumns
          left={
            <div>
              <p>
                Er zijn verschillende algoritmes om paden te vinden doorheen
                open ruimtes, doolhoven, wegennetwerken, etc. Sommige zoeken
                enkel naar <i>een</i> pad, andere zoeken specifiek naar het
                kortste pad.
              </p>
              <p>
                We focussen hier op het maken van een algoritme om <i>een</i>{" "}
                pad te vinden in een doolhof. Geïnspireerd op de Griekse mythe
                van Theseus, Ariadne en de minotaurus, nemen we een lange draad
                en een pot verf mee.
              </p>
            </div>
          }
          right={
            <div>
              <CenteredImage src={MazeGif} width={200} />
              <p className="text-center">
                <a target="_blank" href="https://miro.medium.com/v2/resize:fit:1400/1*2U0kDzjBEIOjfaKjz12MsQ.gif">
                  Link
                </a>
              </p>
            </div>
          }
        />
      </RVSlide>
      <RVSlide>
        <h2>Algoritmes opstellen uit voorbeelden</h2>
        <p>
          <b>Strategie:</b> door verschillende voorbeelden van doolhoven ten
          analyseren en het pad systematisch te zoeken, kunnen we patronen
          herkennen in wat we doen.
        </p>
        <p>Nadien kunnen we de patronen omvormen tot een degelijk algoritme.</p>
        <p>Gebruik de draad en de verf slim:</p>
        <ul>
          <li>De draad stelt het afgelegde pad voor</li>
          <li>
            De verf stelt een markering voor → wat zou je op de grond/muur
            kunnen tekenen?
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Voorbeeld 1</h2>
        <p>
          Zoek het pad op een systematische manier. Kan je een
          stap/instructie/regel afleiden voor het algoritme?
        </p>
        <CenteredImage src={MazeExample1} className="w-48" />
      </RVSlide>
      <RVSlide>
        <h2>Voorbeeld 2</h2>
        <p>
          Zoek het pad op een systematische manier. Kan je een
          stap/instructie/regel afleiden voor het algoritme?
        </p>
        <CenteredImage src={MazeExample2} className="w-48" />
      </RVSlide>
      <RVSlide>
        <h2>Voorbeeld 3</h2>
        <p>
          Zoek het pad op een systematische manier. Kan je een
          stap/instructie/regel afleiden voor het algoritme?
        </p>
        <CenteredImage src={MazeExample3} className="w-48" />
      </RVSlide>
      <RVSlide>
        <h2>Voorbeeld 4</h2>
        <p>
          <b>Opgelet:</b> wat is hier anders dan in de vorige voorbeelden?
        </p>
        <p>
          Zoek het pad op een systematische manier. Kan je een
          stap/instructie/regel afleiden voor het algoritme?
        </p>
        <CenteredImage src={MazeExample4} className="w-auto" />
      </RVSlide>
      <RVSlide>
        <h2>Voorbeeld 5</h2>
        <p>
          <b>Opgelet:</b> wat is hier anders dan in de vorige voorbeelden?
        </p>
        <p>
          Zoek het pad op een systematische manier. Kan je een
          stap/instructie/regel afleiden voor het algoritme?
        </p>
        <CenteredImage src={MazeExample5} className="w-48" />
      </RVSlide>
      <RVSlide>
        <h2>Meer voorbeelden</h2>
        <p>Nog meer voorbeelden nodig om ideëe op te testen?</p>
        <ul>
          <li>
            <a href="https://www.mazegenerator.net/">
              https://www.mazegenerator.net/
            </a>
          </li>
          <li>
            <a href="https://www.ohmydots.com/creator-maze.html">
              https://www.ohmydots.com/creator-maze.html
            </a>
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Algoritme in mensentaal</h2>
        <AlgorithmBox>
          <p>Invoer: een doolhof, een draad, een pot verf en een borstel.</p>
          <p>
            Uitvoer: een pad doorheen het doolhof (de draad) OF er is geen pad.
          </p>
        </AlgorithmBox>
      </RVSlide>
      <RVSlide>
        <h2>Algoritme in mensentaal</h2>
        <AlgorithmBox>
          <ol>
            <li>Maak de draad bij de ingang vast en neem alles mee</li>
            <li>
              Sta je aan de uitgang?
              <ol>
                <li>
                  Indien JA: de draad toont het pad doorheen het doolhof. STOP
                </li>
                <li>Anders: ga naar 3</li>
              </ol>
            </li>
            <li>
              Loopt er een draad over dit kruispunt?
              <ol>
                <li>
                  Indien JA: keer terug naar het vorige kruispunt, rol de draad
                  op, en markeer de doorgang. Ga naar 2
                </li>
                <li>Anders: ga naar 4</li>
              </ol>
            </li>
            <li>
              Vertrekt er vanaf dit kruispunt een verbinding zonder draad of
              verf?
              <ol>
                <li>
                  Indien JA: kies er één uit, stap naar het volgende kruispunt
                  en rol de draad af. Ga naar 2
                </li>
                <li>Anders: ga naar 5</li>
              </ol>
            </li>
            <li>
              Sta je terug bij de ingang?
              <ol>
                <li>Indien JA: er is geen weg door de doolhof, STOP</li>
                <li>
                  Anders: keer terug naar het vorige kruispunt, rol de draad op
                  en markeer de doorgang. Ga naar 2
                </li>
              </ol>
            </li>
          </ol>
        </AlgorithmBox>
      </RVSlide>
      <RVSlide>
        <h2>Bemerkingen</h2>
        <ul>
          <li>Sommige lijnen zijn overbodig. Welke?</li>
          <li>Eindigheid is vrij makkelijk te bewijzen</li>
          <li>Correctheid is veel moeilijker te bewijzen</li>
          <li>
            <b>
              Enkel testen zijn niet genoeg om eindigheid en correctheid te
              bewijzen
            </b>
          </li>
          <li>Efficiëntie van algoritmes bespreken we later meer in detail</li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Programmeren</h2>
        <p>
          We gaan dit algoritme niet vertalen naar Python tijdens de les. Je kan
          dit wel doen als thuisopdracht voor je portfolio. Iets om bij stil te
          staan:
        </p>
        <ul>
          <li>Hoe stel je een doolhof voor? Welke datastructuur gebruik je?</li>
          <li>Hoe stel je de draad en de verf voor?</li>
        </ul>
      </RVSlide>
    </RVSlide>
  );
};

const InformaticaDisciplines = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h2>Context</h2>
        <h1>Informatica, disciplines en programmeertalen</h1>
      </RVSlide>
      <RVSlide>
        <h2>Programma's en Programmeertalen</h2>
        <p>
          Om algoritmen aan een computer duidelijk te maken, is een
          geformaliseerde notatie nodig. Mensentaal is te ambigu; er zijn teveel
          interpretaties mogelijk
        </p>
        <StatusBox variant="remember">
          Een <b>programma</b> bevat de beschrijvingen van algoritmen zoals ze
          door een machine moeten worden uitgevoerd en is geschreven in een
          programmeertaal.
        </StatusBox>
        <StatusBox variant="remember">
          Een <b>programmeertaal</b> is een geformaliseerde notatie voor
          programma's.
        </StatusBox>
        <p>
          Informatica draait rond het <b>bestuderen</b> en{" "}
          <b>opstellen (maken)</b> van algoritmes, om ze uiteindelijk door een
          computer te laten uitvoeren. Programmeertalen vormen de schakel tussen
          menselijke concepten en het binaire denken van computers.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Domeinen binnen informatica</h2>
        <p>De meest populaire domeinen:</p>
        <ul>
          <li>
            <b>Algoritmiek</b>: eigenschappen van algoritmes en problemen
            onderzoeken
          </li>
          <li>
            <b>Software engineering</b>: grotere systemen opbouwen door kleinere
            systemen te combineren
          </li>
          <li>
            <b>Gegevensmodellering, gegevensbeheer, datastructuren</b>
          </li>
          <li>
            <b>Artificiële Intelligentie</b>: algoritmes die intelligent gedrag
            simuleren
          </li>
          <li>
            <b>Mens-machine interactie</b>: software ontwikkelen vanuit het
            standpunt van eindgebruikers, Augmented Reality, Virtual Reality
          </li>
          <li>
            <b>Netwerken</b>: computers laten communiceren en samenwerken in
            groep
          </li>
          <li>
            <b>Veilige software</b>: systemen beveiligen tegen slechte actoren
          </li>
          <li>
            <b>Computer Graphics</b>: beelden genereren (filmindustrie,
            videogames, simulaties, ...)
          </li>
          <li>
            <b>Programmeertalen</b>: talen ontwerpen en implementeren
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Domeinen over informatica</h2>
        <p>Het domein informatica wordt hier bekeken vanop afstand:</p>
        <ul>
          <li>Vakdidactiek</li>
          <li>Social Informatics</li>
          <li>Computer ethics</li>
          <li>technologiefilosofie</li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Domeinen voor informatica</h2>
        <p>
          Kennis binnen deze domeinen helpt bij het begrijpen van concepten,
          regels, eigenaardigheden, ... binnen informatica:
        </p>
        <ul>
          <li>Numerieke wiskunde</li>
          <li>Statistiek</li>
          <li>Elektronica</li>
          <li>...</li>
        </ul>
        <StatusBox variant="edu">
          <i>Informatica</i> en <i>Computerwetenschappen</i> betekenen
          hetzelfde. Informatica wordt vooral gebruikt in het Nederlands en is
          geïnspeerd op de Franse benaming. De rest van de wereld spreekt
          voornamelijk over <i>Computer science</i> of <i>Computing science</i>.
        </StatusBox>
      </RVSlide>
    </RVSlide>
  );
};

export default Les;
