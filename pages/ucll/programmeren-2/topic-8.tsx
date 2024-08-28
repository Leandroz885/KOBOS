import { useRouter } from "next/router";
import {
  RVPresentation,
  RVSlide,
  CodeBlock,
  IFrameSlide,
  Quote,
  Code,
  Quiz,
  createQuizAnswer,
} from "../../../components/RevealComponents";
import { DownloadPdfButton } from "../../../components/DownloadPdfButton";
import Image from "next/image";
import OOPConcepts from "../../../public/oop-concepts.jpg";
import ObjectCallByRef from "../../../public/programmeren-2/object-call-by-reference.svg";
import { StatusBox } from "../../../components/StatusBox";
import { CenteredImage } from "../../../components/CenteredImage";

const Les = () => {
  const router = useRouter();
  return (
    <RVPresentation>
      <RVSlide>
        <h2>Programmeren 2</h2>
        <h1>Topic 8: objectgericht programmeren - uitbreiding</h1>
        <DownloadPdfButton routerPathName={router.pathname} />
      </RVSlide>
      <RVSlide>
        <h2>Overzicht</h2>
        <ul>
          <li>Herhaling Programmeren 1</li>
          <li>Aandachtspunten</li>
          <li>Standaardwaarden instellen</li>
          <li>Klassen combineren</li>
        </ul>
      </RVSlide>
      <Herhaling />
      <AandachtspuntenBasis />
      <DefaultValues />
      <Combineren />
      <Opdrachten />
    </RVPresentation>
  );
};

const Herhaling = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h2>Herhaling Programmeren 1</h2>
        <h1>Wat is objectgericht programmeren?</h1>
      </RVSlide>
      <RVSlide>
        <h2>Programmeerparadigma's</h2>
        <p>
          Doorheen de jaren zijn er meerdere paradigma's ontwikkeld om
          programma's te ontwerpen.
        </p>
        <p>
          Tot nu hebben we vooral <b>imperatief programmeren</b> behandeld. Het
          houdt in dat je de computer stap voor stap bevelen geeft.
          Bijvoorbeeld:
        </p>
        <ul>
          <li>Geef deze variabele de waarde 5</li>
          <li>Roep deze functie 5 keer op</li>
          <li>Tel stap voor stap van 10 tot 1</li>
        </ul>
        <p>
          Imperatief programmeren is een van de meest gebruikte paradigma's en
          werkt heel goed voor eenvoudige programma's (minder dan ~500 lijnen
          code).
        </p>
        <p>
          Deze lessen focussen we op een ander paradigma:{" "}
          <b>objectgericht programmeren</b> of <b>OGP</b> (Engels:{" "}
          <i>Object Oriented Programming, OOP</i>).
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Objecten</h2>
        <p>OGP samengevat in één zin:</p>
        <Quote>Alles is een object.</Quote>
        <p>
          Het doel van OGP is om de werkelijkheid te modelleren als objecten die
          met elkaar interageren.
        </p>
        <p>Voorbeelden van objecten:</p>
        <ul>
          <li>Een tafel, stoel, deur, bord, ...</li>
          <li>Een kat, hond, mens, plant, ...</li>
          <li>Een bedrijf, bankrekening, kleur, vak, datum, ...</li>
        </ul>
        <p>
          <i>Object</i> is dus heel ruim te interpreteren.
        </p>
        <p>
          Veel objecten zullen op elkaar lijken. In OGP kan je een hele
          categorie van objecten één keer beschrijven, en nadien hergebruiken.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>OGP: terminologie</h2>
        <div className="grid grid-cols-2 gap-12 items-center">
          <div>
            <p>
              Je beschrijft objecten door middel van <b>klassen</b>. Een klasse
              (Engels: <i>class</i>) werkt als een 'blauwafdruk' die je nadien
              kan gebruiken om een object te 'bouwen'.
            </p>
            <p>
              Een object is één unieke <b>instantie</b> van een klasse.
              Vergelijk met een uniek gebouw dat je gecreëerd hebt op basis van
              de blauwafdruk. Men zegt dat men de klasse <i>instantieert</i>.
            </p>
            <p>Je kan van één klasse zoveel objecten maken als nodig.</p>
          </div>
          <Image alt="" src={OOPConcepts} />
        </div>
      </RVSlide>
      <RVSlide>
        <h2>OGP: terminologie</h2>
        <div className="grid grid-cols-2 gap-12 items-center">
          <div>
            <p>
              De kenmerken van een klasse en haar objecten noemt men ook de{" "}
              <b>attributen</b> van een klasse (Engels: <i>attributes</i>). Een
              andere veel voorkomen benaming is <b>velden</b> (Engels:{" "}
              <i>fields</i>).
            </p>
            <p>
              Welke attributen zou je toevoegen aan de klasse <Code>Car</Code>?
            </p>
            <div className="fragment">
              <p>
                <b>Antwoord:</b>
              </p>
              <ul>
                <li>kleur</li>
                <li>merk</li>
                <li>brandstof</li>
                <li>...</li>
              </ul>
            </div>
          </div>
          <Image alt="" src={OOPConcepts} />
        </div>
      </RVSlide>
      <RVSlide>
        <h2>OGP: terminologie</h2>
        <div className="grid grid-cols-2 gap-12 items-center">
          <div>
            <p>
              Je interageert met objecten door middel van <b>methodes</b>. Een
              methode (Engels: <i>method</i>) lijkt op een functie, maar kan de
              velden van het bijhorende object zien en aanpassen. Een methode
              stelt de mogelijke acties van een object voor.
            </p>
            <p>
              Welke methodes zou je toevoegen aan de klasse <Code>Car</Code>?
            </p>
            <div className="fragment">
              <p>
                <b>Antwoord:</b>
              </p>
              <ul>
                <li>rijden</li>
                <li>stoppen</li>
                <li>bijtanken</li>
                <li>...</li>
              </ul>
            </div>
          </div>
          <Image alt="" src={OOPConcepts} />
        </div>
      </RVSlide>
      <RVSlide>
        <h2>Syntax in Python</h2>
        <CodeBlock>{`class Car:
  def __init__(self, color):
    self.color = color
    self.km_travelled = 0

  def drive(self, nb_km):
    self.km_travelled += nb_km`}</CodeBlock>
        <ul>
          <li>
            <Code>class</Code> definieert een klasse
          </li>
          <li>
            <Code>def</Code> definieert een methode
          </li>
          <li>
            <Code>__init__</Code> is een ingebouwde methode van Python. Het is
            de <b>constructor</b> van een klasse
          </li>
          <li>
            <Code>self</Code> is een speciale parameter die het object voorstelt
            waarmee je werkt op dat moment
          </li>
          <li>
            <Code>self.naam_attribuut</Code> stelt een attribuut voor van een
            object van de klasse
          </li>
          <li>
            <Code>self.attribuut = nieuwe_waarde</Code> past de waarde van een
            attribuut aan
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Syntax in Python (2)</h2>
        <CodeBlock>
          {`# Code van vorige slide die de class Car definieert...

my_car = Car('red')
assert my_car.color == 'red'

my_car.drive(10)
my_car.drive(6)
assert my_car.km_travelled == 16`}
        </CodeBlock>
        <ul>
          <li>
            <Code>Car(params)</Code> creëert een nieuwe instantie (object) van
            de klasse <Code>Car</Code>
          </li>
          <li>
            <Code>obj.methode()</Code> roept <Code>methode()</Code> op op{" "}
            <Code>obj</Code>. In de methode wordt <Code>self</Code> vervangen
            door <Code>obj</Code>.
          </li>
          <li>
            Elke klasse definieert automatisch een nieuw <b>type</b> met
            dezelfde naam. Het type van <Code>my_car</Code> is <Code>Car</Code>
          </li>
        </ul>
      </RVSlide>
    </RVSlide>
  );
};

const AandachtspuntenBasis = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Aandachtspunten</h1>
      </RVSlide>
      <RVSlide>
        <h2>Om te onthouden: algemeen</h2>
        <StatusBox variant="remember">
          Let op indentatie bij het schrijven van klassen in Python.
        </StatusBox>
        <StatusBox variant="remember">
          Python laat toe dat je nieuwe attributen definieert buiten{" "}
          <Code>__init__()</Code>. <b>Doe dit echter nooit.</b> Het is een
          slechte gewoonte en leidt tot onleesbare 'spaghetticode'.
        </StatusBox>
      </RVSlide>
      <RVSlide>
        <h2>Voorgedefinieerde methodes</h2>
        <p>
          Voorgedefinieerde methodes zitten standaard ingebouwd in elke klasse.
          In Python zijn er 3 om te onthouden:
        </p>
        <ul>
          <li>
            <Code>__init__()</Code>: creëert nieuwe instanties van een klasse
          </li>
          <li>
            <Code>__repr__()</Code>: geeft een string terug die een object in
            codetaal voorstelt
          </li>
          <li>
            <Code>__str__()</Code>: geeft een string terug die een object in
            menselijke taal voorstelt
          </li>
        </ul>
        <p>
          Elke klasse heeft een standaardimplementatie voor deze methodes, maar
          heel vaak zal je ze moeten <b>overschrijven</b>. De
          standaardimplementatie van <Code>__repr__()</Code> en{" "}
          <Code>__str__()</Code> geeft het geheugenadres van een object terug.
        </p>
        <StatusBox variant="remember">
          In veel situaties mogen <Code>__repr__()</Code> en{" "}
          <Code>__str__()</Code> hetzelfde teruggeven. Overschrijf in dat geval
          enkel <Code>__repr__()</Code>. <Code>__str__()</Code> zal dit
          automatisch overnemen.
        </StatusBox>
      </RVSlide>
      <RVSlide>
        <h2>Naamgeving van methodes</h2>
        <p>
          Namen van methodes volgen dezelfde schrijfregels als voor functies. In
          Python komt dit neer op <Code>snake_case</Code>.
        </p>
        <p>
          Programmeurs hebben bepaalde gewoontes bij het kiezen van namen voor
          methodes:
        </p>
        <ul>
          <li>
            <Code>is</Code> of <Code>has</Code> als de methode een{" "}
            <Code>boolean</Code> waarde van een attribuut teruggeeft
          </li>
          <li>
            <Code>get</Code> als de methode een niet-booleaanse waarde van
            attribuut teruggeeft
          </li>
          <li>
            <Code>set</Code> als de methode een attribuut aanpast
          </li>
        </ul>
        <p>
          Deze methodes noemt men ook wel de <i>getters</i> en <i>setters</i>{" "}
          van een klasse.
        </p>
        <p>
          Methodes die hier niet onder vallen, hebben meer vrijheid qua
          naamgeving. In de praktijk wordt ook bij die methodes de woorden{" "}
          <Code>is, has, get, set</Code> veel gebruikt. Ook functies volgen vaak
          die conventies!
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Om te onthouden</h2>
        <StatusBox variant="remember">
          <Code>self</Code> is <b>altijd</b> de eerste parameter van elke
          methode. Python dwingt dit niet af, maar zal rare fouten geven tijdens
          uitvoering als je het vergeet.
        </StatusBox>
        <StatusBox variant="remember">
          Let vanaf nu nóg meer op naamgeving van methodes en functies. Gebruik{" "}
          <Code>is, has, get, set</Code> waar het past om de leesbaarheid te
          verhogen.
        </StatusBox>
      </RVSlide>
      <RVSlide>
        <h2>Om te onthouden (2)</h2>
        <StatusBox variant="edu">
          <p>
            Objectgericht programmeren introduceert veel nieuwe termen. Let als
            leraar op je woordgebruik:
          </p>
          <ul>
            <li>Functies en methodes zijn strikt genomen niet hetzelfde</li>
            <li>
              Haal termen zoals klassen, objecten, instanties, attributen, ...
              niet door elkaar
            </li>
            <li>
              Besef ook welke termen wél hetzelfde betekenen (bv. attributen =
              velden = kenmerken)
            </li>
          </ul>
        </StatusBox>
      </RVSlide>
    </RVSlide>
  );
};

const DefaultValues = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Standaardwaarden in methodes en functies</h1>
      </RVSlide>
      <RVSlide>
        <h2>Standaardwaarden</h2>
        <CodeBlock>{`class Car:
  def __init__(self, color="gray"):
    self.color = color


new_car = Car()
assert new_car.color == "gray"`}</CodeBlock>
        <p>
          Standaardwaarden (Engels: <i>default values</i>) worden automatisch
          gebruikt als een waarde ontbreekt voor een parameter.
        </p>
        <p>
          <b>Voordeel</b>: Je moet minder parameters schrijven bij het maken van
          objecten.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Standaardwaarden (2)</h2>
        <p>
          Standaardwaarden werken ook voor parameters in functies. Het kunnen er
          ook meer dan 1 zijn:
        </p>
        <CodeBlock>{`
def get_prediction(temperature_celsius, pressure_bar=1, wind_speed_kmh=10):
  # Code die de weersvoorspelling bepaalt en teruggeeft`}</CodeBlock>
        <p>Aandachtspunten:</p>
        <ul>
          <li>
            Parameters met standaardwaarden komen altijd <b>als laatste</b>.
            Python dwingt dit af
          </li>
          <li>
            Niet elke parameter <i>moet</i> een standaardwaarde hebben. Zie het
            als iets 'extra'
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Default values bij oproeping</h2>
        <p>
          Wanneer je met parameters met default values werkt, kan je naar
          specifieke parameters verwijzen bij het oproepen. Bijvoorbeeld:
        </p>
        <CodeBlock>{`class Car:
  def __init__(self, color="gray", brand="Nissan"):
    self.color = color
    self.brand = brand


new_car = Car(brand="Mercedes", color="blue")
assert new_car.color == "gray"
assert new_car.brand == "Mercedes"`}</CodeBlock>
        <p>Aandachtspunten:</p>
        <ul>
          <li>
            Syntax is <Code>naam=value</Code>, <b>zonder spaties</b>
          </li>
          <li>
            Parameters van default values kan je van plaats verwisselen. In het
            voorbeeld zijn <Code>brand</Code> en <Code>color</Code> omgewisseld
            wanneer het object wordt gemaakt
          </li>
        </ul>
      </RVSlide>
    </RVSlide>
  );
};

const Combineren = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Klassen combineren</h1>
      </RVSlide>
      <RVSlide>
        <h2>Klassen combineren</h2>
        <p>
          Stel dat we een veerboot (Engels: <i>Ferry</i>) willen modelleren. De
          veerboot kan wagens vervoeren.
        </p>
        <p>Met behulp van klassen kunnen we dit eenvoudig modelleren:</p>
        <CodeBlock>{`class Ferry:
  def __init__(self):
    self.cars_on_board = []
  
  def onboard_car(self, car):
    self.cars_on_board.append(car)`}</CodeBlock>
        <p>
          Een <Code>Ferry</Code> is een nieuwe klasse die meerdere{" "}
          <Code>Car</Code>s kan bevatten.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Objecten en call semantics</h2>
        <p>
          Klassen zijn blauwafdrukken voor objecten. Klassen en objecten kunnen
          redelijk complex worden. Om geheugengebruik te optimaliseren, gebruikt
          Python (en bijna elke andere taal) standaard <b>call by reference</b>{" "}
          voor objecten.
        </p>
        <p>
          Het gevolg hiervan is dat objecten met elkaar verbonden kunnen worden
          door referenties naar elkaar op te slaan. Dit kan leiden tot een
          'ketting' van data.
        </p>
        <StatusBox variant="info">
          Python en vele andere talen zijn achter de schermen zelf opgebouwd als
          een complex 'netwerk' van klassen.
        </StatusBox>
      </RVSlide>
      <RVSlide>
        <h2>Gevolgen van call by reference</h2>
        <p>
          Stel dat we twee veerboten hebben. Op beide veerboten wordt telkens
          een blauwe wagen geladen. Je zou dit als volgt kunnen programmeren:
        </p>
        <CodeBlock>{`ferry_1 = Ferry()
ferry_2 = Ferry()

blue_car = Car('blue')
ferry_1.onboard_car(blue_car)
ferry_2.onboard_car(blue_car)`}</CodeBlock>
        <p>Dit lijkt correct, maar er zit een logische fout in. Welke?</p>
        <div className="fragment">
          <p>
            Beide veerboten slaan een referentie op naar dezelfde wagen. Het is
            alsof de wagen op de twee boten tegelijk aanwezig is, wat in
            werkelijkheid niet kan.
          </p>
          <CenteredImage src={ObjectCallByRef} />
        </div>
      </RVSlide>
      <RVSlide>
        <h2>Call by reference doorbreken</h2>
        <p>
          Soms is call by reference niet gewenst wanneer je werkt met objecten.
          In die gevallen kan je het probleem oplossen door kopieën van objecten
          te maken.
        </p>
        <p>In Python:</p>
        <CodeBlock>{`import copy

blue_car = Car('blue')
ferry_1.onboard_car(blue_car)
ferry_2.onboard_car(copy.copy(blue_car))`}</CodeBlock>
        <ol>
          <li>
            Importeer de module <Code>copy</Code> (deel van de Python standard
            library)
          </li>
          <li>
            Roep <Code>copy(obj)</Code> op uit de module. De methode geeft een
            kopie terug van <Code>obj</Code>
          </li>
        </ol>
      </RVSlide>
      <RVSlide>
        <h2>
          <Code>copy()</Code> versus <Code>deepcopy()</Code>
        </h2>
        <p>
          Python heeft nog een tweede methode: <Code>deepcopy()</Code>. Ze werkt
          gelijkaardig aan <Code>copy()</Code>, maar er is een subtiel verschil:
        </p>
        <CodeBlock>
          {`# ferry_a is een oppervlakkige kopie:
# de boot is gekopieerd, maar de wagens op de boot niet
ferry_b = copy.copy(ferry_a)

# in ferry_c zijn zowel de boot als alle
# wagens op de boot kopieën van ferry_a
ferry_c = copy.deepcopy(ferry_c)`}
        </CodeBlock>
        <p>Welke je nodig hebt, hangt af van de situatie en de code.</p>
        <StatusBox variant="info">
          Merk op dat voor objecten van <Code>Car</Code> het resultaat van{" "}
          <Code>copy()</Code> en <Code>deepcopy()</Code> hetzelfde is. Waarom?
        </StatusBox>
      </RVSlide>
      <RVSlide>
        <h2></h2>
        <p>
          De code hieronder test het gedrag van <Code>copy()</Code> en{" "}
          <Code>deepcopy()</Code> op <Code>Ferry</Code>. Welke{" "}
          <Code>assert</Code>(s) zal/zullen <b>falen</b>?
        </p>
        <CodeBlock>{`ferry_1 = Ferry()
my_car = Car("yellow")
ferry_1.onboard_car(my_car)

ferry_2 = copy.copy(ferry_1)
assert ferry_1 == ferry_2  # 1
assert ferry_1.cars_on_board[0] == ferry_2.cars_on_board[0]  # 2

ferry_3 = copy.deepcopy(ferry_1)
assert ferry_1 != ferry_3  # 3
assert ferry_1.cars_on_board[0] == ferry_3.cars_on_board[0]  # 4`}</CodeBlock>
        <Quiz
          answers={[
            createQuizAnswer("1 en 4", true),
            createQuizAnswer("2 en 3"),
            createQuizAnswer("1"),
            createQuizAnswer("3"),
          ]}
        />
      </RVSlide>
      <RVSlide>
        <h2>Gelijkheid tussen objecten</h2>
        <p>
          Twee objecten zijn gelijk (<Code>==</Code>) als hun referentie
          hetzelfde is. Met andere woorden: ze refereren naar dezelfde plaats in
          het geheugen.
        </p>
        <p>
          Een kopie van een object heeft een andere plek in het geheugen en dus
          ook een andere referentie.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>
          Details van <Code>deepcopy()</Code>
        </h2>
        <p>
          <Code>deepcopy()</Code> gaat automatisch alle subobjecten van een
          object kopiëren. Dit werkt voor 1 laag, 2 lagen, ... n lagen van
          objecten.
        </p>
        <p>
          Welk concept past Python hier achter de schermen toe? Tip: denk terug
          aan de vorige lessen.
        </p>
        <StatusBox variant="info" delayed>
          <Code>deepcopy()</Code> werkt <b>recursief</b>. De base case is dat
          een object geen subobjecten heeft.
        </StatusBox>
      </RVSlide>
    </RVSlide>
  );
};

const Opdrachten = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h2></h2>
        <h1>Opdrachten</h1>
      </RVSlide>
      <RVSlide>
        <h2>Opdracht 1</h2>
        <p>
          Doorloop de theorie in het handboek en maak de extra opgaven rond
          punten en rechthoeken tussendoor. Maak dan Opgave 20.1 op p.255.
        </p>
        <p> Dit telt samen als één oefening voor het portfolio.</p>
      </RVSlide>
      <RVSlide>
        <h2>Opdracht 2</h2>
        <p>
          Versimpelde versie van handboek &gt; p. 255 &gt; Opgave 20.2, zonder
          leeftijd.
        </p>
        <p>
          Een student heeft een voornaam, een achternaam, een geboortedatum
          (bestaande uit jaar, maand, en dag) en een administratienummer. Een
          cursus heeft een naam en een nummer. Studenten kunnen zich inschrijven
          voor cursussen. Creëer een class <Code>Student</Code> en een class{" "}
          <Code>Cursus</Code>. Creëer een aantal studenten en een aantal
          cursussen. Schrijf iedere student in voor een paar cursussen. Toon een
          lijst van studenten, die hun nummer, voornaam, achternaam en
          geboortedatum toont, en per student alle cursussen waarvoor de student
          is ingeschreven.
        </p>
        <p>Je mag extra klassen creëren indien gewenst.</p>
      </RVSlide>
      <RVSlide>
        <h2>Opdracht 3</h2>
        <p>
          Breid de code van de wagens en de veerboten uit. Elke wagen heeft nu
          een gewicht in kg. Elke veerboot heeft een limiet op het aantal kg dat
          ingeladen mag worden. De standaardwaarde is 100.000kg. Zorg voor een
          manier om eenvoudig de huidige belasting te berekenen.
        </p>
        <p>
          Voordat een wagen op een veerboot kan rijden, wordt eerst het aantal
          aanwezige wagens geteld. Als de boot reeds vol is, gebeurt er niets en
          loopt het programma gewoon verder.
        </p>
        <p>
          Schrijf zelf testen met <Code>assert</Code> om te bewijzen dat het
          aantal wagens op de boot niet toeneemt wanneer de gewichtslimiet
          overschreden zou worden.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Opdracht van vorige jaren</h2>
        <p>
          In de lerarenopleiding van een Vlaamse hogeschool vinden verkiezingen
          plaats voor de samenstelling van de opleidingscommissie (OC) en
          programmaraad (PR). Elke lector kan zich opgeven als kandidaat voor de
          OC, of de PR, of beide. Stemgerechtigd zijn de studenten: een student
          mag 1 stem uitbrengen voor de OC en 1 voor de PR. Het moet mogelijk
          zijn lijsten te tonen met de kandidaten die zich inschreven voor ofwel
          de OC ofwel de PR. Van elke kandidaat moeten daarin de naam, de
          leeftijd en het geslacht vermeld worden. Voor een bepaalde verkiezing
          (OC of PR) moet op aanvraag een lijst kunnen getoond worden met de
          “stand”: hoeveel stemmen behaalden de kandidaten (al)? Een dergelijke
          lijst moet gerangschikt zijn in volgorde van afnemende hoeveelheid
          stemmen, en kunnen getoond worden voor ofwel alle ingeschreven
          kandidaten, ofwel enkel de mannelijke, ofwel enkel de vrouwelijke. De
          “stand”-lijst met alle kandidaten moet bovendien ook het totaal aantal
          (al) uitgebrachte stemmen voor de betreffende commissie of raad
          aangeven.
        </p>
        <p>
          Ontwerp, implementeer en test een objectgericht/objectgebaseerd
          programma in Python dat deze functionaliteiten biedt.
        </p>
      </RVSlide>
    </RVSlide>
  );
};

export default Les;
