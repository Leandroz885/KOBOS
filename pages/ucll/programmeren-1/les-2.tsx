import Image from "next/image";
import { CDList } from "../../../components/CompetenceList";
import {
  createQuizAnswer,
  CodeBlock as CodeBlock,
  Code as Code,
  RVPresentation,
  Quiz,
  Quote,
  RVSlide,
} from "../../../components/RevealComponents";
import flowchart from "../../../public/flowchart.png";
import { StatusBox } from "../../../components/StatusBox";
import { ExternalLink } from "../../../components/ExternalLink";
import { useRouter } from "next/router";
import { DownloadPdfButton } from "../../../components/DownloadPdfButton";

const Les = () => {
  const router = useRouter();
  return (
    <RVPresentation>
      <RVSlide>
        <h2>Programmeren 1</h2>
        <h1>Les 2: functies, condities en selecties</h1>
        <DownloadPdfButton routerPathName={router.pathname} />
      </RVSlide>
      <RVSlide>
        <h2>Overzicht</h2>
        <ul>
          <li>Herhaling vorige les + bespreking opdracht</li>
          <li>Functies</li>
          <li>Condities en selecties</li>
          <li>Computationeel denken: algoritmisch denken</li>
        </ul>
      </RVSlide>
      <VorigeLes />
      <Functies />
      <Condities />
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
        <h2>Quiz + bespreking opdracht</h2>
      </RVSlide>
      <RVSlide>
        <h2>Quiz</h2>
        <p>Wat is de uitvoer van volgende code?</p>
        <CodeBlock language="python">{`print(5 + 2 * 3 - 4 / 2)`}</CodeBlock>
        <Quiz
          answers={[
            createQuizAnswer("9"),
            createQuizAnswer("8.5"),
            createQuizAnswer("9.0", true),
            createQuizAnswer("Iets anders/het programma werkt niet"),
          ]}
        />
      </RVSlide>
      <RVSlide>
        <h2>Quiz</h2>
        <p>Wat is de uitvoer van volgende code?</p>
        <CodeBlock language="python">
          {`x = 2
y = 4 + x
x = y - 1
z = y + x
print(z)`}
        </CodeBlock>
        <Quiz
          answers={[
            createQuizAnswer("11", true),
            createQuizAnswer("8"),
            createQuizAnswer("'6'"),
            createQuizAnswer("Iets anders/het programma werkt niet"),
          ]}
        />
      </RVSlide>
      <RVSlide>
        <h2>Quiz</h2>
        <p>
          Wat is de uitvoer van volgende code als als input 70 wordt ingevuld?
        </p>
        <CodeBlock language="python" className="">
          {`antwoord = input("Geef seconden in: ")
rest = antwoord % 60
print("Er blijven", rest, "resterende seconden over")`}
        </CodeBlock>
        <Quiz
          answers={[
            createQuizAnswer("Er blijven 10 resterende seconden over"),
            createQuizAnswer("Er blijven10resterende seconden over"),
            createQuizAnswer("Er blijven 1.166667 resterende seconden over"),
            createQuizAnswer("Iets anders/het programma werkt niet", true),
          ]}
        />
      </RVSlide>
      <RVSlide>
        <h2>Resultaten onderzoek</h2>
        <ul>
          <li>
            <Code>print()</Code> in andere talen
          </li>
          <li>
            <Code>input()</Code> in andere talen
          </li>
          <li>vierkantswortel in andere talen</li>
          <li>willekeurig getal genereren in andere talen</li>
        </ul>
      </RVSlide>
    </RVSlide>
  );
};

const Functies = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Functies</h1>
        <CodeBlock language="python">
          {`str(5)
abs(-7)
pow(2, 5)
input("Leeftijd: ")`}
        </CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>Functies</h2>
        <CodeBlock language="python">
          {`antwoord = input("Geef kortingscode in: ")`}
        </CodeBlock>
        <ul>
          <li>Functies zijn bestaande stukken code die je kan oproepen</li>
          <li>
            Programmeertalen hebben een heel aantal ingebouwde functies voor
            veel voorkomende taken
          </li>
          <li>Functies zijn herkenbaar aan de haakjes achter hun naam</li>
          <li>
            Functies geven soms een waarde terug die we kunnen gebruiken in een
            expressie, of in een variabele kunnen opslaan
          </li>
          <li>Je kan soms extra parameters meegeven aan een functie</li>
          <li>
            In latere lessen gaan we zien hoe we zelf functies kunnen definiëren
          </li>
        </ul>
        <StatusBox variant="info">
          Functies in de context van programmeren hebben een andere betekenis
          dan in de context van wiskunde!
        </StatusBox>
      </RVSlide>
      <RVSlide>
        <h2>Functies: voorbeelden</h2>
        <ul>
          <li>
            <Code>print(...)</Code>: print een of meerdere parameters in de
            console. Geeft niets terug
          </li>
          <li>
            <Code>input(question)</Code>: toont <Code>question</Code> in de
            console. Geeft het antwoord van de gebruiker terug
          </li>
          <li>
            <Code>int(val)</Code>: converteer <Code>val</Code> naar een{" "}
            <Code>string</Code> en geeft dit terug als resultaat
          </li>
        </ul>
        <p>Zie ook: slides vorige les, handboek hoofdstuk 5</p>
      </RVSlide>
      <RVSlide>
        <h2>Functies: meerdere parameters</h2>
        <p>
          Sommige functies verwachten meerdere parameters. In dat geval{" "}
          <b> is de volgorde van parameters belangrijk.</b>
        </p>
        <CodeBlock>
          {`print("appel", "peer", "banaan")  # output: appel peer banaan
print("banaan", "peer", "appel")  # output: banaan peer appel

# pow(a, b) berekent a tot de macht b
pow(2, 3)  # 2 * 2 * 2
pow(3, 2)  # 3 * 3`}
        </CodeBlock>
      </RVSlide>
    </RVSlide>
  );
};

const Condities = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Condities en selecties</h1>
        <ul>
          <li>Booleans</li>
          <li>Logische operatoren</li>
          <li>Selecties</li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Booleaanse waarden en expressies</h2>
        <p>
          De Booleanse logica is vernoemd naar de Engelsman George Boole. In die
          vorm van logica bestaan er maar twee waarden: <Code>True</Code> en{" "}
          <Code>False</Code>.
        </p>
        <p>Booleanse logica wordt veel gebruikt in de informatica omdat:</p>
        <ul>
          <li>Het vrij makkelijk is voor mensen om te leren</li>
          <li>Het vrij makkelijk te bouwen is op hardwareniveau</li>
        </ul>
        <p>
          Booleanse logica bestaat in alle programmeertalen, maar de exacte
          notatie verschilt van taal tot taal.
        </p>
        <p>
          Een expressie die evalueert naar <Code>True</Code> of{" "}
          <Code>False</Code> noemt men een <b>Booleaanse expressie</b>.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Vergelijkingen</h2>
        <p>
          Vergelijkingen zijn de eenvoudigste categorie van Booleaanse
          expressies:{" "}
        </p>
        <CodeBlock>
          {`<    kleiner dan
<=   kleiner dan of gelijk aan
==   gelijk aan
>=   groter dan of gelijk aan
>    groter dan
!=   niet gelijk aan`}
        </CodeBlock>
        <p>
          <b>Let op:</b> verwar <Code>==</Code> (een gelijkheid) niet met{" "}
          <Code>=</Code> (een variabele een waarde toekennen)!
        </p>
        <p>
          De meeste talen gebruiken deze notaties, maar er zijn uitzonderingen.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Voorbeelden van Booleaanse expressies evalueren</h2>
        <CodeBlock>
          {`> True 
True  # True en False evalueren naar zichzelf

> 6 == 5
False

> 12 <= 18
True

> "appel" == 129
False  # Tijdens de evaluatie wordt rekening gehouden met types`}
        </CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>Quiz</h2>
        <p>Naar welke waarde zal volgende expressie evalueren?</p>
        <CodeBlock>{`27 == "27"`}</CodeBlock>
        <Quiz
          answers={[
            createQuizAnswer("True"),
            createQuizAnswer("False", true),
            createQuizAnswer("Iets anders"),
            createQuizAnswer("Error/programma werkt niet"),
          ]}
        />
      </RVSlide>
      <RVSlide>
        <h2>Logische operatoren</h2>
        <p>Je kan Booleaanse waarden combineren:</p>
        <ul>
          <li>
            <Code>A and B</Code>: evaleert naar <Code>True</Code> als A en B
            allebei tegelijk <Code>True</Code> zijn
          </li>
          <li>
            <Code>A or B</Code>: evaleert naar <Code>True</Code> als minstens A
            of B <Code>True</Code> is. A en B mogen ook beiden <Code>True</Code>{" "}
            zijn
          </li>
          <li>
            <Code>not A</Code>: evaleert naar <Code>True</Code> als A{" "}
            <Code>False</Code> is
          </li>
        </ul>
        <p>
          Je kan logische operatoren aan elkaar schakelen. Bv.{" "}
          <Code>A and B or not C</Code>. Evaluatie gebeurt van links naar
          rechts, tenzij er haakjes staan.
        </p>
        <p>
          <b>Let op:</b> soms zijn haakjes noodzakelijk om de juiste expressie
          te bekomen!
        </p>
        <Code>(A and B) or not C</Code> is niet hetzelfde als{" "}
        <Code>A and (B or not C)</Code>
        <p>
          Bij twijfel: schrijf de haakjes, ook al is het misschien niet nodig.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Selecties</h2>
        <p>
          Een <b>selectie</b> is een programmeerstructuur die toelaat om een{" "}
          <b>keuze</b> te maken binnen een programma. Er bestaan verschillende
          soorten selecties, maar veruit de meest gebruikte is de{" "}
          <Code>if</Code>- statement.
        </p>
        <p>Selecties maken gebruik van Booleaanse logica.</p>
      </RVSlide>
      <RVSlide>
        <h2>
          De <Code>if</Code>-statement
        </h2>
        <CodeBlock>
          {`if 10 > 5 and "abc" != "xyz":
  print("if-statement was True")
  print("Dit staat nog binnen de if-statement")

print("Deze lijn staat buiten de if-statement")`}
        </CodeBlock>
        <p>
          Met een <Code>if</Code>-statement kan je een stuk code laten uitvoeren
          als aan een bepaalde voorwaarde voldaan is.
        </p>
        <ul>
          <li>
            Start met <Code>if</Code>
          </li>
          <li>
            Daarna komt een Booleaanse expressie (mag simpel of complex zijn)
          </li>
          <li>
            Op het einde komt een dubbelpunt (<Code>:</Code>)
          </li>
          <li>
            <b>
              De code binnen de <Code>if</Code>-statement is naar rechts
              gïndenteerd
            </b>
          </li>
        </ul>
        <p>
          Tussen een <Code>if</Code>-blok en de code erna wordt meestal een lege
          lijn gelaten om de leesbaarheid te verhogen.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>
          De <Code>else</Code>-statement
        </h2>
        <CodeBlock>
          {`if leeftijd >= 18:
  print("meerderjarig")
else:
  print("minderjarig")`}
        </CodeBlock>
        <ul>
          <li>
            De <Code>else</Code> wordt uitgevoerd als de voorgaande{" "}
            <Code>if</Code> <b>niet</b> uitgevoerd wordt
          </li>
          <li>
            Voor de rest werkt het exact zoals een <Code>if</Code>
          </li>
          <li>
            Je kan nooit een <Code>else</Code> hebben zonder een <Code>if</Code>
            . Veel programmeertalen zullen dit als een fout rapporteren
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>
          De <Code>elif</Code>-statement
        </h2>
        <CodeBlock>
          {`if levens >= 0:
  print("herkansing, verlies 1 leven")
elif score >= 1:
  print("herkansing, verlies je volledige score")`}
        </CodeBlock>
        <ul>
          <li>
            De <Code>elif</Code> wordt uitgevoerd als de voorgaande{" "}
            <Code>if</Code> <b>niet</b> uitgevoerd wordt
          </li>
          <li>
            Een <Code>elif</Code> verwacht <b>wel</b> een conditie, in
            tegenstelling tot een <Code>else</Code>
          </li>
          <li>
            Voor de rest werkt het exact zoals een <Code>if</Code>
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Quiz</h2>
        <p>
          Wat is de uitvoer van volgende code als <Code>score = 12</Code> en{" "}
          <Code>geslaagd_op_andere_vakken = False</Code>?
        </p>
        <CodeBlock>
          {`if score >= 18:
  print("uitmuntend")
elif score >= 10:
  print("geslaagd")
elif score >= 8 and geslaagd_op_andere_vakken:
  print("gedelibereerd")
else:
  print("niet geslaagd")`}
        </CodeBlock>
        <Quiz
          answers={[
            createQuizAnswer('"uitmuntend"'),
            createQuizAnswer('"geslaagd"', true),
            createQuizAnswer('"gedelibereerd"'),
            createQuizAnswer('"niet geslaagd"'),
            createQuizAnswer("Geen uitvoer"),
            createQuizAnswer("Error/programma werkt niet"),
          ]}
        />
      </RVSlide>
      <RVSlide>
        <h2>Booleans en variabelen</h2>
        <p>
          Het resultaat van een Booleaanse expressie kan je opslaan in een
          variabele:
        </p>
        <CodeBlock className="!text-xl">
          {`luchtvochtigheid_percent = 80
windsnelheid_km_h = 60
regen = True

slecht_weer = (luchtvochtigheid_percent > 90 and windsnelheid_km_h > 40) or regen

if slecht_weer:
  print("Iemand zin om te studeren in de bib?")
else:
  print("Iemand zin in een terrasje op de Oude Markt?")`}
        </CodeBlock>
        <p>
          Correct gebruik van variabelen in combinatie met goede naamgeving, kan
          je code veel eenvoudiger maken om te begrijpen.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Over indentaties en leesbaarheid van code</h2>
        {/* vermeld ook om booleans op te slaan in variabelen voor leesbaarheid */}
        <p>
          In veel talen is indentatie optioneel. Het is aan te raden voor
          leesbaarheid, maar programma's werken hetzelfde met of zonder
          indentatie. In plaats daarvan worden speciale karakters gebruikt
          (meestal accolades <Code>{`{ }`}</Code>) om het begin en einde van een
          blok code aan te duiden.
        </p>
        <p>De volgende twee stukken code doen exact hetzelfde in JavaScript:</p>
        <CodeBlock language="JavaScript">
          {`if(6>5){if("a"==="b"){console.log("A")}}else{console.log("B")}`}
        </CodeBlock>
        <CodeBlock language="JavaScript">
          {`if (6 > 5) {
  if ("a" === "b") {
    console.log("A")
  }
} else {
  console.log("B")
}`}
        </CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>Over indentaties en leesbaarheid van code</h2>
        <p>
          <b>In Python is indentatie betekenisvol.</b> Indentatie toevoegen of
          weglaten kan de uitvoering van een programma beïnvloeden.
        </p>
        <p>
          Soms zal Python doorhebben dat je indentatie verkeerd is en een{" "}
          <Code>IndentationError</Code> tonen. Maar in veel gevallen{" "}
          <b>is indentatie je eigen verantwoordelijkheid.</b>
        </p>
        <p>
          Correcte en consistente indentatie verhoogt de leesbaarheid van je
          programma. Dit helpt bij het opsporen van fouten en het delen van code
          met anderen.
        </p>
        <p>
          <b>Algemeen advies:</b>
        </p>
        <ul>
          <li>
            Besteed steeds aandacht aan indentatie, ongeacht de taal waarin je
            werkt
          </li>
          <li>
            Kies een consistent hoeveelheid voor je indentatie in je hele
            programma. Veel voorkomende waarden zijn 2 of 4 spaties
          </li>
          <li>
            Gebruik de Tab-toets om indentatie aan te passen in je code. Gebruik
            Shift + Tab om code naar links te verschuiven
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Quiz</h2>
        <p>
          Welke variabelen moeten op <Code>True</Code> staan om <Code>2</Code>{" "}
          in de uitvoer te krijgen?
        </p>
        <CodeBlock className="text-xl">
          {`if A:
  if B or D:
    print("1")
  elif C:
    print("2")
elif B and A:
  if not D:
    print("3")
  else:
    print("4")
print("5")`}
        </CodeBlock>
        <Quiz
          smallFormat
          answers={[
            createQuizAnswer("A en C", true),
            createQuizAnswer("B en D"),
            createQuizAnswer("A, B en D"),
            createQuizAnswer("A,C en D"),
            createQuizAnswer("Iets anders"),
            createQuizAnswer("Onmogelijk"),
          ]}
        />
      </RVSlide>
      <RVSlide>
        <h2>Quiz</h2>
        <p>
          Welke variabelen moeten op <Code>True</Code> staan om <Code>4</Code>{" "}
          in de uitvoer te krijgen?
        </p>
        <CodeBlock className="text-xl">
          {`if A:
  if B or D:
    print("1")
  elif C:
    print("2")
elif B and A:
  if not D:
    print("3")
  else:
    print("4")
print("5")`}
        </CodeBlock>
        <Quiz
          smallFormat
          answers={[
            createQuizAnswer("A en C"),
            createQuizAnswer("B en D"),
            createQuizAnswer("A, B en D"),
            createQuizAnswer("A,C en D"),
            createQuizAnswer("Iets anders"),
            createQuizAnswer("Onmogelijk", true),
          ]}
        />
      </RVSlide>
      <RVSlide>
        <h2>Quiz</h2>
        <p>
          Welke variabelen moeten op <Code>True</Code> staan om <Code>5</Code>{" "}
          in de uitvoer te krijgen?
        </p>
        <CodeBlock className="text-xl">
          {`if A:
  if B or D:
    print("1")
  elif C:
    print("2")
elif B and A:
  if not D:
    print("3")
  else:
    print("4")
print("5")`}
        </CodeBlock>
        <Quiz
          smallFormat
          answers={[
            createQuizAnswer("A en C", true),
            createQuizAnswer("B en D", true),
            createQuizAnswer("A, B en D", true),
            createQuizAnswer("A,C en D", true),
            createQuizAnswer("Iets anders", true),
            createQuizAnswer("Onmogelijk"),
          ]}
        />
      </RVSlide>
    </RVSlide>
  );
};

const AlgoritmischDenken = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Computationeel denken deel 1</h1>
        <h2>Algoritmisch denken</h2>
      </RVSlide>
      <RVSlide>
        <h2>Wat is Computationeel denken?</h2>
        <Quote quotee="Jeanette M. Wing">
          Computational thinking (CT) involves solving problems, designing
          systems, and understanding human behavior, by drawing on the concepts
          fundamental to computer science.
        </Quote>
      </RVSlide>
      <RVSlide>
        <h2>Wat is Computationeel denken (CD)?</h2>
        <ul>
          <li>
            Een vorm van <b>probleemoplossend denken</b>
          </li>
          <li>'Denken zoals een computerwetenschapper'</li>
          <li>Kan geleerd worden zonder computers</li>
        </ul>
        <h2 className="pt-8">Waarom nood aan CD?</h2>
        <ul>
          <li>
            Technologie (en met name computers) heeft een grote impact op ons
            leven
          </li>
          <li>Tempo van verandering ligt hoog</li>
          <li>
            Hoe leerlingen voorbereiden op een toekomst waar technologische
            nieuwigheden de norm zijn?
          </li>
          <li>
            De technologieën veranderen, maar de onderliggende principes niet
          </li>
          <li>CD focust op het begrijpen en toepassen van deze principes</li>
        </ul>
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
        <p>
          Een algoritme is een synoniem voor een stappenplan. Voorbeelden van
          algoritmes zijn:
        </p>
        <ul>
          <li>Twee matrices vermenigvuldigen</li>
          <li>Chemie-experiment uitvoeren</li>
          <li>Je favoriete gerecht klaarmaken</li>
        </ul>
        <p>
          Belangrijk voor CD: het algoritme kan door{" "}
          <b>een andere persoon (of computer)</b> uitgevoerd worden. Er is geen
          ruimte voor interpretatie/vergissingen.
        </p>
        <p>
          De nadruk bij CD ligt op het <b>bedenken en opstellen</b>, niet op het
          kunnen uitvoeren.
        </p>
        <p>
          <b>Opdracht:</b> Denk terug aan je voorbije schoolcarrière. Welke
          algoritmes heb je geleerd? Heb je ze zelf bedacht, of werden ze jou
          aangeleerd? Hoeveel ruimte is er voor interpretatie?
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Algoritmisch denken: praktisch</h2>
        <p>
          Algoritmes opstellen is een kunts, maar er zijn technieken om dit aan
          te leren. Een veelgebruikte methode is het opstellen van een{" "}
          <b>stroomdiagram</b> (<i>Eng: flow chart</i>).
        </p>
        <div className="grid grid-cols-2">
          <Image
            className="!mx-auto"
            src={flowchart}
            width={350}
            height={500}
            alt=""
          />
          <div className="flex flex-col justify-center gap-4">
            <p>
              Je maakt het stroomdiagram <b>vóór</b> je begint met code te
              schrijven.
            </p>
            <p>
              Een proces ~ een variabele een waarde toekennen of een functie
              oproepen.
            </p>
            <p>Een beslissing ~ een if-statement of andere selectie.</p>
            <p>De vraag in een beslissing ~ een Booleaanse expressie.</p>
          </div>
        </div>
      </RVSlide>
      <RVSlide>
        <h2>Algoritmisch denken: praktisch</h2>
        <p>Tools om stroomdiagrammen te maken:</p>
        <ul>
          <li>
            <a target={"_blank"} href="https://app.diagrams.net/">
              https://app.diagrams.net/
            </a>
          </li>
          <li>
            <a target={"_blank"} href="https://www.office.com/">
              Microsoft Visio via Office 365
            </a>
          </li>
          <li>
            <a target={"_blank"} href="https://excalidraw.com/">
              https://excalidraw.com/
            </a>
          </li>
          <li>Pen en papier</li>
          <li>...</li>
        </ul>
        <h3 className="!mt-8">Opdracht</h3>
        <p>
          Gebruik een van deze tools om een stroomdiagram op te stellen voor de
          opdracht{" "}
          <a
            target={"_blank"}
            href="https://dodona.ugent.be/nl/courses/2207/series/23690/activities/548200706/"
          >
            Deliberatie
          </a>{" "}
          op Dodona.
        </p>
      </RVSlide>
    </RVSlide>
  );
};

const VolgendeLes = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Volgende les</h1>
      </RVSlide>
      <RVSlide>
        <h2>Volgende les: opdracht (1)</h2>
        <p>
          Onderzoek volgende concepten uit les 1 in Kotlin +{" "}
          <ExternalLink href="./les-1/#/programming-languages-list">
            twee andere programmeertalen uit de lijst van les 1:
          </ExternalLink>
        </p>
        <ul>
          <li>Hoe declareer je een variabele?</li>
          <li>Hoe ken je een variabele een waarde toe?</li>
          <li>Hoe toon je iets in de console, zoals <Code>print()</Code> in Python?</li>
          <li>Hoe vraag je de gebruiker om invoer, zoals <Code>input()</Code> in Python?</li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Volgende les: opdracht (2)</h2>
          <p>
            Onderzoek selecties en condities in Kotlin + twee andere programmeertalen. Meer
            specifiek:
          </p>
          <ul>
            <li>
              Hoe worden <Code>True</Code> en <Code>False</Code> voorgesteld?
            </li>
            <li>
              Hoe worden de logische vergelijkingen (bv. groter dan) en
              operators (bv. AND) voorgesteld?
            </li>
            <li>
              Hoe wordt een if/else if/else structuur geschreven? Maakt de taal
              gebruik van indentaties?
            </li>
          </ul>
          <p>Per concept:</p>
          <ul>
            <li>Geef aan wat de naam van de functie/methode/... is</li>
            <li>
              Geef een voorbeeld (1-3 lijnen code) dat toont hoe je ze moet
              gebruiken
            </li>
            <li>
              Geef aan op welke websites je de informatie hebt gevonden. Zoek
              minstens 2 sites, voeg de URLs toe aan je antwoorden
            </li>
          </ul>
          </RVSlide>
          <RVSlide>
          <h2>Volgende les: opdracht (3)</h2>
          <p>
            Dien je gestructureerde en beknopte antwoorden in op Toledo voor de
            start van volgende les. Ze worden tijdens de les klassikaal
            besproken.
          </p>
          <p>Schatting tijdsduur: 1u - 1u 30m</p>
      </RVSlide>
    </RVSlide>
  );
};

export default Les;
