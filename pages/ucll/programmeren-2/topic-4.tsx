import {
  RVPresentation,
  RVSlide,
  CodeBlock,
  Quote,
  Code,
  Quiz,
  createQuizAnswer,
} from "../../../components/RevealComponents";

import FlowChart from "../../../public/flowchart.png";
import SequenceFlowChart from "../../../public/sequence-flowchart.png";
import Selection1SideFlowChart from "../../../public/selection-1side-flow-chart.png";
import Selection2SidesFlowChart from "../../../public/selection-2sides-flow-chart.png";
import SelectionNSidesFlowChart from "../../../public/selection-nsides-flow-chart.png";
import EindigeHerhalingFlowChart from "../../../public/eindige-herhaling-flowchart.png";
import VoorwaardelijkeHerhalingFlowChart from "../../../public/voorwaardelijke-herhaling-flowchart.png";
import Image from "next/image";
import { TwoColumns } from "../../../components/TwoColumns";
import { CenteredImage } from "../../../components/CenteredImage";
import { DELAYED_CLASSNAME } from "../../../src/util";
import { StatusBox } from "../../../components/StatusBox";
import { useRouter } from "next/router";
import { DownloadPdfButton } from "../../../components/DownloadPdfButton";

const Les = () => {
  const router = useRouter();
  return (
    <RVPresentation>
      <RVSlide>
        <h2>Programmeren 2: Topic 4</h2>
        <h1>Controlestructuren</h1>
        <DownloadPdfButton routerPathName={router.pathname} />
      </RVSlide>
      <RVSlide>
        <h2>Overzicht</h2>
        <ul>
          <li>Introductie</li>
          <li>Sequentie</li>
          <li>Selectie</li>
          <li>Iteratie</li>
          <li>Opdrachten</li>
        </ul>
      </RVSlide>
      <Intro />
      <Sequentie />
      <Selectie />
      <Iteratie />
      <Opdrachten />
    </RVPresentation>
  );
};

const Intro = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Introductie</h1>
      </RVSlide>
      <RVSlide>
        <h2>Algoritmes en controlerstructuren</h2>
        <p>Hoe zou je het concept 'algoritme' uitleggen?</p>
        <StatusBox variant="remember" delayed>
          Een algoritme is een voorschrift om in een eindig aantal stappen een
          welbepaalde taak uit te voeren.
        </StatusBox>
        <p className="fragment">
          Controlestructuren beschrijven in welke volgorde de stappen van een
          algoritme worden uitgevoerd.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Concepten</h2>
        <p>Onder controlestructuren worden volgende concepten gegroepeerd:</p>
        <ul>
          <li>Sequentie: voer opdrachten stap voor stap uit</li>
          <li>Selectie: een splitsing of keuze in het programma</li>
          <li>Iteratie: een of meerdere stappen herhalen</li>
        </ul>
      </RVSlide>
      <RVSlide>
        <div className="grid grid-cols-2">
          <div className="">
            <h2>Voorstelling</h2>
            <p>
              Computerprogramma's zijn <i>een</i> manier om algoritmes voor te
              stellen met controlestructuren, maar er zijn er nog ander. Kan je
              er zelf bedenken?
            </p>
            <ul className="fragment">
              <li>Genummerd stappenplan in mensentaal</li>
              <li>Een filmpje (bv. voor een recept)</li>
              <li>
                Stroomdiagrammen (Eng: <i>flowcharts</i>) → veel gebruikt in
                informatica
              </li>
            </ul>
          </div>
          <Image className="fragment" height={600} src={FlowChart} alt={""} />
        </div>
      </RVSlide>
    </RVSlide>
  );
};

const Sequentie = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h2>Stap voor stap</h2>
        <h1>Sequentie</h1>
      </RVSlide>
      <RVSlide>
        <h2>Sequentie</h2>
        <Quote>Doe eerst dit, dan het volgende.</Quote>
        <Image src={SequenceFlowChart} alt="" className="!mx-auto" />
        <p>
          De meest gangbare programmeertalen volgen deze regel, maar er bestaan
          talen die het anders aanpakken.
        </p>
        <StatusBox variant="info">
          <b>Let op:</b> <i>stap voor stap</i> betekent niet noodzakelijk{" "}
          <i>van boven naar onder</i> in code!
        </StatusBox>
      </RVSlide>
    </RVSlide>
  );
};

const Selectie = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h2>Keuzes in programma's</h2>
        <h1>Selecties</h1>
      </RVSlide>
      <RVSlide>
        <h2>Algemeen</h2>
        <p>
          Selecties stellen een splitsing of vertakking voor in een algoritme.
          Welke tak gekozen wordt, hangt af van de voorwaarde (de{" "}
          <b>conditie</b>).
        </p>
        <p>
          <b>Welke speciale woorden gebruik je in Python voor selecties?</b>
        </p>
        <p className="fragment">
          <Code>if..elif..else</Code>
        </p>
        <p>
          <b>Wat is het datatype van condities in Python?</b>
        </p>
        <p className="fragment">
          <Code>bool</Code>: elke conditie is ofwel <Code>true</Code>, ofwel{" "}
          <Code>false</Code>
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Eenzijdige selectie</h2>
        <div className="grid grid-cols-2">
          <Image src={Selection1SideFlowChart} alt="" />
          <CodeBlock delayed>{`if test:
  body()
  
# Ga verder met rest van programma`}</CodeBlock>
        </div>
        <StatusBox variant="remember" delayed>
          Indentatie van code is belangrijk in Python! Denk altijd goed na welke
          lijnen naar links/rechts geïntendeerd moeten zijn.
        </StatusBox>
      </RVSlide>
      <RVSlide>
        <h2>Tweezijdige selectie</h2>
        <div className="grid grid-cols-2">
          <Image src={Selection2SidesFlowChart} alt="" />
          <CodeBlock delayed>{`if test:
  body1()
else:
  body2()

# Ga verder met rest van programma`}</CodeBlock>
        </div>
      </RVSlide>
      <RVSlide>
        <h2>Meervoudige selectie</h2>
        <Image className="col-span-2" src={SelectionNSidesFlowChart} alt="" />
      </RVSlide>
      <RVSlide>
        <h2>Meervoudige selectie: code</h2>
        <p>
          Eerste poging: geneste <Code>if..else</Code> statements:
        </p>
        <CodeBlock>{`if temperatuur < 0:
    draag_vrieskleren()
else:
    if temperatuur < 10:
      draag_winterkleren()
    else
        if temperatuur < 20:
            draag_lentekleren()
        else:
            draag_zomerkleren()
  
# Ga verder met rest van programma`}</CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>Meervoudige selectie: code</h2>
        <p>
          Tweede poging: gebruik <Code>elif</Code> om de code te ontnesten:
        </p>
        <CodeBlock>{`if temperatuur < 0:
  draag_vrieskleren()
elif temperatuur < 10:
  draag_winterkleren()
elif temperatuur < 20:
  draag_lentekleren()
else:
  draag_zomerkleren()
  
# Ga verder met rest van programma`}</CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>
          Meervoudige selectie: <Code>switch</Code>
        </h2>
        <p>
          Sommige talen ondersteunen een 'gevorderde' notatie voor meervoudige
          selecties. Meestal is dit in de vorm van een <Code>switch</Code>{" "}
          statement. Bijvoorbeeld in JavaScript:
        </p>
        <CodeBlock language="JavaScript">{`switch (fruit) {
  case "appel":
    maakAppelTaart();
    break;
  case "banaan":
    maakBananaSplit();
    break;
  case "citroen":
    maakLimoncello();
    break;
  default:
    gaEtenKopen();
}
// Ga verder met rest van programma`}</CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>
          Meervoudige selectie: <Code>switch</Code>
        </h2>
        <p>Python ondersteunt dit niet. De makers hadden deze filosofie:</p>
        <Quote quotee="The Zen of Python">
          There should be one-- and preferably only one -- obvious way to do it.
        </Quote>
        <p>
          <b>
            Elke <Code>switch</Code>-statement kan herschreven worden met{" "}
            <Code>if..elif..else</Code>.{" "}
          </b>
          <Code>switch</Code> is dus optioneel in programmeertalen.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Tips voor onderwijs</h2>
        <StatusBox variant="edu">
          Laat leerlingen selecties uittekenen als flowcharts om ze beter te
          begrijpen. Laat ze nadien pas programmeren.
        </StatusBox>
        <StatusBox variant="edu">
          Hou <Code>switch</Code> als iets optioneel voor meer gevorderde lessen
          (als de taal het al ondersteunt). Zorg dat leerlingen eerst{" "}
          <Code>if..elif..else</Code> goed begrijpen.
        </StatusBox>
      </RVSlide>
    </RVSlide>
  );
};

const Iteratie = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Iteraties</h1>
      </RVSlide>
      <RVSlide>
        <h2>Algemeen </h2>
        <p>
          Iteraties dienen om stappen in een algoritme te <b>herhalen</b>.
        </p>
        <p>
          Op een flowchart is een iteratie te herkennen aan een lus in de
          tekening.
        </p>
        <p>
          Iteraties zijn cruciaal voor informatica. Ze laten toe om repetitieve
          (mentale) taken eenvoudig te beschrijven, op een gestructureerde
          manier.
        </p>
        <p>
          <b>
            Welke twee speciale woorden worden in Python (en veel andere talen)
            gebruikt voor iteraties?
          </b>
        </p>
        <p className="fragment">
          <Code>for</Code> en <Code>while</Code>.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Eindige herhaling</h2>
        <TwoColumns
          left={<CenteredImage src={EindigeHerhalingFlowChart} />}
          right={
            <CodeBlock delayed>{`for i in range(0, N):
  body()
  
# Ga verder met rest van programma`}</CodeBlock>
          }
        />
        <StatusBox variant="info">
          <Code>i++</Code> betekent: 'verhoog <Code>i</Code> met 1'. Veel talen
          ondersteunen deze syntax, Python echter niet. Equivalente notaties
          zijn <Code>i += 1</Code> en <Code>i = i + 1</Code>.
        </StatusBox>
      </RVSlide>
      <RVSlide>
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
        <h2>Voorwaardelijke herhaling</h2>
        <TwoColumns
          left={<CenteredImage src={VoorwaardelijkeHerhalingFlowChart} />}
          right={
            <div>
              <CodeBlock delayed>{`while test:
  body()
  
# Ga verder met rest van programma`}</CodeBlock>
              <StatusBox delayed variant="info">
                In deze context is <i>zolang</i> een betere vertaling van{" "}
                <Code>while</Code> dan <i>terwijl</i>.
              </StatusBox>
            </div>
          }
        />
        <div className={[DELAYED_CLASSNAME, "mt-16"].join(" ")}>
          Hoeveel keer zal dit type herhaling minstens uitgevoerd worden?
          <Quiz
            answers={[createQuizAnswer("0", true), createQuizAnswer("1")]}
          />
        </div>
      </RVSlide>
      <RVSlide>
        <h2>Voorwaardelijke herhaling (2)</h2>
        <p>
          De <Code>while</Code>-lus zorgt in bepaalde gevallen voor minder
          elegante code. Bijvoorbeeld:
        </p>
        <CodeBlock>{`film = input("Welke film wil je bekijken?")
while not is_beschikbaar(film):
  film = input("Welke film wil je bekijken?")`}</CodeBlock>
        <p>
          Merk op dat we de <Code>input</Code> twee keer moeten schrijven.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Voorwaardelijke herhaling (3)</h2>
        <p>Een tweede poging met minder duplicatie van code:</p>
        <CodeBlock>
          {`vraag_film = True
while vraag_film:
  film = input("Welke film wil je bekijken?")
  if is_beschikbaar(film):
    vraag_film = False`}
        </CodeBlock>
        <p>
          Minder duplicatie, maar langer en complexer. Al bij al beter dan
          eerste poging.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Voorwaardelijke herhaling (4)</h2>
        <p>
          Het kernprobleem is dat in deze situaties we de conditie op het{" "}
          <b>einde</b> van de lus willen controleren. De <Code>while-</Code> lus
          laat enkel toe om de conditie in het <b>begin</b> na te kijken.
        </p>
        <div className={DELAYED_CLASSNAME}>
          <p>
            Een aantal talen hebben hier een speciale oplossing voor:{" "}
            <Code>do while</Code>
          </p>
          <CodeBlock language="JavaScript">
            {`let film = "";  // initialiseer met dummywaarde
do {
  film = prompt("Welke film wil je bekijken?");
} while (isBeschikbaar(film));`}
          </CodeBlock>
          <div className={[DELAYED_CLASSNAME, "mt-16"].join(" ")}>
            Hoeveel keer zal dit type herhaling minstens uitgevoerd worden?
            <Quiz
              answers={[createQuizAnswer("0"), createQuizAnswer("1", true)]}
            />
          </div>
        </div>
      </RVSlide>
      <RVSlide>
        <h2>
          <Code>while</Code> versus <Code>do while</Code>
        </h2>
        <p>
          Python ondersteunt <Code>do while</Code> <b>niet</b>. De reden is
          dezelfde als bij <Code>switch</Code>: elke <Code>do while</Code> kan
          eenvoudig herschreven worden met <Code>while</Code> (zoals in de
          voorgaan de slides werd gedemonstreerd). Dat de code iets langer
          wordt, is een acceptable trade-off voor de makers van Python.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Andere technieken i.v.m. iteraties</h2>
        <h4>
          <Code>break</Code>
        </h4>
        <p>
          Wanneer Python een <Code>break</Code> tegenkomt, wordt de lus
          onmiddellijk gestop. Andere woorden hiervoor zijn{" "}
          <Code>continue</Code>, <Code>exit</Code>, ...
        </p>
        <p>
          Het stoppen van lussen op deze manier is sterk af te raden in eender
          welke taal. Het maakt redeneren over iteraties over het algemeen
          moeilijker.
        </p>
        <h4>
          <Code>return</Code>
        </h4>
        <p>
          Een <Code>return</Code> stopt een functie onmiddellijk. Het kan dus
          ook een lus onderbreken. Sommige programmeurs zien hierin hetzelfde
          probleem als <Code>break</Code> en keuren het dus af. De meerderheid
          laat <Code>return</Code> binnen een lus echter wel toe om pragmatische
          redenen.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Tips voor onderwijs</h2>
        <StatusBox variant="edu">
          Let op je taalgebruik bij iteraties, zowel in het Nederlands als in
          het Engels. Sommige talen (bv. Scratch) gebruiken <Code>until</Code>{" "}
          in plaats van <Code>while</Code>. Dit betekent dat condities worden
          omgekeer.
        </StatusBox>
        <StatusBox variant="edu">
          Hou <Code>do while</Code> als gevorderde leerstof voor latere lessen,
          of slaag het gewoon over.
        </StatusBox>
        <StatusBox variant="edu">
          Ontmoedig het gebruik van <Code>break</Code>. Hou het voor gevorderde
          lessen, als extra.
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
        <ol>
          <li>Maak oefeningen uit hoofdstuk 6 en 7 van het handboek</li>
          <li>
            Onderzoek hoe je <Code>for i in range(10, 4, -2):</Code> precies
            schrijft in volgende talen:
            <ul>
              <li>Java</li>
              <li>Rust</li>
            </ul>
          </li>
          <li>
            Onderzoek de <Code>switch-</Code>statement in detail in bijvoorbeeld
            JavaScript of Java. Hoe werkt <Code>break</Code> hierin? Kan je
            meerdere <Code>case</Code>s combineren? Is <Code>default</Code>{" "}
            altijd nodig?
          </li>
          <li>
            Onderzoek hoe lussen werken in de blokgebaseerde taal Scratch. Wat
            zijn de verschillen en gelijkenissen met Python? Kan je je vinden in
            de keuzes die de ontwikkelaars van Scratch hebben gemaakt?
          </li>
        </ol>
      </RVSlide>
    </RVSlide>
  );
};

export default Les;
