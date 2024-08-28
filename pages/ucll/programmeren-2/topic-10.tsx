import { CenteredImage } from "../../../components/CenteredImage";
import { Math } from "../../../components/Math";
import {
  RVPresentation,
  RVSlide,
  CodeBlock,
  Code,
} from "../../../components/RevealComponents";
import { StatusBox } from "../../../components/StatusBox";
import { TwoColumns } from "../../../components/TwoColumns";
import OOPUML1 from "../../../public/programmeren-2/oop-uml-1.png";
import OOPUMLAssociation from "../../../public/programmeren-2/oop-uml-association.png";
import OOPUMLInheritance from "../../../public/programmeren-2/oop-uml-inheritance.png";
import OOPUMLAbstractClass from "../../../public/programmeren-2/oop-uml-abstract-class.png";
import OOPUMLInterface from "../../../public/programmeren-2/oop-uml-interface.png";
import OOPUMLVisibility from "../../../public/programmeren-2/oop-uml-visibility.png";
import { useRouter } from "next/router";
import { DownloadPdfButton } from "../../../components/DownloadPdfButton";

const Les = () => {
  const router = useRouter();
  return (
    <RVPresentation>
      <RVSlide>
        <h2>Programmeren 2</h2>
        <h1>Topic 10: OGP - varia en UML</h1>
        <DownloadPdfButton routerPathName={router.pathname} />
      </RVSlide>
      <RVSlide>
        <h2>Overzicht</h2>
        <ul>
          <li>Method overloading</li>
          <li>Operator overloading</li>
          <li>Iterators en generators</li>
          <li>OO-analyse en ontwerp met UML</li>
          <li>OO-analyse en UML inoefenen</li>
        </ul>
        <p>
          Van de eerste drie topics moet je geen oefeningen maken voor het
          portfolio.
        </p>
      </RVSlide>
      <Overloading />
      <OperatorOverloading />
      <Iterators />
      <UML />
      <UMLOpdrachtSimpel />
      <UMLOpdrachtPortfolio />
    </RVPresentation>
  );
};

const Overloading = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Method overloading</h1>
      </RVSlide>
      <RVSlide>
        <h2>Overloading</h2>
        <p>
          Functies en methodes hebben een <b>signatuur</b>, bestaande uit:
        </p>
        <ul>
          <li>naam</li>
          <li>aantal parameters, hun types en volgorde</li>
          <li>(in sommige talen) namen van parameters, return type</li>
        </ul>
        <p>
          <b>Method overloading</b> houdt in dat een methode in een klasse
          meerdere keren gedefinieerd kan worden. Elke variant moet wel een
          unieke signatuur heben. Aangezien de naam al hetzelfde is, moet het
          verschil zitten in de rest van de signatuur.
        </p>
        <p>
          <b>Function overloading</b> bestaat ook en volgt hetzelfde principe,
          maar dan met functies buiten klassen.
        </p>
        <p>
          Python ondersteunt method/function overloading niet helemaal. Op de
          volgende slide is er een voorbeeld van Java, waar er wel volwaardige
          ondersteuning is.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Method overloading - voorbeeld in Java</h2>
        <CodeBlock className="text-base" language="Java">{`public class Circle {
  private Point center;
  private double radius;

  // Constructor 1: punt en straal
  public Circle(Point center, double radius) {
    this.center = center;
    this.radius = radius;
  }

  // Constructor 2: twee punten
  public Circle(Point point1, Point point2) {
    double centerX = (point1.getX() + point2.getX()) / 2;
    double centerY = (point1.getY() + point2.getY()) / 2;
    double radius = Math.sqrt(
        Math.pow(
            point2.getX() - point1.getX(), 2) +
            Math.pow(point2.getY() - point1.getY(), 2))
        / 2;

    this.center = new Point(centerX, centerY);
    this.radius = radius;
  }
}`}</CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>Details</h2>
        <p>De cruciale lijnen zijn de twee signatures van de constructors:</p>
        <CodeBlock
          className="text-base"
          language="Java"
        >{`public Circle(Point center, double radius) { ... }
        
public Circle(Point point1, Point point2) { ... }`}</CodeBlock>
        <ul>
          <li>De namen van de methodes zijn hetzelfde</li>
          <li>
            Toch is de signatuur verschillend: de types van de parameters zijn
            anders
          </li>
        </ul>
        <p>
          Wanneer je een <Code>Circle</Code> creëert in Java, zal het programma
          automatisch kunnen afleiden welke constructor in welke situatie
          gebruikt moet worden, door de types van de parameters te controleren.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Aandachtspunten</h2>
        <StatusBox variant="remember">
          Verwar method <b>overloading</b> niet met method <b>overriding</b>.
          Bij overriding overschrijft een klasse een methode van hun{" "}
          <i>superklasse</i>. Overloading heeft niets te maken met superklassen
          of overerving.
        </StatusBox>
        <StatusBox variant="edu">
          Method overloading is iets extra dat soms van pas komt, maar is geen
          kernleerstof in de meeste vakken.
        </StatusBox>
      </RVSlide>
    </RVSlide>
  );
};

const OperatorOverloading = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Operator overloading</h1>
      </RVSlide>
      <RVSlide>
        <h2>Probleemstelling</h2>
        <p>
          In Python kan een <Code>+</Code> meerdere dingen doen:
        </p>
        <ul>
          <li>
            Twee <Code>int</Code>s optellen
          </li>
          <li>
            Een <Code>int</Code> met een <Code>float</Code> optellen
          </li>
          <li>
            Twee <Code>string</Code>s samenvoegen (concateneren)
          </li>
          <li>...</li>
        </ul>
        <p>
          Als we zelf nieuwe klassen maken, willen we soms ook gebruik maken van{" "}
          <Code>+</Code> en andere operatoren (
          <Code>{`-, * , /, ==, <=,`}</Code>, ...) om met onze klassen te
          werken.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Operator overloading</h2>
        <p>
          <b>Operator overloading</b> houdt in dat je operators{" "}
          <Code>{`+, -, * , /, ==, <=`}</Code>, ... een nieuwe definitie geeft
          voor bepaalde klassen.
        </p>
        <p>In Python is elke operator gelinkt aan een speciale methode:</p>
        <ul>
          <li>
            <Code>__add__()</Code> voor <Code>+</Code>
          </li>
          <li>
            <Code>__mul__()</Code> voor <Code>*</Code>
          </li>
          <li>
            <Code>__eq__()</Code> voor <Code>==</Code>
          </li>
          <li>...</li>
        </ul>
        <p>Volledige lijst: handboek hoofdstuk 21 (of zoek online op)</p>
        <p>
          Als je deze methode overschrijft in een bepaalde klasse, 'overload' je
          de operator. Je kan dan het overeenkomstige symbool gebruiken.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Voorbeeld: complexe getallen</h2>
        <p>
          Een complex getal <Math>a + bi</Math> bestaat uit twee delen:
        </p>
        <ul>
          <li>
            <Math>a</Math> is het reëel deel
          </li>
          <li>
            <Math>b</Math> is het imaginair deel
          </li>
        </ul>
        <p>
          De code hieronder definieert een klasse <Code>Complex</Code> om
          complexe getallen voor te stellen. Ze bevat ook een aantal testen met
          operators. Momenteel falen de testen.
        </p>
        <CodeBlock>{`class Complex:
  def __init__(self, a, b):
    self.a = a
    self.b = b

x = Complex(1, 2)
y = Complex(3, 4)

assert x + y == Complex(4, 6)
assert x * y == Complex(-5, 10)`}</CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>Voorbeeld</h2>
        <p>We moeten 3 operators overloaden:</p>
        <ul>
          <li>
            <Code>+</Code> om twee complexe getallen op te tellen
          </li>
          <li>
            <Code>==</Code> om twee complexe getallen te vergelijken (denk aan
            call by reference bij klassen!)
          </li>
          <li>
            <Code>*</Code> om twee complexe getallen te vermenigvuldigen
          </li>
        </ul>
        <p>
          Optellen is mogelijk door <Code>__add__()</Code> te overloaden:
        </p>
        <CodeBlock>{`class Complex:
  # ...      
  def __add__(self, other):
    return Complex(self.a + other.a, self.b + other.b)`}</CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>Opdracht</h2>
        <p>
          Kopieer de code van de vorige twee slides. Breidt ze dan verder uit:
        </p>
        <ul>
          <li>
            Overload <Code>==</Code> zodat de eerste test slaagt. Twee complexe
            getallen zijn gelijk als hun <Math>a</Math> en <Math>b</Math> gelijk
            zijn
          </li>
          <li>
            Overload <Code>*</Code> zodat de tweede test slaagt. De formule is{" "}
            <Math className="block mx-auto w-fit">
              (a+bi)(c+di) = (ac−bd) + (ad+bc)i
            </Math>{" "}
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Aandachtspunten</h2>
        <StatusBox variant="remember">
          Verwar operator overloading niet met method/function overloading.
        </StatusBox>
        <StatusBox variant="edu">
          Operator overloading is iets extra dat soms van pas komt, maar is geen
          kernleerstof in de meeste vakken.
        </StatusBox>
      </RVSlide>
    </RVSlide>
  );
};

const Iterators = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Iteratoren en generatoren</h1>
      </RVSlide>
      <RVSlide>
        <h2>Context</h2>
        <p>
          In Programmeren 1 heb je een aantal datastructuren gezien waarover je
          kan itereren: tuples, lijsten, dictionaries en strings. Deze
          structuren/objecten zijn itereerbaar (Engels: <i>iterable</i>).
        </p>
        <p>
          Van een itereerbaar object kan je een iterator opvragen door middel
          van <Code>iter()</Code>:
        </p>
        <CodeBlock>{`fruit = "banana"
fruit_iterator = iter(fruit)`}</CodeBlock>
        <p>
          Nadien kan je telkens het <b>volgende</b> element opvragen uit de
          iterator met <Code>next()</Code>:
        </p>
        <CodeBlock>{`print(next(fruit_iterator))  # b
print(next(fruit_iterator))  # a`}</CodeBlock>
        <StatusBox variant="info">
          Een <Code>for x in my_list</Code>-loop gebruikt achter de schermen{" "}
          <Code>iter(my_list)</Code> en <Code>next(my_list_iterator)</Code>.
        </StatusBox>
      </RVSlide>
      <RVSlide>
        <h2>Zelf iterators maken</h2>
        <p>
          <b>Elke klasse kan een iterator worden</b>. De klasse moet 2 methodes
          implementeren om als iterator beschouwd te worden:{" "}
          <Code>__iter__()</Code> en <Code>__next()__</Code>.
        </p>
        <p>
          Hoe je dit exact schrijft, kan je terug vinden in Hoofdstuk 23 van het
          handboek.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Generatoren</h2>
        <p>
          Generatoren zijn <b>functies</b> die itereerbare objecten nabootsen.
          Ze gebruiken daarvoor het gereserveerde woord <Code>yield</Code>.
        </p>
        <p>
          Generatoren zijn simpeler te schrijven dat iteratoren. Doordat het
          functies zijn, kunnen ze ook gecombineerd worden met andere functies
          (wordt niet verder behandeld).
        </p>
        <p>
          Hoe je een generator exact schrijft, kan je terug vinden in Hoofdstuk
          23 van het handboek.
        </p>
        <StatusBox variant="edu">
          Iteratoren en generatoren zijn niche-concepten. Ze zijn in bepaalde
          domeinen en problemen zeer nuttig, maar in de context van een
          middelbare school zullen ze zelden gebruikt worden. Niet elke taal
          ondersteunt ze even goed.
        </StatusBox>
      </RVSlide>
    </RVSlide>
  );
};

const UML = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>OO-analyse en ontwerp met UML</h1>
      </RVSlide>
      <RVSlide>
        <h2>OO-analyse</h2>
        <p>
          Als je een probleem krijgt voorgelegd, maak je daarvan een
          object-oriented-analyse, waarin je de te definiëren klassen bepaalt,
          met hun attributen en methodes.
        </p>
        <p>
          Het resultaat van zo'n analyse is een beschrijving van de oplossing.
          Heel vaak wordt dit genoteerd in UML (Unified Modeling Language). UML
          kan het volgende beschrijven:
        </p>
        <ul>
          <li>Klassen met hun attributen en methodes</li>
          <li>Verbanden tussen klassen</li>
          <li>
            Principes van overerving: interfaces, abstracte klassen,
            hiërarchieën van klassen
          </li>
          <li>Nog veel meer - wordt niet verder behandeld in dit vak</li>
        </ul>
        <p>
          Een diagram met klassen, verbanden en overerving noemt een{" "}
          <b>klassediagram</b>. Het is één van de meest gebruikte diagrammen in
          UML.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>UML-diagrammen tekenen</h2>
        <p>Er bestaan verschillende tools om UML-diagrammen te ontwerpen:</p>
        <ul>
          <li>
            <a href="https://staruml.io/" target="_blank">
              StarUML
            </a>
            : redelijk goed, maar moet lokaal geïnstalleerd worden
          </li>
          <li>
            <a href="https://app.diagrams.net/" target="_blank">
              draw.io
            </a>
            : online software om diagrammen te tekenen. Ondersteunt onder andere
            UML. Iets minder gebruiksvriendelijk
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>UML: klassen</h2>
        <p>Een klasse in UML ziet er als volgt uit:</p>
        <TwoColumns
          left={<CenteredImage src={OOPUML1} />}
          right={
            <ul>
              <li>Naam van klasse bovenaan</li>
              <li>Namen van attributen met type</li>
              <li>
                Namen van methodes met types voor parameters tussen haakjes, en
                return type achteraan. <Code>void</Code> wordt gebruikt om aan
                te geven dat een functie niets teruggeeft
              </li>
            </ul>
          }
        />
      </RVSlide>
      <RVSlide>
        <h2>UML: associatie</h2>
        <p>
          Een associatie (verband) tussen twee klassen noteer je met een lijn:{" "}
        </p>
        <CenteredImage src={OOPUMLAssociation} />
        <p>
          De cijfers bij de lijn geven de aantallen aan per collectie. Dit noemt
          men de <b>kardinaliteit</b>. In de figuur betekenen de
          kardinaliteiten:
        </p>
        <ul>
          <li>
            Elke <Code>Owner</Code> heeft tussen de 0 en oneindig aantal{" "}
            <Code>Pet</Code>s
          </li>
          <li>
            Elke <Code>Pet</Code> heeft exact 1 <Code>Owner</Code>
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>UML: overerving</h2>
        <p>Overerving tussen twee of meer klassen noteer je met een pijl:</p>
        <CenteredImage src={OOPUMLInheritance} width={300} />
        <p>
          De pijl wijst naar de superklasse. In de figuur erven <Code>Dog</Code>{" "}
          en <Code>Cat</Code> beiden van <Code>Pet</Code>.
        </p>
        <p>
          Merk op dat de attributen en methodes van <Code>Pet</Code> <b>niet</b>{" "}
          herhaald worden in de subklassen. Ze worden impliciet overgenomen.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>UML: abstracte klasse</h2>
        <p>
          In UML kan een klasse getransformeerd worden naar een abstracte klasse
          als volgt:
        </p>
        <CenteredImage src={OOPUMLAbstractClass} width={300} />
        <p>
          De naam wordt <i>schuin</i> geschreven. Vaak wordt ook{" "}
          <Code>{"<<abstract>>"}</Code> ervoor genoteerd. Dit schema geeft aan
          dat van <Code>Pet</Code> zelf geen objecten gemaakt kunnen worden,
          enkel van de subklassen ervan.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>UML: interface</h2>
        <p>Een interface in UML ziet er als volgt uit:</p>
        <CenteredImage src={OOPUMLInterface} width={300} />
        <p>
          Een interface lijkt op een klasse, maar heeft{" "}
          <Code>{"<<interface>>"}</Code> ervoor staan.
        </p>
        <p>
          Merk op dat <Code>Dog</Code> en <Code>Wolf</Code> de methode van{" "}
          <Code>Canine</Code> niet opnieuw vermelden. Ze nemen de methode
          impliciet over.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>UML: zichtbaarheid</h2>
        <p>
          Elk attribuut en methode heeft een bepaalde <b>zichtbaarheid</b>. In
          dit vak beperken we ons tot:
        </p>
        <ul>
          <li>
            <b>public</b>: overal zichtbaar. Aangegeven met <Code>+</Code>
          </li>
          <li>
            <b>private</b>: enkel zichtbaar binnen de klasse, nooit erbuiten.
            Aangegeven met <Code>-</Code>
          </li>
        </ul>
        <StatusBox variant="remember">
          De algemeen gangbare regel is om attributen altijd private te maken.
          Methodes mogen private of public zijn, dit hangt af van de vereisten.
          Om attributen beschikbaar te maken voor de rest van het programma, gebruik je getters en setters.
        </StatusBox>
        <p>Afspraken voor dit vak:</p>
        <ul>
          <li>
            Je <b>moet</b> deze regel volgen wanneer je een OO-analyse uitvoert
          </li>
          <li>
            Het is aangeraden - maar niet verplicht - deze regel te volgen in
            andere OOP-opdrachten
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>UML: zichtbaarheid toegepast</h2>
        <p>
          We zetten de attributen van <Code>Pet</Code> naar private. Er waren al
          publieke getters en setters toegevoegd in een eerdere stap, dus we
          moeten er geen bijmaken.
        </p>
        <CenteredImage src={OOPUMLVisibility} width={300} />
      </RVSlide>
      <RVSlide>
        <h2>Tips voor StarUML</h2>
        <ul>
          <li>
            Om attributen en methodes toe te voegen aan een klasse:
            <ol>
              <li>Dubbelklik op de klasse</li>
              <li>
                Gebruik het eerste icoon rechts om een attribuut toe te voegen,
                of het tweede icoon om een methode toe te voegen
              </li>
            </ol>
          </li>
          <li>
            Om een abstracte klasse of interface te tekenen:
            <ol>
              <li>Teken een gewone klasse</li>
              <li>Klik op de klasse</li>
              <li>
                Pas rechtsonderaan op het scherm de property <b>stereotype</b>{" "}
                aan naar <b>abstract</b> of <b>interface</b>
              </li>
              <li>
                Bij abstracte klassen moet je ook het vakje <b>isAbstract</b>{" "}
                aanvinken
              </li>
            </ol>
          </li>
          <li>
            {
              "De pijl om interfaces te verbinden met klassen, vind je onder Classes (Advanced) > Realization"
            }
          </li>
          <li>
            Je kan de zichtbaarheid van een attribuut of methode aanpassen door
            erop te klikken en dan de property <b>visibility</b> aan te passen
            (icoon links).
          </li>
        </ul>
      </RVSlide>
      {/* Waarom UML? communicatie, eenduidigheid, taalonafhankelijk */}
    </RVSlide>
  );
};

const UMLOpdrachtSimpel = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>OO-analyse en UML inoefenen</h1>
      </RVSlide>
      <RVSlide>
        <h2>Probleemstelling</h2>
        <p>
          Op een kleuterschool wil een juf bijhouden wanneer de kinderen
          verjaren, op welke datum de kinderen ingeschreven zijn, en in welke
          kleuterklas ze zitten. Bouw een programma om de juf hierbij te helpen.
        </p>
        <ol>
          <li>
            <b>Analyseer</b> de vereisten
          </li>
          <li>
            <b>Ontwerp</b> een oplossing met behulp van UML
          </li>
          <li>
            <b>Implementeer</b> de oplossing in Python
          </li>
        </ol>
      </RVSlide>
      <RVSlide>
        <h2>Analyse</h2>
        <p>
          Tijdens de analyse probeer je het probleem op te splitsen in aparte
          stukken (decompositie). Indien er volgens jou informatie ontbreek,
          probeer je hier een antwoord op te vinden, of je maakt bepaalde
          assumpties (die je duidelijk opschrijft). Het resultaat is een set van
          klasse, attributen, etc. waar je mee aan de slag kan.
        </p>
        <p>Tips voor analyses:</p>
        <ul>
          <li>
            Zoek de zelfstandige naamwoorden in de probleemstelling. Let op
            gebruik van enkelvoud en meervoud, dit kan aangeven of iets een
            lijst gaat worden in de implementatie
          </li>
          <li>
            Schat in welke begrippen belangrijk zijn voor de oplossing van het
            probleem (abstractie). Veralgemeen/hernoem begrippen indien nodig
            (veralgemening)
          </li>
          <li>
            Bepaal hun rol: (abstracte) klasse, attribuut, methode, interface
          </li>
        </ul>
        <p>
          <b>Opdracht</b>: pas dit toe op de probleemstelling van de juf.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Analyse: oplossing</h2>
        <ul>
          <li>
            Zelfstandige naamwoorden: kleuterschool, juf, kinderen, datum,
            kleuterklas
          </li>
          <li>
            Assumpties:{" "}
            <ul>
              <li>meerdere leerkrachten kunnen het systeem gebruiken</li>
              <li>
                Een klas bestaat uit een leerjaar (cijfer) en een letter of
                andere code (string)
              </li>
            </ul>
          </li>
          <li>
            Kernbegrippen: school, leerkracht, leerling, datum (dag, maand,
            jaar), klas
          </li>
          <li>
            Rollen:{" "}
            <ul>
              <li>Klassen: school, leerkracht, leerling, datum, klas</li>
              <li>Attributen: dag, maand, jaar, klasjaar, klasnummer</li>
              <li>
                Methodes: vraag verjaardag, vraag inschrijfdatum, vraag
                kleuterklas
              </li>
              <li>Geen interfaces of abstracte klassen</li>
            </ul>
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Ontwerp</h2>
        <p>
          Nu we de benodigde informatie hebben, kan je het klassediagram
          tekenen. Gebruik StarUML om het te maken. Bekijk de vorige slides voor
          meer informatie omtrent het gebruik van UML en StarUML.
        </p>
        <p>
          Een goed getekend klassediagram kan je geven aan eender welke
          programmeur die UML kent. Die zou dan in staat moeten zijn om de code
          te schrijven.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Implementeer</h2>
        <p>
          Implementeer het klassediagram in Python. Je mag alles in één bestand
          schrijven, of je mag het opsplitsen en met <Code>import</Code> werken.
        </p>
        <StatusBox variant="info">
          Om een attribuut of methode als private te markeren, laat je de naam
          ervan starten met <Code>_</Code>. Bijvoorbeeld: <Code>_age</Code>. Dit
          is een conventie specifiek voor Python.
        </StatusBox>
        <p>Test je code uit: voldoet de oplossing aan de vereisten?</p>
        <p>
          <b>Opmerking</b>: je hoeft geen uitgebreide user interface (UI) te
          programmeren of een hele reeks <Code>input()</Code> te schrijven om te
          testen. Creëer een simpele testsituatie bestaande uit een aantal
          objecten, voer een aantal methodes uit, en toon het resultaat op het
          scherm.
        </p>
      </RVSlide>
    </RVSlide>
  );
};

const UMLOpdrachtPortfolio = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>UML-opdracht voor portfolio</h1>
      </RVSlide>
      <RVSlide>
        <h2>Doel</h2>
        <p>
          Op de volgende slides vind je een probleemomschrijving. Pas dezelfde
          algemene strategie toe als bij de vorige sectie:
        </p>
        <ol>
          <li>
            Analyser het probleem: bepaal de vereisten van de oplossing, en
            splits de omschrijving op in aparte concepten die later
            klassen/attributen/methodes kunnen worden
          </li>
          <li>
            Ontwerp een oplossing: maak een UML klassediagram op basis van de
            analyse. Maak gebruik van OO-concepten die we in de vorige lessen
            hebben gezien.
          </li>
          <li>
            Implementeer de oplossing in Python. Hou rekening met de afspraken
            die gemaakt zijn in de vorige lessen omtrent objectgericht
            programmeren in Python.
          </li>
          <li>
            Test het programma uit: creëer een aantal objecten en roep methodes
            op. Het resultaat moet voldoen aan de verwachtingen beschreven in de
            opgave.
          </li>
        </ol>
        <p>
          <b>
            Het maken van deze opdracht is een belangrijk deel van je portfolio
          </b>
          . Zorg dat je opschrijft hoe je het probleem aanpakt. De analyse,
          eventuele assumpties, het klassediagram en de code moeten allemaal
          ingediend worden.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Opgave (gebaseerd op Examen Programmeren 2, januari 2019)</h2>
        <p>
          Voor de finale van een muziekconcours viool moeten de kandidaten elk
          een sonate en een concerto spelen. Kijkers kunnen hun stem uitbrengen
          op de kandidaat van hun voorkeur. Een “gewone” kijker mag maar één
          keer stemmen, op één kandidaat. Een “expert” kijker mag twee keer
          stemmen, op één of twee verschillende kandidaten. In de stand worden
          kandidaten gerangschikt in overeenstemming met het aantal stemmen dat
          zij behaalden.
        </p>
        <p>
          Het moet mogelijk zijn kandidaten in te schrijven voor de finale. Er
          moet een lijst kunnen getoond worden van de (al) ingeschreven
          kandidaten. In die lijst moet van elke kandidaat behalve zijn naam,
          ook de naam van de sonate en van het concerto dat hij/zij uitvoert,
          getoond worden. Ook de puntenstand moet op aanvraag op het scherm
          getoond worden en moet de namen van de kandidaten omvatten, evenals
          die van de gespeelde muziekstukken, en het aantal behaalde stemmen, en
          gerangschikt zijn in volgorde van afnemende hoeveelheid stemmen.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Extra informatie</h2>
        <p>Bij de evaluatie wordt rekening gehouden met:</p>
        <ul>
          <li>
            Ontwerp:{" "}
            <ul>
              <li>
                ontwerp en samenhang van klassen, en hun inhoud, volgens
                objectgerichte principes
              </li>
              <li>duidelijkheid en functionaliteit van je ontwerp</li>
            </ul>
          </li>
          <li>
            Implementatie:{" "}
            <ul>
              <li>
                correct en functioneel gebruik van controle- en
                gegevensstructuren, en eventueel recursie, in Python
              </li>
              <li>implementatie van het OO-ontwerp in Python</li>
            </ul>
          </li>
          <li>
            Gebruik en eventuele extra's
            <ul>
              <li>
                Correctheid en duidelijkheid van je voorbeeldcode waarmee je
                aantoont dat je oplossing voldoet aan de vereisten
              </li>
              <li>
                Kwaliteit van de informatie (analyse, assumpties, commentaar in
                code, ...) die je toevoegt aan je oefening
              </li>
            </ul>
          </li>
        </ul>
      </RVSlide>
    </RVSlide>
  );
};

export default Les;
