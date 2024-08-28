import { useRouter } from "next/router";
import { DownloadPdfButton } from "../../../components/DownloadPdfButton";
import {
  RVPresentation,
  RVSlide,
  CodeBlock,
  Code,
  Quiz,
  createQuizAnswer,
} from "../../../components/RevealComponents";
import { KennismakingSlide } from "../../../components/slides/Kennismaking";
import { StatusBox } from "../../../components/StatusBox";
import { ExternalLink } from "../../../components/ExternalLink";
import { CenteredImage } from "../../../components/CenteredImage";
import variablesAreContainers from "../../../public/programmeren-1/2-variables-as-containers.webp";
import variablesAreContainersWithValues from "../../../public/programmeren-1/2-variables-as-containers-with-values.webp";
import { TwoColumns } from "../../../components/TwoColumns";
import { Math } from "../../../components/Math";

const Les = () => {
  const router = useRouter();
  return (
    <RVPresentation>
      <RVSlide>
        <h2>Programmeren 1</h2>
        <h1>Les 1: introductie</h1>
        <DownloadPdfButton routerPathName={router.pathname} />
      </RVSlide>
      <RVSlide>
        <h2>Overzicht</h2>
        <ul>
          <li>Kennismaking</li>
          <li>Over dit vak</li>
          <li>Wat is programmeren?</li>
          <li>Eerste programma</li>
          <li>Expressies</li>
          <li>Datatypes</li>
          <li>Invoer & Uitvoer</li>
          <li>Introductie tot modules</li>
        </ul>
      </RVSlide>
      <Kennismaking />
      <OverDitVak />
      <WatIsProgrammeren />
      <EersteProgramma />
      <Expressies />
      <Variabelen />
      <DataTypes />
      <InvoerUitvoer />
      <Modules />
      <Opdrachten />
    </RVPresentation>
  );
};

const Kennismaking = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h2></h2>
        <h1>Kennismaking</h1>
      </RVSlide>
      <KennismakingSlide />
      <RVSlide>
        <h2>Over jullie</h2>
        <ul>
          <li>Naam?</li>
          <li>Specialisaties binnen de lerarenopleiding?</li>
          <li>
            Andere relevante ervaringen voor dit vak? Jobstudent, werkervaring,
            voorgaande opleidingen, ...
          </li>
        </ul>
      </RVSlide>
    </RVSlide>
  );
};

const OverDitVak = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Over dit vak</h1>
      </RVSlide>
      <RVSlide>
        <h2>Doelstellingen van dit vak</h2>
        <p>
          <ExternalLink href="https://onderwijsaanbod.leuven.ucll.be/2022/syllabi/n/MSC15AN.htm#activetab=doelstellingen_idp2851600">
            ECTS-fiche
          </ExternalLink>
        </p>
        <h4>De student verwerft de basiskennis voor programmeren:</h4>
        <ul className="!mb-8">
          <li>Programma's kunnen schrijven in meerdere programmeertalen</li>
          <li>
            Een aantal belangrijke programmeerconcepten kunnen uitleggen en
            toepassen
          </li>
          <li>
            Programmeerconcepten kunnen combineren om nieuwe problemen op te
            lossen
          </li>
          <li>
            Computationeel denken kunnen uitleggen aan de hand van voorbeelden
          </li>
        </ul>
        <h4>
          De student leert een aantal principes voor vakdidactisch handelen:
        </h4>
        <ul>
          <li>Correcte terminologie en taalgebruik kunnen benutten</li>
          <li>
            Abstracte concepten en denkprocessen kunnen verbinden met voorwerpen
            uit de realiteit
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Leerstof</h2>
        <ul>
          <li>Slides zijn voornaamste leerstof</li>
          <li>
            Handboek:{" "}
            <ExternalLink href="https://www.spronck.net/pythonbook/pythonboek.pdf">
              De Programmeursleerling: Leren coderen met Python 3
            </ExternalLink>{" "}
            van Pieter Spronck
            <ul>
              <li>Link ook op Toledo &gt; Cursusdocumenten</li>
              <li>Niet alles wordt behandeld</li>
              <li>Vooral nuttig als referentiewerk + extra oefeningen</li>
            </ul>
          </li>
          <li>Oefeningen op Dodona</li>
        </ul>
        <p>
          <strong>
            Zelf (online) kunnen zoeken naar informatie, is cruciaal voor een
            programmeur
          </strong>
        </p>
        <ul>
          <li>
            Je zal oefeningen moeten (her)maken in Kotlin, een taal die niet
            expliciet wordt behandeld tijdens de les
          </li>
          <li>
            Je zal kleinere opdrachten krijgen om andere talen zelf te
            analyseren
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Evaluatie</h2>
        <ul>
          <li>
            Opdrachten indienen tijdens het jaar
            <ul>
              <li>Worden meegedeeld tijdens de les + via Toledo</li>
              <li>Indienen via Dodona</li>
              <li>Meer info op Toledo &gt; Opdrachten</li>
            </ul>
          </li>
          <li>
            Project maken
            <ul>
              <li>Individueel</li>
              <li>Mondelinge verdediging tijdens examenperiode</li>
              <li>Opdracht komt online tijdens/na de paasvakantie</li>
            </ul>
          </li>
        </ul>
        <p>
          Er is <strong>geen</strong> theoretisch examen tijdens de
          examenperiode.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Praktisch</h2>
        <ul>
          <li>9-tal lessen van 3u op woensdagnamiddag</li>
          <li>On-campus (tenzij anders meegedeeld)</li>
          <li>
            Doel is om merendeel van theorie vóór de paasvakantie te zien
            <ul>
              <li>
                Ruimte om nadien aan project te werken en vragen te stellen
              </li>
            </ul>
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Software en programmeeromgevingen</h2>
        <ul>
          <li>
            Jullie gaan met verschillende programmeeromgevingen in contact komen
          </li>
          <li>
            Doel is om ermee kennis te maken, niet om diepgaan mee vertrouwd te
            geraken
          </li>
          <li>
            Deze les:{" "}
            <ExternalLink href="https://replit.com/">
              https://replit.com/
            </ExternalLink>
            <ul>
              <li>Normaal al account gemaakt</li>
              <li>Indien niet: nog kans deze les</li>
            </ul>
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Tips om te studeren</h2>
        <p>Oefening baart kunst:</p>
        <ul>
          <li>
            Programmeren leer je <strong>niet</strong> door alleen maar code te
            lezen, maar door ze zelf te schrijven
          </li>
          <li>
            Belangrijkste is om de concepten en het denkproces onder de knie te
            krijgen
            <ul>
              <li>Afkijken van oplossingen heeft weinig zin</li>
            </ul>
          </li>
          <li>Veel oefeningen (her)maken is nuttig</li>
        </ul>
        <p>
          Je moet geen grote hoeveelheden theorie instuderen, maar je moet wel
          vlot code kunnen schrijven. Een aantal concepten leer je daarom best
          vanbuiten.
        </p>
      </RVSlide>
    </RVSlide>
  );
};

const WatIsProgrammeren = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Wat is programmeren?</h1>
      </RVSlide>
      <RVSlide id="programming-languages-list">
        <h2>Voorbeelden van programmeertalen(?)</h2>
        <p>Welke van onderstaande talen zijn geen programmeertalen?</p>
        <p>
          <em>
            Niet-programmeertalen lichten rood op wanneer je jouw muis er over
            houdt
          </em>
        </p>
        <div className="grid grid-cols-3 place-items-center">
          <div className="text-center">
            <img
              className="h-24"
              src="https://scratch.mit.edu/images/logo_sm.png"
            />
            Scratch
          </div>
          <div className="text-center">
            <img
              className="h-24"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
            />
            JavaScript
          </div>
          <div className="text-center">
            <img
              className="h-24"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
            />
            Python
          </div>
          <div className="text-center">
            <img
              className="h-24"
              src="https://www.devopsschool.com/blog/wp-content/uploads/2022/03/java_logo_icon_168609.png"
            />
            Java
          </div>
          <div className="text-center">
            <img
              className="h-24 hover:bg-red-700"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1200px-Markdown-mark.svg.png"
            />
            Markdown
          </div>
          <div className="text-center">
            <img
              className="h-24"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/1200px-Rust_programming_language_black_logo.svg.png"
            />
            Rust
          </div>
          <div className="text-center">
            <img
              className="h-24"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png"
            />
            C++
          </div>
          <div className="text-center">
            <img className="h-24 hover:bg-red-700" src="/html_logo.png" />
            HTML
          </div>
          <div className="text-center">
            <img
              className="h-24"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kotlin_Icon.svg/1200px-Kotlin_Icon.svg.png"
            />
            Kotlin
          </div>
        </div>
      </RVSlide>
      <RVSlide>
        <h2>Programmeertalen</h2>
        <p>
          <strong>Programmeren</strong> = instructies geven aan een computer om
          een probleem op te lossen
        </p>
        <ul>
          <li>
            <em>Probleem</em> is hier een zeer ruim begrip
          </li>
        </ul>
        <p>
          <strong>Programmeertaal</strong> = een set van regels waarmee we met
          de computer kunnen communiceren om deze problemen op te lossen
        </p>
        <ul>
          <li>Is meestal een middel, geen doel</li>
          <li>
            In theorie kan een probleem opgelost worden met eender welke
            programmeertaal
          </li>
          <li>
            Een aantal concepten bestaan in bijna alle programmeertalen →
            onderwerpen van dit vak
          </li>
        </ul>
        <p>
          HTML en Markdown zijn nuttige en veelgebruikte talen, maar ze
          ondersteunen niet al deze concepten.
        </p>
      </RVSlide>
    </RVSlide>
  );
};

const EersteProgramma = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h2></h2>
        <h1>Eerste programma: Hello world</h1>
        <CodeBlock>{`print("Hello, world!")`}</CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>Hello world</h2>
        <CodeBlock>{`print("Hello, world!")`}</CodeBlock>
        <ul>
          <li>
            <Code>print()</Code> is een <strong>functie</strong> in Python die
            iets toont in de uitvoer (de console)
          </li>
          <li>
            Hetgene tussen de haakjes noemt men een <strong>parameter</strong>
          </li>
          <li>
            <Code>"Hello world"</Code> noemt men een <Code>string</Code>: een
            stuk tekst (te herkennen aan de aanhalingstekens)
          </li>
          <li>
            Computers geven geen interpretatie aan een <Code>string</Code>. Het
            is betekenisloos, in tegenstelling tot <Code>print()</Code>
          </li>
        </ul>
        <StatusBox variant="edu">
          'Hello world' is traditioneel het eerste programma dat een programmeur
          probeert te schrijven wanneer die een nieuwe programmeertaal leert.
          Zie bv.{" "}
          <ExternalLink
            href="https://en.wikipedia.org/wiki/%22Hello,_World!%22_program"
            target="_blank"
          >
            Hello, World op Wikipedia
          </ExternalLink>
          .
        </StatusBox>
      </RVSlide>
      <RVSlide>
        <h2>Opdracht: Hello World</h2>
        <ul>
          <li>
            Log in op{" "}
            <ExternalLink href="https://replit.com/">
              https://replit.com/
            </ExternalLink>{" "}
            en maak een project voor Python
          </li>
          <li>
            Schrijf een lijn code in de Python <b>Console</b> (rechterkant van
            het project) om je eigen naam als <Code>string</Code> te printen en
            voer uit
          </li>
          <li>
            Verwijder de aanhalingstekens rond je naam en voer de code opnieuw
            uit. Wat gebeurt er? Waarom?
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Console en programma's</h2>
        <ul>
          <li>
            De console is een interactieve omgeving, bedoelt voor korte testen
            en code van 1 lijn uit te voeren
            <ul>
              <li>Je 'praat' rechtstreeks met de computer</li>
            </ul>
          </li>
          <li>
            Alles in de console ben je kwijt als de console wordt gesloten (bv.
            door het project te verlaten)
          </li>
          <li>
            Een programma is een reeks instructies die de computer uitvoert
          </li>
          <li>
            Een programma kan meerdere lijnen code bevatten. Elke lijn stelt een
            nieuwe instructie voor(*)
          </li>
          <li>
            Een programma kan je opslaan en later opnieuw uitvoeren (eventueel
            op een andere computer)
          </li>
        </ul>
        <p>
          (*) dit is wat kort door de bocht, de details komen in volgende lessen
          aan bod
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Opdracht: Recept</h2>
        <p>
          Schrijf een <b>programma</b> dat een recept naar keuze uitprint:
        </p>
        <ul>
          <li>Er moeten minstens 3 en maximaal 6 stappen zijn</li>
          <li>
            Schrijf voor elke stap een aparte <Code>print()</Code> op een nieuwe
            lijn
          </li>
          <li>
            Nummer elke stap door een cijfer in het begin van de instructie te
            zetten
          </li>
        </ul>
        <p>
          Als je programma werkt en de correcte uitvoer toont, wissel dan twee
          lijnen code van plaats. Voer de code opnieuw uit en bekijk de uitvoer.
          Wat besluit je hieruit?
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Volgorde van uitvoeren</h2>
        <p>De basisregel is:</p>
        <ul>
          <li>De computer start op lijn 1 van het programma</li>
          <li>De computer voert lijn per lijn uit van boven naar beneden</li>
        </ul>
        <p>
          Dit is slechts een basisregel. Er bestaan verschillende uitzonderingen
          op!
        </p>
      </RVSlide>
    </RVSlide>
  );
};

const Expressies = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Expressies</h1>
        <CodeBlock>{`> (2 + 7) * 4
36

> "Welkom aan de" + "UCLL!"
Welkom aan deUCLL!`}</CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>Expressies: basis</h2>
        <ul>
          <li>
            Een <b>expressie</b> kan je <b>evalueren</b>. De computer leest de
            aparte waarden en combineert ze volgens welbepaalde regels. Een
            expressie heeft altijd een <b>resultaat</b> (een nieuwe waarde)
          </li>
          <li>
            Een expressie kan wiskundig zijn (bv. <Code>42</Code>,{" "}
            <Code>2 + 7</Code>), maar andere soorten expressies bestaan ook (bv.{" "}
            <Code>"Welkom aan de"</Code>)
          </li>
          <li>
            Het resultaat van een expressie kan je snel te weten komen door de
            expressie te evalueren in de <b>console</b>
          </li>
        </ul>
        <p>
          Bekijk de tweede expressie op de vorige slide opnieuw. Wat valt je op?
          Hoe kan je dit oplossen?
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Expressies: wiskunde</h2>
        <p>
          De volgende bewerkingen zijn universeel over (bijna) alle
          programmeertalen:
        </p>
        <ul>
          <li>
            Optellen <Code>+</Code>
          </li>
          <li>
            Aftrekken <Code>-</Code>
          </li>
          <li>
            Vermenigvuldigen <Code>*</Code>
          </li>
          <li>
            Delen <Code>/</Code>
          </li>
          <li>
            Modulo (rest na deling) <Code>%</Code>
          </li>
        </ul>
        <p>Programmeertalen respecteren de volgorde van bewerkingen:</p>
        <ul>
          <li>
            Bijvoorbeeld: <Code>*</Code> en <Code>/</Code> hebben voorrang op{" "}
            <Code>+</Code> en <Code>-</Code>
          </li>
          <li>
            Gebruik extra haakjes <Code>(</Code> en <Code>)</Code> indien nodig
          </li>
        </ul>
        <p>
          Andere bewerkingen (machten, wortels, logaritmes, ...) variëren tussen
          programmeertalen.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Expressies: tekst</h2>
        <p>
          Je kan twee of meerdere <Code>string</Code>s samenvoegen door middel
          van <Code>+</Code>. Dit is redelijk universeel voor programmeertalen,
          op een paar randgevallen na.
        </p>
        <p>
          Men noemt dit ook wel <b>concateneren</b> (<i>Eng: concatenate</i>),
          vaak afgekort tot <i>concat</i>.
        </p>
        <p>Wees expliciet:</p>
        <ul>
          <li>
            Computers plaatsen normaal <b>geen</b> spaties of witregels, de
            programmeur moet dit toevoegen
          </li>
          <li>
            Spaties zijn eenvoudig: plaats het binnen een <Code>string</Code>,
            of concat <Code>" "</Code> met een andere <Code>string</Code>
            <ul>
              <li>
                Bijvoorbeeld: <Code>"Hello " + "World"</Code> of{" "}
                <Code>"Hello" + " " + "World"</Code>
              </li>
            </ul>
          </li>
          <li>Witregels komen later aan bod</li>
        </ul>
      </RVSlide>
    </RVSlide>
  );
};

const Variabelen = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Variabelen</h1>
        <CodeBlock>{`vak = "Programmeren 1"
print(vak)`}</CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>Variabelen: basis</h2>
        <p>
          Een <b>variabele</b> dient voor het <b>opslaan</b> van expressies en
          andere data.
        </p>
        <ul>
          <li>
            Een variabele heeft steeds een <b>naam</b> en een <b>waarde</b>
          </li>
          <li>
            <b>declareren</b>: het aanmaken van een nieuwe variabelen
          </li>
          <li>
            <b>toekennen</b>: een (bestaande of nieuwe) variabele een waarde
            geven
          </li>
        </ul>
        <p>
          In Python gebeurt declaratie en toekenning tesamen in één lijn. De
          algemene syntax is:
        </p>
        <CodeBlock>{`<naam_variabele> = <waarde_variabele>`}</CodeBlock>
        <p>
          Dit geldt niet algemeen. In sommige talen kan je een variabele eerst
          declareren, en pas veel later een waarde geven. Bijvoorbeeld in
          JavaScript:
        </p>
        <CodeBlock language="JavaScript">{`let naam;  // declaratie
// wat code tussendoor...
naam = "Bob"  // toekenning`}</CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>Mentaal model</h2>
        <p>Vaak wordt een variabele vergeleken met een container:</p>
        <ul className="!mb-8">
          <li>
            De naam is een label waarmee we de container kunnen terugvinden
          </li>
          <li>De waarde is de inhoud van de container</li>
          <li>Declareren → een nieuwe container maken</li>
          <li>Een waarde toekennen → de container vullen</li>
        </ul>
        <TwoColumns
          left={
            <div className="border-2 border-rose-500 rounded-md">
              <CenteredImage src={variablesAreContainers} className="!m-0" />
              <span className="text-lg text-center block">
                Variabelen declararen
              </span>
            </div>
          }
          right={
            <div className="border-2 border-rose-500 rounded-md">
              <CenteredImage
                src={variablesAreContainersWithValues}
                className="!m-0"
              />
              <span className="text-lg text-center block">
                Variabelen een waarde toekennen
              </span>
            </div>
          }
        />
        <StatusBox variant="remember">
          <b>Let op:</b> een variabele in programmeren is iets helemaal anders
          dan een variabele in wiskunde!
        </StatusBox>
      </RVSlide>
      <RVSlide>
        <h2>Variabelen: goede gewoontes</h2>
        <p>
          Vergelijk de twee stukken code hieronder. Welke is het eenvoudigst om
          te begrijpen?
        </p>
        <CodeBlock>{`x = 20
y = "An"
z = "V"`}</CodeBlock>
        <CodeBlock>{`leeftijd = 20
naam = "An"
geslacht = "V"`}</CodeBlock>
        <StatusBox variant="remember">
          Geef variabelen steeds een duidelijke naam. Dit verhoogt de
          leesbaarheid van code.
        </StatusBox>
      </RVSlide>
      <RVSlide>
        <h2>Conventies</h2>
        <p>
          Verschillende programmeertalen hebben andere gewoontes voor de namen
          van variabelen.
        </p>
        <p>
          In Python gebruikt men <b>snake_case</b>:
        </p>
        <ul>
          <li>Gebruik enkel kleine letters</li>
          <li>
            Vervang spaties door een laagliggend streepje (<Code>_</Code>)
          </li>
        </ul>
        <p>
          Voorbeelden: <Code>gemiddelde_score</Code>,{" "}
          <Code>een_zeer_lange_variabelenaam</Code>,{" "}
          <Code>ucll_aantal_lln</Code>
        </p>
        <p>
          Een populair alternatief in talen zoals Java is <b>camelCase</b>:
        </p>
        <ul>
          <li>
            Start met een kleine letter, tenzij het een afkorting is in
            hoofdletters
          </li>
          <li>
            Vervang spaties door de volgende letter als een hoofdletter te
            schrijven
          </li>
        </ul>
        <p>
          Voorbeelden: <Code>gemiddeldeScore</Code>,{" "}
          <Code>eenZeerLangeVariabelenaam</Code>, <Code>UCLLAantalLln</Code>
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Conventies</h2>
        <p>Maakt het uit welke je notatie je gebruikt?</p>
        <ul>
          <li>Meestal niet</li>
          <li>
            Sommige talen dwingen het wel af of suggereren om de naam aan te
            passen
          </li>
          <li>Het belangrijkste is dat je consistent bent</li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Variabelen en expressies</h2>
        <p>
          Een variabele kan het resultaat van een expressie bevatten, of zelfs
          de waarde van een andere variabele.
        </p>
        <p>Bijvoorbeeld:</p>
        <CodeBlock>{`straal = 5
oppervlakte = straal * straal * 3.14
print(oppervlakte)

gebruiker = "Bart"
begroeting = "Welkom " + gebruiker
print(begroeting)`}</CodeBlock>
        <p>Wat gebeurt er precies?</p>
        <ol>
          <li>
            De computer evalueert eerste de expressie aan de rechterkant van{" "}
            <Code>=</Code>
          </li>
          <li>
            Het resultaat wordt gekopieerd naar de variabele aan de linkerkant
            van <Code>=</Code>
          </li>
        </ol>
      </RVSlide>
      <RVSlide>
        <h2>De waarde van een variabele veranderen</h2>
        <p>
          Je kan bestaande variabelen een nieuwe waarde geven. In Python gebeurt
          dit op dezelfde manier als het declareren van een nieuwe variabele:
        </p>
        <CodeBlock className="text-base">{`dag = "maandag" # Dit is een declaratie van een nieuwe variabele
# ...
dag = "dinsdag" # Hier krijgt een bestaande variabele een nieuwe waarde`}</CodeBlock>
        <p>
          <strong>Opgelet:</strong> In Python kan je niet aan de code zien of
          een variabele nieuw is of al bestaat. Dit kan een nadeel zijn bij het
          lezen van complexere programma's.
        </p>
        <p>
          Andere talen hebben regels om het verschil duidelijk te maken.
          Bijvoorbeeld in JavaScript:
        </p>
        <CodeBlock
          language="JavaScript"
          className="text-base"
        >{`let dag = "maandag" # dit is een declaratie
# ...
dag = "dinsdag" # dit is geen declaratie, de variabele moet al bestaan`}</CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>Quiz</h2>
        <p>Bekijk de code hieronder. Wat zal er in de console verschijnen?</p>
        <CodeBlock>{`t = 5
y = t + 3
t = 6
print(t)
print(y)`}</CodeBlock>
        <Quiz
          answers={[
            createQuizAnswer("5 en 8"),
            createQuizAnswer("11 en 9"),
            createQuizAnswer("6 en 6"),
            createQuizAnswer("6 en 8", true),
          ]}
        />
      </RVSlide>
      <RVSlide>
        <h2>Aanpasbaarheid</h2>
        <p>
          Variabelen kunnen aanpasbaar <i>(Eng: mutable)</i> of onaanpasbaar{" "}
          <i>(Eng: immutable)</i> zijn.
        </p>
        <p>
          In Python zijn alle variabelen steeds mutable. Je kan — helaas — niet
          afdwingen dat een variabele immutable is. Andere talen hebben
          strictere regels.
        </p>
        <StatusBox variant="remember">
          <b>
            Over het algemeen werk je best zoveel mogelijk met immutable
            variabelen
          </b>
          . Hoe vaker je variabelen muteert (aanpast), hoe moeilijker het
          meestal wordt om code te begrijpen.
        </StatusBox>
      </RVSlide>
      <RVSlide>
        <h2>Constanten</h2>
        <p>
          Sommige variabelen stellen een constante waarde voor in het hele
          programma. Voorbeelden: het getal <Math>π</Math>, het aantal levens in
          het begin van een spel, het aantal dagen in een week, ...
        </p>
        <p>
          Constanten zijn logischerwijs onaanpasbaar. Om dit aan te geven, wordt
          hun naam vaak geschreven in <Code>UPPER_SNAKE_CASE</Code>.
        </p>
        <p>Bijvoorbeeld:</p>
        <CodeBlock>{`DAYS_IN_WEEK = 7`}</CodeBlock>
        <p>
          Dit is een afspraak tussen mensen, het is geen verplichting. Computers
          houden hier geen rekening mee.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Variabelen: opdracht</h2>
        <p>Schrijf het volgende programma:</p>
        <ul>
          <li>Declareer een variabele die je geboortejaar voorstelt</li>
          <li>
            Declareer een constante die de leeftijd voorstelt waarop iemand als
            meerderjarig wordt beschouwd (18 jaar)
          </li>
          <li>
            Declareer een nieuwe variabele die het jaar voorstelt waarop je
            meerderjarig wordt/bent geworden
          </li>
          <li>Print het jaar van meerderjarigheid in de console</li>
          <li>
            Pas nadien het geboortejaar aan naar keuze. Controleer of je code
            blijft werken zonder verdere aanpassingen
          </li>
        </ul>
      </RVSlide>
    </RVSlide>
  );
};

const DataTypes = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Datatypes</h1>
        <CodeBlock>{`naam = "Chiara"
leeftijd = 53
boodschap = "Naam: " + naam + ", leeftijd: " + leeftijd

=> TypeError: can only concatenate str (not "int") to str`}</CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>Datatypes: basis</h2>
        <p>
          Elke variabele en expressie heeft een bepaald <b>type</b>, afhankelijk
          van het soort data dat het voorstelt.
        </p>
        <p>De meest voorkomende types zijn:</p>
        <ul>
          <li>
            Tekst: <Code>string</Code>
          </li>
          <li>
            Gehele getallen: <Code>int</Code>, afgeleid van <i>Integer</i>
          </li>
          <li>
            Kommagetallen: <Code>float</Code>, afgeleid van{" "}
            <i>Floating point numbers</i>
          </li>
          <li>
            Booleaanse waarden: <Code>bool</Code>, zie volgende les
          </li>
        </ul>
        <p>De namen hierboven kunnen variëren tussen programmeertalen.</p>
      </RVSlide>
      <RVSlide>
        <h3>Datatypes: nut</h3>
        <p>Types hebben verschillende toepassingen:</p>
        <ul>
          <li>
            Afleiden welke operaties wel/niet mogelijk zijn
            <ul>
              <li>
                Bijvoorbeeld: een <Code>+</Code> heeft een andere functie bij
                tekst dan bij cijfers
              </li>
            </ul>
          </li>
          <li>
            Programmeurs waarschuwen voor fouten (bugs)
            <ul>
              <li>
                Bijvoorbeeld: de <Code>TypeError</Code> in het voorbeeld
                waarschuwt voor het mengen van cijfers en tekst
              </li>
            </ul>
          </li>
        </ul>
        <StatusBox variant="remember">
          Een simpele vuistregel: je mag niet zomaar een type mengen met een
          ander type ('geen appelen met peren vergelijken').
        </StatusBox>
      </RVSlide>
      <RVSlide>
        <h2>Datatypes opvragen</h2>
        <p>
          In Python kan je het type van een variabele of het resultaat van een
          expressie opvragen met de ingebouwde functie <Code>type()</Code>:
        </p>
        <CodeBlock>{`> type(5)
<class 'int'>

> type(dorp_of_stad)
<class 'str'>

> type(7 / 2)
<class 'float'>
`}</CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>
          <Code>float</Code> en afrondingsfouten
        </h2>
        <p>
          Kommagetallen (<Code>floats</Code>) worden voorgesteld met een punt
          (geen komma).
        </p>
        <p>
          Wat denk je dat de laatste lijn in onderstaand programma zal
          afprinten?
        </p>
        <CodeBlock>{`print(0.1)
print(0.1 + 0.1)
print(0.1 + 0.1 + 0.1)`}</CodeBlock>
        <Quiz
          answers={[
            createQuizAnswer("0.1"),
            createQuizAnswer("0.3"),
            createQuizAnswer("0.6"),
            createQuizAnswer("Iets anders", true),
          ]}
        />
        <p className="fragment">
          Het exacte antwoord dat Python uitprint is{" "}
          <Code>0.30000000000000004</Code>.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>
          <Code>float</Code> en afrondingsfouten
        </h2>
        <p>
          <Code>float</Code>s zijn een uitdaging voor computers:
        </p>
        <ul>
          <li>
            Je kan geen oneindige kommagetallen voorstellen met een eindig
            geheugen
          </li>
          <li>
            Ook eindige kommagetallen vormen een probleem. Hoe stel je een getal
            als <code>10 000.000 000 0001</code> voor met zo min mogelijk
            geheugen?
          </li>
          <li>Afrondingsfouten zijn haast onvermijdelijk</li>
        </ul>
        <p>
          <b>Conclusie</b>: je vermijdt best kommagetallen, tenzij
          afrondingsfouten tolereerbaar zijn.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>
          <Code>float</Code> en afrondingsfouten
        </h2>
        <StatusBox variant="info">
          De naam <Code>float</Code> verwijst naar de interne voorstelling van
          kommagetallen in het geheugen van computers. De komma 'drijft' in het
          rond, er is geen vast aantal cijfers voor en na de komma.
        </StatusBox>
        <StatusBox variant="info">
          Naast <Code>float</Code> hebben sommige talen het type{" "}
          <Code>double</Code>. Dit is een kommagetal dat meer cijfers kan
          bevatten dan een <Code>float</Code>. Het is nuttig voor toepassingen
          waar precisie belangrijk is (bv. voor het simuleren van het weer).
        </StatusBox>
      </RVSlide>
      <RVSlide>
        <h2>Datatypes: Hard typing vs Soft typing</h2>
        <p>
          Talen zoals Python en JavaScript gebruiken <b>soft typing</b>:
        </p>
        <ul>
          <li>Een variabele kan van type veranderen</li>
          <li>
            De programmeur hoeft de types niet te vermelden, ze zijn verborgen
            in het programma
          </li>
          <li>
            Types worden gecontroleerd tijdens het uitvoeren (
            <i>Eng: at runtime</i>)
          </li>
        </ul>
        <p>
          Talen zoals Java en Rust gebruiken <b>hard typing</b>:
        </p>
        <ul>
          <li>Een variabele kan maar één type bevatten</li>
          <li>Programmeurs moeten het type (meestal) expliciet vermelden</li>
          <li>
            Types worden gecontroleerd vóór het uitvoeren (
            <i>Eng: at compile time</i>)
          </li>
        </ul>
        <p>Voorbeeld uit Java:</p>
        <CodeBlock language="Java">{`int x = 5;  // OK
String naam = 7.345  // Error`}</CodeBlock>
        <p>
          Hard typing is veiliger en stabieler, maar vereist meer werk en kennis
          van types.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Datatypes: conversie</h2>
        <p>
          Elke taal heeft technieken om waarden te converteren naar een ander
          type.
        </p>
        <p>In Python zijn er drie nuttige functies om te onthouden:</p>
        <ul>
          <li>
            <Code>str()</Code>
          </li>
          <li>
            <Code>int()</Code>
          </li>
          <li>
            <Code>float()</Code>
          </li>
        </ul>
        <p>Bijvoorbeeld:</p>
        <CodeBlock>{`t = str(5)
print(type(t))  # <class 'str'>

y = float("5.2")
z = int("Leuven")  # Wat gaat er gebeuren?`}</CodeBlock>
        <p>Type conversie is niet zonder risico's: gebruik ze verstandig!</p>
      </RVSlide>
    </RVSlide>
  );
};

const InvoerUitvoer = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Invoer en uitvoer</h1>
      </RVSlide>
      <RVSlide>
        <h2>Invoer en uitvoer</h2>
        <p>
          Programma's op zichzelf zijn niet interessant als ze niet kunnen
          interageren met de 'buitenwereld'.
        </p>
        <p>Kan je voorbeelden geven van interactie?</p>
        <div className="fragment">
          <ul>
            <li>Muisklik of toets indrukken</li>
            <li>Tekst typen</li>
            <li>Iets tonen op het scherm</li>
            <li>Tekstbestanden op de computer lezen</li>
            <li>
              Het resultaat van een berekening doorsturen naar een ander proces
            </li>
          </ul>
          <p>
            Dit noemt men invoer en uitvoer (<i>Eng: input and output</i>, vaak
            afgekort tot <i>I/O</i>)
          </p>
        </div>
      </RVSlide>
      <RVSlide>
        <h2>
          Invoer: <Code>input()</Code>
        </h2>
        <CodeBlock>{`antwoord_str = input("Wat is je leeftijd? ")
antwoord_int = int(antwoord)
nieuwe_leeftijd_int = antwoord_int + 1
nieuwe_leeftijd_str = str(nieuwe_leeftijd_int)
boodschap = "Volgend jaar ben je " + nieuwe_leeftijd_str + " jaar oud."
print(boodschap)`}</CodeBlock>
        <ul>
          <li>
            <Code>input(question)</Code> toont <Code>question</Code> aan de
            gebruiker. Het antwoord van de gebruiker wordt teruggegeven
          </li>
          <li>Je moet zelf het antwoord opslaan in een variabele</li>
          <li>
            Het antwoord is altijd van type <Code>string</Code>. Pas conversie
            van types toe indien nodig
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>
          Invoer: <Code>input()</Code>
        </h2>
        <h4>Snelle conversie</h4>
        <p>
          Je kan type-conversies direct toepassen op het resultaat van{" "}
          <Code>input()</Code>:
        </p>
        <CodeBlock>{`antwoord_int = int(input("Wat is je leeftijd? "))`}</CodeBlock>
        <h4 className="!mt-16">Veel voorkomende fout</h4>
        <p>
          Volgende code bevat een typische fout gelinkt aan{" "}
          <Code>{`input()`}</Code>. Welke?
        </p>
        <CodeBlock>{`temperatuur = input('Wat is de temperatuur in °C?')
temperatuur_kelvin = temperatuur + 273.15`}</CodeBlock>
        <p className="fragment">
          <b>Antwoord:</b>Type-conversie vergeten: <Code>temperatuur</Code> is
          een <Code>string</Code>, geen <Code>float</Code>.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>
          Uitvoer: <Code>print()</Code>
        </h2>
        <p>
          <Code>print()</Code> laat toe om meer dan 1 parameter te printen:
        </p>
        <CodeBlock>{`t_str = "abc"
u_int = 123
v_float = 5.236
print(t_str, u_int, v_float)`}</CodeBlock>
        <ul>
          <li>elke parameter wordt apart verwerkt</li>
          <li>
            <Code>print()</Code> is slim genoeg om elke parameter eerst naar een{" "}
            <Code>string</Code> te converteren indien nodig
          </li>
          <li>tussen elke parameter wordt een spatie gezet in de uitvoer</li>
        </ul>
      </RVSlide>
    </RVSlide>
  );
};

const Modules = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Introductie tot modules</h1>
        <CodeBlock>{`import math
resultaat = math.sqrt(225)
print(resultaat)`}</CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>Modules: standard library</h2>
        <p>
          <b>Standard library</b> = de set van functies en andere structuren die
          een programmeertaal altijd aanbiedt. Elke taal heeft een standard
          library, vaak met functies zoals <Code>print()</Code>,{" "}
          <Code>input()</Code>, ...
        </p>
        <p>
          Veel talen hebben een systeem van <b>modules</b> of <b>packages</b>{" "}
          (betekenen vaak hetzelfde). Het laat toe om code op te splitsen over
          meerdere bestanden en ernaar te verwijzen.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Modules: standard library</h2>
        <p>
          De Python standard library bevat een heel aantal modules. De meeste
          moet je eerst expliciet importeren met <Code>import</Code>. De
          officiële documentatie bevat een{" "}
          <ExternalLink href="https://docs.python.org/3/library/">
            uitgebreide lijst
          </ExternalLink>{" "}
          met meer info over de modules en hun functies.
        </p>
        <p>De volgende modules worden frequent gebruikt:</p>
        <ul>
          <li>
            <Code>math</Code>: functies voor meer complexere wiskundige
            bewerkingen
          </li>
          <li>
            <Code>random</Code>: genereer willekeurige getallen
          </li>
          <li>
            <Code>time</Code>: functies gerelateerd aan tijd en de voorstelling
            ervan
          </li>
        </ul>
        <StatusBox variant="remember">
          <b>Vuistregel</b>: plaats <Code>import</Code> steeds in het begin van
          bestanden, voordat de eigenlijke code begint.
        </StatusBox>
      </RVSlide>
      <RVSlide>
        <h2>Modules: Third-party libraries/modules/packages</h2>
        <p>
          Programmeurs kunnen onderling code met elkaar delen door middel van
          libraries/modules/packages. Rond een taal bestaat vaak een heel
          ecosysteem van publieke, gratis modules.
        </p>
        <p>
          Moderne talen hebben gesofisticeerde systemen om dit te beheren. In
          oudere programmeertalen vereist dit meer moeite.
        </p>
        <p>
          <b>Afspraak voor dit vak</b>: Third-party packages worden <b>niet</b>{" "}
          gebruikt voor opdrachten, noch voor het project, tenzij anders
          vermeld.
        </p>
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
        <h2>Afspraak rond variabelen in oefeningen</h2>
        <p>
          De ervaring leert dat beginnende programmeurs moeite hebben met het
          beheren van variabelen en types in hun programma's.
        </p>
        <p>
          In een strongly typed taal zoals Java wordt je verplicht hierover na
          te denken, omdat je types altijd expliciet moet opschrijven. Zoals
          eerder gezegd is Python helaas weakly typed en zal het dus niets
          afdwingen.
        </p>
        <p>
          Daarom geldt in dit vak de volgende regel voor de Python-opdrachten in
          Dodona:
        </p>
        <StatusBox variant="remember">
          Voeg aan elke variabelenaam een postfix toe die het type aangeeft.
          Bijvoorbeeld: <Code>leeftijd_int</Code>, <Code>naam_str</Code>,{" "}
          <Code>temperatuur_float</Code>, ...
        </StatusBox>
      </RVSlide>
      <RVSlide>
        <h2>Opdrachten</h2>
        <ul>
          <li>
            Ga naar{" "}
            <ExternalLink href="https://p.cygnus.cc.kuleuven.be/webapps/blackboard/content/listContentEditable.jsp?content_id=_37641376_1&course_id=_1169606_1">
              {"Toledo > Opdrachten"}
            </ExternalLink>
          </li>
          <li>Volg de stappen om toegang te krijgen tot dit vak op Dodona</li>
          <li>Maak de opdrachten van module 1 in Python</li>
          <li>Gebruik de concepten uit deze slides en leer ze te combineren</li>
          <li>
            Je mag gebruik maken van het internet → probeer zelfstandig
            oplossingen te zoeken voor je problemen
          </li>
          <li>Vraag hulp als je vastzit</li>
        </ul>
      </RVSlide>
    </RVSlide>
  );
};

export default Les;
