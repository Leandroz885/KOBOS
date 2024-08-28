import {
  RVPresentation,
  RVSlide,
  CodeBlock,
  Code,
  InfoBox,
} from "../../../components/RevealComponents";

const Les = () => {
  return (
    <RVPresentation>
      <RVSlide>
        <h1>Programmeren 1</h1>
        <h2>Les 9</h2>
      </RVSlide>
      <RVSlide>
        <h2>Overzicht</h2>
        <ul>
          <li>(Nog) meer over strings</li>
          <li>Exceptions</li>
          <li>Verder werken aan Dodona</li>
        </ul>
      </RVSlide>
      <StringsExtended />
      <Exceptions />
      {/* <Opdracht /> */}
    </RVPresentation>
  );
};

const StringsExtended = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>(Nog) meer over strings</h1>
        <h2>speciale karakters, formatting, extra methodes</h2>
      </RVSlide>
      <RVSlide>
        <h2>Speciale karakters</h2>
        <p>
          In Python (en de meeste andere talen) kan je bepaalde speciale
          karakters in een string zetten. Ze veranderen hoe de string er uit
          ziet wanneer je ze print.
        </p>
        <p>
          <Code>\n</Code> telt als een 'Enter'. De tekst erna start op een
          nieuwe lijn. Afhankelijk van je besturingssysteem wordt ook{" "}
          <Code>\r</Code> or <Code>\r\n</Code> gebruikt.
        </p>
        <p>
          Python ondersteunt Unicode, een encoderingssysteem dat speciale
          karakters zoals 😃 en Φ toelaat. Om dit te doen:
        </p>
        <ol>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/List_of_Unicode_characters"
              target="_blank"
            >
              Zoek de Unicode-code op van het karakter
            </a>
          </li>
          <li>
            Vervang <Code>U+</Code> door <Code>\U</Code>
          </li>
          <li>
            Plaats extra <Code>0</Code>'en tussen de <Code>\U</Code> en de rest
            van de code totdat er 8 symbolen staan (<Code>\U</Code> niet
            meegerekend)
          </li>
        </ol>
        <CodeBlock>{`# Unicode: U+03A6
# Code in Python: \\U000003A6
print("Hieronder komt de Griekse letter fi:\\n\\U000003A6")`}</CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>String formatting</h2>
        <p>
          Tot nu toe hebben we enkel eenvoudige concatenatie van strings
          gebruikt door middel van <Code>+</Code>. Dit werkt, maar heeft een
          aantal nadelen:
        </p>
        <ul>
          <li>
            Alle onderdelen moeten van het type string zijn, of naar een string
            geconverteerd worden
          </li>
          <li>
            Notatie is zeer langdradig en slecht leesbaar, zeker als je
            resultaat uit meerdere delen bestaat
          </li>
        </ul>
        <p>
          Het efficiënt creëren van complexe strings noemt men{" "}
          <b>string formatting</b>. Elke taal heeft zijn eigen syntax en
          methodes hiervoor. In Python bestaat de methode <Code>format()</Code>.
          Een eenvoudig voorbeeld dat de werking illustreert:
        </p>
        <CodeBlock>{`>>> naam_bedrijf = "Pfizer"
>>> print("De klas gaat op bedrijfsbezoek bij {}.".format(naam_bedrijf))
<   De klas gaat op bedrijfsbezoek bij Pfizer.`}</CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>
          <Code>format()</Code>
        </h2>
        <p>
          <Code>format()</Code> gaat op zoek naar plaatshouders (
          <Code>{`{}`}</Code>) in de string en vervangt ze door concrete
          waarden. Je kan zoveel waarden meegeven als nodig:
        </p>
        <CodeBlock>{`# Neem aan dat we een klasse Person hebben gedefinieerd
# person is een instantie van Person
"naam: {}\\nleeftijd: {}\\nis meerderjarig".format(
  person.name, 
  person.age, 
  person.age > 18)`}</CodeBlock>
        <p>
          Merk op dat de waarden geen strings hoeven te zijn.{" "}
          <Code>format()</Code> converteert automatisch de waarden naar strings.
        </p>
        <p>
          De volgorde waarin je de waarden meegeeft, bepaald in welke volgorde
          ze worden ingevuld in de string.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Extra methodes</h2>
        <p>
          Python heeft een heel aantal methodes voor vaak voorkomende operaties
          met strings. Enkele voorbeelden:
        </p>
        <ul className="!mb-4">
          <li>
            <Code>capitalize()</Code> transformeert de eerste letter naar een
            hoofdletter
          </li>
          <li>
            <Code>lower()</Code> transformeert de hele tekst naar kleine
            letters. Idem voor <Code>upper()</Code> en hoofdletters
          </li>
          <li>
            <Code>find()</Code> zoekt in een string naar een opgegeven stuk
            tekst. Het geeft de index terug waar de tekst start
          </li>
          <li>
            <Code>strip()</Code> verwijdert spaties vooraan en achteraan de
            string
          </li>
        </ul>
        <InfoBox>
          <p>
            Merk op dat deze methodes steeds een <b>nieuwe string teruggeven</b>{" "}
            (behalve <Code>find()</Code>). Waarom?
          </p>
          <p className="fragment">
            <i>
              Omdat strings per definitie niet aanpasbaar zijn in Python (zie
              les 6).
            </i>
          </p>
        </InfoBox>
        <p>
          <a
            href="https://www.w3schools.com/python/python_ref_string.asp"
            target="_blank"
          >
            Uitgebreide lijst met beschrijvingen en voorbeelden
          </a>
        </p>
      </RVSlide>
    </RVSlide>
  );
};

const Exceptions = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Exceptions</h1>
        <h2>Omgaan met uitzonderingen</h2>
      </RVSlide>
      <RVSlide>
        <h2>Wat zijn exceptions?</h2>
        <p>
          Programma's interageren regelmatig met de buitenwereld. Enkele
          voorbeelden:
        </p>
        <ul>
          <li>
            <Code>input()</Code> en <Code>print()</Code>
          </li>
          <li>Data ophalen van het internet</li>
          <li>Data lezen uit/schrijven naar een bestand</li>
          <li>...</li>
        </ul>
        <p>Bij deze taken kan er van alles mislopen:</p>
        <ul>
          <li>Bestand bestaat niet</li>
          <li>
            Besturingssysteem laat niet toe dat je programma een bestand leest
            of wijzigt
          </li>
          <li>Geen netwerkverbinding</li>
          <li>
            Server weigert te antwoorden omdat je niet de juiste rechten hebt
          </li>
          <li>...</li>
        </ul>
        <p>
          Dit zijn afwijkingen op het normale gedrag dat we verwachten. In
          programmeertalen wordt zo'n afwijking voorgesteld als een{" "}
          <b>exception</b>.
        </p>
        <p>
          Opmerking: de termen <i>error</i> en <i>exception</i> worden vaak door
          elkaar gebruikt.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Exceptions afhandelen: voorbeeld</h2>
        <p>
          De Python-functie <Code>open()</Code> opent een bestand:
        </p>
        <CodeBlock>{`file = open("mijn_bestand.txt")
# Doe iets met 'file'...`}</CodeBlock>
        <p>
          Deze functie veroorzaakt een <Code>FileNotFoundError</Code> als het
          bestand niet bestaat. Deze exception zal je volledige programma doen
          stoppen.
        </p>
        <p>
          Je kan specifieke exceptions afhandelen door middel van{" "}
          <Code>try ... except</Code>:
        </p>
        <CodeBlock>{`try:
  file = open("mijn_bestand.txt")
  # Doe iets met 'file'...
except FileNotFoundError:
  print("Bestand niet gevonden")
  # Doe iets anders`}</CodeBlock>
      <p>Deze code zal enkel FileNotFoundError afhandelen. Andere exceptions worden genegeerd.</p>
      </RVSlide>
      <RVSlide>
        <h2>
          <Code>finally</Code>
        </h2>
        <p>
          Vaak gebeurt het dat een bepaalde actie altijd uitgevoerd moet worden,
          of er nu wel of geen error optreed. Dit kan met <Code>finally:</Code>
        </p>
        <CodeBlock>{`try:
  file = open("mijn_bestand.txt")
  # Doe iets met 'file'...
except FileNotFoundError:
  print("Bestand niet gevonden")
  # Doe iets anders
finally:
  print('Klaar met opdracht. Sluit proces af...')`}</CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>Hoe weet je of een functie een exception kan veroorzaken?</h2>
        <p>
          Exceptions zijn makkelijk te vergeten. Soms wil je ook dat een
          programma stopt als er iets uitzonderlijks gebeurt, omdat kan wijzen
          op fouten in je eigen code.
        </p>
        <p>
          In Python: lees de documentatie! Bij elke functie staat meestal
          vermeldt welke exceptions kunnnen optreden onder welke omstandigheden.
          Soms kan je IDE je helpen, maar dit is zeker niet altijd het geval.
        </p>
        <p>
          Sommige andere programmeertalen pakken exceptions anders aan, waardoor
          je ze nooit kan 'vergeten'. Dit wordt hier niet verder behandeld.
        </p>
        <h2>Zelf exceptions maken?</h2>
        <p>
          Dit is mogelijk, maar zou ons te ver leiden. Dit wordt daarom niet
          behandeld.
        </p>
        <p>
          Toch geïnteresseerd?{" "}
          <a
            href="https://realpython.com/python-exceptions/#raising-an-exception"
            target="_blank"
          >
            Meer informatie
          </a>
        </p>
      </RVSlide>
    </RVSlide>
  );
};

// const Opdracht = () => {
//   return (
//     <RVSlide>
//       <RVSlide>
//         <h1>Opdracht</h1>
//         <h2>String formatting en exceptions</h2>
//       </RVSlide>
//       <RVSlide>
//         <h2>Opdracht: notitiemanager</h2>
//         <p>We maken een klein programma dat notities beheert. Meer specifiek:</p>
//         <ul>
//           <li>Een notitie is een bestand met een bestandsnaam en inhoud</li>
//           <li>Interacties gebeuren via de console (print() en input())</li>
//           <li>Er zijn 3 acties:
//             <ol>
//               <li>Lees bestaande notitie</li>
//               <li>Maak nieuwe notitie</li>
//               <li>Sluit het programma af</li>
//             </ol>
//           </li>
//         </ul>
//         <p>Definieer alvast 3 functies</p>
//       </RVSlide>
//       <RVSlide>
//         <h2><Code>ask_choice()</Code></h2>
//         <p></p>
//       </RVSlide>
//       <RVSlide>
//         <h2><Code>read_note()</Code></h2>
//         <p></p>
//       </RVSlide>
//       <RVSlide>
//         <h2><Code>write_note()</Code></h2>
//         <p></p>
//       </RVSlide>
//     </RVSlide>
//   );
// };

export default Les;
