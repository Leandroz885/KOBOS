import Image from "next/image";
import {
  RVPresentation,
  RVSlide,
  CodeBlock,
  Code,
  Quote,
} from "../../components/RevealComponents";

import minimaxTree from "../../public/inleiding-tot-ai/minimax.svg";
import AIIfStatementsStrip from "../../public/inleiding-tot-ai/ai-is-if-statements.jpg";
import DeepBlue from "../../public/inleiding-tot-ai/Deep_Blue.jpg";
import AIDomains1 from "../../public/inleiding-tot-ai/ai-domains-1.png";
import AITimeline from "../../public/inleiding-tot-ai/ai-timeline.jpg";
import ComputerVisionCat from "../../public/inleiding-tot-ai/computer-vision-cat.jpg";
import NeuralNetworkAnimation from "../../public/inleiding-tot-ai/neuralnetwork-animation.gif";
import BrainInABag from "../../public/inleiding-tot-ai/brain-in-a-bag.png";
import ImageNeuron from "../../public/inleiding-tot-ai/neuron.png";
import ImageNeuronComparison from "../../public/inleiding-tot-ai/neuron-comparison.png";
import ImageNNTerminology from "../../public/inleiding-tot-ai/nn-terminology.jpg";
import ImageNNTraining from "../../public/inleiding-tot-ai/nn-training.gif";
import { StatusBox } from "../../components/StatusBox";
import { CenteredImage } from "../../components/CenteredImage";
import { TwoColumns } from "../../components/TwoColumns";

// Ideas:
// - https://www.mladdict.com/neural-network-simulator --> are we sure this runs correct?
// - https://shortest-path-finder.web.app/
// - https://www.geeksforgeeks.org/building-an-undirected-graph-and-finding-shortest-path-using-dictionaries-in-python/
// - https://dwengo.org/learning-path.html?hruid=un_artificiele_intelligentie&language=nl&te=true&source_page=%2Fart%2F&source_title=%20Kunst#un_ai;nl;3
// - https://www.educative.io/answers/what-is-uniform-cost-search

const Les = () => {
  return (
    <RVPresentation>
      <RVSlide>
        <h2>OD-dag OF2 semester 1</h2>
        <h1>Inleiding tot artificiële intelligentie</h1>
      </RVSlide>
      <RVSlide>
        <h2>Overzicht</h2>
        <ul>
          <li>Wat is AI?</li>
          <li>AI als domein</li>
          <li>AI in speltheorie: minimax</li>
          <li>Neurale netwerken</li>
        </ul>
      </RVSlide>
      <WatIsAI />
      <AIContext />
      <Minimax />
      <NeuralNetworks />
      <Conclusie />
    </RVPresentation>
  );
};

const WatIsAI = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Wat is AI?</h1>
      </RVSlide>
      <RVSlide>
        <h2>Wat is AI?</h2>
        <p className="fragment">
          Vind je dat computers slim of dom zijn? Waarom?
        </p>
        <p className="fragment">
          Hoe zou je AI in je eigen woorden beschrijven?
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Wat is AI?</h2>
        <Quote quotee="Van Wikipedia">
          Artificial Intelligence (AI) the field of study in computer science
          that develops and studies intelligent machines.
        </Quote>
        <p>Maar wat zijn 'intelligente machines'?</p>
      </RVSlide>
      <RVSlide>
        <h2>Een intelligent blad papier</h2>
        <p>Wie kan het blad papier verslaan?</p>
        <p className="fragment">
          <a
            target="_blank"
            href="https://www.cs4fn.org/teachers/activities/intelligentpaper/intelligentpaper.pdf"
          >
            Link naar de volledige lesactiviteit op CS4FN
          </a>
          .
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Een intelligent blad papier: nabespreking</h2>
        <p>Is het noodzakelijk dat iets kan bewegen om intelligent te zijn?</p>
        <p className="fragment">Vind je dat het blad papier slim of dom is?</p>
        <StatusBox variant="remember" delayed>
          AI gebruikt dezelfde fundamenten als andere domeinen van informatica.
          AI-algoritmes gebruiken geen 'magische' concepten. Ze bestaan uit
          variabelen, selecties, iteraties, ... net zoals andere algoritmes.
        </StatusBox>
        <StatusBox variant="remember" delayed>
          AI gaat over het <b>nabootsen</b> of <b>simuleren</b> van intelligent
          gedrag. Het haalt daarvoor inspiratie uit andere domeinen zoals
          biologie, wiskunde en statistiek. AI <b>lijkt</b> intelligent, maar is
          niet bedoeld om menselijke intelligentie exact na te doen.
        </StatusBox>
      </RVSlide>

      <RVSlide>
        <h2>AI of KI?</h2>
        <p>
          In het Nederlands spreekt men ook soms over Kunstmatige Intelligentie
          (KI). Deze term wordt vooral in educatieve contexten gebruikt.
        </p>
        <p>
          KI en AI zijn beiden correct in het Nederlands. AI sluit wel dichter
          aan bij de veelgebruikte internationale benaming.
        </p>
        <StatusBox variant="edu">
          Vraag tijdens stages aan je mentor of de school hier bepaalde regels
          rond hanteert.
        </StatusBox>
      </RVSlide>
    </RVSlide>
  );
};

const AIContext = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Context en situering van AI</h1>
      </RVSlide>
      <RVSlide>
        <h2>The next big thing?</h2>
        <p>
          De term AI dateert uit de jaren '50 van vorige eeuw en heeft een
          wobbelige geschiedenis. Enkele hoogtepunten:
        </p>
        <CenteredImage src={AITimeline} />
      </RVSlide>
      <RVSlide>
        <h2>Takken binnen AI</h2>
        <TwoColumns
          left={<CenteredImage src={AIDomains1} className="w-auto" />}
          right={
            <div>
              <p>Binnen AI zijn er verschillende takken. Nuttig om te weten:</p>
              <ul>
                <li>
                  <b>Machine Learning</b>: focust op computers{" "}
                  <b>zelfstandig</b> dingen te laten leren op basis van data -
                  al dan niet onder supervisie van mensen
                </li>
                <li>
                  <b>Deep Learning</b>: een tak binnen machine learning die
                  neurale netwerken met een groot aantal lagen gebruikt
                </li>
              </ul>
              <p>
                Machine Learning - en met name Deep Learning - zijn de
                voornaamste reden voor recente explosie in AI-toepassingen.
              </p>
            </div>
          }
        />
      </RVSlide>
      <RVSlide>
        <h2>Toepassingsdomeinen binnen AI</h2>
        <TwoColumns
          left={
            <div>
              <p>
                Een andere manier om AI op te delen, is op basis van het domein
                waar het wordt ingezet:
              </p>
              <ul>
                <li>
                  <b>Computer Vision</b>: informatie herkennen in beelden
                  (dieren, verkeersborden, gezichtsherkenning, ...)
                </li>
                <li>
                  <b>Natural language processing</b>: analyse en synthese van
                  natuurlijke taal en spraak
                </li>
                <li>
                  <b>Expert systems</b>: simuleren een menselijke expert in een
                  bepaald vakgebied (bv. geneeskunde, scheikunde, softwarehulp,
                  ...)
                </li>
                <li>...</li>
              </ul>
            </div>
          }
          right={<CenteredImage src={ComputerVisionCat} />}
        />
      </RVSlide>
    </RVSlide>
  );
};

const Minimax = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h2>AI in speltheorie</h2>
        <h1>Minimax-algoritme</h1>
      </RVSlide>
      <RVSlide>
        <h2>Inleiding</h2>
        <TwoColumns
          left={
            <div>
              <p>Schaken was lang een populaire 'test' in het domein van AI.</p>
              <p>
                Al sinds de jaren '60 werkten computerwetenschappers aan een AI
                om de mens te verslaan. Uiteindelijk, in 1997, versloeg de
                computer Deep Blue de toenmalige wereldkampioen schaken, Garry
                Kasparov.
              </p>
            </div>
          }
          right={<CenteredImage src={DeepBlue} />}
        />
      </RVSlide>
      <RVSlide>
        <h2>Inleiding</h2>
        <p>Vragen die je hierbij kan stellen:</p>
        <ol>
          <li>
            Hoe stel je een 'beslissing' voor in schaken? En in andere spellen?
            <ul className="fragment">
              <li>
                <b>Antwoord</b>: je stelt elke mogelijke actie op een moment in
                het spel voor. Een beslissing is een afweging tussen al deze
                mogelijk acties
              </li>
            </ul>
          </li>
          <li>
            Hoe kan een computer de 'juiste' beslissing nemen? Wanneer is een
            beslissing beter dan een andere?{" "}
            <ul className="fragment">
              <li>
                <b>Antwoord</b>: aan de hand van contextinformatie en
                schattingen
              </li>
            </ul>
          </li>
          <li>
            Hoe hou je rekening met de acties van je tegenstander bij het maken
            van een keuze?
            <ul className="fragment">
              <li>
                <b>Antwoord</b>: je probeert te anticiperen wat de tegenstander
                kan doen tijdens hun beurt
              </li>
            </ul>
          </li>
          <li>
            Waarom duurde het zo lang om de mens te verslaan?
            <ul className="fragment">
              <li>
                <b>Antwoord</b>: technische limitaties (geheugen, rekensnelheid)
                + dieper inzicht in schaakregels nodig
              </li>
            </ul>
          </li>
        </ol>
      </RVSlide>
      <RVSlide>
        <h2>Terminologie</h2>
        <p>
          <b>Speltheorie</b>: studie van wiskundige modellen in situaties met
          twee of meer entiteiten die beslissingen kunnen nemen. Bijvoorbeeld:
          schaken, dammen, kaartspellen, ...
        </p>
        <p>
          <b>Minimax</b>: een strategie binnen speltheorie waarbij geprobeerd
          wordt het eigen verlies te beperken in een worst-case scenario.
        </p>
        <p>
          <b>Grafe (graph)</b>: een netwerk van bogen (edges) en knopen (nodes).
        </p>
        <p>
          <b>Boom (tree)</b>: een grafe waar de knopen starten vanuit een wortel
          (root).
        </p>
        <p>
          <b>Heuristiek</b>: een manier om een (al dan niet numerieke) schatting
          te maken van hoe goed/slecht een situatie is. Heuristieken zijn zelden
          perfect, maar ze zijn meestal beter dan puur willekeurig gokken
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Korte inleiding tot recursie</h2>
        <p>
          Een recursieve functie is een functie die zichzelf oproept.Sommige
          algoritmes zijn veel makkelijker te beschrijven met behulp van
          recursie. Dit concept wordt meer in detail besproken in Programmeren
          2.
        </p>
        <p>Voorbeeld:</p>
        <CodeBlock>{`def faculteit(x):
  """
  Implementeert de wiskundige bewerking !
  Bijvoorbeeld: 3! = 3 * 2 * 1
  """
  if x == 1:
    return 1
  return x * faculteit(x-1)  # de functie roept zichzelf op`}</CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>Heuristieken en schattingen</h2>
        <p>Hoe schat je volgende situaties in? Waarop baseer je je hiervoor?</p>
        <p className="fragment">
          Een race: wie kan er het snelste een broodje halen in de cafetaria en
          terugkeren naar het lokaal?
        </p>
        <p className="fragment">
          Je bent op vakantie in een buitenlandse stad. Na een stevige nacht ben
          je vergeten waar je hotel exact is en de batterij van je smartphone is
          leeg. Waarop baseer je je om de weg te vinden?
        </p>
        <p className="fragment">
          Je komt bij twee vrienden zitten die al 10 minuten aan het schaken
          zijn. Hoe bepaal je wie aan het winnen is?
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Minimax: concepten</h2>
        <ul>
          <li>Spelers A en B maken om de beurt een beslissing in het spel</li>
          <li>
            We zoeken een manier om speler A te helpen met een beslissing te
            maken
          </li>
          <li>
            Een reeks beslissingen kan voorgesteld worden door een boom:
            <ul>
              <li>De huidige toestand is de wortel</li>
              <li>
                De volgende potentiële toestanden in het spel zijn kinderen van
                de wortel
              </li>
            </ul>
          </li>
          <li>
            Van elke toestand in het spel kunnen we een schatting maken hoe
            'goed' ze is voor speler A aan de hand van heuristieken. De waarde
            is een cijfer
          </li>
          <li>
            Speler A kan <b>anticiperen</b> wat speler B gaat doen, gegeven een
            bepaalde situatie. Speler B gaat kiezen voor de toestand die hun het
            beste uitkomt. Voor speler A is dit de slechtst mogelijke toestand
          </li>
          <li>
            We kunnen niet oneindig ver in de toekomst blijven kijken, dit heeft
            weinig zin. We stellen een <b>maximale diepte</b> in voor het
            algoritme. Dit geeft aan hoeveel lagen diep we in de boom duiken
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <p>
          Voorbeeld waar elke speler slechts 2 keuzes heeft per beurt. Bij{" "}
          <Code>max</Code> is speler A aan de beurt, bij <Code>min</Code> speler
          B.
        </p>
        <CenteredImage src={minimaxTree} className="!my-12" />
        <p>
          Je leest de grafe best van onder naar boven. Speler 1 zal uiteindelijk
          voor de rechts optie gaan (de blauwe pijl), omdat dit de minst slechte
          uitkomst geeft als je 4 lagen in de toekomst kijkt.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Minimax: algoritme in mensentaal</h2>
        <p>
          Definieer een functie met 4 parameters: de toestandsboom, de huidige
          toestand, de huidige diepte, en of de keuze aan Speler A is (Ja/Nee).
        </p>
        <ol>
          <li>Zoek de kinderen van de huidige toestand</li>
          <li>
            Als de huidige toestand geen kinderen heeft, of je hebt de maximale
            diepte bereikt:
            <ol>
              <li>
                Dan geef je de geschatte waarde van de huidige toestand terug
              </li>
            </ol>
          </li>
          <li>
            Als de beurt aan Speler A is:
            <ol>
              <li>
                Herhaal het minimax-algoritme voor elk van de volgende
                toestanden in het spel, waarbij de diepte is verminderd met 1
              </li>
              <li>
                Kies de <b>grootste</b> waarde van alle volgende toestanden.
                Geef deze waarde terug
              </li>
            </ol>
          </li>
          <li>
            Anders, als de keuze <b>niet</b> aan speler A is:
            <ol>
              <li>
                Herhaal het minimax-algoritme voor elk van de volgende
                toestanden in het spel, waarbij de diepte is verminderd met 1
              </li>
              <li>
                Kies de <b>kleinste</b> waarde van de resultaten van minimax op
                alle volgende toestanden. Geef deze waarde terug
              </li>
            </ol>
          </li>
        </ol>
      </RVSlide>
      <RVSlide>
        <h2>Implementeer zelf</h2>
        <p>
          Doel van deze opgave is om het skelet van minimax te implementeren in
          Python. Om je hierbij te helpen, is de code gedefinieerd als een
          puzzel. Je moet geen nieuwe code schrijven, enkel de bestaande code
          herschikken zodat ze het algoritme vormt. Je mag van het volgende
          uitgaan:
        </p>
        <ol>
          <li>
            De library <Code>math</Code> is reeds geïmporteerd
          </li>
          <li>
            De functie <Code>get_value()</Code> bestaat al en geeft een
            schatting terug van hoe goed een bepaalde toestand is, op basis van
            een heuristiek
          </li>
        </ol>
        <p>
          <a
            target="_blank"
            href="https://parsons.problemsolving.io/puzzle/8e59e28d2456415cbf73eddfc242f6b6"
          >
            Link naar de codepuzzel
          </a>
        </p>
        <StatusBox variant="info">
          Let op de indentatie! De puzzel houdt hier rekening mee.
        </StatusBox>
      </RVSlide>
    </RVSlide>
  );
};

const NeuralNetworks = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h2></h2>
        <h1>Neurale netwerken</h1>
      </RVSlide>
      <RVSlide>
        <h2>Introductie</h2>
        <TwoColumns
          left={
            <div>
              <p>
                Neurale netwerken zijn een techniek binnen Machine Learning om
                computers complexe concepten zelfstandig te laten leren.
              </p>
              <ul>
                <li>✅ Werken enorm goed</li>
                <li>✅ Werken voor bijna elk probleem</li>
                <li>✅ Eens getraind, werken ze heel snel</li>
                <li>
                  ❌ Vereisen enorm veel data en rekenkracht om te trainen
                </li>
                <li>
                  ❌ Om optimaal te leren, moet het netwerk op voorhand tot in
                  detail afgesteld worden
                </li>
                <li>
                  ❌ Het is moeilijk om te begrijpen wat het netwerk juist
                  'leert'
                </li>
              </ul>
            </div>
          }
          right={<CenteredImage src={NeuralNetworkAnimation} />}
        />
      </RVSlide>
      <RVSlide>
        <h2>Inspiratie: neuronen in biologie</h2>
        <p>
          Een neuron krijgt chemische signalen binnen via de dendrieten. Als de
          combinatie van de signalen sterk genoeg is, stuurt ze zelf een nieuw
          signaal via de axon.
        </p>
        <p>
          Eén neuron kan niet veel doen. Het wordt pas interessant als je
          meerdere neuronen met elkaar <b>verbindt</b>. Het menselijk brein
          heeft gemiddeld 86 miljard neuronen.
        </p>
        <CenteredImage src={ImageNeuron} />
      </RVSlide>
      <RVSlide>
        <h2>Vergelijking: neuronen in biologie vs in AI</h2>
        <p>
          De dendrieten zijn de invoer, de axon is de uitvoer. We kunnen
          verschillende technieken gebruiken om te berekenen wanneer een
          'neuron' moet activeren.
        </p>
        <CenteredImage src={ImageNeuronComparison} />
      </RVSlide>
      <RVSlide>
        <h2>Neuronen simuleren in de klas</h2>
        <CenteredImage src={BrainInABag} />
        <a
          href="https://www.cs4fn.org/teachers/activities/braininabag/braininabag.pdf"
          target="_blank"
        >
          Link naar CS4FN lesactiviteit
        </a>
      </RVSlide>
      <RVSlide>
        <h2>Terminologie en concepten</h2>
        <CenteredImage src={ImageNNTerminology} />
        <p>
          Een neuraal netwerk bestaat uit lagen. Er is steeds een{" "}
          <b>input layer</b> en <b>output layer</b>. Tussenin kunnen er 0 of
          meerdere verborgen lagen zijn (<b>hidden layers</b>).
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Terminologie en concepten</h2>
        <p>
          Het aantal neuronen in de input layer hangt af van de data die je als
          invoer levert. Bijvoorbeeld:
        </p>
        <ul>
          <li>
            3 weerparameters (temperatuur, neerslaghoeveelheid, windsnelheid) →
            3 neuronen
          </li>
          <li>Een afbeelding van 10x20 pixels → 200 neuronen</li>
        </ul>
        <p>
          Het aantal neuronen in de output layer hangt af van wat je met het
          netwerk wilt bereiken. Bijvoorbeeld:
        </p>
        <ul>
          <li>Een weercijfer voor de dag → 1 neuron</li>
          <li>
            Of er een kat, vogel of hond op de afbeelding staat → 3 neuronen
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Terminologie en concepten</h2>
        <p>
          Elke verbinding tussen neuronen in de hidden layer en output layer
          heeft een bepaald gewicht.
        </p>
        <p>
          Een neuron activeert en stuurt een signaal als aan bepaalde
          voorwaarden is voldaan. Er zijn verschillende technieken hiervoor. We
          beperken ons tot:
        </p>
        <ul>
          <li>
            We tellen alle inputs van een neuron op met{" "}
            <Code>input_i * gewicht_i</Code>
          </li>
          <li>
            Het resultaat transformeren we naar een getal tussen 0 en 1. Dit
            gebeurt aan de hand van de{" "}
            <a
              target="_blank"
              href="https://www.desmos.com/calculator/dw9fmqwlmn?lang=nl"
            >
              sigmoïdefunctie
            </a>
          </li>
        </ul>
        <p>
          Algemeen geldt dat neuronen altijd een waarde tussen 0 en 1 hebben. De
          gewichten kunnen arbitrair groot of klein zijn (ook negatief).
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Doel</h2>
        <p>
          Als programmeur/trainer kies je de structuur van het netwerk: de input
          en output, het aantal tussenlagen, en het aantal neuronen per laag.
        </p>
        <p>
          De gewichten van het netwerk stel je in op zelfgekozen startwaarden
          (eventueel willekeurig)
        </p>
        <p>
          Het doel is om een netwerk te bekomen waarin de <b>gewichten</b> zo
          zijn afgesteld, dat ze correct de uitvoer kunnen voorspellen wanner we
          nieuwe invoer erdoor sturen. Hiervoor moet het netwerk <b>getraind</b>
          worden.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Algoritme om een netwerk te trainen</h2>
        <p>
          Het algoritme is zeer wiskundig, maar globaal werkt het als volgt:
        </p>
        <TwoColumns
          left={
            <div>
              <ol>
                <li>Stuur invoer door het netwerk</li>
                <li>
                  Bereken telkens de waarden van de neuronen op basis van de
                  huidige gewichten
                </li>
                <li>Herhaal tot je de uitvoer-neuronen bereikt</li>
                <li>
                  Bereken het verschil tussen de voorspelde uitvoer en de
                  verwachte uitvoer (de loss function)
                </li>
                <li>
                  Doorloop het netwerk van achter naar voren en stel de
                  gewichten bij op basis van de loss function
                </li>
              </ol>
              <p>
                Herhaal deze stappen tot de loss function voldoende klein is (of
                een ander criterium naar keuze).
              </p>
            </div>
          }
          right={<CenteredImage src={ImageNNTraining} />}
        />
      </RVSlide>
      <RVSlide>
        <h2>Opdrachten</h2>
        <p>
          Gebruik{" "}
          <a href="https://nnplayground.com/" target="_blank">
            deze simulator
          </a>{" "}
          om te experimenteren met neurale netwerken.
        </p>
        <p>Opdracht 1: experimenteer met het voorbeeld</p>
        <ul>
          <li>
            Probeer het voorgeprogrammeerde voorbeeld uit. Laat het netwerk een
            paar seconden trainen
          </li>
          <li>
            Kijk of na de trainingsperiode het netwerk bij een bepaalde invoer
            de verwachte uitvoer geeft
          </li>
          <li>
            Probeer de verschillende parameters aan te passen: weights, learning
            settings, network size. Bekijk de impact op het trainingsproces
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Opdrachten</h2>
        <p>Opdracht 2: simuleer een XOR-poort</p>
        <ul>
          <li>
            Zet het aantal lagen op 3. Het netwerk krijgt steeds 2 inputs
            (lichtschakelaars) en produceert 1 output (een lamp die brandt). We
            voegen één verborgen laag toe met 1 node
          </li>
          <li>
            Pas de gewichten aan aan de nieuwe structuur, of kies willekeurige
            gewichten
          </li>
          <li>
            Train het netwerk. Controleer nadien of het de invoer juist
            classificeert. Wat stel je vast?
          </li>
          <li>
            Voeg een extra neuron toe aan de verborgen laag, en train opnieuw.
            Vergelijk je resultaten met de versie met slechts 1 neuron
          </li>
          <li>
            Voeg een extra verborgen laag toe met 3 neuronen, en train opnieuw.
            Vergelijk je resultaten met de vorige versies. Wat besluit je?
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Opdrachten</h2>
        <p>
          Verzin zelf een mogelijke combinatie van inputs en outputs (mag absurd
          zijn). Vul ze in, en kijk of het netwerk 'verbanden' ertussen kan
          vinden.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Meer weten?</h2>
        <p>
          <a href="https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi">
            YouTube-reeks van 3Blue1Brown over neurale netwerken
          </a>{" "}
          → zeer aan te raden, ook voor andere informatica- en
          wiskundeonderwerpen. Wel in het Engels.
        </p>
      </RVSlide>
    </RVSlide>
  );
};

const Conclusie = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Conclusie</h1>
      </RVSlide>
      <RVSlide>
        <h2>AI is just a bunch of if statements</h2>
        <CenteredImage src={AIIfStatementsStrip} />
        <p>
          Bron:{" "}
          <a href="https://www.commitstrip.com/en/2017/06/07/ai-inside/?">
            CommitStrip
          </a>
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Conclusie</h2>
        <p>
          Algoritmes in AI simuleren menselijke intelligentie aan de hand van
          concepten uit informatica, wiskunde, biologie en andere domeinen.
          Achter de schermen zijn het echter gewoon algoritmes met variabelen,
          controlestructuren, etc.
        </p>
        <p>
          Typische taken in AI zijn beslissingsprocessen (bv. in schaken),
          uitvoer voorspellen op basis van invoer (bv. kanker herkennen op X-ray
          foto), en nieuwe uitvoer genereren (bv. automatische stemgeneratie)
        </p>
        <p>
          De laatste jaren zorgen vooral neurale netwerken voor een grote
          doorbraak. Ze vereisen echter veel data en rekenkracht in vergelijking
          met klassieke algoritmes.
        </p>
      </RVSlide>
    </RVSlide>
  );
};

export default Les;
