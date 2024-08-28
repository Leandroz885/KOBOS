import Image from "next/image";
import { CDList } from "../../../components/CompetenceList";
import {
  createQuizAnswer,
  CodeBlock,
  Code,
  RVPresentation,
  Quiz,
  Quote,
  RVSlide,
} from "../../../components/RevealComponents";
import forLoopFlowchart from "../../../public/for-loop.png";
import { useRouter } from "next/router";
import { DownloadPdfButton } from "../../../components/DownloadPdfButton";

const enum SECTION_IDS {
  LOOP_ALGORITHM = "loop-algorithm",
  FOR_LOOP_FLOWCHART = "for-loop-flowchart",
  RANGE_PYTHON = "range-python",
}

const Les = () => {
  const router = useRouter();
  return (
    <RVPresentation>
      <RVSlide>
        <h1>Programmeren 1</h1>
        <h2>Les 3</h2>
        <DownloadPdfButton routerPathName={router.pathname} />
      </RVSlide>
      <RVSlide>
        <h2>Overzicht</h2>
        <ul>
          <li>Willekeurigheid</li>
          <li>Iteraties</li>
          <li>Computationeel denken: algoritmisch denken (uitbreiding)</li>
        </ul>
      </RVSlide>
      <VorigeLes />
      <Willekeurigheid />
      <Iteraties />
      <AlgoritmischDenken />
      <VolgendeLes />
    </RVPresentation>
  );
};

const VorigeLes = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Vorige les</h1>
        <h2></h2>
      </RVSlide>
      <RVSlide>
        <h2>Quiz</h2>
        <p>Wat is de uitvoer van volgende code?</p>
        <div className="grid grid-cols-2 gap-8 max-h-max">
          <CodeBlock className="!text-xl -mt-4" language="python">
            {`a = True
b = False
c = True
d = False

if a and (b and (d and not d)):
  print("A")
elif not c or (b and a):
  print("B")
elif (d or c and a):
  print("C")
if b or c:
  print("D") `}
          </CodeBlock>
          <Quiz
            grid={1}
            answers={[
              createQuizAnswer("A, dan D"),
              createQuizAnswer("B, dan C"),
              createQuizAnswer("C, dan D", true),
              createQuizAnswer("Enkel B"),
            ]}
          />
        </div>
      </RVSlide>
      <RVSlide>
        <h2>Quiz</h2>
        <p>Wat is de uitvoer van volgende code?</p>
        <CodeBlock language="python">
          {`x = 5
y = "#!*?"
z = true
if x and y:
  if not z:
    print("optie 1")
   else:
     print("optie 2")
elif x = z:
      print("optie 3)`}
        </CodeBlock>
        <Quiz
          answers={[
            createQuizAnswer("optie 1"),
            createQuizAnswer("optie 2"),
            createQuizAnswer("optie 3"),
            createQuizAnswer("Iets anders"),
            createQuizAnswer("Error/programma werkt niet", true),
          ]}
        />
      </RVSlide>
      <RVSlide>
        <h2>Resultaten onderzoek</h2>
        <ul>
          <li>
            <Code>True</Code> en <Code>False</Code> in andere talen
          </li>
          <li>Logische vergelijkingen en operatoren in andere talen</li>
          <li>if/elif/else en indentaties</li>
        </ul>
      </RVSlide>
    </RVSlide>
  );
};

const Willekeurigheid = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Willekeurigheid</h1>
      </RVSlide>
      <RVSlide>
        <h2>Willekeurigheid</h2>
        <p>
          Willekeurigheid (<i>Eng: randomness</i>) is alomtegenwoordig in het
          dagelijkse leven:
        </p>
        <ul>
          <li>Een dobbelsteen werpen</li>
          <li>Het weer voorspellen</li>
          <li>Automatisch nieuwe werelden creëren in videospellen</li>
          <li>De kaarten die je krijgt in het begin van een kaartspel</li>
        </ul>
        <p>Hoe kunnen we dit modelleren met computers?</p>
      </RVSlide>
      <RVSlide>
        <h2>
          <Code>random</Code>
        </h2>
        <p>
          Elke programmeertaal heeft gewoonlijk een functie die een willekeurige{" "}
          <Code>float</Code> genereert tussen <Code>0.0</Code> (inclusief) en{" "}
          <Code>1.0</Code> (exclusief).
        </p>
        <p>In wiskundige notatie: het domein is [0, 1[</p>
        <p>Specifiek voor Python:</p>
        <ul>
          <li>
            De functie zit in de module <Code>random</Code>. Je moet deze module
            eerst importeren met <Code>import random</Code>
          </li>
          <li>
            De functie zelf noemt ook <Code>random</Code> (verwarrend)
          </li>
          <CodeBlock language="python">
            {`import random

x = random.random()
print(x)`}
          </CodeBlock>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>
          Meer <Code>random()</Code>
        </h2>
        <p>
          <b>Opdracht:</b> Pas voorgaande code aan zodat x in het domein [0, 4[
          ligt.
        </p>
        <CodeBlock delayed language="python">
          {`x = random.random() * 4`}
        </CodeBlock>
        <p>
          <b>Opdracht:</b> Pas voorgaande code aan zodat x in het domein [1, 7[
          ligt.
        </p>
        <CodeBlock delayed language="python">
          {`x = 1 + (random.random() * 6)`}
        </CodeBlock>
        <p>
          <b>Opdracht:</b> Pas voorgaande code aan zodat x als <b>geheel</b>{" "}
          getal in [2, 5] ligt. Gebruik <Code>math.floor()</Code> om naar
          beneden af te ronden.
        </p>
        <CodeBlock delayed language="python">
          {`x = int(math.floor(2 + (random.random() * 4)))`}
        </CodeBlock>
        <div className="fragment">
          <p>Deze transformaties werken in eender welke taal.</p>
          <p>
            Omdat het laatste geval zo frequent voorkomt, heeft Python hier een
            bestaande functie voor: <Code>random.randint(a, b)</Code>
          </p>
        </div>
      </RVSlide>
      <RVSlide>
        <h2>
          <Code>random()</Code>?
        </h2>
        <p>
          <Code>random</Code> in de meeste talen is eigenlijk maar pseudorandom
          (schijnwillekeurigheid). Achter de schermen volgt de computers strikte
          regels voor het aanmaken van 'willekeurige' getallen.
        </p>
        <p>Een versimpeld algoritme:</p>
        <ol>
          <li>
            Ga op zoek naar één cijfer om mee te starten. Dit getal is je{" "}
            <b>seed</b>
          </li>
          <li>
            Transformeer je seed naar een getal binnen [0, 1[. De transformatie
            gebeurt volgens bepaalde standaard formules. Dit is je eerste
            willekeurig getal
          </li>
          <li>
            Voor elk volgend willekeurig getal neem je het <b>vorige</b>{" "}
            willekeurige getal als startpunt
          </li>
        </ol>
      </RVSlide>
      <RVSlide>
        <h2>
          <Code>random()</Code> en seeds
        </h2>
        <p>
          Als je weet wat de seed is, kan je alle volgende getallen voorspellen.
          Vandaar dat men spreekt over schijnwillekeurigheid (pseudorandomness).
        </p>
        <p>Voorbeelden van seeds:</p>
        <ul>
          <li>De klok van je apparaat tot op een nanoseconde nauwkeurig</li>
          <li>
            Het aantal beelden (frames) tussen het opstarten van een spel en het
            indrukken van een knop
          </li>
          <li>
            Een foto van een reeks lavalampen, omgezet naar een
            cijfervoorstelling (
            <a target={"_blank"} href="https://en.wikipedia.org/wiki/Lavarand">
              Link
            </a>
            )
          </li>
          <li>...</li>
        </ul>
      </RVSlide>
    </RVSlide>
  );
};

const Iteraties = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Iteraties</h1>
        <h2>Code herhalen</h2>
      </RVSlide>
      <RVSlide>
        <h2>Introductie</h2>
        <p>Bekijk volgend stuk code om tot 3 te tellen:</p>
        <CodeBlock>
          {`print(1)
print(2)
print(3)`}
        </CodeBlock>
        <ul>
          <li>Breidt deze code uit zodat ze tot 5 telt</li>
          <li className="fragment">
            Wat als je tot 100, 10 000, ... moet tellen?
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Waarom iteraties?</h2>
        <p>
          Heel vaak willen we stukken code <b>herhalen</b>:
        </p>
        <ul>
          <li>Het aantal leerlingen op een school tellen</li>
          <li>Een muntstuk 10 keer opwerpen en het resultaat noteren</li>
          <li>60 keer per seconden het scherm van een videospel verversen</li>
          <li>
            Voor elke leerling in een klas het gemiddelde van hun taken en
            toetsen berekenen
          </li>
        </ul>
        <p>Gewoon code kopiëren en plakken is niet voldoende:</p>
        <ul>
          <li>
            Niemand heeft zin om hetzelfde stuk code 100 keer kopiëren en
            plakken
          </li>
          <li>
            Wat als de opdracht veranderd? Bv. slechts 50 keer iets uitvoeren in
            plaats van 200 keer
          </li>
          <li>
            Soms weten we niet op voorhand hoe vaak we iets moeten herhalen
          </li>
        </ul>
        <p>
          <b>Iteraties</b> zijn programmeerstructuren om gemakkellijk code te
          herhalen. Een andere benaming hiervoor zijn lussen (<i>Eng: loops</i>
          ).
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Eerste soort: oneindig</h2>
        <CodeBlock>
          {`while True:
  print("Bezig met uitvoeren...")`}
        </CodeBlock>
        <ul>
          <li>
            <Code>while</Code> is een speciaal woord in Python dat een herhaling
            aangeeft
          </li>
          <li>
            <Code>True</Code> geeft aan dat de code heel de tijd herhaald wordt
          </li>
          <li>
            Op het einde van de <Code>while</Code> staat een <Code>:</Code>
          </li>
          <li>
            Alles binnen de herhaling is naar rechts geïndenteerd. Er kunnen{" "}
            <b>meerdere</b> lijnen binnen de herhaling staan
          </li>
        </ul>
        {/* while True + Ctrl C truk */}
      </RVSlide>
      <RVSlide>
        <h2>Eerste soort: oneindig</h2>
        <CodeBlock>
          {`while True:
  print("Bezig met uitvoeren...")`}
        </CodeBlock>
        <p>
          Eens deze code start, kan ze niet uit zichzelf stoppen! Ze blijft
          (theoretisch) oneindig lang doorgaan.
        </p>
        <p>Om een actief programma te stoppen, zijn er een paar manieren:</p>
        <ul>
          <li>
            Druk de toetsencombinatie <Code>Ctrl + C</Code> in in de
            console/terminal
          </li>
          <li>Zoek een stop-knop (niet altijd beschikbaar)</li>
        </ul>
        <p>
          Oneindige lussen worden soms gebruikt in videospellen en andere
          programma's die continu werk moeten verrichten.
        </p>
        <p>
          Omdat ze zo moeilijk te stoppen zijn,{" "}
          <b>vermijd je beter oneindige herhalingen.</b>
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Tweede soort: conditioneel</h2>
        <CodeBlock>
          {`import random

kans_op_regen = random.random()
while kans_op_regen > 0.5:
  print("Ik blijf nog een dag binnen")

  # Nieuwe dag, nieuwe kans
  kans_op_regen = random.random()

# weinig kans op regen
print("Tijd om buiten te komen")`}
        </CodeBlock>
        {/* while condition zonder cijfers*/}
      </RVSlide>
      <RVSlide>
        <h2>Tweede soort: conditioneel</h2>
        <CodeBlock>{`while kans_op_regen > 0.5:`}</CodeBlock>
        <p>
          Lees dit als:{" "}
          <i>
            zolang <Code>kans_op_regen</Code> groter is dan <Code>0.5</Code>,
            voer onderstaande code uit:
          </i>
        </p>
        <p>
          Algemeen: de code in de herhaling wordt uitgevoerd zolang de conditie{" "}
          <Code>True</Code> is.
        </p>
        <p className="!mb-20">
          Het is belangrijk dat de conditie kan <b>veranderen</b>. Als de
          conditie nooit verandert, krijg je een oneindige herhaling.
        </p>
        <CodeBlock>{`# weinig kans op regen
print("Tijd om buiten te komen")`}</CodeBlock>
        <p>
          Deze code wordt pas uitgevoerd <b>na</b> de lus. Op dat moment is de
          conditie <Code>False</Code>.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Quiz</h2>
        <p>
          Hoeveel keer zal <Code>"hallo"</Code> in de uitvoer verschijnen?
        </p>
        <CodeBlock>
          {`a = True
b = a and True

while b:
  print("hallo")
  a = False`}
        </CodeBlock>
        <Quiz
          answers={[
            createQuizAnswer("0"),
            createQuizAnswer("1"),
            createQuizAnswer("meer dan 1 keer", true),
            createQuizAnswer("Error/programma werkt niet"),
          ]}
        />
      </RVSlide>
      <RVSlide>
        <h2>Quiz</h2>
        <p>
          Hoeveel keer zal <Code>"hallo"</Code> in de uitvoer verschijnen?
        </p>
        <p>Opgelet: de code is niet hetzelfde als in de vorige vraag.</p>
        <CodeBlock>
          {`a = False
b = a and True

while b:
  print("hallo")
  b = a`}
        </CodeBlock>
        <Quiz
          answers={[
            createQuizAnswer("0", true),
            createQuizAnswer("1"),
            createQuizAnswer("meer dan 1 keer"),
            createQuizAnswer("Error/programma werkt niet"),
          ]}
        />
      </RVSlide>
      <RVSlide>
        <h2>Intermezzo: variabelen aanpassen</h2>
        <p>
          Jullie weten al dat variabelen aanpasbaar kunnen zijn. Variabelen
          kunnen ook aangepast worden op basis van hun <b>huidige waarde</b>.
        </p>
        <p>
          Een veelgebruikte techniek in programmeren is een variabele maken die
          een teller voorstelt. De volgende waarde wordt berekend op basis van
          de vorige:
        </p>
        <CodeBlock>{`i = 0
i = i + 1  # i is nu 1
i = i + 5  # i is nu 6
i = i * 2  # i is nu 12
i += 1  # verkorte notatie voor i = i + 1

# De volgende lijn is een veelgebruikte afkorting voor i = i + 1
# Python ondersteunt deze notatie NIET, sommige andere talen wel
# i++`}</CodeBlock>
        <ul>
          <li>
            Tellervariabelen starten gewoonlijk op <Code>0</Code>
          </li>
          <li>
            Typische namen voor tellervariabelen zijn <Code>i</Code>,{" "}
            <Code>j</Code>, <Code>teller</Code>, <Code>counter</Code>, ...
          </li>
        </ul>
      </RVSlide>
      <RVSlide id={SECTION_IDS.LOOP_ALGORITHM}>
        <h2>Hoe werkt een herhaling exact?</h2>
        {/* Stap voor stap door voorbeeld gaan */}
        <div className="grid grid-cols-2 gap-x-10 items-center">
          <CodeBlock className="">{`i = 0

while i < 5:
  print("nieuwe iteratie gestart")
  # ...
  i += random.random()
  # ...
  print("einde van iteratie")

print("lus voorbij")`}</CodeBlock>
          <div>
            <h4>Algoritme</h4>
            <ol>
              <li>De conditie wordt gecontroleerd</li>
              <li>
                Als de conditie <Code>False</Code> is, ga naar de laatste stap
              </li>
              <li>Anders wordt de code binnen de herhaling uitgevoerd</li>
              <li>In deze code kan de conditie eventueel aangepast worden</li>
              <li>
                <b>De code wordt altijd afgewerkt</b>, zelfs als de conditie
                halverwege zou veranderen naar <Code>False</Code>
              </li>
              <li>Op het einde van de herhaling: ga terug naar stap 1</li>
              <li>Ga verder met de code na de herhaling</li>
            </ol>
          </div>
        </div>
      </RVSlide>
      <RVSlide>
        <h2>Derde soort: eindig</h2>
        <CodeBlock>{`i = 0

while i < 3:
  print("En nog eens")
  i += 1`}</CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>Derde soort: eindig</h2>
        <CodeBlock>{`i = 0

while i < 3:
  print("En nog eens")
  i += 1`}</CodeBlock>
        <p>
          Bij een eindige herhaling weet je steeds op voorhand(*) hoe vaak de
          lus uitgevoerd zal worden.
        </p>
        <p>
          Eindige lussen maken bijna altijd gebruik van tellervariabelen.
          Vermijd het gebruik van kommagetallen met tellervariabelen, aangezien
          de afrondingsfouten voor verrassingen kunnen zorgen.
        </p>
        <p className="text-xl">
          (*) <i>op voorhand</i> betekent hier <i>vlak voor de lus start</i>.
          Het mag nog onzeker zijn op het moment dat het programma begint
        </p>
      </RVSlide>
      <RVSlide id={SECTION_IDS.FOR_LOOP_FLOWCHART}>
        <h2>
          De <Code>for</Code>-lus
        </h2>
        <div className="grid grid-cols-3 gap-12">
          <div className="col-span-2">
            <p>
              Veel programmeertalen hebben een versimpelde notatie voor eindige
              herhalingen: de <Code>for</Code>-lus.
            </p>
            <CodeBlock>{`for i in range(3):
  print("En nog eens")`}</CodeBlock>
            <ul>
              <li>
                Er wordt automatisch een tellervariabele aangemaakt (de naam is
                vrij te kiezen)
              </li>
              <li>
                Op het einde van de lus wordt de tellervariabele automatisch
                verhoogt met 1
              </li>
            </ul>
            <p>
              <b>
                De <Code>for</Code>-lus wordt veel gebruikt
              </b>
              . De notatie verschilt wel sterk van taal tot taal.
            </p>
          </div>
          <div>
            <Image src={forLoopFlowchart} width={400} height={800} alt="" />
          </div>
        </div>
      </RVSlide>
      <RVSlide id={SECTION_IDS.RANGE_PYTHON}>
        <h2>
          De <Code>range()</Code> van een <Code>for</Code>-lus in Python
        </h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="card-subtle text-2xl">
            <CodeBlock className="">{`for i in range(3):`}</CodeBlock>
            <p>
              Waardes van <Code>i</Code>:
            </p>
            <ul>
              <li>
                <Code>0</Code>➡ start lus
              </li>
              <li>
                <Code>1</Code>
              </li>
              <li>
                <Code>2</Code>
              </li>
              <li>
                <Code>3</Code>➡ stop lus, voer NIET uit
              </li>
            </ul>
          </div>
          <div className="card-subtle text-2xl">
            <CodeBlock className="">{`for i in range(2, 5):`}</CodeBlock>
            <p>
              Waardes van <Code>i</Code>:
            </p>
            <ul>
              <li>
                <Code>2</Code>➡ start lus
              </li>
              <li>
                <Code>3</Code>
              </li>
              <li>
                <Code>4</Code>
              </li>
              <li>
                <Code>5</Code>➡ stop lus, voer NIET uit
              </li>
            </ul>
          </div>
          <div className="card-subtle text-2xl">
            <CodeBlock className="">{`for i in range(10, 4, -2):`}</CodeBlock>
            <p>
              Waardes van <Code>i</Code>:
            </p>
            <ul>
              <li>
                <Code>10</Code>➡ start lus
              </li>
              <li>
                <Code>8</Code>
              </li>
              <li>
                <Code>6</Code>
              </li>
              <li>
                <Code>4</Code>➡ stop lus, voer NIET uit
              </li>
            </ul>
          </div>
          <div className="card-subtle text-2xl">
            <h4>
              Algemeen: <Code>range(stop, start, step)</Code>
            </h4>
            <ul>
              <li>
                <Code>stop</Code> is altijd verplicht. De lus stopt net wanneer
                deze waarde wordt bereikt
              </li>
              <li>
                <Code>start</Code> is optioneel, standaard is dit <Code>0</Code>
                . De lus start met deze waarde
              </li>
              <li>
                <Code>step</Code> is optioneel, standaard is dit <Code>1</Code>.
                De lus verhoogt de teller met deze waarde na elke iteratie
              </li>
            </ul>
          </div>
        </div>
      </RVSlide>
      <RVSlide>
        <h2>Opdrachten</h2>
        <h3>Opdracht 1</h3>
        <p>
          Schrijf een programma dat telt van 0 (nul) tot en met 9. Gebruik een{" "}
          <Code>while</Code>-lus.
        </p>
        <p>
          Pas nadien je code aan zodat het programma telt van 1 tot en met 10.
        </p>
        <h3>Opdracht 2</h3>
        <p>
          Maak de vorige opdracht opnieuw, maar gebruik nu een <Code>for</Code>
          -lus.
        </p>
      </RVSlide>
    </RVSlide>
  );
};

const AlgoritmischDenken = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Computationeel denken deel 2</h1>
        <h2>Algoritmisch denken: uitbreiding</h2>
      </RVSlide>
      <RVSlide>
        <CDList toHighlight={["Algoritmisch denken"]} />
      </RVSlide>
      <RVSlide>
        <h2>Algoritmisch denken</h2>
        <Quote className="!text-2xl">
          Het opstellen van een reeks instructies die stap voor stap uitgevoerd
          moeten worden.
        </Quote>
        <p>Voorbeelden uit deze les:</p>
        <ul>
          <li>
            <a href={`#/${SECTION_IDS.LOOP_ALGORITHM}`}>
              Een algoritme om herhalingen te beschrijven
            </a>
          </li>
          <li>
            <a href={`#/${SECTION_IDS.FOR_LOOP_FLOWCHART}`}>
              Een stroomdiagram van een for-lus
            </a>
          </li>
        </ul>
        <p>Hoe kan je afleiden of herhalingen nodig zijn in een algoritme?</p>
        <ul>
          <li>
            In de probleembeschrijving: woorden zoals 'herhaal', 'opnieuw', 'doe
            iets totdat', ...
          </li>
          <li>In een stappenplan: zinnen zoals 'keer terug naar stap X'</li>
          <li>Visueel: letterlijk een lus in een stroomdiagram</li>
        </ul>
      </RVSlide>
    </RVSlide>
  );
};

const VolgendeLes = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Opdracht tegen volgende les</h1>
      </RVSlide>
      <RVSlide>
        <h2>Opdracht tegen volgende les</h2>
        <p>Onderzoek lussen in Kotlin en JavaScript. Meer bepaald:</p>
        <ul>
          <li>
            Hoe schrijf je een <Code>while</Code> en een <Code>for</Code> in
            beide talen?
          </li>
          <li>
            De <Code>for</Code>-lus is berucht om zijn nogal complexe syntax in
            sommige talen, zoals JavaScript. Zorg dat je zeker volgende
            statement in JavaScript begrijpt en kan aanpassen:
          </li>
        </ul>
        <CodeBlock language="javascript">{`for (let i = 0; i < 7; i++) { ... }`}</CodeBlock>
        <p>
          Tip: hou de{" "}
          <a href={`#/${SECTION_IDS.RANGE_PYTHON}`}>
            slide over <Code>range()</Code> in Python
          </a>{" "}
          bij de hand tijdens je zoektocht.
        </p>
        <p>Tijdsinschatting: 30m - 1u</p>
      </RVSlide>
    </RVSlide>
  );
};

export default Les;
