import Image from "next/image";
import {
  RVPresentation,
  RVSlide,
  CodeBlock,
  Quote,
  Code,
  InfoBox,
} from "../../../components/RevealComponents";
import OOPConcepts from "../../../public/oop-concepts.jpg";

const Les = () => {
  return (
    <RVPresentation>
      <RVSlide>
        <h1>Programmeren 1</h1>
        <h2>Les 8</h2>
      </RVSlide>
      <RVSlide>
        <h2>Overzicht</h2>
        <ul>
          <li>OGP: filosofie en concepten</li>
          <li>OGP in Python</li>
          <li>Opdrachten</li>
        </ul>
      </RVSlide>
      <OGPFilosofie />
      <OGPPythonPart1 />
      <OGPPythonPart2 />
      <Nabeschouwing />
      <Opdrachten />
    </RVPresentation>
  );
};

const OGPFilosofie = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Wat is objectgericht programmeren?</h1>
        <h2>Filosofie</h2>
      </RVSlide>
      <RVSlide>
        <h2>Programmeerparadigma's</h2>
        <p>
          Doorheen de jaren zijn er meerdere paradigma's ontwikkeld om
          programma's te ontwerpen.
        </p>
        <p>
          Dit vak behandelt vooral <b>imperatief programmeren</b>. Het houdt in
          dat je de computer stap voor stap bevelen geeft. Bijvoorbeeld:
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
          Deze les focussen we op een ander paradigma:{" "}
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
    </RVSlide>
  );
};

const OGPPythonPart1 = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Objectgericht programmeren in Python</h1>
        <h2>Deel 1: klasses, objecten, attributen en types</h2>
      </RVSlide>
      <RVSlide>
        <h2>OGP syntax in Python</h2>
        <p>
          Python ondersteunt zowel imperatief programmeren als objectgericht
          programmeren. Voor het laatstgenoemde komt er wat nieuwe syntax aan te
          pas.
        </p>
        <p>
          Een klasse declareer je met het speciale woord <Code>class</Code>:
        </p>
        <CodeBlock>{`class Car:
  # Beschrijving van wat een car is (op dit moment niets)
  pass`}</CodeBlock>
        <p>
          Alles wat deel is van de klasse, is <b>naar rechts geïndenteerd</b>.{" "}
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Nieuwe objecten aanmaken</h2>
        <p>
          Om een nieuwe instantie van een <Code>Car</Code> te maken, gebruik je{" "}
          <Code>Car()</Code>:
        </p>
        <CodeBlock>{`my_car = Car()
oldtimer = Car()`}</CodeBlock>
        <p>
          Merk op dat <Code>my_car</Code> en <Code>oldtimer</Code> twee aparte
          objecten zijn, maar voor de rest identiek zijn. We hebben nog geen
          attributen toegevoegd aan de klasse <Code>Car</Code>.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Constructors</h2>
        <p>
          Elke klasse heeft een speciale methode die beschrijft hoe een nieuwe
          instantie van die klasse er uit moet zien. Dit noemt men de{" "}
          <b>constructor</b> van een klasse.
        </p>
        <p>
          In Python schrijf je de constructor als <Code>__init__()</Code>:
        </p>
        <CodeBlock>{`class Car:
  def __init__(self):
    self.km_travelled = 0`}</CodeBlock>
        <p>
          {" "}
          Deze constructor definieer één attribuut: <Code>km_travelled</Code>.
          De waarde is steeds <Code>0</Code> bij initialisatie van een nieuwe
          instantie.
        </p>
        <p>
          <Code>self</Code> is een speciaal woord dat verwijst naar de instantie
          waarmee je bezig bent. In dit geval is <Code>self</Code> de nieuwe
          auto die je gaat aanmaken.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Constructors met parameters</h2>
        <p>
          Een constructor kan parameters accepteren. Je kan deze parameters
          linken aan attributen van <Code>self</Code>:
        </p>
        <CodeBlock>{`class Car:
  def __init__(self, color):
    self.color = color
    self.km_travelled = 0`}</CodeBlock>
        <p>
          Merk op dat we enkel een parameter voor de kleur hebben toegevoegd,
          niet voor de afgelegde afstand. Als programmeur kan je zelf kiezen hoe
          'flexibel' een klasse is.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Attributen opvragen</h2>
        <p>
          We kunnen nu nieuwe <Code>Car</Code>s aanmaken met aparte attributen:
        </p>
        <CodeBlock>{`my_car = Car("red")
company_car = Car("black")`}</CodeBlock>
        <p>
          Nadien kan je de attributen van een object opvragen. De algemene
          notatie is <Code>object.attribuut</Code>:
        </p>
        <CodeBlock>{`print(my_car.color)  # red
print(company_car.color)  # black
print(company_car.km_travelled)  # 0`}</CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>Types van objecten</h2>
        <p>
          We kennen al de types <Code>string, int, float, bool</Code>. Wat zou
          het type van <Code>my_car</Code> zijn?
        </p>
        <div className="fragment">
          <CodeBlock>{`>>> type(my_car)
    <class '__main__.Car'>`}</CodeBlock>
          <p>
            Elke klasse definieert een <b>nieuw type</b> voor zichzelf.
          </p>
        </div>
      </RVSlide>
      <RVSlide>
        <h2>Opdracht</h2>
        <p>
          Schrijf een klasse <Code>FarmAnimal</Code> die een boerderijdier
          voorstelt. De klasse heeft volgende attributen:
        </p>
        <ul>
          <li>
            <Code>species</Code>: het soort dier (bv. kip, koe, ...)
          </li>
          <li>
            <Code>hunger</Code>: hoe hongerig het dier is. Start op 0, kan gaan
            tot maximaal 100
          </li>
          <li>
            <Code>produce_cost</Code>: hoeveel <Code>hunger</Code> er bijkomt
            als het dier iets produceert
          </li>
        </ul>
        <p>
          Schrijf een constructor waaraan je de diersoort en de productiekost
          kan meegeven.
        </p>
        <CodeBlock>{`tok_tok = FarmAnimal('chicken', 10)
bella = FarmAnimal('cow', 60)`}</CodeBlock>
      </RVSlide>
    </RVSlide>
  );
};

const OGPPythonPart2 = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Objectgericht programmeren in Python</h1>
        <h2>Deel 2: methodes</h2>
      </RVSlide>
      <RVSlide>
        <h2>Methodes definiëren</h2>
        <p>
          Methodes lijken hard op functies. Het enige verschil is dat ze binnen
          een klasse worden gedefinieerd, en <Code>self</Code> als eerste
          parameter hebben.
        </p>
        <CodeBlock>{`class Car:
  # voorgaande code...
  
  def drive(self, nb_km):
    self.km_travelled += nb_km`}</CodeBlock>
        <p>
          Deze methode wijzigt de waarde van een attribuut van het object. De
          algemene syntax is <Code>object.attribuut = nieuwe_waarde</Code>
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Methodes oproepen</h2>
        <p>
          Je roept een methode op vanuit een concreet object. De syntax is{" "}
          <Code>object.methode()</Code>
        </p>
        <CodeBlock>
          {`my_car.drive(10)  # rijdt 10 km
print(my_car.km_travelled)  # 10

my_car.drive(5)
company_car.drive(70)

print(my_car.km_travelled)  # 15
print(company_car.km_travelled)  # 70`}
        </CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>
          Speciale methodes: <Code>__repr__()</Code>
        </h2>
        <p>
          Python heeft een aantal voorgedefinieerde methodes voor klassen.{" "}
          <Code>__init__()</Code> is een ervan.
        </p>
        <p>
          <Code>__repr__()</Code> geeft de volledige representatie van een
          object weer als een <Code>string</Code>. Het wordt gebruikt om een
          object te tonen in de Python console:
        </p>
        <CodeBlock>{`>>> a = Car("yellow")
>>> a
    <__main__.Car object at 0x0000026B3AE5EE60>`}</CodeBlock>
        <p>
          Standaard is dit het adres van het object in het geheugen van je
          computer, wat zelden nuttig is.{" "}
        </p>
      </RVSlide>
      <RVSlide>
        <p>
          Je kan de methode <Code>__repr__()</Code> herdefiniëren binnen je
          klassen:
        </p>
        <CodeBlock>{`class Car:
  # Vorige code...

  def __repr__(self):
    return self.color + ", " + str(self.km_travelled)`}</CodeBlock>
        <CodeBlock>{`>>> a = Car("yellow")
>>> a
    yellow, 5`}</CodeBlock>
        <InfoBox>
          Laat <Code>__repr__()</Code> bij voorkeur een string teruggeven met de
          waarden van <b>alle</b> attributen. Hou de string beknopt.
        </InfoBox>
      </RVSlide>
      <RVSlide>
        <h2>
          Speciale methodes: <Code>__str__()</Code>
        </h2>
        <p>
          <Code>__str__()</Code> geeft een (bij voorkeur mooi geschreven)
          voorstelling van een object weer als een <Code>string</Code>. Het
          wordt onder andere gebruikt als je een object <Code>print()</Code>.
        </p>
        <CodeBlock>{`class Car:
  # Vorige code...

  def __str__(self):
    return "Color: " + self.color + " | Distance travelled: " + str(self.km_travelled) + " km"`}</CodeBlock>
        <CodeBlock>{`>>> a = Car("yellow")
>>> print(a)
    Color: yellow | Distance travelled: 5 km
`}</CodeBlock>
        <p>
          Als <Code>__str__()</Code> niet gedefinieerd is, wordt{" "}
          <Code>__repr__()</Code> in de plaats gebruikt.
        </p>
      </RVSlide>
      <RVSlide>
        <InfoBox>
          <p>Afspraken:</p>
          <ul>
            <li>
              <Code>__str__()</Code> mag mooi geformatteerde tekst teruggeven.
              Het is OK om niet alle attributen te vermelden
            </li>
            <li>
              Definieer nooit <Code>__str__()</Code> zonder eerst{" "}
              <Code>__repr__()</Code> te definiëren
            </li>
            <li>
              Het is aan te raden deze methodes te definiëren, maar dit is niet
              altijd verplicht. Weeg het voordeel (leesbare objecten) af tegen
              het nadeel (extra werk)
            </li>
          </ul>
        </InfoBox>
      </RVSlide>
      <RVSlide>
        <h2>Opdracht</h2>
        <p>
          Breidt de klasse <Code>FarmAnimal</Code> uit met volgende methodes:
        </p>
        <p>
          <b>
            <Code>produce()</Code>
          </b>{" "}
          laat het dier iets produceren, waardoor <Code>hunger</Code> toeneemt
          met <Code>produce_cost</Code>. Als het dier niets kan produceren omdat
          honger 100 zou bereiken, <Code>print()</Code> dan een waarschuwing in
          de plaats.
        </p>
        <p>
          <b>
            <Code>feed()</Code>
          </b>{" "}
          zet <Code>hunger</Code> terug op 0.
        </p>
        <p>
          <b>
            <Code>__repr__()</Code>
          </b>{" "}
          print alle attributen af met een komma ertussen.
        </p>
        <div>
          <b>
            <Code>__str__()</Code>
          </b>{" "}
          print volgende informatie uit:
          <ul>
            <li>
              <Code>Species:</Code>, gevolgd door de diersoort
            </li>
            <li>
              <Code>Is hungry:</Code> als het dier niets meer kan produceren
              door de honger, toon True. Anders, toon False
            </li>
          </ul>
        </div>
        <CodeBlock>{`print(bella)  # Species: Cow - Is hungry: False
bella.produce()  # OK, hunger at 60
bella.produce()  # Waarschuwing: kan niet produceren
print(bella)  # Species: Cow - Is hungry: True
`}</CodeBlock>
      </RVSlide>
    </RVSlide>
  );
};

const Nabeschouwing = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Nabeschouwing</h1>
        <h2>Nut van OGP en programmeerparadigma's in het algemeen</h2>
      </RVSlide>
      <RVSlide>
        <h2>OGP of dictionaries?</h2>
        <p>
          In Python is er een zekere overlap tussen objecten en dictionaries:
        </p>
        <ul>
          <li>Beiden slaan data op</li>
          <li>Beiden zijn aanpasbaar</li>
          <li>Objecten hebben attributen, dictionaries hebben keys</li>
        </ul>
        <p>
          Als een 'ding' enkel uit simpele data bestaat die niet of weinig
          verandert, is een dictionary eenvoudiger. Als de <b>toestand</b>{" "}
          echter regelmatig verandert, gebruik je beter objecten.
        </p>
        <p>
          Deels hangt dit ook af van de taal. Sommige talen maken objectgericht
          programmeren heel makkelijk, andere talen prefereren dictionaries.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>OGP en Computationeel denken</h2>
        <p>
          Objectgericht programmeren is een toepassing van een van de principes
          van Computationeel denken. Welke?
        </p>
        <div className="fragment">
          <b>Abstractie</b> draait om het verbergen van details en enkel het
          bewaren van de essentie. Objecten en klassen zijn een extra
          abstractielaag over je code. Je werkt in termen van objecten met
          attributen en methodes, in plaats van variabelen en functies. De
          achterliggende details zijn 'verborgen' voor de gebruikers van de
          klasse.
        </div>
      </RVSlide>
      <RVSlide>
        <h2>Welk paradigma is het beste?</h2>
        <p>
          Objectgericht programmeren is niet het enige paradigma. Imperatief
          programmeren hebben we ook gezien, en er zijn er nog andere (die niet
          verder behandeld worden).
        </p>
        <p>
          Je kan volledige vakken besteden aan één paradigma (ook aan OGP).
          Onder de community van programmeurs kan je hevige voor- en
          tegenstanders van elk paradigma vinden.
        </p>
        <p>
          Uiteindelijk zijn paradigma's een <b>middel</b> om code op een
          bepaalde manier te schrijven. Net zoals programmeertalen, hangt de
          keuze voor een paradigma vooral af van het probleem dat je wilt
          oplossen. Bovendien ondersteunt niet elke taal elk paradigma.
        </p>
      </RVSlide>
    </RVSlide>
  );
};

const Opdrachten = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Opdrachten</h1>
      </RVSlide>
      <RVSlide>
        <h2>Opdrachten: assertions</h2>
        <p>
          Sommige opdrachten in Dodona vragen om een <Code>AssertionError</Code>{" "}
          te geven als aan een bepaalde voorwaarde niet is voldaan.
          Bijvoorbeeld:
        </p>
        <CodeBlock>{`>>> galgje.raadLetter(5)
Traceback (most recent call last):
AssertionError: argument is geen letter`}</CodeBlock>
        <p>
          Je kan dit programmeren door middel van een <Code>assert</Code>:
        </p>
        <CodeBlock>
          {`class Galgje:
  def raadLetter(self, letter):
    assert type(letter) == str, "argument is geen letter"`}
        </CodeBlock>
        <p>
          <Code>type(letter) == str</Code> controleert of <Code>letter</Code>{" "}
          van het type <Code>str</Code> is. Deze syntax werkt ook voor andere
          types.
        </p>
        <p>
          <Code>assert</Code> controleert of de conditie erna <Code>True</Code>{" "}
          is. Indien niet, gooit het een <Code>AssertionError</Code>.
        </p>
      </RVSlide>
    </RVSlide>
  );
};

export default Les;
