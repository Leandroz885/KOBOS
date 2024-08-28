import Image from "next/image";
import {
  createQuizAnswer,
  CodeBlock,
  Code,
  RVPresentation,
  Quiz,
  Quote,
  RVSlide,
} from "../../../components/RevealComponents";

import { CDList } from "../../../components/CompetenceList";
import SortingGif from "../../../public/sorting-gif.gif";
import StackVsQueue from "../../../public/stack-vs-queue.png";
import DataList from "../../../public/abstraction-list.png";
import DataListSorted from "../../../public/data-list-sorted.png";
import { DownloadPdfButton } from "../../../components/DownloadPdfButton";
import { useRouter } from "next/router";

const Les = () => {
  const router = useRouter();
  return (
    <RVPresentation>
      <RVSlide>
        <h1>Programmeren 1</h1>
        <h2>Les 7</h2>
        <DownloadPdfButton routerPathName={router.pathname} />
      </RVSlide>
      <RVSlide>
        <h2>Overzicht</h2>
        <ul>
          <li>Sorteeralgoritmes</li>
          <li>Bubble sort</li>
          <li>Computationeel denken: abstractie en evaluatie</li>
        </ul>
      </RVSlide>
      <VorigeLes />
      <Sorteeralgoritmes />
      <Abstractie />
      <BubbleSort />
      <Evaluatie />
      <BubbleSortOptimised />
    </RVPresentation>
  );
};

const VorigeLes = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Vorige les</h1>
      </RVSlide>
      <RVSlide>
        <h2>Quiz</h2>
        <p>Wat is het verschil tussen een tuple en een lijst?</p>
        <Quiz
          answers={[
            createQuizAnswer("Een tuple is aanpasbaar, een lijst niet"),
            createQuizAnswer("Een lijst is aanpasbaar, een tuple niet", true),
            createQuizAnswer(
              "Een lijst kan duplicaten bevatten, een tuple niet"
            ),
            createQuizAnswer(
              "Elementen in een lijst zijn geordend, in een tuple niet"
            ),
          ]}
        />
      </RVSlide>
      <RVSlide>
        <h2>Quiz</h2>
        <p>Gegeven onderstaande code:</p>
        <CodeBlock>{`lijst = [4, 8, "Stop"]`}</CodeBlock>
        <p>
          Hoe selecteer je <Code>"Stop"</Code> uit deze lijst?
        </p>
        <Quiz
          answers={[
            createQuizAnswer("lijst.select(2)"),
            createQuizAnswer("lijst[3]"),
            createQuizAnswer("lijst.select(3)"),
            createQuizAnswer("lijst[2]", true),
          ]}
        />
      </RVSlide>
      <RVSlide>
        <h2>Quiz</h2>
        <p>Gegeven onderstaande code:</p>
        <CodeBlock>{`lijst = [4, 8, "Stop"]`}</CodeBlock>
        <p>
          Hoe pas je <Code>8</Code> in de lijst aan naar <Code>"Start"</Code>?
        </p>
        <Quiz
          answers={[
            createQuizAnswer('lijst.change(2, "Start")'),
            createQuizAnswer('lijst[1] = "Start"', true),
            createQuizAnswer('lijst.change(1, "Start")'),
            createQuizAnswer('lijst[2] = "Start"'),
          ]}
        />
      </RVSlide>
    </RVSlide>
  );
};

const Sorteeralgoritmes = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Sorteeralgoritmes</h1>
        <h2>Wat en waarom</h2>
      </RVSlide>
      <RVSlide>
        <h2>Sorteren in computers</h2>
        <p>
          Sorteren is een <b>van de meest voorkomende opdrachten</b> die een
          computer uitvoert. Enkele voorbeelden:
        </p>
        <ul>
          <li>
            De bestanden in een folder ordenen op naam, datum van aanpassing,
            ...
          </li>
          <li>
            Bij het opstarten een alfabetisch geordende lijst van gebruikers
            tonen
          </li>
          <li>Je meest recent gebruikte programma's tonen</li>
          <li>
            Examenresultaten in een Excel-bestand ordenen van hoog naar laag
          </li>
        </ul>
        <p>Sorteren dient vaak ook als opstap voor andere taken:</p>
        <ul>
          <li>
            De zoekfunctie van besturingssystemen werkt sneller als de gegevens
            op voorhand geordend zijn. Hetzelfde geldt voor gegevensbanken
          </li>
          <li>
            Op basis van de geordende examenresultaten kan je kwartielberekenen
            vlot maken (bv. gemiddelde score van 25% beste leerlingen)
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Sorteeralgoritmes</h2>
        <div className="flex gap-16">
          <Image alt="" src={SortingGif} width={800} />
          <p>
            Omdat sorteren zo vaak gebeurt, hebben computerwetenschappers veel
            onderzoek besteed aan het uitvinden en perfectioneren van{" "}
            <b>zoekalgoritmes</b>.
          </p>
        </div>
        <p>
          In deze les gaan we één zoekalgoritme in detail bestuderen:{" "}
          <b>Bubble sort</b>.
        </p>
        <p>
          In het project zullen jullie Bubble sort zelf implementeren én
          aanpassen aan de vereisten van de opdracht.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Sorteeralgoritmes voorstellen</h2>
        <p>Een speciale voorstelling: beeld en geluid</p>
        <iframe
          width={560 * 1.5}
          height={315 * 1.5}
          src="https://www.youtube.com/embed/kPRA0W1kECg?start=240"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <p>
          <a href="https://youtu.be/kPRA0W1kECg?t=239">
            Filmpje op YouTube - bubble sort start op 4:01
          </a>
        </p>
      </RVSlide>
    </RVSlide>
  );
};

const Abstractie = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Computationeel denken deel 4</h1>
        <h2>Abstractie</h2>
      </RVSlide>
      <RVSlide>
        <CDList toHighlight={["Abstractie"]} />
      </RVSlide>
      <RVSlide>
        <h2>Abstractie</h2>
        <Quote>
          Het achterwege laten van details die niet van belang zijn om tot een
          oplossing te komen.
        </Quote>
        <p>
          Veel probleemstellingen bevatten een grote hoeveelheid
          achtergrondinformatie. Enkele voorbeelden:
        </p>
        <ul>
          <li>
            Sommige oefeningen op Dodona vereisen wat wiskundige voorkennis
          </li>
          <li>
            Programma's schrijven voor een specifiek domein (archeologie,
            oncologie geneeskunde, onderwijs, ...)
          </li>
        </ul>
        <p>
          Die informatie kan nuttig zijn om het probleem te begrijpen. Ze is
          echter soms <b>overbodig voor de oplossing</b>.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Abstractie: voorbeeld</h2>
        <p>Wat hoort niet thuis in het rijtje?</p>
        <Quiz
          answers={[
            createQuizAnswer(
              "In een restaurant worden borden op elkaar gestapeld en nadien afgewassen.",
              true
            ),
            createQuizAnswer(
              "Klanten schuiven achter elkaar aan bij de kassa van een supermarkt."
            ),
            createQuizAnswer(
              "Een printer voert een reeks printopdrachten uit."
            ),
            createQuizAnswer(
              "Een reeks auto's staat aan te schuiven voor een rood licht."
            ),
          ]}
          grid={1}
        />
      </RVSlide>
      <RVSlide>
        <h2>Abstractie: voorbeeld</h2>
        <p>
          Een stapel borden kan je modelleren als een <b>stack</b>. De andere
          opties kan je modelleren als een <b>queue</b>.
        </p>
        <Image className="!mx-auto" alt="" src={StackVsQueue} />
      </RVSlide>
      <RVSlide>
        <h2>Abstractie: voorbeeld 2</h2>
        <h4>Probleem A</h4>
        <p>
          Schrijf een programma dat de historische gegevens van de waarden van
          cryptomunten analyseert. Gegeven een lijst van historische waardes,
          berekent het programma de maximale theoretische winst over die
          periode.
        </p>
        <h4>Probleem B</h4>
        <p>
          Schrijf een programma dat de suikerspiegel van een patiënt onderzoekt.
          Het berekent het verschil tussen de laagste glucoseconcentratie en de
          hoogste concentratie nadien, wanneer de patiënt een medicijn heeft
          gekregen.
        </p>
        <p className="fragment">
          Deze twee problemen hebben dezelfde oplossing. Kan jij ze herleiden
          tot één algemene probleemstelling?
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Abstractie: problemen herleiden tot essentie</h2>
        <p>
          Als we voorgaande problemen reduceren tot hun essentie, komen we tot
          het volgende:
        </p>
        <p>
          <b>
            Gegeven een lijst van nummers, geef het grootst mogelijke verschil
            terug tussen een lage waarde en een hoge waarde die ergens erna
            komt.
          </b>
        </p>
        <p>Wat is de oplossing van dit probleem voor de lijst hieronder?</p>
        <Image className="!mx-auto" alt="" src={DataList} />
        <p>
          Merk op dat er geen enkele domeinspecifieke kennis meer overblijft. De
          details zijn weggeabstraheert.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Abstractie: andere interpretatie</h2>
        <p>
          Een tweede interpretatie van abstractie, is het{" "}
          <b>expres verbergen van de details van hoe iets werkt</b>.
        </p>
        <p>Een paar voorbeelden:</p>
        <ul>
          <li>
            Hoe werkt een afwasmachine eigenlijk? Wat gebeurt er als je een
            bepaald programma selecteert?
          </li>
          <li>
            Hoe komt het dat een smartphone zowel met wifi als met mobiele
            gegevens op het internet kan? Als je beiden op hebt staan, welke van
            de twee wordt er dan gebruikt?
          </li>
          <li>
            Levende wezens zijn opgebouwd uit molecules, maar toch wordt dit
            'detail' genegeerd in sommige disciplines binnen levenswetenschappen
          </li>
        </ul>
        <p>
          In al deze situaties heeft men er bewust voor gekozen om details te
          verbergen.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Abstractie: praktisch</h2>
        <p>
          Neem de tijd om een probleem te begrijpen, maar zorg dat je het kan
          herleiden tot zijn essentie.
        </p>
        <p>
          Gebruik functies om details van je code te verbergen en te vervangen
          door simpele, begrijpbare namen. Bijvoorbeeld:
        </p>
        <CodeBlock>
          {`# De variabele 'belgie' een complexe datastructuur 
# waar we de details niet van kennen
hoofdstad = geef_hoofdstad(belgie)
# Wat verwacht je dat de waarde van 'hoofdstad' is?`}
        </CodeBlock>
        <CodeBlock className="fragment">
          {`# De details van de functie
def geef_hoofdstad(land):
  return land["steden"][0]["label"]`}
        </CodeBlock>
      </RVSlide>
    </RVSlide>
  );
};

const BubbleSort = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Sorteren: probleemstelling</h1>
        <h2></h2>
      </RVSlide>
      <RVSlide>
        <h2>Sorteren: vooraf</h2>
        <p>We hanteren volgend plan van aanpak:</p>
        <ol>
          <li>
            We formuleren het probleem op een <b>abstracte</b> manier
          </li>
          <li>
            We proberen het probleem met de hand op te lossen, om te begrijpen
            welke stappen er nodig zijn
          </li>
          <li>We vertalen onze stappen naar een echt algoritme</li>
          <li>
            We <b>evalueren</b> ons algoritme: is er ruimte voor verbetering?
            Zijn er beperkingen?
          </li>
          <li>(Eventueel) we programmeren het algoritme in Python</li>
        </ol>
        <p>
          <b>Programmeren is pas de laatste stap</b>. Het is strikt genomen
          zelfs niet nodig om het probleem en de oplossing te begrijpen!
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Sorteren: formulering van het probleem</h2>
        <p>
          Hoe formuleren we het probleem van sorteren op een abstracte manier?
          Kunnen we details weglaten?
        </p>
        <div className="fragment">
          <p>
            <b>
              Gegeven een lijst van nummers, sorteer deze lijst van laag naar
              hoog.
            </b>
          </p>
          <p>
            Merk op: we laten bewust een aantal details achterwege (abstractie):
          </p>
          <ul>
            <li>
              We focussen enkel op simpele nummers. We kunnen ons probleem later
              uitbreiden naar letters, datastructuren, ... maar dit is niet deel
              van de essentie van het probleem
            </li>
            <li>
              We sorteren van laag naar hoog. Omgekeerd zou ook kunnen, maar dit
              is een detail dat niet relevant is om het probleem te begrijpen
            </li>
          </ul>
        </div>
      </RVSlide>
      <RVSlide>
        <h2>Zelf aan de slag</h2>
        <p>
          Gegeven onderstaande lijst. Sorteer deze met de hand (papier, digitaal
          kladblok, Excalidraw, ...).
        </p>
        <Image width={500} className="!mx-auto" alt="" src={DataList} />
        <div className="fragment">
          <p>Oplossing:</p>
          <Image width={500} className="!mx-auto" alt="" src={DataListSorted} />
        </div>
      </RVSlide>
      <RVSlide>
        <p>Wat maakt het zo makkelijk?</p>
        <ul>
          <li>We hebben een overzicht van alle waardes</li>
          <li>De waardes worden visueel voorgesteld (gekleurde balk)</li>
        </ul>
        <p>
          Jammer genoeg is dit niet algemeen toepasbaar. Wat als we 10 000
          cijfers moeten sorteren? De balken worden onleesbaar en het overzicht
          valt weg.
        </p>
        <p>We moeten een strategie vinden die algemeen werkt.</p>
      </RVSlide>
      <RVSlide>
        <h2>Sorteren: kaartenspel</h2>
        <p>Sorteer een reeks kaarten van laag naar hoog. Meer specifiek:</p>
        <ol>
          <li>De kaarten liggen ondersteboven</li>
          <li>In één beurt mag je het volgende doen:</li>
          <ol>
            <li>Twee kaarten omdraaien, en</li>
            <li>De kaarten van plaats wisselen (indien je wilt)</li>
          </ol>
          <li>
            Beurten zijn niet gratis: na elke beurt moet je een opdracht doen
          </li>
          <li>
            Probeer in zo min mogelijk beurten de reeks gesorteerd te hebben
          </li>
          <li>Roep "KLAAR" als je denkt dat je reeks gesorteerd is</li>
        </ol>
      </RVSlide>
      <RVSlide>
        <h2>Sorteren: kaartspel en computers</h2>
        <p>
          Het kaartspel is een abstractie van hoe sorteeralgoritmes op computers
          werken:
        </p>
        <ul>
          <li>
            De computer 'ziet' niet alle data (zeker als het om 1000'en
            elementen gaat)
          </li>
          <li>De computer kan individuele elementen selecteren</li>
          <li>De computer kan elementen van plaats wisselen</li>
          <li>
            Operaties op een computer vragen tijd en energie. We willen liefst
            zo snel mogelijk klaar zijn
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Bubble sort: animatie</h2>
        <p>
          De animatie in de link voert Bubbel sort stap voor stap uit. Probeer
          op basis hiervan te begrijpen hoe het algoritme werkt.
        </p>
        <p>
          <a href="https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/" target="_blank">
            https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
          </a>
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Bubble sort: concepten</h2>
        <p>In 1 iteratie gebeurt het volgende:</p>
        <ul>
          <li>We starten aan het begin van de lijst</li>
          <li>
            We controleren of elk element in de lijst groter is dan het volgende
            element. Indien ja, wissel de elementen van plaats
          </li>
          <li>
            Op het einde van de iteratie staat het grootste element gegarandeerd
            helemaal rechts (het 'borrelt' op)
          </li>
        </ul>
        <p>
          Na 1 iteratie staat 1 element op de juiste plaats. Om <b>alle</b>{" "}
          elementen juist te zetten, hebben we evenveel iteraties nodig als er
          elementen in de lijst zijn.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Bubble sort v1: algoritme in pseudo-code</h2>
        <CodeBlock>
          {`lijst = de te sorteren lijst
n = lengte van lijst

herhaal n keer:
  voor elk element e in lijst:
    als e groter is dan het volgende element e+1:
      dan wissel e en e+1 van plaats`}
        </CodeBlock>
        <p>
          Probeer op basis van deze pseudo-code Bubble sort te implementeren in Python.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Bubble sort: optimalisaties</h2>
        <p>
          We hebben iets dat werkt, maar kan het beter? <b>Absoluut.</b>
        </p>
        <p>
          Om te begrijpen hoe we dit algoritme kunnen verbeteren, nemen we eerst
          een stap terug naar computationeel denken, meer bepaald{" "}
          <b>evaluatie</b>.
        </p>
      </RVSlide>
    </RVSlide>
  );
};

const Evaluatie = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Computationeel denken deel 5</h1>
        <h2>Evaluatie</h2>
      </RVSlide>
      <RVSlide>
        <CDList toHighlight={["Evaluatie"]} />
      </RVSlide>
      <RVSlide>
        <h2>Evaluatie</h2>
        <Quote>Kritisch nakijken van de bekomen oplossingsmethode</Quote>
        <p>
          Een probleem heeft vaak meerdere oplossingen. Hoe weet je of je de
          beste oplossing hebt? Is er zelfs een 'perfecte' oplossing?
        </p>
        <p>
          In sommige gevallen zal je oplossingen tegen elkaar moeten afwegen. De
          verschillende sorteeralgoritmes hebben elk hun sterktes en zwaktes op
          het vlak van:
        </p>
        <ul>
          <li>
            Geheugengebruik: heb ik extra datastructuren nodig? Moet ik data
            dupliceren?
          </li>
          <li>Tijd: hoe snel is het algoritme klaar?</li>
        </ul>
        <p>
          Hou er ook rekening mee dat er <b>best case</b> en <b>worst case</b>{" "}
          scenarios zijn. Sommige algoritmes zijn zeer efficiënt in de best
          case, maar verschrikkelijk slecht in de worst case.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Evaluatie: praktisch</h2>
        <p>Stel jezelf de volgende vragen over je oplossing:</p>
        <ol>
          <li>Hoe snel werkt het in de worst case?</li>
          <li>Hoe snel werkt het in de best case?</li>
          <li>(Zelfde vragen voor geheugen)</li>
          <li>
            Doet het algoritme onnodig extra werk? Is er een manier om dit te
            omzeilen?
          </li>
        </ol>
      </RVSlide>
    </RVSlide>
  );
};

const BubbleSortOptimised = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Bubble sort: optimalisaties</h1>
      </RVSlide>
      <RVSlide>
        <h2>Evaluatie van Bubble sort v1</h2>
        <p>
          <b>Hoe snel werkt het in best case?</b>
        </p>
        <p>Best case = alles is al gesorteerd</p>
        <p>
          Toch zal het algoritme volledig uitgevoerd worden. Dit is onnodig
          extra werk.
        </p>
        <p>
          Oplossing: hou een variabele bij die aangeeft of er een wissel is
          opgetreden. Als je in 1 iteratie geen enkele wissel doet, dan is de
          lijst volledig gesorteerd.
        </p>
        <CodeBlock className="fragment">
          {`lijst = de te sorteren lijst
n = lengte van lijst

herhaal n keer:
  is_gewisseld = False
  voor elk element e in lijst:
    als e groter is dan het volgende element e+1:
      dan wissel e en e+1 van plaats
      is_gewisseld = True
  als not is_gewisseld:
    stop`}
        </CodeBlock>
      </RVSlide>
      <RVSlide>
        <p>
          <b>Ander onnodig extra werk?</b>
        </p>
        <p>
          Na <Code>k</Code> iteraties staan de laatste <Code>k</Code> elementen
          al op hun plaats. Toch controleren we in 1 iteratie alle <Code>n</Code> elementen.
        </p>
        <p>
          Oplossing: sla de laatste <Code>k</Code> elementen over.
        </p>
        <CodeBlock className="fragment">
          {`lijst = de te sorteren lijst
n = lengte van lijst

voor k van 0 tot n:
  is_gewisseld = False
  voor i van 0 tot (n - 1 - k):
    e = lijst[i]
    als e groter is dan het volgende element e+1:
      dan wissel e en e+1 van plaats
      is_gewisseld = True
  als not is_gewisseld:
    stop`}
        </CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>Bubble sort: v2</h2>
        <p>
          Gebruik voorgaande info om een tweede, meer optimale versie van Bubble
          sort te schrijven.
        </p>
        <p>
          <b>
            Deze versie kan je gebruiken als basis voor deel 3 van het project.
          </b>{" "}
          Denk wel na: dit algoritme is nog niet exact wat je nodig hebt. Wat ga je
          nog moeten aanpassen?
        </p>
      </RVSlide>
    </RVSlide>
  );
};

export default Les;
