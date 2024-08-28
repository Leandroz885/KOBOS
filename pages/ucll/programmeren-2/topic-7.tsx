import { CenteredImage } from "../../../components/CenteredImage";
import {
  Code,
  CodeBlock,
  Quote,
  RVPresentation,
  RVSlide,
} from "../../../components/RevealComponents";
import { TwoColumns } from "../../../components/TwoColumns";

import RecursionGoogle from "../../../public/programmeren-2/recursion-google.png";
import RecursionNature1 from "../../../public/programmeren-2/recursion-nature-1.jpg";
import RecursionSnowflake1 from "../../../public/programmeren-2/recursion-snowflake-1.jpg";
import RecursionSnowflake2 from "../../../public/programmeren-2/snowflake-2.gif";
import RecursionFractals1 from "../../../public/programmeren-2/fractals-1.jpg";
import RecursionSierpinskiTriangle from "../../../public/programmeren-2/sierpinski-trangle.png";
import RecursionMatroesjka from "../../../public/programmeren-2/recursion-matroesjka.jpg";
import RecursionMeme1 from "../../../public/programmeren-2/recursion-meme-1.jpg";
import RecursionMeme2 from "../../../public/programmeren-2/recursion-meme-2.jpg";
import RecursionMeme3 from "../../../public/programmeren-2/recursion-meme-3.webp";
import RecursionExpanded from "../../../public/programmeren-2/recursion-expanded.png";
import DebugFrames from "../../../public/programmeren-2/debug-frames.png";
import Hanoi from "../../../public/programmeren-2/hanoi.png";
import HaskellLogo from "../../../public/programmeren-2/haskell-logo.svg";
import { AlgorithmBox } from "../../../components/AlgorithmBox";
import { StatusBox } from "../../../components/StatusBox";
import { useRouter } from "next/router";
import { DownloadPdfButton } from "../../../components/DownloadPdfButton";

const Les = () => {
  const router = useRouter();
  return (
    <RVPresentation>
      <RVSlide>
        <h2>Programmeren 2</h2>
        <h1>Topic 7: recursie</h1>
        <DownloadPdfButton routerPathName={router.pathname} />
      </RVSlide>
      <RVSlide>
        <h2>Overzicht</h2>
        <ul>
          <li>Recursie in het algemeen</li>
          <li>Recursie in informatica</li>
          <li>Opdrachten, deel 1</li>
          <li>Functies met meerdere recursieve oproepen</li>
          <li>Voor- en nadeel</li>
          <li>Haskell</li>
          <li>Opdrachten, deel 2</li>
        </ul>
      </RVSlide>
      <Inleiding />
      <RecursieInInformatica />
      <Opdrachten1 />
      <FunctiesMetMeerdereRecursieveOproepen />
      <VoorEnNadelen />
      <Haskell />
      <Opdrachten2 />
    </RVPresentation>
  );
};

const Inleiding = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Inleiding</h1>
      </RVSlide>
      <RVSlide>
        <h2>Wat is recursie?</h2>
        <Quote quotee="Wikipedia">
          In order to understand recursion, one must first understand recursion.
        </Quote>
        <p>
          Men spreekt over recursie als iets <b>kopieën van zichzelf</b> bevat.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Voorbeelden</h2>
        <ul className="">
          <li>
            <a
              href="https://www.youtube.com/watch?v=sAPGw0SD1DE"
              target="_blank"
            >
              Oneindige spiegel
            </a>
          </li>
          <li>
            <a href="https://www.google.com/search?q=recursion">
              Recursie op Google
            </a>
          </li>
          <li>Driehoek van Sierpinski</li>
          <li>Fractalen</li>
        </ul>
        <div className="grid grid-cols-3 items-center">
          <CenteredImage src={RecursionGoogle} />
          <CenteredImage
            src={RecursionSierpinskiTriangle}
            className="!max-h-60 w-auto"
          />
          <CenteredImage
            src={RecursionFractals1}
            className="!max-h-60 w-auto"
          />
        </div>
      </RVSlide>
      <RVSlide>
        <h2>Nog meer voorbeelden</h2>
        <ul>
          <li>
            Treed vaak op in de natuur als uitkomst van biologische processen
          </li>
          <li>Matroesjka</li>
        </ul>
        <div className="grid grid-cols-4 items-center">
          <CenteredImage src={RecursionSnowflake1} />
          <CenteredImage src={RecursionSnowflake2} />
          <CenteredImage src={RecursionNature1} />
          <CenteredImage src={RecursionMatroesjka} />
        </div>
      </RVSlide>
      <RVSlide>
        <h2>Nog meer voorbeelden</h2>
        <TwoColumns
          left={<CenteredImage src={RecursionMeme3} />}
          right={<CenteredImage src={RecursionMeme2} />}
        />
      </RVSlide>
    </RVSlide>
  );
};

const RecursieInInformatica = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Recursie in informatica</h1>
      </RVSlide>
      <RVSlide>
        <h2>Recursie in informatica</h2>
        <p>
          Recursie is een programmeertechniek waarbij een functie zichzelf
          direct of indirect oproept. Men noemt dit een <i>recursieve</i>{" "}
          functie.
        </p>
        <p>
          <b>Er is veel overlap tussen recursie en herhalingen</b>. Veel
          programma's met herhalingen kan je herschrijven met recursie. Recursie
          heeft bepaalde voor- en nadelen ten opzichte van 'gewone' herhalingen.
          Deze komen aan bod verder in de les.
        </p>
        <CodeBlock>{`def recursieve_functie():
  recursieve_functie()
  
def rec_a():
  rec_b()

def rec_b():
  rec_a()`}</CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>Voorbeeld: faculteit</h2>
        <CodeBlock className="!max-h-full">{`def faculteit(x):
  """
  Implementeert de wiskundige bewerking ! op een recursieve manier.
  Bijvoorbeeld: 3! = 3 * 2 * 1
  """
  if x <= 1:
    return 1
  return x * faculteit(x-1)  # de functie roept zichzelf op


# Ter vergelijking: de iteratieve versie
def faculteit_iter(x):
  """
  Implementeert de wiskundige bewerking ! op een iteratieve manier.
  """
  result = 1
  for i in range(1, x + 1):
    result = result * i
  return result`}</CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>Wat gebeurt er tijdens de uitvoering?</h2>
        <p>
          Stel dat we <Code>faculteit(3)</Code> proberen uit te voeren. Wat doet
          Python achter de schermen?
        </p>
        <CenteredImage src={RecursionExpanded} />
      </RVSlide>
      <RVSlide>
        <h2>Wat gebeurt er tijdens de uitvoering? (2)</h2>
        <p>
          Telkens wanneer we een functie oproepen, zal Python eerst{" "}
          <b>
            de huidige toestand (variabelen, parameters, huidige plaats in de
            code) opslaan
          </b>{" "}
          in het geheugen van de computer. Er wordt als het ware een foto
          genomen van de huidige scène. Men noemt dit stuk geheugen de{" "}
          <b>call stack</b>.
        </p>
        <p>
          <b>Waarom wordt dit gedaan? Waarom is die informatie belangrijk?</b>
        </p>
        <p className="fragment">
          Omdat daarmee de computer de toestand kan herstellen als de functie
          voltooid is. Op basis van de foto wordt de vorige scène weer
          opgebouwd.
        </p>
        <p className="fragment">
          Dit geldt voor <b>alle</b> functies (recursief en niet-recursief). Het
          geldt in veel - maar niet alle - programmeertalen.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Call stack inspecteren</h2>
        <p>
          Met een debugger (zoals die van Pycharm) kan je de call stack
          bekijken. Elke functieoproep genereert een <b>frame</b> (foto) die op
          de call stack wordt geplaatst.
        </p>
        <ol>
          <li>
            Zet een breakpoint (rode bol) naast de lijnen code waar je wilt dat
            het programma pauzeert
          </li>
          <li>Voer het programma uit in debug mode (keverknop)</li>
          <li>
            Wanneer het programma pauzeert op een punt, kan je de huidige frame
            en alle 'bovenliggende' frames bekijken
          </li>
        </ol>
        <CenteredImage src={DebugFrames} />
      </RVSlide>
    </RVSlide>
  );
};

const Opdrachten1 = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Opdrachten, deel 1</h1>
      </RVSlide>
      <RVSlide>
        <h2>Hoe schrijf je een correct recursief algoritme?</h2>
        <p>Een recursief algoritme heeft altijd minstens volgende kenmerken:</p>
        <ul>
          <li>
            Een of meerdere <b>basisgevallen</b> (<i>base cases</i>): dit zijn
            (vaak triviale) stopcondities. In <Code>faculteit(x)</Code> is{" "}
            <Code>{"0! = 1"}</Code> het basisgeval
          </li>
          <li>
            Een of meerdere <b>recursieve</b> gevallen: hierin wordt de functie
            opnieuw opgeroepen met aangepaste parameters
          </li>
        </ul>
        <p>
          Voor de rest kan je in een recursieve functie alles doen wat ook in
          gewone functies kan. Zelfs lussen zijn toegelaten - al zal dat niet
          vaak nodig zijn in de praktijk.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Opdracht: Fibonacci</h2>
        <p>
          <b>Doel:</b> Implementeer <Code>fibonacci(x)</Code>, een functie die
          het <Code>x</Code>e cijfer van de rij van Fibonacci teruggeeft.{" "}
        </p>
        <ol>
          <li>
            Geen idee meer wat de rij van Fibonacci is? Zoek zelf online naar
            een kort antwoord
          </li>
          <li>
            Schrijf eerst 4 testen voor de functie. Gebruik <Code>assert</Code>{" "}
            hiervoor
          </li>
          <li>Implementeer de functie. Gebruik geen lussen, enkel recursie</li>
          <li>Controleer of de functie voldoet aan je testen</li>
          <li>
            Gebruik debug mode om te kijken hoe de call stack evolueert naarmate
            je functie meer wordt opgeroepen. Tip: zet alle testen uit (maak er
            comments van), behalve één naar keuze.
          </li>
        </ol>
        <p>
          <b>Extra:</b> implementeer <Code>fibonacci_iter(x)</Code>. Deze
          functie geeft hetzelfde terug als <Code>fibonacci(x)</Code>, maar
          werkt iteratief. Hergebruik je testen om te controleren of de
          implementatie correct is.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Opdracht: lengte van een lijst bepalen</h2>
        <p>
          <b>Doel:</b> Implementeer <Code>my_len(l)</Code>, een functie die de
          lengte van de lijst <Code>l</Code> teruggeeft. Ze doet dus hetzelfde
          als de ingebouwde Python-functie <Code>len()</Code>.
        </p>
        <ol>
          <li>
            Voor deze opdracht kan list slicing van pas komen. Zoek op wat list
            slicing in Python inhoudt. Zie bv.{" "}
            <a
              target="_blank"
              href="https://note.nkmk.me/en/python-slice-usage/"
            >
              python-slice-usage
            </a>
          </li>
          <li>
            Schrijf eerst 3 testen voor de functie, inclusief 1 voor de base
            case. Gebruik <Code>assert</Code> hiervoor
          </li>
          <li>
            Implementeer de functie. Gebruik geen lussen, enkel recursie. Het is
            verboden om ingebouwde functie zoals <Code>len()</Code> en{" "}
            <Code>count()</Code> te gebruiken
          </li>
          <li>Controleer of de functie voldoet aan je testen</li>
        </ol>
        <p>
          <b>Extra:</b> implementeer een iteratieve versie van de functie.
        </p>
      </RVSlide>
    </RVSlide>
  );
};

const VoorEnNadelen = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h2></h2>
        <h1>Voor- en nadelen van recursie</h1>
      </RVSlide>
      <RVSlide>
        <h2>Risico's en bedenkingen</h2>
        <p>
          Op basis van voorgaande voorbeelden en opdrachten, zou je denken dat
          recursie heel vaak gebruikt wordt. In de praktijk is dit echter niet
          het geval. Waarom? Wat zijn de voor- en nadelen tegenover herhalingen?
        </p>
        <p>
          Om recursie dieper te begrijpen, is het noodzakelijk om meer aandacht
          te besteden aan het geheugen van computers.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Elegantie en leesbaarheid</h2>
        <p>
          Recursieve code is vaak 'eleganter' en eenvoudiger te lezen. Ze is ook
          eenvoudiger te programmeren, indien je de oplossing in mensentaal of
          een formele taal recursief kan beschrijven (bv. definitie van
          faculteit in de lessen wiskunde).
        </p>
        <p>
          Recursieve code schrijven vraagt wat oefening, zeker als je gewend
          bent om iteratieve code te schrijven (lussen).
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Geheugengebruik</h2>
        <p>
          <Code>
            faculteit(<Code>n</Code>)
          </Code>{" "}
          neemt op een bepaald punt tijdens uitvoering het volgende geheugen in:
        </p>
        <ul>
          <li>
            <Code>n</Code> frames
          </li>
          <li>
            elk frame heeft 1 variabele <Code>x</Code>
          </li>
          <li>
            elk frame bevat ook 'onzichtbare' contextdata (framenummer, parent
            frame, ...)
          </li>
        </ul>
        <p>
          Ter vergelijking:<Code>faculteit_iter(n)</Code> vereist 1 frame in
          totaal met daarin 2 variabelen. Dit is onafhankelijk van de grootte
          van <Code>n</Code>.
        </p>
        <p>
          <b> → Gigantisch verschil!</b>
        </p>
        <p>Wat als we 1 000, 10 000, ... frames nodig hebben?</p>
      </RVSlide>
      <RVSlide>
        <h2>Oneindige lussen?</h2>
        <p>
          Als je de base case in een recursieve functie verwijdert - of vergeet
          te programmeren - krijg je vanzelf een oneindige lus. Of toch niet?
        </p>
        <CodeBlock>{`RecursionError: maximum recursion depth exceeded in comparison`}</CodeBlock>
        <p>
          Python - en ook andere talen - proberen hun geheugengebruik te
          begrenzen. Recursie leidt makkelijk tot een hoog geheugengebruik, door
          het aantal frames dat een recursieve functie kan produceren.
        </p>
        <CenteredImage src={RecursionMeme1} delayed width={550} />
      </RVSlide>
      <RVSlide>
        <h2>Verdeelde meningen</h2>
        <p>
          Recursie leidt soms tot 'heftige' discussies. Voorstanders verkiezen
          de elegante en intuïtieve code, tegenstanders hameren op het zware
          geheugengebruik.
        </p>
        <StatusBox variant="remember">
          Kies steeds <b>bewust</b> voor recursie. Probeer op voorhand in te
          schatten of het geheugenverbruik een probleem kan vormen later.
        </StatusBox>
        <StatusBox variant="edu">
          In de meeste opdrachten op school gaan leerlingen niet snel tegen de
          grenzen van recursie aanbotsen. Het intuïtieve aspect van recursie kan
          bovendien een voordeel zijn voor beginnende programmeurs.
        </StatusBox>
      </RVSlide>
    </RVSlide>
  );
};

const FunctiesMetMeerdereRecursieveOproepen = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h2>Gevorderde recursie</h2>
        <h1>Functies met meer dan één recursieve oproep na elkaar</h1>
      </RVSlide>
      <RVSlide>
        <h2>Recursief sorteren</h2>
        <p>Een recursief algoritme om data te sorteren:</p>
        <AlgorithmBox>
          <ol>
            <li>
              Splits de verzameling in twee delen, <Code>klein</Code> en{" "}
              <Code>groot</Code>, waarbij je ervoor zorgt dat alle elementen in{" "}
              <Code>klein</Code> kleiner zijn dan alle elementen in{" "}
              <Code>groot</Code>
            </li>
            <li>
              Herhaal (1) op <Code>klein</Code>
            </li>
            <li>
              Herhaal (1) op <Code>groot</Code>
            </li>
            <li>
              Zet <Code>groot</Code> achter <Code>klein</Code>
            </li>
          </ol>
        </AlgorithmBox>
        <p>
          Een meer uitgebreide versie van dit algoritme staat gekend als{" "}
          <b>Quicksort</b>.
        </p>
        <p>
          Dit algoritme bevat twee recursieve oproepen na elkaar. Dit is al veel
          moeilijker om te vertalen naar een iteratieve versie (een versie met{" "}
          <Code>for</Code> of <Code>while</Code>).
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Torens van Hanoi</h2>
        <p>Deze oude puzzel werkt als volgt:</p>
        <ul>
          <li>Er zijn 3 pinnen: bron, hulp, doel</li>
          <li>Er zijn N schijven (minstens 3), gestapeld volgens grootte</li>
          <li>
            Doel: verplaats de schijven 1 voor 1 van bron naar doel zodat ze ook
            op doel gestapeld zijn volgens grootte
          </li>
          <li>
            Het is niet toegelaten om een grotere schijf op een kleinere te
            leggen
          </li>
        </ul>
        <TwoColumns
          left={
            <div>
              <p>
                Kan jij de puzzel oplossen in het minimaal aantal beurten? Welk
                recursief patroon keert steeds terug?
              </p>
              <a
                target="_blank"
                href="https://www.mathsisfun.com/games/towerofhanoi.html"
              >
                Online simulatie
              </a>
            </div>
          }
          right={<CenteredImage src={Hanoi} />}
        />
      </RVSlide>
      <RVSlide>
        <h2>Torens van Hanoi: algoritme in mensentaal</h2>
        <AlgorithmBox>
          <p>
            <b>
              Om <Code>N</Code> schijven van <Code>bron</Code> naar{" "}
              <Code>doel</Code> te verplaatsen:
            </b>
          </p>
          <ol>
            <li>
              Verplaats <Code>N-1</Code> schijven van <Code>bron</Code> naar{" "}
              <Code>hulp</Code>
            </li>
            <li>
              Verplaats schijf <Code>N</Code> van <Code>bron</Code> naar{" "}
              <Code>doel</Code>
            </li>
            <li>
              Verplaats <Code>N-1</Code> schijven van <Code>hulp</Code> naar{" "}
              <Code>doel</Code>
            </li>
          </ol>
        </AlgorithmBox>
        <p>Probeer dit algoritme in Python te programmeren:</p>
        <ol>
          <li>
            Maak een functie <Code>hanoi(N, bron, doel, hulp)</Code>
          </li>
          <li>Bepaal de base case</li>
          <li>Bepaal de recursieve cases</li>
          <li>Print telkens de actie die moet gebeuren. Bijvoorbeeld:</li>
          <ol>
            <li>
              <Code>Verplaats schijf 1 van BRON naar HULP</Code>
            </li>
            <li>
              <Code>Verplaats schijf 2 van BRON naar DOEL</Code>
            </li>
            <li>...</li>
          </ol>
        </ol>
      </RVSlide>
      <RVSlide>
        <h2>Torens van Hanoi: oplossing</h2>
        <CodeBlock delayed>{`def hanoi(n, bron, doel, hulp):
  if n == 1:
    print("Verplaats schijf 1 van {} naar {}".format(bron, doel))
  else:
    hanoi(n - 1, bron, hulp, doel)
    print("Verplaats schijf {} van {} naar {}".format(n, bron, doel))
    hanoi(n - 1, hulp, doel, bron)`}</CodeBlock>
        <p>
          Merk op dat er twee recursieve oproepen zijn, met verschillende
          parameters. Tussendoor gebeurt er nog iets anders (een{" "}
          <Code>print()</Code>).
        </p>
      </RVSlide>
    </RVSlide>
  );
};

const Haskell = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h2>De gouden middenweg?</h2>
        <h1>Haskell</h1>
      </RVSlide>
      <RVSlide>
        <h2>Context</h2>
        <p>
          Het voornaamste argument tegen recursie is het geheugenverbruik.
          Nochtans kan je recursieve functies slimmer laten werken. Er zijn
          allerlei eenvoudige optimalisatietechnieken mogelijk.
        </p>
        <p>
          De meeste talen 'herkennen' recursieve functies echter niet als
          speciale functies. Ze behandelen ze zoals andere functies.
          Optimalisaties zijn daarom niet mogelijk, extreem geheugenverbruik
          lijkt haast onvermijdelijk.
        </p>
        <p>Kan het anders?</p>
      </RVSlide>
      <RVSlide>
        <h2>Haskell</h2>
        <p>
          Een <b>functionele</b> programmeertaal met <b>statische</b> types.
        </p>
        <a target="_blank" href="https://www.haskell.org/">
          <CenteredImage src={HaskellLogo} />
        </a>
        <p>Enkele opvallende kenmerken:</p>
        <ul>
          <li>
            De taal is <i>puur</i>: een functie doet <b>altijd</b> hetzelfde bij
            dezelfde invoer
          </li>
          <li>
            Variabelen zijn nooit aanpasbaar. Ze zijn <b>immutable</b>, zonder
            uitzondering
          </li>
          <li>Types zijn statisch, alle datasoorten zijn op voorhand gekend</li>
          <li>
            Functies zijn zelf types, net zoals strings, numbers, booleans
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Herhaling in Haskell</h2>
        <p>
          Aangezien variabelen niet kunnen veranderen, ondersteunt Haskell geen{" "}
          <Code>for</Code> of <Code>while</Code>-lus. Waarom?
        </p>
        <p className="fragment">
          Beide lussen hebben een variabele nodig die verandert (een booleaanse
          waarde of een teller-variabele).
        </p>
        <p>Toch ondersteunt Haskell herhalingen. Hoe?</p>
        <p className="fragment">Via recursie.</p>
      </RVSlide>
      <RVSlide>
        <h2>Haskell: voorbeeld van herhaling</h2>
        <p>
          <Code>faculteit(x)</Code> in Haskell:
        </p>
        <CodeBlock language="Haskell">{`faculteit :: Integer -> Integer
faculteit 0 = 1
faculteit n = n * faculteit (n - 1)`}</CodeBlock>
        <ol>
          <li>
            Definieer de functie <Code>faculteit</Code>. Ze accepteer een{" "}
            <Code>Integer</Code> en geeft een <Code>Integer</Code> terug
          </li>
          <li>
            Schrijf de base case: <Code>0! = 1</Code>
          </li>
          <li>
            Schrijf de recursieve case: <Code>n! = n * (n - 1)!</Code>
          </li>
        </ol>
        <p>
          Haskell probeert alle varianten van een functie uit van boven naar
          onder, en kiest steeds de eerste variant die matcht. Bij elke
          recursieve call herstart hij bovenaan de functiedefinitie.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Haskell: voordelen</h2>
        <p>
          Haskell dwingt af dat programmeurs recursie gebruiken in plaats van
          lussen. Daardoor kan de taal allerlei trucs en optimalisaties
          toepassen achter de schermen.
        </p>
        <p>
          <b>
            In het algemeen transformeert Haskell elke recursieve call naar een
            iteratie.
          </b>{" "}
          Dit gebeurt volledig automatisch tijdens de compilatiestap, net voor
          je een programma uitvoert. Het is dus zeer geheugenefficiënt, en toch
          behoudt het de voordelen van recursie.
        </p>
        <p>
          Haskell is helaas niet zo wijdverspreid. Het is vooral populair onder
          wiskundige die willen programmeren, omdat het veel meer wiskundige
          regels benadert dan andere programmeertalen.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Meer weten?</h2>
        <ul>
          <li>
            <a href="https://play.haskell.org/" target="_blank">
              Online playground (geen installatie nodig)
            </a>
          </li>
          <li>
            <a href="https://en.wikibooks.org/wiki/Haskell" target="_blank">
              Wikibooks
            </a>
          </li>
          <li>
            <a href="http://learnyouahaskell.com/chapters" target="_blank">
              Learn You a Haskell
            </a>
          </li>
        </ul>
      </RVSlide>
    </RVSlide>
  );
};

const Opdrachten2 = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Opdrachten, deel 2</h1>
      </RVSlide>
      <RVSlide>
        <h2>Opdrachten</h2>
        <h3>Grenzen van recursie</h3>
        <p>
          Bepaal vanaf welke invoerwaarde jouw implementatie van{" "}
          <Code>faculteit(x)</Code> de recursiegrens overschrijdt op je
          computer. Doe hetzelfde voor <Code>fibonacci(x)</Code>.
        </p>
        <h3>Toren van Hanoi: uitbreiding</h3>
        <p>
          Pas <Code>hanoi(x)</Code> aan zodat het bijhoudt hoeveel stappen er
          gezet zijn. Laat de functie het aantal stappen teruggeven als een
          nummer. Je mag hiervoor de functie uitbreiden met variabelen,
          parameters, ...
        </p>
      </RVSlide>
      <RVSlide>
        <h3>Veelvouden van 9</h3>
        <p>
          Een getal is een veelvoud van 9 als de som van de cijfers een veelvoud
          van 9 is. Schrijf recursieve functies om te testen of een gegeven
          positief geheel getal een veelvoud van 9 is.
        </p>
        <p>
          Tip: schrijf een aparte functie om de som van de cijfers in een getal
          te berekenen.(Hoe pak je één voor één de cijfers uit een getal?)
        </p>
        <p>
          <b>Extra:</b> implementeer dit opnieuw, maar nu iteratief (met lussen)
        </p>
        <h3>Zoeken in een gesorteerde lijst</h3>
        <p>
          Implementeer de basisversie van Quicksort uit de slides in Python en
          test het uit.
        </p>
        <p>Denk na over hoe je het referentie-element telkens selecteert.</p>
        <p>
          Let op: een rij met een even aantal elementen heeft geen “middelste”
          element.
        </p>
      </RVSlide>
      <RVSlide>
        <h3>Haskell (moeilijker)</h3>
        <p>
          Verdiep je in Haskell en hermaak een aantal oefeningen. Suggesties:
        </p>
        <ul>
          <li>Fibonacci</li>
          <li>Lengte van een lijst</li>
          <li>Toren van Hanoi</li>
          <li>...</li>
        </ul>
      </RVSlide>
    </RVSlide>
  );
};

export default Les;
