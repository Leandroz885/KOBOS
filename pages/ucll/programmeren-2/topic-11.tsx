import { useRouter } from "next/router";
import { DownloadPdfButton } from "../../../components/DownloadPdfButton";
import {
  Code,
  CodeBlock,
  Quote,
  RVPresentation,
  RVSlide,
} from "../../../components/RevealComponents";
import { StatusBox } from "../../../components/StatusBox";
import { CenteredImage } from "../../../components/CenteredImage";
import TuringMachinePlusOne from "../../../public/programmeren-2/turing-machine-plus-one.png";
import TuringMachinePlusOneExample from "../../../public/programmeren-2/turing-machine-plus-one-example.png";
import { Math } from "../../../components/Math";

const Les = () => {
  const router = useRouter();
  return (
    <RVPresentation>
      <RVSlide>
        <h2>Programmeren 2</h2>
        <h1>Topic 11: Fundamenten van informatica</h1>
        <DownloadPdfButton routerPathName={router.pathname} />
      </RVSlide>
      <RVSlide>
        <h2>Overzicht</h2>
        <ul>
          <li>Inleiding</li>
          <li>Onberekenbare functies</li>
          <li>Turing machines</li>
          <li>Universele programmeertalen</li>
          <li>Halting problem</li>
          <li>Compexiteitstheorie</li>
          <li>Andere domeinen</li>
        </ul>
      </RVSlide>
      <Inleiding />
      <OnberekenbareFuncties />
      <TuringMachines />
      <UniverseleProgrammeertalen />
      <Halting />
      <ProbleemComplexiteit />
      <Afsluiten /> 
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
        <h2>Inleiding</h2>
        <ul>
          <li>
            We werpen in deze les een blik op de wiskundige grondslagen van de
            informatica
          </li>
          <li>
            Wiskundig model voor berekenen met een computer: Turing machine
          </li>
          <li>Berekenbaarheid en onberekenbaarheid</li>
          <li>Complexiteit van algoritmen en problemen</li>
          <li>
            Andere relevante domeinen in wiskunde en in "theoretische
            informatica"
          </li>
        </ul>
        <p>
          Je kan een heel vak vullen met leerstof hierrond. In dit topic
          proberen we ons te beperken tot de belangrijkste zaken.
        </p>
        <StatusBox variant="edu">
          De leerstof in dit topic zal minder snel aan bod komen in een 'gewone'
          les in het lager middelbaar. Als toekomstige leraar informatica wordt
          echter verwacht dat je achtergrondkennis bezit over je vak en de
          grondslagen ervan begrijpt.
        </StatusBox>
      </RVSlide>
    </RVSlide>
  );
};

const OnberekenbareFuncties = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h2></h2>
        <h1>(On)berekenbare functies</h1>
      </RVSlide>
      <RVSlide>
        <h2>Problemen oplossen</h2>
        <p>
          Een fundamenteel doel van informatica is het{" "}
          <b>oplossen van problemen</b>. Een probleem is een heel ruim begrip in
          deze context. Een oplossing voor een probleem is een algoritme.
        </p>
        <p>
          Sommige problemen zijn zo lastig zijn dat zelfs de meest krachtige
          computers ze niet binnen een “redelijke” tijd kunnen oplossen. En er
          zijn zelfs problemen waarvoor we kunnen bewijzen dat er{" "}
          <b>geen algoritme kan bestaan</b> om ze op te lossen!
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Functies</h2>
        <p>
          In de theoretische informatica is een functie een <b>verband</b>{" "}
          tussen bepaalde invoer- en uitvoerwaarden.
        </p>
        <StatusBox variant="info">
          Merk op dat dit veel dichter aansluit bij de definitie van een functie
          in wiskunde. Een functie in de moderne informatica is een herbruikbaar
          stuk code dat iets doet en/of iets teruggeeft.
        </StatusBox>
        <p>
          Het <b>berekenen van een functie</b> houdt in dat we voor een gegeven
          invoer de uitvoer bepalen.
        </p>
        <p>
          Sommige functies zijn zo complex dat functiewaarden niet algoritmisch
          kunnen berekend worden: we noemen ze{" "}
          <b>onberekenbaar (noncomputable)</b>; andere daarentegen heten{" "}
          <b>berekenbaar (computable)</b>.
        </p>
        <p>
          Geen enkele machine die algoritmes uitvoert (computer) zal ooit een
          onberekenbare functie kunnen uitrekenen.
        </p>
      </RVSlide>
    </RVSlide>
  );
};

const TuringMachines = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h2>Denkbeeldige computers</h2>
        <h1>Turing machines</h1>
      </RVSlide>
      <RVSlide>
        <h2>Turing machines: context</h2>
        <p>Beeld je in:</p>
        <ul>
          <li>Je bent een wiskundige in het begin van de 20e eeuw</li>
          <li>
            Je zoekt een manier om te bepalen of functies (on)berekenbaar zijn
          </li>
          <li>
            De samenleving is sterk geïndustrialiseerd; overal zijn er fysieke
            machines die (fysieke) invoer transformeren naar (fysieke) uitvoer
          </li>
          <li>
            Kan je het idee van machines ook gebruiken in de context van
            berekenbaarheid?
          </li>
        </ul>
        <p>Een beetje terminologie:</p>
        <ul>
          <li>
            Een <b>alfabet</b> is een set van symbolen waarmee invoer en uitvoer
            opgebouwd kan worden. In binair rekenen bestaat het alfabet uit twee
            symbolen (0 en 1). Een alfabet kan ook uit meerdere cijfers,
            letters, speciale tekens, ... bestaan.
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Turing machines</h2>
        <p>
          Een Turing machine T is een <b>denkbeeldige</b> machine:
        </p>
        <ul>
          <li>Bedacht door Alan Turing in 1936</li>
          <li>
            {" "}
            Bestaat (in gedachten) uit:
            <ul>
              <li>
                een <b>oneindig</b> lange band, verdeeld in vakjes
              </li>
              <li>
                elk vakje bevat precies 1 symbool uit het <b>alfabet</b> van T
              </li>
              <li>
                een lees/schrijfkop kan het symbool in het onderliggende vakje{" "}
                <b>lezen</b> of er één <b>schrijven</b>
              </li>
            </ul>
          </li>
          <li>
            {" "}
            Bevindt zich steeds in 1 van een (eindig) aantal mogelijke{" "}
            <b>toestanden</b>
          </li>
          <li>
            Start haar berekening in haar starttoestand en stopt wanneer ze de
            stoptoestand bereikt heeft
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2></h2>
        <p>
          Een Turing machine kan invoer transformeren naar uitvoer, net zoals
          echte machines. Maar in tegenstelling tot echte machines,
          transformeert het (denkbeeldige) invoer naar (denkbeeldige) uitvoer.
        </p>
        <p>
          Een Turing machine kan iets transformeren in een aantal stappen. In
          elke stap:
        </p>
        <ul>
          <li>wordt het symbool in het onderliggend vakje gelezen</li>
          <li>wordt daar een symbool geschreven</li>
          <li>
            kan de lees/schrijfkop 1 vakje naar links of naar rechts bewegen
          </li>
          <li>wordt overgegaan naar een welbepaalde andere toestand</li>
        </ul>
        <p>
          Een Turing machine wordt aangestuurd door een <b>programma</b>. Een
          programma houdt rekening met de huidige toestand en het gelezen
          symbool in stap 1. Vergelijk het met een arbeider die een machine
          bestuurt op basis van hun zintuigen en een handleiding.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Voorbeeld</h2>
        <p>
          Beeld je in dat je een machine wilt maken die bij een binair getal +1
          optelt.
        </p>
        <ul>
          <li>Alfabet: 0, 1, * (speciaal karakter voor start/stop)</li>
          <li>Invoer: binair getal</li>
          <li>Uitvoer: binair getal</li>
          <li>Handleiding:</li>
        </ul>
        <CenteredImage src={TuringMachinePlusOne} width={500} />
      </RVSlide>
      <RVSlide>
        <h2>Voorbeeld</h2>
        <p>
          Laat je deze machine draaien op de situatie links, dan zal de band op
          het einde er uit zien zoals rechts getoond:
        </p>
        <CenteredImage src={TuringMachinePlusOneExample} />
        <p>
          <b>Opdracht:</b> gebruik de handleiding op vorige slide om,
          vertrekkende van de situatie links, de stappen van het programma één
          voor één uit te voeren. Controleer dat je inderdaad dezelfde uitkomst
          krijgt.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Turing machines en functies</h2>
        <p>
          Een Turing machine transformeert invoer naar uitvoer. Men zegt dat de
          machine waarden <b>berekent</b>.
        </p>
        <p>
          Turing machines en functies hebben wel erg veel gelijkenissen. De
          hypothese van Church-Turing formaliseert dit:
        </p>
        <Quote quotee="Church and Turing">
          Een functie is berekenbaar als de waarden berekend kunnen worden op
          basis van een mechanisch proces (zoals Turing machines).
        </Quote>
        <p>
          Met andere woorden: de mogelijkheden van een Turing machine (lezen,
          schrijven, bewegen, ...) zijn voldoende om (bijna) alle gangbare
          algoritmes uit te voeren. Meer heb je in principe niet nodig!
          <b> Turing machines zijn daarom een maatstaf voor expressiekracht.</b>
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Ter info</h2>
        <StatusBox variant="info">
          Je moet in dit vak niet zelf programma's kunnen schrijven voor Turing
          machines. Je moet ze enkel kunnen lezen en begrijpen.
        </StatusBox>
        <StatusBox variant="info">
          De hypothese van Church-Turing is slechts een hypothese. Ze kan niet
          bewezen worden. Toch worden de hypothese en Turing machines algemeen
          aanvaard als fundamentele concepten in de informatica.
        </StatusBox>
        <StatusBox variant="info">
          Er zit een hele geschiedenis achter de hypothese van Church-Turing,
          maar deze hoef je niet te kennen voor dit vak. Als je er meer over
          wilt weten, bekijk dan bv.{" "}
          <a href="https://history-computer.com/the-church-turing-thesis-explained-what-it-is-when-it-was-formed/">
            The Church-Turing Thesis Explained
          </a>
          .
        </StatusBox>
      </RVSlide>
    </RVSlide>
  );
};

const UniverseleProgrammeertalen = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h2>Turing machines toegepast</h2>
        <h1>Universele programmeertalen</h1>
      </RVSlide>
      <RVSlide>
        <h2>Turing compleetheid</h2>
        <p>
          Turing machines zijn de norm voor expressiekracht. Je kan er bijna
          alle gangbare algoritmes mee uitvoeren en dus problemen mee oplossen.
        </p>
        <p>Hoe verhoudt dit zich tot:</p>
        <ul>
          <li>
            De binaire taal van moderne computers? (Ook wel machinetaal genoemd)
          </li>
          <li>Een programmeertaal zoals Python, Java, COBOL, C++, ...?</li>
          <li>Een visuele taal zoals Scratch?</li>
          <li>HTML en Markdown, twee talen om documenten mee te schrijven?</li>
          <li>Software zoals Microsoft Office, videogames, ...</li>
          <li>...</li>
        </ul>
        <p>
          Men noemt een systeem (een computer, een taal, software, ...){" "}
          <b>Turing compleet</b> als het dezelfde expressiekracht heeft als een
          Turing machine. Specifiek voor programmeertalen zegt men dat ze{" "}
          <b>universeel</b> zijn als ze Turing compleet zijn.
        </p>
        <p>
          Het doel in deze sectie is om na te gaan voor een aantal systemen of
          ze (niet) Turing compleet zijn.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Turing compleetheid bewijzen</h2>
        <p>
          Van vrijwel elke programmeertaal wordt verwacht dat ze Turing compleet
          is. Enkel dan kunnen we ze gebruiken voor eender welk algoritme te
          schrijven. Maar hoe bewijs je dit voor een taal?
        </p>
        <p>Voorbeeld: de nieuwe programmeertaal Bob:</p>
        <ul>
          <li>
            variabelen met als waarden bitpatronen (dus slechts één type
            toegelaten, geen string/boolean/...)
          </li>
          <li>
            3 toekenningsopdrachten:
            <ul>
              <li>clear varnaam; (allemaal 0-en in var)</li>
              <li>incr varnaam; (binaire waarde van var met 1 verhogen)</li>
              <li>
                decr varnaam; (binaire waarde van var met 1 verlagen, 0 blijft
                0)
              </li>
            </ul>
          </li>
          <li>
            1 herhalingsopdracht: <Code>while varnaam not 0 do ... end;</Code>
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Turing compleetheid bewijzen</h2>
        <p>
          Kan je met deze regels bijvoorbeeld een programma maken om een waarde
          van X naar Y te kopiëren?
        </p>
        <div className="fragment">
          <p>JA!</p>
          <CodeBlock language="">{`clear Y;
clear Hulp;
while X not 0 do
  incr Hulp;
  decr X;
end;
while Hulp not 0 do
  incr X;
  incr Y;
  decr Hulp;
end;`}</CodeBlock>
        </div>
      </RVSlide>
      <RVSlide>
        <h2>Turing compleetheid bewijzen</h2>
        <p>
          Dit is nog geen 100% garantie, maar dit is een klassieke eerste test
          voor de compleetheid van talen na te gaan.
        </p>
        <p>
          Een volledig correct bewijs houdt in dat je in je systeem (in dit
          geval een programmeertaal) een programma schrijft dat Turing machines
          simuleert. Als je taal eender welke Turing machine kan simuleren, dan
          kan het ook elk probleem oplossen dat een Turing machine kan oplossen.
        </p>
        <p>Enkele voorbeelden van implementaties van Turing machines:</p>
        <ul>
          <li>
            <a href="https://python-course.eu/applications-python/turing-machine.php">
              Python
            </a>
          </li>
          <li>
            <a href="https://ottermad.github.io/2022/01/05/Turing-Machine-Haskell.html">
              Haskell
            </a>
          </li>
          <li>Bob: kan je zelf proberen (niet eenvoudig)</li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Machinetaal</h2>
        <p>
          <b>Machinetalen</b> stellen instructies en data voor als 0'en en 1'en.
          Een lijn van 32 symbolen (0 en 1) komt bv. overeen met één instructie
          om 1 + 1 te doen. Ze delen een aantal concepten met hogere
          programmeertalen, maar hebben ook hun eigen speciale regeltjes.
        </p>
        <p>
          Omdat machinetalen zo moeilijk te lezen zijn, bestaan er ook{" "}
          <b>assemblytalen</b>. Ze zijn 'iets leesbaarder' dan machinetalen,
          maar zijn nog steeds heel low level.
        </p>
        <p>
          Machinetalen zijn Turing compleet, aangezien alle hogere
          programmeertalen hier op moeten steunen. Assemblytalen zijn een bijna
          letterlijke vertaling van machinetalen, dus zijn ook Turing compleet.
        </p>
        <StatusBox variant="info">
          In dit vak zien we geen machinetalen of assemblytalen in detail. Toch
          geïnteresseerd? Bekijk bv.{" "}
          <a href="https://www.youtube.com/watch?v=4gwYkEK0gOk">
            Assembly Language in 100 Seconds
          </a>
          .
        </StatusBox>
      </RVSlide>
      <RVSlide>
        <h2>Programmeertalen</h2>
        <p>Voorbeelden uit vorige lessen/vakken:</p>
        <ul>
          <li>Python: imperatief + objectgericht</li>
          <li>Java: enkel objectgericht</li>
          <li>Rust: objectgericht, maar heeft geen overerving</li>
          <li>
            Haskell: declaratief, heeft geen lussen of aanpasbare variabelen
          </li>
          <li>
            Scratch: blokgebaseerd, deels objectgericht, kan niet met files
            werken aangezien het in een browser draait
          </li>
        </ul>
        <p>
          <b>Al deze talen zijn Turing compleet</b>. Wat kan je hieruit
          besluiten over programmeerconcepten?
        </p>
        <p className="fragment">
          Veel programmeerconcepten zijn niet noodzakelijk om Turing
          compleetheid te bereiken in een taal. Ze bestaan omwille van andere
          redenen: gebruiksgemak, uitbreidbaarheid, leesbaarheid, ...
        </p>
      </RVSlide>
      <RVSlide>
        <h2>HTML en Markdown</h2>
        <p>
          Open de developer tools in je browser (F12 in Chrome). HTML is de{" "}
          <Code>{`<>...<>`}</Code>-structuur die de inhoud van een website
          beschrijft.
        </p>
        <p>
          HTML is niet Turing compleet. Het bezit niet de vereiste kwaliteiten
          om dezelfde expressiekracht als een Turing machine te behalen. Er zijn
          geen variabelen, functies, if-else, ... Dit was ook nooit een doel
          voor de ontwikkelaars van HTML. Het is gewoon een taal om inhoud op
          een gestructureerde manier te beschrijven.
        </p>
        <p>
          Hetzelfde geldt voor Markdown, een andere taal voor het gestructureerd
          beschrijven van inhoud.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Software</h2>
        <p>
          Software, geschreven in een programmeertaal, kan zelf ook Turing
          compleet zijn. Een paar voorbeelden:
        </p>
        <ul>
          <li>
            <a href="https://analyticsindiamag.com/microsoft-excel-is-turing-complete-what-does-it-mean/">
              Microsoft Excel is Turing compleet sinds 2021
            </a>
          </li>
          <li>Microsoft Word is (naar mijn weten) niet Turing compleet</li>
          <li>
            En Microsoft PowerPoint?{" "}
            <ul className="fragment">
              <li>Blijkbaar wel</li>
              <li>
                <a href="https://www.youtube.com/watch?v=uNjxe8ShM-8">
                  Een humoristische video die kort uitlegt hoe het kan
                </a>
              </li>
              <li>
                <a href="http://tomwildenhain.com/PowerPointTM/Paper.pdf">
                  Link naar de paper
                </a>
              </li>
            </ul>
          </li>
          <li>
            De <i>Sid Meier’s Civilization</i> reeks van videospellen:
            <ul>
              <li>
                Minstens 3 ervan zijn Turing compleet (
                <a href="https://ieeexplore.ieee.org/document/9756289?denied=">
                  Link naar paper
                </a>
                )
              </li>
            </ul>
          </li>
          <li>
            Het videospel <i>Factorio</i> is Turing compleet:{" "}
            <a href="https://imgur.com/a/tVB9xOx">
              je kan een computer bouwen binnenin het videospel
            </a>
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Beperking</h2>
        <p>
          Echte systemen kunnen nooit volledig Turing compleet zijn. Turing
          machines hebben namelijk een bepaald kenmerk dat we nooit kunnen
          simuleren. Welk kenmerk?
        </p>
        <p className="fragment">
          <b>Oplossing</b>: Turing machines hebben <b>oneindig veel geheugen</b>
          , dit kunnen we nooit simuleren. Daarom zijn echte systemen nooit
          volledig Turing compleet. In de praktijk is dit zelden een probleem,
          daarom wordt het soms genegeerd bij de definitie van Turing
          compleetheid.
        </p>
      </RVSlide>
    </RVSlide>
  );
};

const Halting = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h2>Een onberekenbare functie</h2>
        <h1>Halting problem</h1>
      </RVSlide>
      <RVSlide>
        <h2>Halting problem</h2>
        <p>
          Het stopprobleem (halting problem) gaat als volgt: gegeven een
          programma, bestaat er een functie die bepaalt of het programma ooit
          zal stoppen of niet?
        </p>
        <p>
          Als dit kan, dan bestaat er een Turing machine voor die het probleem
          oplost.
        </p>
        <ul>
          <li>
            Invoer: een programma, voorgesteld als een reeks bits (0'en en 1'en)
          </li>
          <li>Uitvoer: 1 als het programma stopt, 0 als het nooit stopt</li>
        </ul>
        <p>Je kan eender welk programma eenvoudig transformeren naar bits:</p>
        <ul>
          <li>
            Transformeer elk symbool naar zijn decimale voorstelling in ASCII of{" "}
            <a href="https://en.wikipedia.org/wiki/List_of_Unicode_characters">
              Unicode
            </a>
          </li>
          <li>
            Transformeer de decimale voorstelling naar een binaire voorstelling
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Halting problem</h2>
        <p>
          Het halting problem is onberekenbaar: er bestaat geen functie voor, en
          dus ook geen Turing machine om het uit te voeren
        </p>
        <StatusBox variant="info">
          Bewijs: zie bv.{" "}
          <a href="https://brilliant.org/wiki/halting-problem/">
            Halting problem
          </a>
          . Het bewijs is geen leerstof voor dit vak.
        </StatusBox>
        <p>
          Meer algemeen is er een hele groep van <b>onoplosbare problemen</b>.
          Voor deze problemen kunnen we geen Turing machines bouwen. Dit toont
          aan dat er grenzen zijn aan wat we kunnen doen met Turing machines -
          en afgeleiden ervan zoals computers en programmeertalen.
        </p>
      </RVSlide>
    </RVSlide>
  );
};

const ProbleemComplexiteit = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h2></h2>
        <h1>Complexiteit van problemen</h1>
      </RVSlide>
      <RVSlide>
        <h2>Complexiteit</h2>
        <p>We weten al het volgende:</p>
        <ol>
          <li>
            Sommige problemen zijn oplosbaar: er bestaat een algoritme/Turing
            machine voor
          </li>
          <li>
            Sommige problemen zijn onoplosbaar: de bijhorende functie is
            onberekenbaar, er bestaat geen Turing machine voor
          </li>
        </ol>
        <p>
          Categorie 2 is theoretisch interessant, maar weinig helpvol in de
          praktijk. Categorie 1 kunnen we wel nog verder opsplitsen op basis van
          complexiteit van het probleem. Dit wordt onderzocht in
          complexiteitstheorie.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Complexiteitstheorie</h2>
        <ul>
          <li>
            De complexiteit van een probleem wordt gemeten door de complexiteit
            van zijn (meest efficiënte) oplossing(en), uitgedrukt als een
            algoritme
          </li>
          <li>
            De (tijds)complexiteit van een algoritme wordt bepaald door het
            aantal stappen dat een computer nodig heeft om het uit te voeren (en
            dus de benodigde uitvoeringstijd). Dit is niet noodzakelijk
            hetzelfde als de “ingewikkeldheid” van de programmacode voor mensen
          </li>
          <li>
            Als het meest efficiënte (bekende) algoritme voor een probleem een
            tijdscomplexiteit heeft van <Math>Θ(f(n))</Math>, dan zit het
            probleem in klasse
            <Math>O(f(n))</Math>
            <ul>
              <li>
                {" "}
                bv: sorteren zit in <Math>O(n*log2(n))</Math>
              </li>
            </ul>
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Categorieën van complexiteit</h2>
        <p>
          Problemen kunnen in verschillende categorieën ingedeeld worden op
          basis van hun complexiteit. We beperken ons tot twee belangrijke:
        </p>
        <ul>
          <li>
            De polynomiale groep <Math>P</Math> bevat alle problemen waarvan{" "}
            <Math>f(n)</Math> in <Math>O(f(n))</Math> een <b>veelterm</b> is
          </li>
          <li>
            Alle niet-polynomiale problemen vallen buiten <Math>P</Math>. De
            <Math>f(n)</Math> is geen veelterm. Voorbeelden zijn:
            <ul>
              <li>
                <Math>
                  O(2<sup className="-top-2">n</sup>)
                </Math>
              </li>
              <li>
                <Math>O(n!)</Math>
              </li>
              <li>...</li>
            </ul>
          </li>
        </ul>
        <p>
          Problemen in <Math>P</Math> kan je 'efficiënt' oplossen met een
          computer. Andere problemen zijn complexer. Een speciale subcategorie
          is <Math>NP</Math>. Dit staat voor{" "}
          <i>niet-deterministische polynome tijd</i>.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>
          <Math>NP</Math>: bijna <Math>P</Math>?
        </h2>
        <p>
          Problemen in <Math>NP</Math> hebben de eigenschap dat ze een
          'toevallige' stap bevatten. Meer specifiek:
        </p>
        <ul>
          <li>
            Om een <b>nieuwe</b> oplossing te vinden, moet je alle opties
            nagaan. Deze opties vragen niet-polynome tijd
          </li>
          <li>
            Om een <b>bestaande</b> oplossing te <b>verifiëren</b>, moet je
            andere stappen doen die slechts polynome tijd vragen
          </li>
          <li>
            Als je 'toevallig' een oplossing hebt, worden de problemen dus{" "}
            <Math>P</Math> in plaats van <Math>NP</Math>!
          </li>
        </ul>
        <div className="fragment">
          <p>Een concreet voorbeeld: een oplossing vinden voor sudoku's</p>
          <ul>
            <li>
              Alle algoritmes om oplossingen te <b>genereren</b> vragen
              niet-polynome tijd. Dit is wat het een uitdagende puzzel maakt
              voor mensen
            </li>
            <li>
              Een oplossing <b>verifiëren</b> kan gebeuren in polynome tijd. Ook
              mensen kunnen dit relatief snel doen
            </li>
            <li>
              <i>Sudoku's oplossen</i> is dus een probleem dat behoort tot{" "}
              <Math>NP</Math>
            </li>
          </ul>
        </div>
      </RVSlide>
      <RVSlide>
        <h2>
          <Math>P = NP ?</Math>
        </h2>
        <p>
          Het{" "}
          <a href="https://en.wikipedia.org/wiki/P_versus_NP_problem">
            P versus NP problem
          </a>{" "}
          is een bekend, onopgelost vraagstuk in informatica. Er is nog geen
          bewijs voor of tegen.{" "}
        </p>
        <p>
          De cruciale vraag is:{" "}
          <b>
            is elk probleem waar je de oplossing in polynome tijd kan verifëren,
            ook oplosbaar in polynome tijd?
          </b>
        </p>
        <p>
          Er is een hele categorie van problemen die <i>NP-compleet</i> zijn.
          Als we ooit kunnen aan tonen dat één van deze problemen oplosbaar is
          in <Math>P</Math>, dan geldt dit ook voor de rest in die categorie.
          Daarmee zou bewezen kunnen worden dat <Math>P = NP</Math>.
        </p>
        <p>
          Aan het bewijs hangt een prijs vast van $1.000.000 en eeuwige roem (in
          de community van informatici).
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Ter info</h2>
        <StatusBox variant="info">
          Om de complexiteit van een algoritme te bepalen, gebruik je limieten
          uit de wiskunde. Dit wordt hier niet verder behandeld.
        </StatusBox>
        <StatusBox variant="info">
          Moest ooit bewezen worden dat <Math>P = NP</Math>, dan kan dit
          serieuze gevolgen hebben voor alle veiligheidssystemen wereldwijd.
          Alle moderne encryptie zou dan in één klap nutteloos worden, want ze
          steunen op de assumptie dat <Math>P != NP</Math>.
        </StatusBox>
      </RVSlide>
    </RVSlide>
  );
};

const Afsluiten = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Om af te sluiten</h1>
      </RVSlide>
      <RVSlide>
        <h2>Andere domeinen</h2>
        <p>
          We hebben in dit topic maar een paar onderwerpen behandeld. Er zijn er
          nog veel meer, zoals:
        </p>
        <ul>
          <li>
            Grafentheorie
            <ul>
              <li>Algoritmes voorstellen</li>
              <li>Bomen als datastructuren</li>
              <li>(Tegenwoordig ook deel van wiskunde in het middelbaar)</li>
            </ul>
          </li>
          <li>
            Automatentheorie en formele talen
            <ul>
              <li>Fundamenten van moderne programmeertalen</li>
            </ul>
          </li>
          <li>Algebra voor cryptografie</li>
          <li>
            Logica
            <ul>
              <li>Correctheidsbewijzen van programma's</li>
              <li>Logisch programmeren</li>
            </ul>
          </li>
          <li>
            Lambda calculus
            <ul>
              <li>Fundament voor functioneel programmeren</li>
            </ul>
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Boeken</h2>
        <p>
          Over elk domein bestaan verschillende boeken. De meesten zijn erg
          wiskundig.
        </p>
        <p>Aanrader van de vorige docent:</p>
        <ul>
          <li>
            Douglas R. Hofstadter, Ronald Jonkers (vert.), Gödel, Escher, Bach:
            een eeuwige gouden band, Contact, 1985 (tegenwoordig: Atlas Contact,
            ??de druk juli 2021)
          </li>
          <li>
            of het Engelstalige origineel: Douglas R. Hofstadter, Gödel, Escher,
            Bach: an Eternal Golden Braid, Basic Books, 1979 (nieuwe editie bij
            de 20ste “verjaardag” in 1999)
          </li>
          <li>
            Minder wiskundig, meer bedoeld als toegankelijke introductie tot de
            domeinen
          </li>
          <li>Bevat ook links met artificiële intelligentie</li>
        </ul>
      </RVSlide>
    </RVSlide>
  );
};

export default Les;
