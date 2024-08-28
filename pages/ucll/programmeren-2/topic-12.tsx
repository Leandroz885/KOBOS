import { useRouter } from "next/router";
import { DownloadPdfButton } from "../../../components/DownloadPdfButton";
import {
  RVPresentation,
  RVSlide,
  CodeBlock,
  IFrameSlide,
  Code,
} from "../../../components/RevealComponents";
import JacquardPortrait from "../../../public/programmeren-2/jacquard_portrait.jpg";
import JacquardPunchingCard from "../../../public/programmeren-2/jacquard_loom_cards.jpg";
import AnalyticalEngine from "../../../public/programmeren-2/analytical-engine.jpg";
import AlanTuring from "../../../public/programmeren-2/alan_turing.jpg";
import KonradZuse from "../../../public/programmeren-2/konrad_zuse.jpg";
import ENIAC from "../../../public/programmeren-2/eniac.jpg";
import VonNeumannArchitecture from "../../../public/programmeren-2/von-neumann-architecture.png";
import { CenteredImage } from "../../../components/CenteredImage";
import { TwoColumns } from "../../../components/TwoColumns";

const Les = () => {
  const router = useRouter();
  return (
    <RVPresentation>
      <RVSlide>
        <h2>Programmeren 2</h2>
        <h1>Topic 12: geschiedenis van informatica en programmeertalen</h1>
        <DownloadPdfButton routerPathName={router.pathname} />
      </RVSlide>
      <RVSlide>
        <h2>Overzicht</h2>
        <ul>
          <li>Inleiding</li>
          <li>Hoe het begon</li>
          <li>Eerste programmeertalen</li>
          <li>Imperatieve versus declaratieve talen</li>
          <li>Compilers en interpreters</li>
        </ul>
      </RVSlide>
      <Inleiding />
      <HoeHetBegon />
      <EersteProgrammeertalen />
      <ImpVSDecl />
      <CompilersAndInterpreters />
    </RVPresentation>
  );
};

const Inleiding = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h2>Inleiding</h2>
        <p>
          Het doel van deze les is om een antwoord te bieden op een aantal
          vragen zoals:
        </p>
        <ul>
          <li>Waarom en hoe is informatica als discipline ontstaan?</li>
          <li>
            Wanneer zijn de eerste computers gebouwd en waarvoor dienden ze?
          </li>
          <li>Welke programmeertalen zijn er doorheen de jaren gebouwd?</li>
        </ul>
        <p>
          We bekijken de geschiedenis vooral vanuit het standpunt van dit vak.
          Zaken zoals hardware, netwerken, ... komen minder aan bod.
        </p>
      </RVSlide>
    </RVSlide>
  );
};

const HoeHetBegon = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h2>1800 - 1950</h2>
        <h1>Hoe het begon</h1>
      </RVSlide>
      <RVSlide>
        <h2>De industriële revolutie</h2>
        <p>
          Van de 18e tot 20e eeuw veranderde de samenleving in sneltempo.
          Grootschalige machines, automatisatie en massaproductie werden de
          norm. Nieuwe uitvindingen volgden elkaar in sneltempo op.
        </p>
        <p>Kenmerken van de meeste machines van die periode:</p>
        <ul>
          <li>
            Zijn ontworpen voor <b>één taak</b>
          </li>
          <li>
            Leveren <b>fysische</b> arbied en automatiseren <b>fysieke</b> taken
          </li>
          <li>
            Produceren een <b>tastbaar</b> resultaat
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Weefgetouw van Jacquard</h2>
        <p>
          In 1804 bouwde Joseph Marie Jacquard een weefgetouw dat makkelijk
          meerdere soorten patronen kon weven. De machine werd aangestuurd door
          ponskaarten (Engels: <i>puching cards</i>). De machine was dus
          programmeerbaar en kon meerdere taken uitvoeren, wat uniek was voor
          die tijd. Links zie je een portret van Jacquard, geprogrammeerd met
          24.000 ponskaarten.
        </p>
        <TwoColumns
          left={<CenteredImage src={JacquardPortrait} width={300} />}
          right={<CenteredImage src={JacquardPunchingCard} />}
        />
      </RVSlide>
      <RVSlide>
        <h2>Charles Babbage (1830)</h2>
        <p>
          Babbage wou complexe wiskundige berekeningen automatiseren.
          Geïnspireerd door Jacquard, bedacht hij twee machines:
        </p>
        <ul>
          <li>
            De Difference Engine: een machine om verschillende veeltermfuncties
            te berekenen
          </li>
          <li>
            De Analytical Engine: een general-purpose machine met ondersteuning
            voor berekeningen, iteraties en selecties, en een geheugen
          </li>
        </ul>
        <CenteredImage src={AnalyticalEngine} width={600} />
      </RVSlide>
      <RVSlide>
        <h2>Analytical engine</h2>
        <p>
          De Analytical Engine was Turing-compleet - nog voor de term 'Turing
          compleet' zelfs bestond! Ze was ontworpen om te werken met mechanische
          onderdelen en met stoom als energiebron. De programma's werden
          geschreven op ponskaarten. Ze is jammer genoeg nooit gebouwd.
        </p>
        <p>De Analytical engine is een machine die:</p>
        <ul>
          <li>
            <b>meerdere taken</b> kan uitvoeren (eender welk wiskundig
            algoritme, en zelfs nog meer)
          </li>
          <li>
            <b>mentale</b> arbeid levert en mentale taken automatiseert
          </li>
          <li>
            een <b>'virtueel'</b> resultaat produceert: het genereert cijfers en
            letters, geen echte fysieke producten
          </li>
        </ul>
      </RVSlide>
      {/* De term computer verandert door de jaren */}
      <RVSlide>
        <h2>Alan Turing (1940)</h2>
        <p>
          Turing was een Engelse wiskundige en logicus. Hij bedacht ondermeer de
          Turing machine als manier om uit te drukken welke problemen oplosbaar
          zijn.
        </p>
        <div className="grid grid-cols-3">
          <p className="col-span-2">
            Turing leverde een aantal belangrijke bijdrage tijdens de Tweede
            Wereldoorlog. Hij hielp onder andere bij het kraken van Enigma, een
            encryptiesysteem van de Duitsers. Hiervoor werd een machine
            ontwikkeld die de code vele malen sneller kon kraken dan mensen.
            Turing ontwierp mee de machine en het algoritme. De machine had de
            naam 'bombe'. Ze was uitsluitend bedoeld voor decryptie, het was
            geen general purpose computer.
          </p>
          <CenteredImage src={AlanTuring} width={300} />
        </div>
        <p>
          Na de oorlog werkte Turing mee aan onder andere de grondslagen van het
          domein Artificiële Intelligentie. Hij hield zich ook bezig met
          cybernetica.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Konrad Zuse (1940)</h2>
        <TwoColumns
          left={
            <p>
              De Duitse ingenieur Konrad Zuse bouwde de eerste echt
              programmeerbare computer die Turing compleet was. Hij ontwierp ook
              de programmeertaal Plankalkül. Zuse's eerste computer was niet
              gebaseerd op elektronica, maar was mechanisch zoals de Analytical
              Engine van Babbage. Later begon hij elektronische componenten te
              gebruiken.
            </p>
          }
          right={<CenteredImage src={KonradZuse} width={300} />}
        />
        <p>
          Zuse werkte grotendeels afhankelijk van andere ontwikkelaars van die
          tijd. Hij kende noch Turing, noch het werk van Babbage. Zijn werk
          bleef lang onder de radar omwille van de oorlog. Na de oorlog
          probeerde hij zijn computers te verkopen als bedrijf, tot het
          uiteindelijk werd overgekocht door IBM.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>De ENIAC (1945)</h2>
        <p>
          De <i> Electronic Numerical Integrator And Computer</i> werd ontworpen
          om berekeningen te maken. Meer specifiek zou ze hepen bij het
          berekenen waar artilleriegeschut zou inslaan. Ze werd gebouwd in de VS
          door een team onder leiding van Eckert en Mauchly, en was klaar kort
          na de oorlog.
        </p>
        <p>
          De machine werd geprogrammeerd door op grote schaal kabels aan te
          passen op verschillende elektronische borden. Wisselen tussen twee
          programma's kon weken duren. Het apparaat nam een volledig lokaal in
          beslag.
        </p>
        <CenteredImage src={ENIAC} width={500} />
      </RVSlide>
      <RVSlide>
        <h2>Wie was eerst?</h2>
        <p>
          Een vaak gestelde vraag is:{" "}
          <i>Wie is de uitvinder van de computer?</i> Voorgaande slides tonen
          aan dat het antwoord genuanceerd is.
        </p>
        <p>
          Jacquard gebruikte al verschillende fundamentele ideeën die nadien
          werden gekopieerd, maar bouwde geen echte general-purpose computer.
        </p>
        <p>
          Babbage had een ontwerp met de Analytical Engine, maar heeft het nooit
          kunnen bouwen.
        </p>
        <p>
          Turing lag mee aan de fundamenten van de computerwetenschappen en
          werkte met elektronische machines tijdens de oorlog, maar hield zich
          nooit echt bezig met general-purpose machines. Zijn werk werd ook pas
          vele jaren na de oorlog publiek gemaakt.
        </p>
        <p>
          Zuse bouwde een echt werkende machine, maar zijn werk werd nooit
          opgemerkt en had daardoor beperkte inpakt op hoe computers nadien
          ontworpen werden.
        </p>
        <p>
          De ENIAC wordt het vaakst genoemd als <i>de eerste computer</i>, en
          heeft de meeste impact gehad op de ontwikkeling van computers na de
          oorlog.
        </p>
      </RVSlide>
      <IFrameSlide src="https://www.computerhistory.org/tdih/september/9/" />
    </RVSlide>
  );
};

const EersteProgrammeertalen = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h2></h2>
        <h1>Eerste programmeertalen</h1>
      </RVSlide>
      <RVSlide>
        <h2>Von Neumann architectuur</h2>
        <p>
          De ENIAC werd geprogrammeerd met draden en stekkerborden. Een paar
          jaar nadien werden computers ontwikkeld die het anders aanpakten:
          programma's werden symbolisch opgeslagen in het geheugen.
        </p>
        <p>
          Een belangrijk persoon in dit verhaal was <b>John von Neumann</b>,
          naar wie de <i>von Neumann architectuur</i> is vernoemd. Deze
          architectuur wordt vandaag de dag nog steeds gebruikt.
        </p>
        <CenteredImage src={VonNeumannArchitecture} />
      </RVSlide>
      <RVSlide>
        <h2>Machinetaal en assembly</h2>
        <p>
          Nu programma's in geheugen voorgesteld konden worden, werden de eerste
          programmeertalen ontworpen om de programma's te schrijven. In
          machinetaal is elke instructie een binair, octaal of hexadecimaal
          getal. De taal hangt volledig af van de hardware en is dus anders voor
          elk type computer. Bovendien is ze moeilijk te lezen en te schrijven.
        </p>
        <p>
          Assembly is een taal die een lichte abstractie biedt bovenop
          machinetaal. Instructies worden voorgesteld door letters en codes. Ze
          wordt rechtstreeks vertaald naar machinetaal. Assembly is nog steeds
          hardwareafhankelijk.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>De eerste hogere talen</h2>
        <h3>Fortran (1958)</h3>
        <ul className="!mb-8">
          <li>Formula Translator</li>
          <li>ontworpen door Backus bij IBM</li>
          <li>bedoeld als taal voor numerieke analyse</li>
          <li>
            nog altijd (in gemoderniseerde vorm) veel gebruikt voor
            wetenschappelijke berekeningen
          </li>
        </ul>
        <h3>COBOL</h3>
        <ul>
          <li>COmmon Business Oriented Language</li>
          <li>ontworpen door vrouwelijke Amerikaanse militair</li>
          <li>eerste records, minder wiskundig uitzicht</li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>De eerste hogere talen</h2>
        <h3>LISP (1960)</h3>
        <ul className="!mb-8">
          <li>LISt Processing Language</li>
          <li>principe radicaal verschillend van Fortran, Cobol, ...</li>
          <li>
            taal gericht op het manipuleren van symbolische informatie in plaats
            van getallen of administratieve gegevens ← kunstmatige intelligentie
          </li>
          <li>John McCarthy (MIT): beginnend AI-onderzoek</li>
          <li>stevige wiskundige fundamenten</li>
          <li>
            Had verschillende features die later door andere talen zijn
            overgenomen (bv. garbage collection)
          </li>
        </ul>
        <h3>BASIC (1965)</h3>
        <ul>
          <li>Beginner's All purpose Symbolic Instruction Code</li>
          <li>
            Startte als een versimpelde versie van FORTRAN voor doe-het-zelvers
          </li>
          <li>
            Uiteindelijk gekocht door Bill Gates, die het integreerde voor de
            voorlopers van PC's (personal computers, '80)
          </li>
          <li>Opgevolgd door Visual Basic</li>
        </ul>
      </RVSlide>
    </RVSlide>
  );
};

const ImpVSDecl = () => {
  return (
    <RVSlide>
      {/* TODO create a tree graph to show all the subgroups */}
      <RVSlide>
        <h2>Stijlen van programmeren</h2>
        <h1>Imperatieve versus declaratieve talen</h1>
      </RVSlide>
      <RVSlide>
        <h2>Imperatieve versus declaratieve talen</h2>
        <p>
          Na FORTRAN en LISP volgden verschillende talen die zich lieten
          inspireren door een van beiden. Er ontstonden twee families van talen:
        </p>
        <ul>
          <li>
            Imperatief
            <ul>
              <li>denken zoals de computer: reeks opdrachten</li>
              <li>nadruk ligt op algoritmisch denken</li>
              <li>variabelen krijgen waarden in toekenningsopdrachten</li>
              <li>FORTRAN, BASIC, C, C++, Java, Python, ...</li>
            </ul>
          </li>
          <li>
            Declaratief:
            <ul>
              <li>denken zoals mensen/wiskundigen: WAT ipv HOE</li>
              <li>sterke wiskundige basis</li>
              <li>LISP, PROLOG, Haskell, ...</li>
            </ul>
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Subgroepen binnen declaratieve talen</h2>
        <p>
          Binnen de groep van declaratieve kan je een aantal subgroepen
          onderscheiden:
        </p>
        <ul>
          <li>
            Functionele talen:
            <ul>
              <li>LISP, Scheme, Haskell, ML,…</li>
              <li>gebaseerd op wiskundige functieleer</li>
              <li>veel gebruikt voor AI</li>
            </ul>
          </li>
          <li>
            Logische talen:
            <ul>
              <li>PROLOG voornaamste voorbeeld (PROgrammation en LOGique)</li>
              <li>gebaseerd op wiskundige logica</li>
              <li>veel gebruikt voor AI onderzoek (o.a. Watson en ISS …)</li>
            </ul>
          </li>
          <li>
            Relationele vraagtalen:
            <ul>
              <li>SQL voornaamste voorbeeld</li>
              <li>gebaseerd op relationele algebra</li>
              <li>alom gebruikt bij relationele gegevensbanken</li>
              <li>opgelet: vraagtalen zijn geen volledige programmeertalen</li>
            </ul>
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Subgroepen binnen imperatieve talen</h2>
        <p>Ook imperatieve talen kunnen verder opgesplitst worden:</p>
        <ul>
          <li>
            Procedurale talen:
            <ul>
              <li>Programma's zijn een reeks instructies</li>
              <li>
                Gebruiken procedures (=functies) om programma's te structureren
              </li>
            </ul>
          </li>
          <li>
            Objectgerichte talen:
            <ul>
              <li>
                Programma's bestaan uit objecten die met elkaar communiceren
              </li>
              <li>
                Gebruiken klassen met overerving om programma's te structureren
              </li>
            </ul>
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Procedurale talen (1)</h2>
        <p>ALGOL 60 en ALGOL 68</p>
        <ul>
          <li>ALGOrithmic Language</li>
          <li>
            1960: commissie van computerwetenschappers ontwerpt een
            “wetenschappelijk verantwoorde” (imperatieve) programmeertaal
          </li>
          <li>taal werd geen succes (te academisch, te ingewikkeld)</li>
          <li>1968: vereenvoudigde versie: Algol 68</li>
        </ul>
        <p>Pascal</p>
        <ul>
          <li>
            genoemd naar Blaise Pascal, 17de eeuwse wis- en natuurkundige,
            theoloog, bouwer van rekenmachine
          </li>
          <li>+/- 1970, Niklaus Wirth, Zwitserland</li>
          <li>sterk vereenvoudigde versie van Algol 60</li>
          <li>
            in de eerste plaats gericht op (verantwoorde) didactiek van
            gestructureerd programmeren
          </li>
          <li>groot succes van +/- 1980 tot +/- 1995</li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Procedurale talen (2)</h2>
        <p>Ada</p>
        <ul>
          <li>
            genoemd naar Ada Lovelace, de eerste “programmeur” en vriendin van
            Charles Babbage
          </li>
          <li>+/- 1983, uit Pascal</li>
          <li>Amerikaanse defensie en ruimtevaart</li>
          <li>parallellisme en procescommunicatie</li>
        </ul>
        <p>C</p>
        <ul>
          <li>opvolger van BCPL</li>
          <li>+/- 1975, ontwikkeld om Unix te (her)schrijven</li>
          <li>
            een taal enigszins tussen assembleertaal en hogere programmeertaal
            in
          </li>
          <li>
            tot +/- 1995 populairste taal onder professionele programmeurs, voor
            “informatietechnische” toepassingen
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Objectgerichte talen</h2>
        <ul>
          <li> tot +/- 1990 vrijwel uitsluitend experimenteel en academisch</li>
          <li>
            sinds 1995 wijd verbreid in de software-industrie (Vooral dankzij de
            opkomst van Java)
          </li>
          <li>
            Voorbeelden: Java, Smalltalk, Eiffel (voor didactiek), C (in
            beperkte maten), Dart (ontwikkeld door Google), Kotlin
          </li>
          <li>
            'Upgrades' van bestaande talen: C++, Object Basic, Object Pascal
          </li>
          <li>
            Bij sommige talen hoorde ook een visuele ontwikkelomgeving
            (development environment). Bijvoorbeeld: Delphi voor Object Pascal,
            Visual Basic.NET voor Object Basic
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Scripttalen</h2>
        <p>
          Scripttalen zijn een recenter fenomeen. Hun hoofddoel is het schrijven
          van scripts: kleine programma's die een bepaalde taak automatiseren.
          Ze hebben geen superstrikte definitie, maar vaak hebben ze volgende
          kenmerken:
        </p>
        <ul>
          <li>
            Zwak type systeem (bv. een lijst kan meerdere types data bevatten)
          </li>
          <li>
            Heel high level, met veel ingebouwde oplossingen voor vaak
            voorkomende opdrachten
          </li>
          <li>
            De taal wordt niet gecompileerd naar een lagere taal, maar lijn voor
            lijn geïnterpreteerd
          </li>
          <li>
            Meestal imperatief, ondersteunt vaak zowel proceduraal als
            objectgericht programmeren
          </li>
        </ul>
        <p>
          Deze talen zijn populair voor hobbyprojecten en onderzoek, omdat ze
          toelaten snel en vlot code te schrijven.
        </p>
        <p>Voorbeelden: Python, JavaScript, PHP.</p>
      </RVSlide>
      <RVSlide>
        <h2>Talen vandaag</h2>
        <ul>
          <li>
            Nieuwe programmeertalen kunnen redelijk snel gemaakt worden. Sommige
            mensen ontwerpen ze als hobby of voor onderzoek
          </li>
          <li>
            Nog steeds verschil tussen imperatief en declaratief, maar er is
            kruisbestuiving van features
          </li>
          <li>
            Nieuwe talen zijn bijna altijd geïnspireerd op oudere, maar
            verbeteren/veranderen bepaalde principes
          </li>
          <li>
            Soms worden talen ontwikkeld om een nieuw onstaan probleem op te
            lossen. Bijvoorbeeld: Kotlin en Swift zijn bedoeld voor efficiëntere
            app development op Android en iOS
          </li>
          <li>
            Heel af en toe zijn er talen met radicale aanpassingen.
            Bijvoorbeeld: Rust met zijn geheugenregels
          </li>
          <li>
            Oudere talen sterven langzaam af, maar sommigen blijven hardnekkig
            bestaan. Bijvoorbeeld: vrijwel alle systemen in de bankenwereld
            draaien nog steeds op COBOL. De reden is vaak dat het te duur is of
            te veel tijd kost om systemen te upgraden of te herschrijven in
            nieuwe talen
          </li>
        </ul>
      </RVSlide>
      {/* TODO scripttalen */}
    </RVSlide>
  );
};

const CompilersAndInterpreters = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h2>Van hogere talen naar machinetalen</h2>
        <h1>Compilers en interpreters</h1>
      </RVSlide>
      <RVSlide>
        <h2>Van hogere talen naar machinetalen</h2>
        <p>
          We weten dat computers uiteindelijk instructies nodig hebben in
          machinetaal die door de computer begrepen kan worden. Hoe worden
          hogere talen getransformeerd naar de juiste machinetaal?
        </p>
        <p>
          Er zijn voornamelijk twee technieken: <b>compilers en interpreters</b>
          . Talen kiezen zelf welke technieken ze gebruiken en hoe ze die
          implementeren.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Compilers versus interpreters (1)</h2>
        <ul>
          <li>
            Compilers (vertalers)
            <ul>
              <li>Lezen de volledige code in één keer</li>
              <li>Genereren een resultaat in machinetaal</li>
              <li>
                Voeren allerlei optimalisaties uit om de code sneller te laten
                werken
              </li>
              <li>
                Voor zeer grote programma's kan compilatie enkele seconden tot
                zelfs minuten duren
              </li>
              <li>
                Voorbeeld (min of meer): <Code>.exe</Code>-bestanden op Windows
              </li>
            </ul>
          </li>
          <li>
            Interpreters (vertolkers):
            <ul>
              <li>Lezen code lijn per lijn</li>
              <li>Geen compilatiestap → snellere opstart</li>
              <li>Zijn veel langzamer tijdens uitvoering</li>
              <li>
                Voorbeeld (min of meer): <Code>.py</Code>-bestanden uitvoeren
                met de Python interpreter
              </li>
            </ul>
          </li>
        </ul>
        <p>
          Compilers en interpreters zijn zelf programma's, vaak geschreven in
          lagere talen (assembly, C, ...). Ze hebben meerdere versies, om
          verschillende architecturen te ondersteunen.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Compilers versus interpreters (2)</h2>
        <p>
          Moderne talen hebben complexe bouw- en optimalisatietechnieken
          waardoor het moeilijker is om een duidelijk onderscheid te maken
          tussen compilatie en interpretatie.
        </p>
        <ul>
          <li>
            Python wordt (meestal) “gecompileerd” naar “(Python) byte code” en
            die wordt dan uitgevoerd (meestal vertolkt) door een “Python
            virtuele machine”. Maar voor de programmeur “voelt” het als
            interpreteren
          </li>
          <li>
            Java wordt ook (meestal) “gecompileerd” naar “(Java) byte code” en
            die wordt dan uitgevoerd door een “Java virtuele machine”. Maar voor
            de programmeur voelt dit meer als compileren (want er verschijnen
            .class-bestanden in je mappen)
          </li>
        </ul>
      </RVSlide>
    </RVSlide>
  );
};

export default Les;
