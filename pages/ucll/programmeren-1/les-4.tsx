import Image from "next/image";
import {
  createQuizAnswer,
  CodeBlock,
  Code,
  RVPresentation,
  Quiz,
  RVSlide,
} from "../../../components/RevealComponents";
import cmyColor from "../../../public/cmy-color.png";
import { DownloadPdfButton } from "../../../components/DownloadPdfButton";
import { useRouter } from "next/router";

const Les = () => {
  const router = useRouter();
  return (
    <RVPresentation>
      <RVSlide>
        <h1>Programmeren 1</h1>
        <h2>Les 4</h2>
        <DownloadPdfButton routerPathName={router.pathname} />
      </RVSlide>
      <RVSlide>
        <h2>Overzicht</h2>
        <ul>
          <li>Herhaling vorige les + bespreking opdracht</li>
          <li>Functies: vervolg</li>
        </ul>
      </RVSlide>
      <VorigeLes />
      <Functies />
      <Opdrachten />
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
        <p>
          Hoeveel keer zal de lijn <Code>print("echo")</Code> uitgevoerd worden?
        </p>
        <CodeBlock>{`import random
total = random.randint(5, 10)
i = 0
while i < total:
    print("echo")
    i += 2
`}</CodeBlock>
        <Quiz
          answers={[
            createQuizAnswer("Tussen de 4 en 9 keer"),
            createQuizAnswer("Tussen de 3 en 5 keer", true),
            createQuizAnswer("Tussen de 5 en 10 keer"),
            createQuizAnswer("Iets anders"),
          ]}
        />
      </RVSlide>
      <RVSlide>
        <h2>Quiz</h2>
        <p>
          Welke cijfers worden afgeprint wanneer onderstaande code wordt
          uitgevoerd?
        </p>
        <CodeBlock>{`for i in range(6, 2):
  print(i)`}</CodeBlock>
        <Quiz
          answers={[
            createQuizAnswer("6, 5, 4, 3, 2"),
            createQuizAnswer("5, 4, 3, 2"),
            createQuizAnswer("6, 5, 4, 3"),
            createQuizAnswer("Iets anders", true),
          ]}
        />
      </RVSlide>
      <RVSlide>
        <h2>Quiz</h2>
        <p>
          Welke waarde moet <Code>x</Code> hebben zodat enkel de cijfers 3 en 15
          afgeprint worden?
        </p>
        <CodeBlock>{`for i in range(3, 18, x):
  print(i)`}</CodeBlock>
        <Quiz
          answers={[
            createQuizAnswer("12", true),
            createQuizAnswer("15"),
            createQuizAnswer("6"),
            createQuizAnswer("Iets anders"),
          ]}
        />
      </RVSlide>
      <RVSlide>
        <h2>Opdracht</h2>
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
          {`def bereken_oppervlakte_cirkel(straal):
  return straal * straal * 3.14

opp_1 = bereken_oppervlakte_cirkel(5)
opp_2 = bereken_oppervlakte_cirkel(25)`}
        </CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>Functies</h2>
        <p>Functies zijn herbruikbare stukken code.</p>
        <ul>
          <li>
            Een functie kan je <b>definiëren</b> en <b>oproepen</b>
          </li>
          <li>De definitie van de functie schrijf je één keer</li>
          <li>Je kan een functie zo vaak oproepen als nodig</li>
          <li>
            Een functie kan een <b>resultaat</b> teruggeven (Eng:{" "}
            <i>return value</i>)
          </li>
          <li>
            Een functie kan <b>parameters</b> accepteren tussen de haakjes
          </li>
        </ul>
        <p>
          Specifiek voor Python: de definitie van een functie moet <b>vóór</b>{" "}
          de oproep staan
        </p>
        <p>
          <b>Opmerking: </b>functies in programmeren hebben een andere betekenis
          dan in wiskunde!
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Functies: waarom?</h2>
        <ul>
          <li>Je kan stukken code hergebruiken: minder kopiëren en plakken</li>
          <li>
            Je kan je programma opsplitsen in aparte, eenvoudigere blokken
          </li>
          <li>
            Als je met meerdere programmeurs samenwerkt, kan je het werk
            opsplitsen met behulp van functies
          </li>
          <li>
            In combinatie met andere concepten wordt je code veel flexibeler
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Functies: indentatie</h2>
        <p>
          Functies volgen dezelfde regels rond indentaties als selecties (
          <Code>if-else</Code>) en iteraties (<Code>for, while</Code>).
        </p>
        <ul>
          <li>
            Beëindig de declaratie van je functie (de <Code>def</Code>) met een{" "}
            <Code>:</Code>
          </li>
          <li>
            Indenteer de volledige <i>body</i> van je functie naar rechts
          </li>
          <li>
            Om je functie af te sluiten, indenteer je de code nadien terug naar
            links
          </li>
        </ul>
        <CodeBlock>
          {`print("code voor de functie")

def mijn_functie():
  print("start functie")
  x = True
  if x:
    print("een if binnen een functie staat nog meer naar rechts")
  
  print("einde functie")

print("code na de functie")`}
        </CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>
          Functies: <Code>return</Code>
        </h2>
        <p>
          Een functie kan een resultaat teruggeven door middel van{" "}
          <Code>return</Code>:
        </p>
        <CodeBlock>
          {`def geef_antwoord_op_alles():
  return 42
  
x = geef_antwoord_op_alles()
print(x)  # 42`}
        </CodeBlock>
        <p>
          Een functie stopt onmiddellijk wanneer een <Code>return</Code> wordt
          bereikt. Code nadien wordt niet uitgevoerd:
        </p>
        <CodeBlock>
          {`def geef_aantal_lln():
  return 5
  print("Deze lijn wordt nooit uitgevoerd")`}
        </CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>Functies: parameters</h2>
        <p>
          Een <b>parameter</b> is een soort van <b>plaatshouder</b> voor waarden
          binnen een functie. Ze maken een functie nog meer flexibel en
          herbruikbaar. Parameters worden soms ook <b>argumenten</b> genoemd.
        </p>
        <p>
          Je kan zoveel parameters toevoegen als nodig aan de definitie van je
          functie:
        </p>
        <CodeBlock>
          {`def mijn_functie(param_1, param_2, param_3):
  print("parameters zijn", param_1, param_2, param_3)`}
        </CodeBlock>
        <p>
          Wanneer je de functie oproept, worden de parameters ingevuld met
          concrete waarden:
        </p>
        <CodeBlock>
          {`mijn_functie("Thomas", 5 , False)  # parameters zijn Thomas 5 False`}
        </CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>Functies: parameters</h2>
        <p>Aandachtspunten:</p>
        <ul>
          <li>Geef aan elke parameter een zinvolle naam</li>
          <li>
            De volgorde van parameters is belangrijk. Als je de volgorde
            verandert in de definitie, moet je ze ook aanpassen op alle plaatsen
            waar de functie opgeroepen wordt.
          </li>
          <li>
            Parameters bestaan enkel <b>binnen</b> hun functie. Het heeft geen
            zin om ze te gebruiken buiten hun functie
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Functies en variabelen</h2>
        <p>
          Een functie kan geen variabelen aanpassen die buiten de functie
          gedefinieerd zijn(*).
        </p>
        <p>
          Een functie kan een variabele tijdelijk overschrijven. De nieuwe
          waarde 'overschaduwt' de oude binnen de functie{" "}
          <i>(Eng: shadowing)</i>.
        </p>
        <p>
          Dit is niet universeel. Sommige talen hebben ander regels, of passen{" "}
          <i>shadowing</i> helemaal niet toe.
        </p>
        <br></br>
        <p>(*) Er bestaan uitzonderingen op, zie later.</p>
      </RVSlide>
      <RVSlide>
        <h2>Quiz</h2>
        <p>Wat gaat er op het scherm verschijnen?</p>
        <CodeBlock language="python">
          {`x = 5

def pas_x_aan():
  x = 8

print(x)`}
        </CodeBlock>
        <Quiz
          answers={[
            createQuizAnswer("5", true),
            createQuizAnswer("8"),
            createQuizAnswer("Niets"),
            createQuizAnswer("Het programma bevat een fout"),
          ]}
        />
      </RVSlide>
      <RVSlide>
        <h2>Quiz</h2>
        <p>
          <b>
            Vergeet niet om functies op te roepen! Enkel definiëren heeft geen
            effect op de rest van de code
          </b>
        </p>
        <p>Nieuwe poging: wat gaat er op het scherm verschijnen?</p>
        <CodeBlock language="python">
          {`x = 5

def pas_x_aan():
  x = 8
  print(x)  # Een extra print()

pas_x_aan()  # Nu roepen we de functie effectief op
print(x)`}
        </CodeBlock>
        <Quiz
          answers={[
            createQuizAnswer("Eerst 5, dan 8"),
            createQuizAnswer("Eerst 8, dan 8"),
            createQuizAnswer("Eerst 8, dan 5", true),
            createQuizAnswer("Eerst 5, dan 5"),
          ]}
        />
      </RVSlide>
      <RVSlide>
        <h2>Functies: opdrachten</h2>
        <p>
          Schrijf een functie <Code>is_even()</Code> die één parameter
          accepteert: een cijfer. De functie geeft <Code>True</Code> terug als
          het cijfer even is, anders geeft ze <Code>False</Code> terug.
        </p>
        <CodeBlock>{`print(is_even(5))  # False
print(is_even(8))  # True`}</CodeBlock>
        <p>
          Schrijf een functie <Code>meng_kleuren()</Code> die twee kleuren als
          parameters accepteert. Mogelijke waarden zijn cyaan (<Code>"c"</Code>
          ), magenta (<Code>"m"</Code>) en geel (<Code>"y"</Code>). De functie
          geeft terug welke nieuwe kleur je bekomt als je de twee kleuren mengt.
          Naast voorgaande drie kleuren kan je ook rood (<Code>"r"</Code>),
          groen (<Code>"g"</Code>) en blauw (<Code>"b"</Code>) bekomen.
        </p>
        <div className="grid grid-cols-2">
          <CodeBlock>
            {`print(meng_kleuren("c", "m"))  # "b"
print(meng_kleuren("m", "y"))  # "r"
print(meng_kleuren("c", "c"))  # "c"`}
          </CodeBlock>
          <Image className="!mx-auto" src={cmyColor} alt="" height={200} />
        </div>
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
        <h2>Opdrachten op Dodona</h2>
        <p>Functies worden behandeld in reeks 4 op Dodona.</p>
        <p>
          Deze reeks bevat ook al oefeningen op datastructuren (voornamelijk
          lijsten). Dit wordt later behandeld.
        </p>
        <p>Volgende opdrachten kan je oplossen zonder lijsten:</p>
        <ul>
          <li>MacArthurs wiskundetruc</li>
          <li>Big Mac index</li>
          <li>Tandwielen</li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Opdracht tegen volgende les</h2>
        <p>
          Onderzoek functies in Kotlin en 2 andere programmeertalen (uitgezonderd
          Python). Meer bepaald:
        </p>
        <ul>
          <li>Hoe declareer je een functie?</li>
          <li>Hoe voeg je parameters toe aan je functiedeclaratie?</li>
          <li>Hoe geef je een resultaat terug van een functie?</li>
          <li>
            Is de taal strikt wat betreft types in functies? Moet je bv.
            aangeven wat het type van een parameter is?
          </li>
          <ul>
            <li>Indien ja: hoe noteer je de types in de functiedeclaratie?</li>
          </ul>
        </ul>
        <p>Tijdsinschatting: 30m - 1u</p>
      </RVSlide>
    </RVSlide>
  );
};

export default Les;
