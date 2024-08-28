import { PythonDataStructures } from "../../../components/PythonDataStructures";
import {
  RVPresentation,
  RVSlide,
  CodeBlock,
  RememberBox,
  Quiz,
  createQuizAnswer,
  Code,
  InfoBox,
} from "../../../components/RevealComponents";
import Dictionary from "../../../public/dictionary-key-value.png";
import Image from "next/image";
import OOPConcepts from "../../../public/oop-concepts.jpg";
import CallByValue1 from "../../../public/call-by-value-1.png";
import CallByValue2 from "../../../public/call-by-value-2.png";
import CallByValue3 from "../../../public/call-by-value-3.png";
import CallByReference1 from "../../../public/call-by-reference-1.png";
import CallByReference2 from "../../../public/call-by-reference-2.png";
import CallByReference3 from "../../../public/call-by-reference-3.png";
import { DownloadPdfButton } from "../../../components/DownloadPdfButton";
import { useRouter } from "next/router";

const Les = () => {
  const router = useRouter();
  return (
    <RVPresentation>
      <RVSlide>
        <h2>Programmeren 2: topic 3</h2>
        <h1>Variabelen, datastructuren en opslag van data</h1>
        <DownloadPdfButton routerPathName={router.pathname} />
      </RVSlide>
      <RVSlide>
        <h2>Overzicht</h2>
        <ul>
          <li>Variabelen</li>
          <li>Types</li>
          <li>Datastructuren</li>
          <li>Garbage collection</li>
          <li>Call by semantics</li>
          <li>Vergelijking</li>
          <li>Opdrachten</li>
        </ul>
      </RVSlide>
      <Variabelen />
      <Types />
      <Datastructuren />
      <GarbageCollection />
      <CallBy />
      <Vergelijking />
      <Opdrachten />
    </RVPresentation>
  );
};

const Variabelen = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Variabelen</h1>
      </RVSlide>
      <RVSlide>
        <h2>Variabelen: herhaling</h2>
        <p>Hoe zou je variabelen beschrijven in één zin?</p>
        <RememberBox delayed>
          Een variabele dient om informatie in op te slaan tijdens de uitvoering
          van een programma.
        </RememberBox>
      </RVSlide>
      <RVSlide>
        <h2>Quiz</h2>
        <p>
          Wat is de waarde van <Code>z</Code> na uitvoering?
        </p>
        <CodeBlock>{`x = 8
y = 4 * x
z = y / 2 + 6`}</CodeBlock>
        <Quiz
          answers={[
            createQuizAnswer("4"),
            createQuizAnswer("8"),
            createQuizAnswer("10"),
            createQuizAnswer("22", true),
          ]}
        />
      </RVSlide>
      <RVSlide>
        <h2>Quiz</h2>
        <p>
          Wat is de waarde van <Code>y</Code> na uitvoering?
        </p>
        <CodeBlock>{`x = 0
x = 5
x = x - 2
y = 2 * x`}</CodeBlock>
        <Quiz
          answers={[
            createQuizAnswer("-4"),
            createQuizAnswer("0"),
            createQuizAnswer("5"),
            createQuizAnswer("6", true),
          ]}
        />
      </RVSlide>
      <RVSlide>
        <h2>Quiz</h2>
        <p>
          Wat is de waarde van <Code>a</Code> na uitvoering?
        </p>
        <CodeBlock>{`a = 2
b = a + 4
c = b - 1
a = c + 2
a = a - b`}</CodeBlock>
        <Quiz
          answers={[
            createQuizAnswer("-5"),
            createQuizAnswer("1", true),
            createQuizAnswer("2"),
            createQuizAnswer("7"),
          ]}
        />
      </RVSlide>
      <RVSlide>
        <h2>Aanpasbaarheid van variabelen</h2>
        <p>
          Als je de waarde van een variabele kan veranderen na initialisatie,
          dan zegt men dat de variabele <b>aanpasbaar</b> (Eng. <i>mutable</i>)
          is.
        </p>
        <p>
          Het tegengestelde is een <b>onaanpasbare</b> (Eng. <i>immutable</i>)
          variabele.
        </p>
        <p>Regels rond aanpasbaarheid verschillen sterk tussen talen.</p>
        <ul>
          <li>
            In Python zijn alle variabelen steeds aanpasbaar (zie bv. vorige
            slides)
          </li>
          <li>
            In Java zijn variabelen aanpasbaar, tenzij je ze declareert met het
            speciale woord <Code>final</Code>
          </li>
          <li>
            In Rust zijn variabelen onaanpasbaar, tenzij je ze declareert met
            het speciale woord <Code>mut</Code>
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Aanpasbaarheid in programmeertalen</h2>
        <CodeBlock language="Java">{`final String naam = "Sofie";  // final --> onaanpasbaar
int leeftijd = 43;  // aanpasbaar`}</CodeBlock>
        <CodeBlock language="JavaScript">{`const naam = "Sofie";  // const --> onaanpasbaar
let leeftijd = 43;  // let --> aanpasbaar`}</CodeBlock>
        <CodeBlock language="Rust">{`let naam = "Sofie";  // onaanpasbaar
naam = "Tristan";  // ERROR
let mut leeftijd = 43;  // mut --> aanpasbaar;
leeftijd = leeftijd + 1;  // OK`}</CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>Aanpasbaarheid: waarom belangrijk?</h2>
        <p>
          Variabelen aanpassen klinkt eenvoudig, maar heeft serieuze
          implicaties:
        </p>
        <ul>
          <li>
            Variabelen kunnen zomaar van type veranderen tijdens programma's
          </li>
          <li>
            Een programmeertaal moet extra moeite doen om aanpasbaarheid correct
            te ondersteunen in alle situaties
          </li>
          <li>
            Aanpasbaarheid is een veel voorkomende oorzaak van bugs. Het maakt
            redeneren over programma's moeilijker
          </li>
        </ul>
        <p>
          Dit inzicht is gaandeweg doorheen de jaren gekomen en heeft impact het
          ontwerp van programmeertalen. Een ruwe vuistregel:
        </p>
        <ul>
          <li>Oudere talen beschouwen aanpasbaarheid als de norm</li>
          <li>Nieuwere talen beschouwen aanpasbaarheid als de uitzondering</li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Aanpasbaarheid: tips voor onderwijs</h2>
        <RememberBox>
          Maak aan je leerlingen duidelijk dat aanpasbaarheid gevaren inhoudt.
          Geef de voorkeur aan niet-aanpasbare variabelen indien mogelijk.
        </RememberBox>
      </RVSlide>
    </RVSlide>
  );
};

const Types = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h2></h2>
        <h1>Types</h1>
      </RVSlide>
      <RVSlide>
        <h2>Types</h2>
        <p>
          Elke variabele - <i>en ook andere datastructuren; zie verder</i> -
          heeft een bepaald type. De meest voorkomende types zijn:
        </p>
        <div className="fragment">
          <ul>
            <li>
              Tekst: <Code>string</Code>
            </li>
            <li>
              Gehele getallen: <Code>int</Code>
            </li>
            <li>
              Kommagetallen: <Code>float</Code>
            </li>

            <li>
              Booleanse waarden: <Code>bool</Code> of <Code>boolean</Code>
            </li>
          </ul>
          <p>
            Sommige talen nemen <Code>int</Code> en <Code>float</Code> samen tot{" "}
            <Code>number</Code>.
          </p>
          <p>
            Vaak noemt men deze de <b>primitieve</b> types.
          </p>
        </div>
      </RVSlide>
      <RVSlide>
        <h2>Types: waarom?</h2>
        <p>Types worden gebruikt voor een aantal zaken:</p>
        <ul>
          <li>
            De computer kan afleiden hoeveel geheugen gereserveerd moet worden
            voor een variabele, op basis van het type
          </li>
          <li>
            Types geven aan welke 'acties' je met data kan doen. Bijvoorbeeld:
          </li>
          <ul>
            <li>
              Wiskundige bewerkingen uitvoeren met een <Code>int</Code>
            </li>
            <li>
              Een <Code>string</Code> omzetten naar hoofdletters
            </li>
            <li>
              Een <Code>bool</Code> gebruiken in een <Code>if</Code>-statement
            </li>
          </ul>
          <li>
            Je kan bepaalde fouten in programma's opsporen zonder ze uit te
            voeren, door te controleren of de types overal kloppen
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Types: discussie</h2>
        <p>
          Sommige talen dwingen af dat in heel je programma alle types correct
          worden gebruikt. Indien er een fout is tijdens compilatie, kan het
          programma niet uitgevoerd worden tot de fout is verbeterd. Dit noemt
          men <b>statische type-checking</b> (Eng: <i>static type checking</i>)
        </p>
        <p>
          Andere talen (waaronder Python) zijn 'losser' met types. Ze
          controleren types niet op voorhand. De programma's starten, maar
          zullen falen tijdens uitvoering wanneer code met een typefout wordt
          opgeroepen. Dit noemt men <b>dynamische type-checking</b> (Eng:{" "}
          <i>dynamic type checking</i>).
        </p>
        <p>Over het algemeen geldt: types worden nuttiger naarmate:</p>
        <ul>
          <li>Het aantal lijnen code in een project toeneemt</li>
          <li>Meer programmeurs in aanraking komen met de code</li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Types: tips voor onderwijs</h2>
        <RememberBox>
          Een leerling moet steeds kunnen afleiden wat het type van elke
          variabele in een programma is.
        </RememberBox>
        <RememberBox>
          Laat leerlingen het type van elke variabele in hun programma's
          opschrijven:
          <ul>
            <li>Als commentaar boven de declaratie</li>
            <li>Als deel van de naam van de variabele</li>
            <li>
              Als deel van de declaratie (kan enkel* in talen met statische type
              checking)
            </li>
          </ul>
        </RememberBox>
        <RememberBox>
          Vermijd dat variabelen van type veranderen binnen een programma. In
          talen zoals Python kan dit, maar wordt dit sterk ontmoedigt. In talen
          met statische type checking kan dit sowieso niet.
        </RememberBox>
      </RVSlide>
    </RVSlide>
  );
};

const Datastructuren = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h2>Omgaan met complexere vormen van data</h2>
        <h1>Datastructuren</h1>
      </RVSlide>
      <RVSlide>
        <h2>Inleiding</h2>
        <p>
          Niet alle data kan voorgesteld worden met enkel de 4 primitieve types.
          Hoe stel je bijvoorbeeld het volgende voor?
        </p>
        <ul>
          <li>De examenresultaten van een student voor een bepaald semester</li>
          <li>Een personage in een videospel</li>
          <li>Een groep van personages in een videospel</li>
          <li>Een klaslokaal in het beheersysteem van de UCLL</li>
        </ul>
        <p>We hebben nood aan meer complexe datastructuren.</p>
      </RVSlide>
      <RVSlide>
        <h2>Datastructuren in Python (herhaling vorig jaar)</h2>
        <PythonDataStructures />
        <p className="!mt-16">
          Doel van deze les: kennis verdiepen en uitbreiden.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Soorten opslag</h2>
        <p>Onderscheid tussen:</p>
        <ul>
          <li>Tijdelijke opslag van data:</li>
          <ul>
            <li>Deze data verdwijnt zodra een programma stopt</li>
            <li>Primitieve types</li>
            <li>Datastructuren</li>
          </ul>
          <li>Permanente opslag van data:</li>
          <ul>
            <li>Deze data blijft bestaan, los van programma's</li>
            <li>Bestanden</li>
            <li>Gegevensbanken</li>
          </ul>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Statische en dynamische structuren</h2>
        <p>
          Bij statische structuren wordt de (maximale) hoeveelheid geheugen voor
          de structuur op voorhand berekend tijdens compilatie.
        </p>
        <p>
          Bij dynamische structuren is het geheugengebruik niet op voorhand
          geweten. Tijdens uitvoering vraagt een programma extra geheugen aan en
          geeft het nadien vrij indien mogelijk.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Reeksen (arrays) versus lijsten (lists)</h2>
        <p>
          Reeksen zijn statisch. Je moet aangeven hoe groot ze moeten zijn, of
          er wordt een standaardwaarde gekozen (bv. 10 elementen). Ze zijn
          ideaal voor tabellen en rijen.
        </p>
        <p>
          Lijsten zijn dynamisch: ze kunnen groeien en krimpen. Er zijn
          verschillende subtypes van lijsten (bv. linked lists). Ze zijn ideaal
          als de hoeveelheid data niet op voorhand geweten is tijdens
          compilatie. Ze zijn flexibiler dan arrays, maar bepaalde operaties
          duren langer.
        </p>
        <p>
          Veel moderne talen hebben een hybride structuur: een dynamische array.
          Deze gedragen zich als arrays, maar zullen automisch herschalen als er
          te weinig plaats is. Een <Code>list</Code> in Python is een dynamische
          array.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Maps</h2>
        <p>
          Maps lijken op lijsten, maar de volgorde van elementen ligt niet vast.
          Elementen zijn een combinatie van een sleutel (key) en bijhorende
          waarde (value).
        </p>
        <p>
          In Python noemt dit een <b>dictionary</b>. In PHP noemt dit een{" "}
          <b>associatieve array</b>. Beide namen zijn echter minder gangbaar dan
          'map'.
          <Image className="flex !mx-auto" src={Dictionary} alt="" />
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Klassen en objecten</h2>
        <div className="grid grid-cols-2">
          <div className="">
            <p>
              Klassen en objecten zijn een 'upgrade' van maps. Een object heeft{" "}
              <b>eigenschappen</b>
              en <b>methodes</b>. Andere benamingen voor eigenschappen
              (properties) zijn velden (fields).
            </p>
            <p>
              Een klasse is een blauwafdruk. Ze beschrijft hoe bepaalde objecten
              gemaakt worden, welk soort kenmerken ze hebben, en welke methodes
              ervoor bestaan.
            </p>
            <p>
              We gaan in latere lessen dieper in op gevorderde concepten van
              objectgericht programmeren.
            </p>
          </div>
          <Image className="" alt="" src={OOPConcepts} />
        </div>
      </RVSlide>
      <RVSlide>
        <h2>datastructuren en types</h2>
        <p>
          Datastructuren bepalen hoe je op een bepaalde manier met data om moet
          gaan. Voor elke datastructuur bestaat er een type om dit te
          controleren. Logischerwijs kan je ook fouten tegen types maken bij
          datastructuren. Bijvoorbeeld:
        </p>
        <ul>
          <li>
            <Code>append()</Code> oproepen op een dictionary
          </li>
          <li>
            Een veld van een object proberen te gebruiken, terwijl dit niet
            bestaat
          </li>
        </ul>
        <p>
          Elke klassen telt ook als een type. Door nieuwe klassen aan te maken,
          kan je dus nieuwe types creëren.
        </p>
      </RVSlide>
    </RVSlide>
  );
};

const GarbageCollection = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h2></h2>
        <h1>Opruimen van data</h1>
      </RVSlide>
      <RVSlide>
        <h2>Opruimen van data</h2>
        <p>
          Een programma heeft geheugen nodig om uitgevoerd te kunnen worden.
          Geheugen vragen is makkelijk: maak een nieuwe
          variabele/datastructuur/object aan. Maar hoe geef je geheugen terug
          vrij?
        </p>
        <p>
          In oudere programmeertalen zijn programmeurs zelf verantwoordelijk
          hiervoor. C++ heeft bijvoorbeeld het speciale woord{" "}
          <Code>delete</Code>.
        </p>
        <p>
          Manueel beheer van geheugen is echter vatbaar voor fouten.
          Geheugenlekken (Memory leaks) komen veel voor en kunnen dramatische
          gevolgen hebben.
        </p>
        <p>
          Moderne talen nemen het geheugenbeheer in eigen handen. Ongebruikte
          variabelen en datastructuren worden automatisch opgeruimd door een
          achtergrondproces genaamd de <b>Garbage collector</b>.
        </p>
        <ul>
          <li>
            Voordeel: geen geheugenlekken meer, veel minder kans op fouten
          </li>
          <li>
            Nadeel: de Garbage collector kan programma's vertragen en maakt de
            snelheid van programma's minder voorspelbaar
          </li>
        </ul>
      </RVSlide>
    </RVSlide>
  );
};

const CallBy = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h2>Meer over geheugen en variabelen</h2>
        <h1>Call by value en call by reference</h1>
      </RVSlide>
      <RVSlide>
        <h2>Quiz</h2>
        <p>Wat is de uitvoer van dit programma?</p>
        <CodeBlock>{`a = 5
b = a
a = a + 8
print(b)`}</CodeBlock>
        <Quiz
          answers={[
            createQuizAnswer("5", true),
            createQuizAnswer("8"),
            createQuizAnswer("13"),
            createQuizAnswer("iets anders"),
          ]}
        />
      </RVSlide>
      <RVSlide>
        <h2>Quiz</h2>
        <p>Wat is de uitvoer van dit programma?</p>
        <CodeBlock>{`a = [5]
b = a
a.append(8)
print(b)`}</CodeBlock>
        <Quiz
          answers={[
            createQuizAnswer("[5]"),
            createQuizAnswer("[5, 8]", true),
            createQuizAnswer("[13]"),
            createQuizAnswer("iets anders"),
          ]}
        />
      </RVSlide>
      <RVSlide>
        <h2>Call by semantics</h2>
        <p>Wat is hier aan de hand?</p>
        <p>
          De waarden van variabelen worden opgeslagen in het geheugen van een
          computer. De locatie hiervan noemt men het <b>geheugenadres</b>. Een
          variabele verwijst naar een adres, die dan weer verwijst naar de
          effectieve waarde.
        </p>
        <p>
          In Python kan je het adres waarnaar een variabele verwijst, opvragen
          via <Code>id()</Code>. Dit is gewoon een nummer, het heeft op zich
          weinig betekenis.
        </p>
        <p>
          De twee voorbeelden illustreren twee technieken om met geheugen om te
          gaan. In het eerste voorbeeld wordt <b>call by value</b>{" "}
          gedemonstreerd. In het tweede voorbeeld wordt <b>call by reference</b>{" "}
          gedemonstreerd.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Call by value 1</h2>
        <CodeBlock>{`a = 5`}</CodeBlock>
        <p>
          Initialiseer <Code>a</Code> en geef het de waarde <Code>5</Code>.
        </p>
        <Image src={CallByValue1} alt={""} />
      </RVSlide>
      <RVSlide>
        <h2>Call by value 2</h2>
        <CodeBlock>{`b = a`}</CodeBlock>
        <p>
          Initialiseer <Code>b</Code> en kopieer de huidige waarde van{" "}
          <Code>a</Code>. Deze nieuwe waarde heeft een aparte plek in het
          geheugen.
        </p>
        <Image src={CallByValue2} alt={""} />
      </RVSlide>
      <RVSlide>
        <h2>Call by value 3</h2>
        <CodeBlock>{`a = a + 8`}</CodeBlock>
        Verander de waarde van <Code>a</Code>. Dit heeft geen impact op{" "}
        <Code>b</Code>, omdat er geen verbinding is tussen beiden.
        <Image src={CallByValue3} alt={""} />
      </RVSlide>
      <RVSlide>
        <h2>Call by reference 1</h2>
        <CodeBlock>{`a = [5]`}</CodeBlock>
        <p>
          Initialiseer de lijst <Code>a</Code> en voeg de waarde <Code>5</Code>{" "}
          toe.
        </p>
        <Image src={CallByReference1} alt={""} />
      </RVSlide>
      <RVSlide>
        <h2>Call by reference 2</h2>
        <CodeBlock>{`b = a`}</CodeBlock>
        <p>
          Initialiseer <Code>b</Code> door het adres van
          <Code>a</Code> te kopiëren. Beiden variabelen verwijzen dus naar
          dezelfde plek in het geheugen.
        </p>
        <Image src={CallByReference2} alt={""} />
      </RVSlide>
      <RVSlide>
        <h2>Call by reference 3</h2>
        <CodeBlock>{`a.append(8)`}</CodeBlock>
        Voeg een extra waarde toe aan <Code>a</Code>. Dit heeft impact op{" "}
        <Code>b</Code>, omdat ze hetzelfde onderliggende geheugen delen.
        <Image src={CallByReference3} alt={""} />
      </RVSlide>
      <RVSlide>
        <h2>Call by semantics: waarom?</h2>
        <p>
          Programmeertalen passen allerlei technieken toe om het
          geheugenverbruik te minimaliseren. Een van beide technieken helpt
          hierbij. Welke en waarom?
        </p>
        <Quiz
          answers={[
            createQuizAnswer("Call by value"),
            createQuizAnswer("Call by reference", true),
          ]}
        />
        <div className="fragment">
          <p>
            Door call by reference toe te passen, kunnen we volledige lijsten,
            dictionaries, ... doorgeven in programma's zonder ze telkens te
            kopiëren.
          </p>
          <p>
            Elke programmeertaal kiest zelf welke techniek wanneer wordt
            toegepast. Een ruwe vuistregel:
          </p>
          <ul>
            <li>Primitieve types maken gebruik van call by value</li>
            <li>Datastructuren maken gebruik van call by reference</li>
          </ul>
          <p>
            <b>Bij twijfel: zoek op!</b>
          </p>
          <p>
            (*) Python gebruikt technisch gezien geen van beiden, maar nog een
            andere vorm genaamd <i>call by assignment</i>.
          </p>
        </div>
      </RVSlide>
      <RVSlide>
        <h2>Tips voor onderwijs</h2>
        <RememberBox>
          Vermijd om leerlingen direct te confronteren hiermee. Kies je
          voorbeelden en opgaven zorgvuldig zodat ze hier niet tegen opbotsen.
        </RememberBox>
        <RememberBox>
          Visualiseer het geheugen met tekeningen, grafieken, ... om het minder
          abstract te maken.
        </RememberBox>
      </RVSlide>
    </RVSlide>
  );
};

const Vergelijking = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Vergelijking tussen datastructuren</h1>
      </RVSlide>
      <RVSlide>
        <RVSlide>
          <h2>Wanneer gebruik je wat?</h2>
          <p>
            Gebruik <b>tuples</b> voor simpele, statische, geordende data.
          </p>
          <p>
            Gebruik <b>lijsten</b> als:
          </p>
          <ul>
            <li>de volgorde van elementen belangrijk is</li>
            <li>
              volgorde en/of lengte mag variëren (elementen
              toevoegen/verwijderen of van plaats wisselen)
            </li>
          </ul>
          <p>
            Gebruik <b>dictionaries</b> als:
          </p>
          <ul>
            <li>
              de volgorde van elementen niet vastligt of niet belangrijk is
            </li>
            <li>je de data kan beschrijven via keys</li>
          </ul>
          <p>
            Gebruik <b>objecten</b> als:
          </p>
          <ul>
            <li>je de data kan beschrijven via kenmerken</li>
            <li>EN je wilt de data manipuleren via zelfgekozen methodes</li>
          </ul>
        </RVSlide>
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
        <p>Suggesties voor je portfolio:</p>
        <ul>
          <li>Maak oefeningen uit hoofdstuk 11, 12 en 13 van het handboek</li>
          <li>
            Onderzoek hoe call by semantics werken in andere programmeertalen
          </li>
          <li>
            Onderzoek <b>Sets</b>, een andere - minder gebruikte - datastructuur
            in Python. Vergelijk ze met de andere structuren. Zie ook hoofdstuk
            14 in het handboek
          </li>
          <li>
            Python ondersteunt sinds kort <i>type hints</i>. Deze helpen met het
            controleren van types in programma's, maar zijn 'optioneel':
          </li>
          <ul>
            <li>
              Zie bijvoorbeeld{" "}
              <a
                target="_blank"
                href="https://realpython.com/python-type-checking"
              >
                Python Type Checking (Guide)
              </a>
            </li>
            <li>
              Test het uit bij het schrijven van programma's. Helpt het met het
              opsporen van fouten? Zou je jouw eigen leerlingen Python leren met
              of zonder type hints?
            </li>
          </ul>
        </ul>
      </RVSlide>
    </RVSlide>
  );
};

export default Les;
