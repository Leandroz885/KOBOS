import { useRouter } from "next/router";
import { DownloadPdfButton } from "../../../components/DownloadPdfButton";
import {
  Code,
  CodeBlock,
  RVPresentation,
  RVSlide,
} from "../../../components/RevealComponents";
import BigOChart from "../../../public/programmeren-2/big-o-complexity-chart.png";

import { StatusBox } from "../../../components/StatusBox";
import { Math } from "../../../components/Math";
import { CenteredImage } from "../../../components/CenteredImage";

const Les = () => {
  const router = useRouter();
  return (
    <RVPresentation>
      <RVSlide>
        <h2>Programmeren 2</h2>
        <h1>Topic 13: complexiteit van algoritmes</h1>
        <DownloadPdfButton routerPathName={router.pathname} />
      </RVSlide>
      <RVSlide>
        <h2>Overzicht</h2>
        <ul>
          <li>Probleemstelling + domeinen</li>
          <li>Regels rond complexiteit bepalen</li>
          <li>Complexiteit visueel voorgesteld</li>
          <li>Complexiteit van enkele algoritmes</li>
        </ul>
      </RVSlide>
      <Probleemstelling />
      <AlgemeneRegels />
      <ComplexiteitVisueel />
      <BubbleSort />
    </RVPresentation>
  );
};

const Probleemstelling = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Probleemstelling</h1>
      </RVSlide>
      <RVSlide>
        <h2>Probleemstelling</h2>
        <p>
          Anders dan wiskundigen zijn informatici geïnteresseerd in het{" "}
          <b>vergelijken</b> van manieren om iets op te lossen.
        </p>
        <p>Welke concepten van computationeel denken zijn hier aan gelinkt?</p>
        <p className="fragment">
          <b>Algoritmisch denken</b> en <b>Evaluatie</b>.
        </p>
        <p>
          Kan je voorbeelden geven uit Programmeren 1/Programmeren 2/elders waar
          er meerdere oplossingen waren voor hetzelfde probleem?
        </p>
        <ul className="fragment">
          <li>
            Sorteeralgoritmes → <b>focus van deze les</b>
          </li>
          <li>Een programma proceduraal of objectgericht schrijven</li>
          <li>
            Datastructuren met gelijkaardige kenmerken (lijsten vs tuples,
            dictionaries vs objecten)
          </li>
        </ul>
        <p className="fragment">
          In deze les leren we de efficiëntie van algoritmes te evalueren. We
          focussen specifiek op sorteeralgoritmes, maar de principes zijn
          algemeen toepasbaar.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Domeinen</h2>
        <p>
          Het ontwerpen van algoritmes valt onder het domein <b>algoritmiek</b>.
          Delen ervan zijn al aan bod gekomen in eerdere lessen. Er zijn nog
          veel meer algoritmische technieken voor fictieve en reële problemen,
          maar deze komen niet verder aan bod in deze les.
        </p>
        <p>
          Het analyseren van de efficiëntie van algoritmes valt onder{" "}
          <b>complexiteitsanalyse</b>. Zie ook de les rond fundamenten van
          informatica.
        </p>
        <p>
          Complexiteitsanalyse steunt op formele wiskundige regels; vooral
          limieten zijn belangrijk. In deze les proberen we op een meer
          intuïtieve manier er vat op te krijgen. We beperken ons tot
          tijdsanalyse (hoe lang de uitvoering van een algoritme duurt). Er
          bestaat ook ruimteanalyse (hoeveel geheugen een algoritme nodig heeft
          tijdens uitvoering), maar dit behandelen we niet.
        </p>
      </RVSlide>
    </RVSlide>
  );
};

const AlgemeneRegels = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Algemene regels rond complexiteitsanalyse</h1>
      </RVSlide>
      <RVSlide>
        <h2>Algemene regels (1)</h2>
        <p>
          In complexiteitsleer zoekt men uit hoe <i>snel</i> een algoritme
          werkt. Dit wordt niet uitgedrukt in seconden, maar in een{" "}
          <b>grootteorde</b> van hoeveelheid werk. We zijn geïnteresseerd in het
          beantwoorden van de volgende vraag:
        </p>
        <StatusBox variant="remember">
          Stel dat de invoer drastisch toeneemt, hoeveel meer tijd zal het
          algoritme nodig hebben om het resultaat (de uitvoer) te vinden?
        </StatusBox>
        <p>
          Bij de analyse van de complexiteit van een algoritme, wordt bijna{" "}
          altijd uitgegaan van het <b>worst-case</b> scenario. Men gaat ook uit
          van een <b>(bijna) oneindig grote invoer</b>. Dit leidt tot een aantal
          regels rond verwaarlozing van bepaalde operaties.
        </p>
        <p>
          De complexiteit van een algoritme wordt uitgredukt door de grote-O
          notatie (Engels: <i>Big-O notation</i>), geschreven als{" "}
          <Math>O(...)</Math>. Het geeft de <i>grootteorde</i> weer, niet de
          exacte tijdsduur of het exact aantal operaties.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Algemene regels (2)</h2>
        <p>
          Wiskundige operaties (<Code>+, -, *, /, %</Code>) vragen een constante
          hoeveelheid tijd, ongeacht hoe groot/klein de getallen zijn. Constante
          tijd wordt uitgedrukt door <Math>O(1)</Math>.
        </p>
        <p>
          Simpele acties die een effect hebben op de computer, worden meestal
          ook als constant beschouwd. <b>Dit is niet veralgemeenbaar</b>, maar
          in de context van deze les mag hiervan uitegaan worden. Voorbeelden:
        </p>
        <ul>
          <li>Een variabele een waarde toekennen</li>
          <li>
            <Code>input()</Code> en <Code>print()</Code>
          </li>
          <li>
            <Code>len()</Code>
          </li>
          <li>
            <Code>return</Code>
          </li>
        </ul>
        <p>
          Meerdere constante operaties na elkaar resulteert nog steeds in{" "}
          <Math>O(1)</Math>. De impact van meerdere constante operaties wordt
          gezien als verwaarloosbaar tegenover ander werk.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Voorbeeld</h2>
        <p>
          Onderstaande functie accepteert een cijfer <Code>x</Code> en voert een
          aantal bewerkingen uit.
        </p>
        <CodeBlock>{`def kwadrateer_en_deel_door_drie(x):
  y = x * x  # O(1)
  z = y / 3  # O(1)
  return z   # O(1)`}</CodeBlock>
        <p>Wat is de complexiteit van de functie in zijn geheel?</p>
        <div className="fragment">
          <p>
            Elk van de stappen heeft complexiteit <Math>O(1)</Math>. De
            complexiteit van de functie in zijn geheel is dus <Math>O(1)</Math>.
          </p>
          <p>
            Dit betekent dat de functie{" "}
            <Code>kwadrateer_en_deel_door_drie()</Code> altijd in constante tijd
            zal werken, ongeacht de grootte van <Code>x</Code>.
          </p>
          <p>
            <b>
              <Math>O(1)</Math> is het best mogelijke resultaat dat een
              algoritme/functie kan hebben
            </b>
            . In de praktijk is dit zelden haalbaar.
          </p>
        </div>
      </RVSlide>
      <RVSlide>
        <h2>Algemene regels (3)</h2>
        <p>
          De voornaamste bron van werk komt door het gebruik van{" "}
          <b>herhalingen die afhangen van de grootte van invoer</b>.
        </p>
        <p>
          Stel dat je als invoer een lijst van <Code>n</Code> elementen hebt.
          Als je één of meerdere constante operatie <Math>n</Math> keer uitvoert
          omwille van een herhaling, dan heeft het geheel complexiteit{" "}
          <Math>O(n)</Math>.
        </p>
        <p>
          Bij <Code>for</Code>-lussen is het meestal makkelijk te voorspellen
          hoeveel keer ze uitgevoerd zal worden. Bij <Code>while</Code>-lussen
          moet je soms meer nadenken.
        </p>
        <p>
          Tegenover <Math>O(n)</Math> wordt <Math>O(1)</Math> verwaarloosd.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Voorbeeld</h2>
        <p>
          De onderstaande functie berekent de som van alle cijfers in{" "}
          <Code>lijst</Code>:
        </p>
        <CodeBlock>{`def bereken_som(lijst):
  som = len(lijst)        # O(1)
  for element in lijst:   # O(n)
    som += element          # O(1)
  return som              # O(1)`}</CodeBlock>
        <p>Wat is de complexiteit van de functie in zijn geheel?</p>
        <div className="fragment">
          <p>
            <Code>som += element</Code> wordt <Math>n</Math> keer uitgevoerd,
            waarbij <Code>n</Code> de lengte van de lijst is. De herhaling is
            dus <Math>O(n)</Math>. De andere acties zijn <Math>O(1)</Math>, maar
            deze zijn verwaarloosbaar tegenover de herhaling.
          </p>
        </div>
      </RVSlide>
      <RVSlide>
        <h2>Algemene regels (4)</h2>
        <p>
          Bij een keuze of een splitsing in een algoritme, neem je altijd de{" "}
          <b>optie die op dat moment het minst gunstig is</b>. Dit kan dus
          variëren doorheen de uitvoering van het algoritme.
        </p>
        <p>
          Dit geldt voor <Code>if-elif-else</Code>, maar ook{" "}
          <Code>switch-case</Code> en andere 'exotische' vormen van selecties.
        </p>
        <p>
          <b>
            De complexiteit van een functie <Code>f</Code> heeft impact op elke
            functie die <Code>f</Code> oproept
          </b>
          . De complexiteit wordt overgedragen van 'lagere' functies naar
          'hogere' functies.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Voorbeeld</h2>
        <p>
          Onderstaande functie accepteert <Math>m</Math> lijsten, elk van lengte{" "}
          <Math>n</Math>:
        </p>
        <CodeBlock className="text-lg">{`def bereken_totale_som_van_lijsten_met_oneven_start(lijsten):
  totale_som = 0                        # O(1)
  for lijst in lijsten:                 # O(m)
    if lijst[0] % 2 == 1:               # O(1)
      totale_som += bereken_som(lijst)  # O(n)
    else:  
      print("Lijst overgeslagen")       # O(1)
  return totale_som`}</CodeBlock>
        <p>
          Wat is de complexiteit van de functie in zijn geheel? Let op het
          verschil tussen <Math>m</Math> en <Math>n</Math>.
        </p>
        <div className="fragment">
          <ul>
            <li>
              We nemen steeds de slechts mogelijke optie in de{" "}
              <Code>if-else</Code>. In dit geval is de <Code>if</Code> altijd
              slechter, aangezien <Code>bereken_som()</Code> complexiteit{" "}
              <Math>O(n)</Math> heeft (zie vorige slides)
            </li>
            <li>
              De <Code>if-else</Code> wordt <Math>m</Math> keer uitgevoerd
            </li>
            <li>
              het geheel van <Code>for</Code>-lus met <Code>if-else</Code>
              -selectie is dus <Math>O(m * n)</Math>
            </li>
            <li>
              De andere operaties zijn <Math>O(1)</Math> en mogen dus
              verwaarloosd worden
            </li>
          </ul>
        </div>
      </RVSlide>
      <RVSlide>
        <h2>Algemene regels (5)</h2>
        <p>
          Behalve functies, kan je ook{" "}
          <b>
            lussen en selecties met elkaar (en met functies) combineren
            ('nesten')
          </b>
          . De complexiteiten worden dan vermenigvuldigd zoals in het vorige
          voorbeeld met <Math>O(m * n)</Math>.
        </p>
        <CodeBlock>
          {`def print_speciale_reeks(n):
  for i in range(n):        # O(n)
    for j in range(n / 2):  # O(n)
      print(i + j)          # O(1)`}
        </CodeBlock>
        <p>Wat is de complexiteit van deze functie?</p>
        <ul className="fragment">
          <li>
            <Code>print(i + j)</Code> is een constante operatie
          </li>
          <li>
            <Code>for j in range(n / 2)</Code> is <Math>O(n)</Math>. Er staat
            wel <Code>n / 2</Code>, maar de constante factor <Math>1/2</Math>{" "}
            weegt niet op tegen een zeer grote <Math>n</Math>
          </li>
          <li>
            <Code>for i in range(n)</Code> voert de lus erbinnen nog eens{" "}
            <Math>n</Math> keer uit. Het geheel is dus <Math>O(n * n)</Math> of{" "}
            <Math>O(n²)</Math>
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Algemene regels (6)</h2>
        <p>
          Recursie is iets uitdagender. Als je geluk hebt, kan je de code
          herschrijven met lussen en van daaruit de voorgaande regels toepassen.
        </p>
        <p>
          Als herschrijven moeilijk tot onmogelijk is, kan je het volgende
          proberen:
        </p>
        <ol>
          <li>Bepaal de complexiteit van de base cases</li>
          <li>
            Bepaal hoeveel recursieve cases worden opgeroepen voor{" "}
            <Math>n = 2, 3, 4, ...</Math> en vermenigvuldig ze met de
            complexiteit van de base cases
          </li>
          <li>
            Probeer een patroon te vinden en schrijf dit in <Math>O(...)</Math>
            -notatie
          </li>
        </ol>
      </RVSlide>
    </RVSlide>
  );
};

const ComplexiteitVisueel = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Soorten complexiteit visueel voorgesteld</h1>
      </RVSlide>
      <RVSlide>
        <h2>Grafiek</h2>
        <CenteredImage src={BigOChart} />
        <p>
          Bron:{" "}
          <a href="https://www.bigocheatsheet.com/">
            Big-O Algorithm Complexity Cheat Sheet (Know Thy Complexities!)
            @ericdrowell
          </a>
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Uitleg bij grafiek</h2>
        <ul>
          <li>
            Deze grafiek toont verschillende complexiteiten en hun
            overeenkomstige wiskundige functies. De x-as stelt de grootte van de
            invoer voor (<Math>n</Math>)
          </li>
          <li>
            <Math>^</Math> betekent 'tot de macht'
          </li>
          <li>
            Algoritmes met complexiteit <Math>O(n²)</Math> en erger worden als
            zeer slecht gezien qua complexiteit, en dus te vermijden, tenzij er
            geen beter algoritme bestaat
          </li>
          <li>
            <Math>O(n³), O(n^4), ...</Math> bestaan, maar zijn niet getoond. Ze
            liggen tussen <Math>O(n²)</Math> en <Math>O(2^n)</Math> (zeer slecht
            dus)
          </li>
          <li>
            <Math>O(n!)</Math> is veruit de slechtst mogelijke complexiteit
          </li>
          <li>
            De website geeft ook een lijst van populaire algoritmes uit
            computerwetenschappen en hun complexiteit
          </li>
        </ul>
      </RVSlide>
    </RVSlide>
  );
};

const BubbleSort = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Complexiteit toegepast op algoritmes</h1>
      </RVSlide>
      <RVSlide>
        <h2>Bubble sort: visueel (ter opfrissing)</h2>
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
      <RVSlide>
        <h2>Bubble sort: pseudocode</h2>
        <CodeBlock>{`def bubble_sort(lijst):
  n = lengte van lijst
  fase = 0
  while fase < n - 1:
    positie = 0
    while positie < n - 1 - fase:
      als lijst[positie] groter is dan lijst[positie + 1]
        dan wissel elementen van plaats
      positie += 1
    fase += 1
  return lijst`}</CodeBlock>
        <p>
          Bepaal de complexiteit van het hele algoritme. Bepaal eerst de
          complexiteit van elke lijn apart, en pas de regels van vorige slides
          toe om ze te combineren tot een eindresultaat.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Oplossing</h2>
        <CodeBlock delayed>{`def bubble_sort(lijst):
  n = lengte van lijst                                    # O(1)
  fase = 0                                                # O(1)
  while fase < n - 1:                                     # O(n)
    positie = 0                                           # O(1)
    while positie < n - 1 - fase:                         # O(n)
      als lijst[positie] groter is dan lijst[positie + 1] # O(1)
        dan wissel elementen van plaats                   # O(1)
      positie += 1                                        # O(1)
    fase += 1                                             # O(1)
  return lijst                                            # O(1)`}</CodeBlock>
        <ul className="fragment">
          <li>
            Binnenste lus wordt gemiddeld <Math>(n - 1) / 2</Math> keer
            uitgevoerd (in het begin meer, naar het einde toe minder). Dit wordt
            vereenvoudigd tot <Math>O(n)</Math>
          </li>
          <li>
            Totale complexiteit is <Math>O(n²)</Math> door de geneste lus → vrij
            slecht
          </li>
          <li>
            als de rij in lengte verdubbelt, verviervoudigt (ongeveer) de tijd
            nodig om ze te sorteren (bv lengte x 10 → +/- tijd x 100)
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Kan het beter?</h2>
        <p>
          Bubble sort is intuïtief te programmeren en te begrijpen, maar is
          praktisch enkel bruikbaar voor kleine invoer. Programmeurs hebben
          doorheen de jaren allerlei andere sorteeralgoritmes bedacht die in
          bepaalde gevallen beter werken. Soms zit er wel een kost aan
          verbonden.
        </p>
        <ul>
          <li>
            Merge sort en Heap sort:
            <ul>
              <li>
                <b>Onthouden meer informatie</b> zodat dubbel werk vermeden
                wordt
              </li>
              <li>
                Tijdscomplexiteit: <Math>O(n * log₂n)</Math>
              </li>
            </ul>
          </li>
          <li>
            Quicksort:
            <ul>
              <li>
                Verdeel-en-heers, recursief (zie lessen over recursie + CS
                Unplugged)
              </li>
              <li>
                Tijdscomplexiteit: gemiddeld <Math>O(n * log₂n)</Math>, worst
                case <Math>O(n²)</Math>
              </li>
            </ul>
          </li>
          <li>
            Python <Code>sort()</Code> gebruikt <i>timsort</i>:
            <ul>
              <li>Geïmplementeerd door Tim Peters in 2002</li>
              <li>Mix van insertion en merge sort</li>
              <li>
                Zit ook in bv. Java (wat gebruikt wordt voor ondermeer Android
                OS en apps)
              </li>
            </ul>
          </li>
          <li>
            Andere sorteeralgoritmes: zie bv.{" "}
            <a href="https://www.bigocheatsheet.com/">
              Big-O Algorithm Complexity Cheat Sheet (Know Thy Complexities!)
              @ericdrowell
            </a>
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Complexiteit van Fibonacci recursief</h2>
        <CodeBlock>{`def fib(n):
  if n == 0 or n == 1:
    return n
  else:
    return fib(n - 1) + fib(n - 2)`}</CodeBlock>
        <p>
          Bepaal de complexiteit van de base cases. Tel het aantal recursieve
          oproepen voor <Math>n = 2, 3, ...</Math>. Kan je een patroon vinden?
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Fibonacci oplossing</h2>
          <p>
            De twee base cases <Code>n==0, n==1</Code> zijn telkens{" "}
            <Math>O(1)</Math>.
          </p>
          <table>
            <thead>
              <tr>
                <th>
                  <Math>n</Math>
                </th>
                <th>Aantal functieoproepen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>2</td>
                <td>3</td>
              </tr>
              <tr>
                <td>3</td>
                <td>5</td>
              </tr>
              <tr>
                <td>4</td>
                <td>9</td>
              </tr>
            </tbody>
          </table>
          <p>
            Als je verder gaat, zal je merken dat het aantal functie-oproepen
            drastisch toeneemt. De tijdscomplexiteit is in feite{" "}
            <Math>O(2^n)</Math>. Dit is slechter dan eender welk ander algoritme
            dat we hebben gezien!
          </p>
          <p>
            Dit verklaart waarom het programma bij{" "}
            <Math>n = 10, 20, 30, ...</Math> al moeite heeft met een resultaat
            te berekenen.
          </p>
      </RVSlide>
    </RVSlide>
  );
};

export default Les;
