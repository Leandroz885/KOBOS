import { useRouter } from "next/router";
import { CenteredImage } from "../../../components/CenteredImage";
import {
  RVPresentation,
  RVSlide,
  CodeBlock,
  Code,
  Quiz,
  createQuizAnswer,
} from "../../../components/RevealComponents";
import { StatusBox } from "../../../components/StatusBox";
import { TwoColumns } from "../../../components/TwoColumns";
import tree from "../../../public/programmeren-2/animal-tree.png";
import InterfaceDrawing from "../../../public/programmeren-2/interfaces.png";
import { DownloadPdfButton } from "../../../components/DownloadPdfButton";

const Les = () => {
  const router = useRouter();
  return (
    <RVPresentation>
      <RVSlide>
        <h2>Programmeren 2</h2>
        <h1>Topic 9: overerving</h1>
        <DownloadPdfButton routerPathName={router.pathname} />
      </RVSlide>
      <RVSlide>
        <h2>Overzicht</h2>
        <ul>
          <li>Probleemstelling</li>
          <li>Overerving in Python</li>
          <li>Method overriding en Polymorfie</li>
          <li>
            <Code>object</Code>
          </li>
          <li>Meervoudige overerving, abstracte klassen en interfaces</li>
        </ul>
      </RVSlide>
      <Probleemstelling />
      <InheritanceInPython />
      <Polymorphism />
      <RootOfEverything />
      <MultipleInheritance />
      <Opdrachten />
    </RVPresentation>
  );
};

const Probleemstelling = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Waarom Overerving?</h1>
      </RVSlide>
      <RVSlide>
        <h2>Probleemstelling</h2>
        <p>Bekijk volgende twee klassen. Wat valt je op?</p>
        <TwoColumns
          className="gap-x-2"
          left={
            <CodeBlock>{`class Dog:
  def __init__(self, name, age):
    self.name = name
    self.age = age
  
  def celebrate_birthday(self):
    self.age += 1
  
  def is_adult(self):
    return self.age >= 1`}</CodeBlock>
          }
          right={
            <CodeBlock>{`class Cat:
def __init__(self, name, age):
  self.name = name
  self.age = age

def celebrate_birthday(self):
  self.age += 1

def is_adult(self):
  return self.age >= 2`}</CodeBlock>
          }
        />
      </RVSlide>
      <RVSlide>
        <h2>Probleemstelling</h2>
        <p>
          Het gebeurt heel vaak dat klassen op elkaar lijken. In zo'n gevallen
          willen we een manier hebben om <b>code te hergebruiken</b> tussen de
          klassen. Meer algemeen willen we een <b>hiërarchie van klassen</b>{" "}
          kunnen maken.
        </p>
        <p>
          Zeker als we bepaalde concepten willen modelleren uit de
          werkelijkheid, komt dit goed van pas. Denk bevoorbeeld aan stambomen
          uit de biologie.
        </p>
        <CenteredImage src={tree} />
      </RVSlide>
      <RVSlide>
        <h2>Voorbeeld</h2>
        <p>
          Stel je voor dat je een persoon op de campus Hertogstraat wilt
          voorstellen door middel van klassen:
        </p>
        <ul>
          <li>Welke splitsingen maak je op het hoogste niveau?</li>
          <li className="fragment">Hoe zou je studenten verder opdelen?</li>
          <li className="fragment">Hoe zou je personeel verder opdelen?</li>
          <li className="fragment">
            Kan je behalve studenten en personeel nog andere (sub)groepen
            onderscheiden?
          </li>
        </ul>
      </RVSlide>
    </RVSlide>
  );
};

const InheritanceInPython = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Overerving in Python</h1>
      </RVSlide>
      <RVSlide>
        <h2>Terminologie</h2>
        <p>
          Doel: we herschrijven het voorbeeld van <Code>Dog</Code> en{" "}
          <Code>Cat</Code> door gebruik te maken van <b>overerving</b> (Engels:{" "}
          <i>inheritance</i>).
        </p>
        <p>
          <Code>Dog</Code> en <Code>Cat</Code> zullen een <b>superklasse</b>{" "}
          <Code>Pet</Code> delen. Deze klasse bevat de code die op beide{" "}
          <b>subklassen</b> van toepassing is.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Voorbeeld met overerving</h2>
        <TwoColumns
          className="gap-x-2"
          left={
            <CodeBlock>{`class Pet:
  def __init__(self, name, age):
    self.name = name
    self.age = age
  
  def celebrate_birthday(self):
    self.age += 1`}</CodeBlock>
          }
          right={
            <CodeBlock>{`class Dog(Pet):
  def is_adult(self):
    return self.age >= 1

  def fetch_ball(self):
    pass

class Cat(Pet):
  def is_adult(self):
    return self.age >= 2`}</CodeBlock>
          }
        />
        <p>
          Algemeen kan een klasse <Code>B</Code> overerven van een klasse{" "}
          <Code>A</Code> door het volgende te schrijven:
        </p>
        <CodeBlock>{`class B(A):`}</CodeBlock>
        <p>
          Elk object van type <Code>B</Code> zal automatisch de attributen en
          methodes van <Code>A</Code> overnemen.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Klassen oproepen</h2>
        <p>Voorbeeld:</p>
        <CodeBlock>{`tom = Cat("Tom", 1)
neighbour_dog = Dog("Basil", 1)

assert tom.age == 1
assert neighbour_dog.age == 1

assert tom.is_adult() == False
assert neighbour_dog.is_adult() == True`}</CodeBlock>
      </RVSlide>
    </RVSlide>
  );
};

const Polymorphism = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Method Overriding en Polymorfie</h1>
      </RVSlide>
      <RVSlide>
        <h2>Method Overriding en Polymorfie</h2>
        <p>
          In het codevoorbeeld hebben we twee klassen <Code>Dog</Code> en{" "}
          <Code>Cat</Code> die elk de methode <Code>is_adult()</Code>{" "}
          definiëren.
        </p>
        <p>
          We kunnen deze methode ook in de superklasse <Code>Pet</Code>{" "}
          definiëren:
        </p>
        <CodeBlock>{`class Pet:
  def is_adult(self):
    self.age > 18`}</CodeBlock>
        <p>
          Er bestaan nu 3 versies van <Code>is_adult()</Code>. De subklassen{" "}
          <Code>Dog</Code> en <Code>Cat</Code> overschrijven de versie van de
          superklasse <Code>Pet</Code>. Men noemt dit meer algemeen het{" "}
          <b>overschrijven</b> van methodes (Engels: <i>method overriding</i>).
        </p>
        <p>
          Wanneer twee of meerdere klassen een verschillende versie hebben van
          dezelfde methode, noemt men dit <b>polymorfie</b> (Engels:{" "}
          <i>Polymorphism</i>).
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Keuze van versie?</h2>
        <p>
          Welke versie wordt nu gebruikt voor een object? Dit hangt af van het
          type:
        </p>
        <ol>
          <li>
            Als de methode bestaat in de klasse die overeenkomt met het type,
            roep dan die versie op
          </li>
          <li>
            Anders als er een superklasse is, herhaal (1) met de superklasse
          </li>
          <li>Anders: stop en gooi een error</li>
        </ol>
        <p>
          Dit proces werkt recursief tot er geen superklasse meer is (je hebt de
          top van de boomstructuur bereikt).
        </p>
        <p>Toegepast op het voorbeeld:</p>
        <ul>
          <li>
            <Code>tom</Code> gebruikt <Code>is_adult()</Code> van{" "}
            <Code>Cat</Code>
          </li>
          <li>
            <Code>neighbour_dog</Code> gebruikt <Code>is_adult()</Code> van{" "}
            <Code>Dog</Code>
          </li>
          <li>
            stel dat <Code>is_adult()</Code> niet bestond in <Code>Dog</Code>,
            dan had <Code>neighbour_dog</Code> de versie van <Code>Pet</Code>{" "}
            gebruikt
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Verwijzen naar superklasse</h2>
        <p>
          Stel je voor dat we aan <Code>Cat</Code> een nieuw attribuut{" "}
          <Code>is_tired</Code> willen toevoegen. We zouden de volledige{" "}
          <Code>__init__()</Code> van <Code>Cat</Code> kunnen kopiëren en
          uitbreiden:
        </p>
        <CodeBlock>{`class Cat(Pet):
  def __init__(self, name, age, is_tired):
    self.name = name
    self.age = age
    self.is_tired = is_tired`}</CodeBlock>
        <p>
          Dit wordt echter snel vervelend. Het gaat ook in tegen het doel van
          OGP om code te hergebruiken.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>
          <Code>super()</Code>
        </h2>
        <p>
          Programmeertalen hebben vaak een gereserveerd woord om naar de
          superklasse te verwijzen. In Python is dit <Code>super()</Code>. Met{" "}
          <Code>super()</Code> kan je gebruik maken van attributen en methodes
          van de superklasse in je code om kopiëren tot een minimum te beperken
        </p>
        <CodeBlock>{`class Cat(Pet):
  def __init__(self, name, age, is_tired):
    super().__init__(name, age)
    self.is_tired = is_tired`}</CodeBlock>
        <StatusBox variant="info">
          <Code>super()</Code> heeft enkel betekenis binnen een{" "}
          <Code>class</Code>. Buiten een klasse zal het gebruik ervan een error
          geven.
        </StatusBox>
      </RVSlide>
      <RVSlide>
        <h2>Opdracht</h2>
        <p>
          Schrijf in Python code om personen op de campus Hertogstraat te
          modelleren:
        </p>
        <ul>
          <li>Definieer de klassen in een hiërarchie met overerving</li>
          <li>Voeg attributen toe op de juiste levels</li>
          <li>
            Definieer een methode <Code>print_card()</Code> die de informatie
            van een persoon afprint, net alsof ze op een
            studentenkaart/personeelskaart/bezoekerskaart zou staan
            <ul>
              <li>Definieer ze sowieso op het hoogste niveau</li>
              <li>Overschrijf de methode binnen elke subklasse indien nodig</li>
              <li>
                Gebruik <Code>super()</Code> om code te hergebruiken
              </li>
            </ul>
          </li>
        </ul>
      </RVSlide>
    </RVSlide>
  );
};

const RootOfEverything = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>
          De <Code>object</Code> class
        </h1>
      </RVSlide>
      <RVSlide>
        <h2>
          De <Code>object</Code> class
        </h2>
        <p>
          Klassen gebruiken overerving om hun superklasse te overschrijven of
          uit te breiden. Ook ingebouwde methodes zoals <Code>__init__()</Code>{" "}
          werken op deze manier. Maar van waar komen die ingebouwde methodes
          dan?
        </p>
        <p>
          Elke klasse in Python erft - direct of indirect - van de speciale{" "}
          <Code>object</Code> klasse. Deze klasse bevat de ingebouwde methodes
          die elke klasse moet hebben. De implementaties van de methodes zijn
          simpel. Het is aan subklasses om ze te overschijven of uit te breiden.
        </p>
        <StatusBox variant="info">
          Merk op dat <Code>object</Code> met een kleine 'o' wordt geschreven.
          Dit is een uitzondering op de algemene regel in Python.
        </StatusBox>
      </RVSlide>
      <RVSlide>
        <h2>
          De <Code>object</Code> class
        </h2>
        <p>
          <Code>object</Code> is de 'bron' van alle klassen. Er is geen
          superklasse boven. Je kan expliciet erven van <Code>object</Code>,
          maar dit is niet nodig. De volgende twee klassen zijn equivalent:
        </p>
        <TwoColumns
          left={<CodeBlock>{`class Pet(object):`}</CodeBlock>}
          right={<CodeBlock>{`class Pet:`}</CodeBlock>}
        />
        <p>
          Je kan verwijzen naar methodes van <Code>object</Code> vanuit{" "}
          <Code>Pet</Code> via <Code>super()</Code>. Je gaat dit echter niet
          vaak nodig hebben.
        </p>
      </RVSlide>
    </RVSlide>
  );
};

const MultipleInheritance = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Meervoudige overerving, abstracte klassen en interfaces</h1>
      </RVSlide>
      <RVSlide>
        <h2>Meervoudige overerving</h2>
        <p>
          Tot nu toe hebben we enkel voorbeelden gezien van enkelvoudige
          overerving (Engels: <i>Single inheritance</i>). Wat als een subklasse
          concepten van meerdere superklassen wil overnemen?
        </p>
        <p>
          <b>Voorbeeld</b>: stel dat we een vogelbekdier willen modelleren in
          een spel. Vogelbekdieren delen kenmerken van zoogdieren en vogels.
          Bovendien produceert het dier een gif, net zoals bepaalde reptielen en
          sommige andere diersoorten. De klasse <Code>Platypus</Code> zou code
          over moeten nemen van 3 klassen: <Code>Mammal</Code>,{" "}
          <Code>Bird</Code> en <Code>PoisonousAnimal</Code>.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Startcode</h2>
        <p>
          Merk op dat <Code>get_average_body_temperature()</Code> in zowel{" "}
          <Code>Mammal</Code> als <Code>Bird</Code> is gedefinieerd.
        </p>
        <CodeBlock>{`class Mammal:
  def can_hibernate(self):
    pass
  def get_average_body_temperature(self):
    return 37

class Bird:
  def get_egg_hatching_time(self):
    pass
  def get_average_body_temperature(self):
    return 42

class PoisonousAnimal:
  def get_antidote(self):
    pass`}</CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>Oplossing 1: meervoudige overerving</h2>
        <p>
          Meervoudige overerving (Engels: <i>multiple inheritance</i>) houdt in
          dat <Code>Platypus</Code> de 3 klassen een voor een overerft. In
          Python ziet dit er als volgt uit:
        </p>
        <CodeBlock>{`class Platypus(Mammal, Bird, PoisonousAnimal):
  pass
  
perry = Platypus()
print(perry.get_average_temperature())`}</CodeBlock>
        <p>Wat zal de code hierboven afprinten?</p>
        <Quiz
          answers={[createQuizAnswer("37", true), createQuizAnswer("42")]}
        />
        <p className="fragment">
          Het resultaat is 37 omdat <Code>Mammal</Code> voor <Code>Bird</Code>{" "}
          staat in de klassedeclaratie van <Code>Platypus</Code>. Draai je de
          volgorde om, dan is het resultaat 42.
        </p>
      </RVSlide>
      <RVSlide>
        <p>
          Meervoudige overerving klinkt simpel, maar bevat verschillende
          valkuilen en wordt snel complex om te begrijpen. Slechts een klein
          aantal talen ondersteunt meervoudige overerving om die redenen. Python
          en C++ zijn de bekendste.
        </p>
        <StatusBox variant="remember">
          <b>In dit vak is het gebruik van meervoudige overerving verboden</b>,
          tenzij anders aangegeven.
        </StatusBox>
        <StatusBox variant="edu">
          Meervoudige overerving wordt algemeen afgeraden als
          programmeertechniek. Het wordt zelden gegeven in een vak op een
          middelbare school.
        </StatusBox>
      </RVSlide>
      <RVSlide>
        <h2>Oplossing 2: interfaces</h2>
        <p>
          Een interface is een 'lichte' versie van een klasse. Het bevat enkel
          methodes, geen attributen. De methodes hebben vaak geen implementatie.
          Een klasse kan meerdere interfaces implementeren.
        </p>
        <p>
          Interfaces worden vaak gebruikt als <b>brug</b> tussen verschillende
          delen van de code van een project. Een interface definieert een groep
          van afspraken (de methodes), maar laat de details over aan de klassen
          die de interface implementeren.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Interfaces: voorbeeld</h2>
        <p>
          Stel je voor dat je een systeem moet ontwerpen om sluizen in kanalen
          te besturen vanop afstand. Er zijn verschillende soorten sluizen, en
          in de toekomst kunnen er nieuwe soorten bijkomen. De interface{" "}
          <Code>Sluis</Code> legt vast welke methodes elke soort sluis moet
          ondersteunen, maar laat de details over aan de sluizen zelf.
        </p>
        <CenteredImage src={InterfaceDrawing} className="!h-1/2" />
      </RVSlide>
      <RVSlide>
        <h2>Interfaces in Python</h2>
        <p>
          In veel talen (Java, TypeScript, C#, Go, ...) is{" "}
          <Code>interface</Code> een gereserveerd woord zoals <Code>class</Code>
          . Je kan het gebruiken om een interface te definiëren.
        </p>
        <p>
          Python ondersteunt interfaces niet expliciet, er is geen{" "}
          <Code>interface</Code> woord. Je kan wel een klasse maken die lijkt op
          een interface:
        </p>
        <TwoColumns
          left={
            <CodeBlock>
              {`class Sluis:
  def open(self):
    raise NotImplementedError

  def close(self):
    raise NotImplementedError

  def get_width(self):
    raise NotImplementedError`}
            </CodeBlock>
          }
          right={
            <ul>
              <li>
                De klasse heeft geen attributen en geen <Code>__init__()</Code>
              </li>
              <li>
                <Code>NotImplementedError</Code> is een speciale error in Python
                die aangeeft dat de methode overschreven moet worden door
                klassen die de interface implementeren. Als je dit toch vergeet,
                krijg je een error bij uitvoering
              </li>
            </ul>
          }
        />
      </RVSlide>
      <RVSlide>
        <h2>Interfaces toegepast</h2>
        <p>
          We creëeren een aantal interfaces die <Code>Platypus</Code> nadien kan
          implementeren. De interfaces zijn herbruikbaar voor andere dieren.
        </p>
        <TwoColumns
          className=""
          left={
            <CodeBlock className="text-base">{`class Poisonous:
  def get_antidote(self):
    raise NotImplementedError
  
class EggLayer:
  def get_egg_hatching_time(self):
    raise NotImplementedError

class HotBlooded:
  def get_average_body_temperature(self):
    raise NotImplementedError`}</CodeBlock>
          }
          right={
            <CodeBlock className="text-base">{`
class Platypus(Poisonous, EggLayer, HotBlooded):
  def get_average_body_temperature(self):
    return 32
  
  # Implementatie van andere methodes...`}</CodeBlock>
          }
        />
        <StatusBox variant="remember">
          Het handboek suggereert om <Code>NotImplemented</Code> terug te geven
          i.p.v. <Code>NotImplementedError</Code> te gooien. <b>Doe dit niet</b>
          . Er zijn subtiele verschillen tussen beiden. Wil je meer details,
          bekijk dan{" "}
          <a href="https://stackoverflow.com/a/44575926" target="_blank">
            dit antwoord op StackOverflow
          </a>
          .
        </StatusBox>
      </RVSlide>
      <RVSlide>
        <h2>Oplossing 3: abstracte klasse en interfaces</h2>
        <p>
          Een abstracte klasse is een klasse waar je geen instantie van kan
          maken. De constructor van de klasse blokkeert dit. In alle andere
          opzichten gedraagt het zich als een klasse.
        </p>
        <p>
          Abstracte klassen mogen methodes bevatten zonder implementatie, net
          zoals interfaces. Het is dan aan de subklassen om ze te implementeren.
          Ze mogen ook methodes bevatten mét implementatie.
        </p>
        <p>
          Een klasse kan maar maximaal van één abstracte klasse overerven (net
          zoals bij niet-abstracte klassen). Daarom zal een abstracte klasse
          vaak gecombineerd worden met interfaces.
        </p>
        <p>
          De meeste talen ondersteunen abstracte klassen met het gereserveerde
          woord <Code>abstract</Code>. <b>Python heeft dit echter niet</b>. Er
          is geen(*) manier om abstracte klassen af te dwingen in Python.
        </p>
        <p className="text-base">
          (*) Python heeft in recent versies{" "}
          <a href="https://docs.python.org/3/library/abc.html" target="_blank">
            abstract base classes
          </a>
          toegevoegd, maar dit zou ons te ver leiden.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Abstracte klasse toegepast</h2>
        <p>
          We maken van <Code>Mammal</Code> een abstracte klasse (zonder dit af
          te dwingen). We laten <Code>Platypus</Code> overerven van{" "}
          <Code>Mammal</Code>, aangezien een vogelbekdier daar het meeste mee
          overeenkomt. De andere methodes worden geïmplementeerd via interfaces.
        </p>
        <CodeBlock>{`class Mammal:
  def __init__(self):
    # Kenmerken van zoogdieren...

  def get_average_body_temperature(self):
    raise NotImplementedError
  
class Platypus(Mammal, EggLaying, Poisonous):
  def __init__(self):
    super().__init__()
    # Kenmerken van vogelbekdieren...

  def get_average_body_temperature(self):
    return 32`}</CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>Welke techniek is het beste?</h2>
        <p>Dit hangt af van meerdere factoren:</p>
        <ul>
          <li>
            Meervoudige overerving heeft nadelen en wordt afgeraden, maar
            sommige talen ondersteunen de andere technieken niet zo goed
          </li>
          <li>
            Enkel interfaces is heel erg populair in modernere talen zoals Rust.
            Het schaalt over het algemeen beter in grotere projecten. Soms leidt
            het echter toch tot wat kopieer- en plakwerk
          </li>
          <li>
            Abstracte klasse + interfaces wordt het meest gebruikt in oudere
            talen zoals Java en C#
          </li>
        </ul>
        <StatusBox variant="edu">
          Zorg dat je goed weet welke technieken een taal (niet) ondersteunt,
          voordat je lesgeeft over OGP en overerving in die taal. Sommige talen
          laten veel toe, andere talen dwingen één bepaalde techniek af.
        </StatusBox>
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
        <h2>Opdrachten</h2>
        <p>
          Maak opdracht 22.1 en opdracht 22.2 in het handboek. Deze opdrachten
          bouwen voort op de code van het vorige topic (uitbreiding OGP). Het
          helpt als je die oefeningen reeds hebt gemaakt.
        </p>
        <p>
          Maak opdracht 22.3 in het handboek. Deze opdracht heeft te maken met
          speltheorie, een domein dat ook aan bod is gekomen tijdens de OD-dag
          over AI - meer specifiek het minimax-algoritme. Je krijgt startcode
          aangeboden en moet deze verder uitbreiden met een aantal
          spelstrategieën.
        </p>
      </RVSlide>
    </RVSlide>
  );
};

export default Les;
