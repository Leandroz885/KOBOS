import React from "react";
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
import Image from "next/image";
import AccessTuple from "../../../public/python-tuple-access.svg";
import Dictionary from "../../../public/dictionary-key-value.png";
import Decompositie from "../../../public/cd-decompositie.png";
import { PythonDataStructures } from "../../../components/PythonDataStructures";
import { StatusBox } from "../../../components/StatusBox";

const Les = () => {
  return (
    <RVPresentation>
      <RVSlide>
        <h1>Programmeren 1</h1>
        <h2>Les 6</h2>
      </RVSlide>
      <RVSlide>
        <h2>Overzicht</h2>
        <ul>
          <li>Datastructuren: algemeen</li>
          <li>Tuples</li>
          <li>Lijsten</li>
          <li>Dictionaries</li>
          <li>Strings</li>
          <li>Vergelijking</li>
          <li>Gedeelde concepten</li>
          <li>Geneste structuren</li>
          <li>Computationeel denken: decompositie</li>
        </ul>
      </RVSlide>
      <VorigeLes />
      <DataStructuren />
      <Tuples />
      <Lijsten />
      <Dictionaries />
      <Strings />
      <Vergelijking />
      <Gedeeld />
      <Genest />
      <ComputationeelDenken />
      <Opdrachten />
    </RVPresentation>
  );
};

const VorigeLes = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Vorige lessen</h1>
      </RVSlide>
      <RVSlide>
        <h2>Variabelen</h2>
        <p>Waarvoor dient een variabele?</p>
        <p className="fragment text-rose-600">
          Om informatie te <b>onthouden</b> doorheen een programma.
        </p>
        <p>Welke 4 vaak voorkomende types hebben we gezien?</p>
        <p className="fragment text-rose-600">
          <Code>string</Code>, <Code>int</Code>, <Code>float</Code>,{" "}
          <Code>bool</Code>
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Condities en selecties</h2>
        <p>Welke twee waarden kan een conditie hebben?</p>
        <p className="fragment text-rose-600">
          <Code>True</Code>, <Code>False</Code>
        </p>
        <p>Waarvoor gebruiken we selecties?</p>
        <p className="fragment text-rose-600">
          Om een <b>keuze</b> te maken in een programma.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Lussen</h2>
        <p>Waarvoor gebruiken we lussen?</p>
        <p className="fragment text-rose-600">
          Om stukken code te <b>herhalen</b>.
        </p>
        <p>Welke soorten lussen zijn er?</p>
        <ul className="fragment text-rose-600">
          <li>
            Oneindige lus: <Code>while True</Code>
          </li>
          <li>
            Conditionele lus: <Code>while zon_schijnt</Code>
          </li>
          <li>
            Eindige lus: <Code>for i in range(5)</Code>
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Functies</h2>
        <p>Waarvoor gebruiken we functies?</p>
        <ul className="fragment text-rose-600">
          <li>
            Om stukken code te <b>hergebruiken</b>
          </li>
          <li>
            Om grote programma's te <b>structureren</b> in kleinere, begrijpbare
            blokken
          </li>
        </ul>
        <p>Hoe geven we extra informatie mee aan een functie?</p>
        <p className="fragment text-rose-600">
          Door middel van <b>parameters</b>
        </p>
        <p>Hoe laten we een functie iets teruggeven?</p>
        <p className="fragment text-rose-600">
          Door middel van <Code>return</Code>
        </p>
      </RVSlide>
    </RVSlide>
  );
};

const DataStructuren = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Datastructuren</h1>
        <h2>Wat en waarom</h2>
      </RVSlide>
      <RVSlide>
        <h2>Probleem 1</h2>
        <p>Opdracht uit les 1: bereken het gemiddelde van 3 getallen</p>
        <CodeBlock>{`getal_1 = 5
getal_2 = 7
getal_3 = 9
gemiddelde = (getal_1 + getal_2 + getal_3) / 3`}</CodeBlock>
        <p>
          Kan handig zijn om bv. het klas- of jaargemiddelde van een toets te
          berekenen.
        </p>
        <p>
          Dit is doenbaar voor 3 leerlingen. Maar wat als het aantal leerlingen
          toeneemt tot 20, 100, 500, ...?
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Probleem 2</h2>
        <p>
          Vaak werken we in een programma met data die nauw verwant is met
          elkaar. Bijvoorbeeld:
        </p>
        <CodeBlock>
          {`persoon_naam = "Gilles"
persoon_leeftijd = 47
persoon_is_op_vakantie = False`}
        </CodeBlock>
        <p>
          Hoe kunnen we deze variabelen samen groeperen tot één persoon met
          enkele kenmerken?
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Probleem 3</h2>
        <p>Hoe zou je het spel 'Ik ga op reis en ik neem mee' programmeren?</p>
        <ul>
          <li>Elk object moet onthouden worden, dus variabelen zijn nodig</li>
          <li>Hoeveel variabelen ga je nodig hebben?</li>
          <li>
            Hoe ga je die variabelen bv. allemaal afprinten? Voor elke variabele
            een nieuwe lijn met <Code>print()</Code> schrijven?
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2 className="!mt-12">Samengevat</h2>
        <p>We hebben technieken nodig om flexibel:</p>
        <ul>
          <li>data te groeperen</li>
          <li>data aan te maken en te verwijderen</li>
          <li>over data te itereren (= alle data een voor een afgaan)</li>
        </ul>
        <p>
          Dit kan door middel van <b>datastructuren</b>.
        </p>
      </RVSlide>
    </RVSlide>
  );
};

const Tuples = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Tuples</h1>
        <h2>Simpele datastructuren om data te groeperen</h2>
        <CodeBlock>{`dier = ('Jerry', 'hond', 4, True)
gevaccineerd = dier[3]  # True`}</CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>Tuples</h2>
        <p>
          Een tuple is een simpele datastructuur. Een tuple herken je aan ronde
          haakjes <Code>()</Code>.
        </p>
        <p>Een tuple aanmaken:</p>
        <CodeBlock>{`lege_tuple = ()
tuple_met_1_element = (25,)  # Merk op dat we een komma moeten zetten
een_element = 'abc'
tuple_met_3_elementen = (25, een_element, 25)`}</CodeBlock>
        <p>Opmerkingen:</p>
        <ul>
          <li>De elementen van een tuple kunnen van eender welk type zijn</li>
          <li>Je kan meerdere types van elementen gebruiken in één tuple</li>
          <li>
            Een tuple kan dezelfde data meerdere keren bevatten. Duplicaten zijn
            toegelaten
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Elementen uit een tuple opvragen</h2>
        <p>
          De elementen in een tuple zijn <b>geordend</b>. Het eerste element
          staat op plaats 0, het tweede op plaats 1, etc. Men noemt dit{" "}
          <b>zero-based indexing</b>. Vrijwel alle programmeertalen gebruiken
          dit principe, op een paar uitzonderingen na.
        </p>
        <div className="grid grid-cols-2">
          <div>
            <p>
              Je selecteert een element op plaats <Code>index</Code> door middel
              van <Code>[index]</Code>.
            </p>
            <p>Voorbeeld:</p>
            <CodeBlock>{`mijn_tuple = ("x", False)
eerste_element = mijn_tuple[0]`}</CodeBlock>
          </div>
          <Image className="" alt="" src={AccessTuple} />
        </div>
      </RVSlide>
      <RVSlide>
        <h2>Lengte van een tuple</h2>
        <p>
          De lengte van een tuple vraag je op door middel van <Code>len()</Code>
          . Bijvoorbeeld:
        </p>
        <CodeBlock>{`mijn_tuple = ("z", True, 123)
lengte = len(mijn_tuple)
print(lengte)  # 3`}</CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>Tuples zijn onaanpasbaar</h2>
        <p>
          Eens een tuple is gemaakt, kan je ze niet meer aanpassen.
          Bijvoorbeeld:
        </p>
        <CodeBlock>{`tup = (1, 2, 3)
# De lijn code hieronder probeert het eerste element aan te passen
tup[0] = 5  # TypeError: 'tuple' object does not support item assignment`}</CodeBlock>
        <p>
          Je kan expressies en variabelen gebruiken bij het maken van een tuple.
          De tuple verandert echter niet als de variabele of expressie
          verandert.
        </p>
        <CodeBlock>{`x = 5
tup = (x, x > 6)
x = 7
print(tup)  # (5, False)`}</CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>Opdracht</h2>
        <ol>
          <li>
            Maak een tuple die een (huis)dier voorstelt. Eerst komt de naam, dan
            de leeftijd, dan of het dier wel/niet kan zwemmen (boolean), en tot
            slot de diersoort
          </li>
          <li>
            Maak twee variabelen die respectievelijk de diersoort en de naam van
            het dier bevatten. Haal de informatie op uit de tuple in stap 1.
            Geen copy-paste!
          </li>
          <li>
            Print de zin <Code>Paspoort van NAAM (diersoort: DIERSOORT)</Code>{" "}
            waarin NAAM en DIERSOORT de waarden van de variabelen zijn
          </li>
          <li>
            Als alles werkt, pas dan je oorspronkelijke tuple aan. Controleer
            dat de code blijft werken en de zin de nieuwe waarden bevat
          </li>
        </ol>
      </RVSlide>
    </RVSlide>
  );
};

const Lijsten = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Lijsten</h1>
        <h2>Geordende datastructuren die kunnen groeien en krimpen</h2>
      </RVSlide>
      <RVSlide>
        <h2>Lijsten</h2>
        <p>
          Een lijst lijkt op een tuple, maar heeft een aantal extra
          eigenschappen. Een lijst herken je aan vierkante haakjes{" "}
          <Code>[]</Code>.
        </p>
        <p>Een lijst aanmaken:</p>
        <CodeBlock>{`lege_lijst = []
lijst_met_1_element = ['Programmeren 1']
een_element = 'abc'
lijst_met_3_elementen = [een_element, 17, een_element]`}</CodeBlock>
        <p>Opmerkingen:</p>
        <ul>
          <li>De elementen van een lijst kunnen van eender welk type zijn</li>
          <li>Je kan meerdere types van elementen gebruiken in één lijst</li>
          <li>
            Een lijst kan dezelfde data meerdere keren bevatten. Duplicaten zijn
            toegelaten
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Elementen uit een lijst opvragen</h2>
        <p>
          <b>Exact hetzelfde als bij tuples</b>
        </p>
        <p>
          De elementen in een lijst zijn <b>geordend</b>. Het eerste element
          staat op plaats 0, het tweede op plaats 1, etc.
        </p>
        <p>
          Je selecteert een element op plaats <Code>index</Code> door middel van{" "}
          <Code>[index]</Code>.
        </p>
        <p>Voorbeeld:</p>
        <CodeBlock>{`mijn_lijst = ["x", False]
eerste_element = mijn_lijst[0]`}</CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>Elementen in een lijst aanpassen</h2>
        <p>
          In tegenstelling tot tuples, zijn lijsten <b>wel aanpasbaar</b>.
        </p>
        <CodeBlock>{`lijst = [1, 2, 3]
lijst[0] = 5
print(lijst)  # [5, 2, 3]`}</CodeBlock>
        <p>
          Je kan expressies en variabelen gebruiken bij het maken van een lijst.
          De lijst verandert echter niet als de variabele of expressie
          verandert.
        </p>
        <CodeBlock>{`x = 5
lijst = [x, x > 6]
x = 7
print(lijst)  # [5, False]`}</CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>Elementen toevoegen</h2>
        <p>
          Je kan nieuwe elementen toevoegen aan een lijst. Hierdoor verandert de
          lengte van de lijst.
        </p>
        <p>
          <Code>append()</Code> voegt een element toe aan het einde van een
          lijst.
        </p>
        <p>
          <Code>insert()</Code> voegt op een specifieke positie in de lijst een
          element toe. Alle elementen erna verschuiven een plaats naar rechts.
        </p>
        <p>
          De syntax om deze functies op te roepen is anders dan degene die je
          tot nu toe kent. Je moet eerst je lijst specifiëren, gevolgd door een
          punt (<Code>.</Code>), en dan de functienaam:
        </p>
        <CodeBlock>{`lijst = ['a', 'e', 'o']
lijst.append('u')
lijst.insert(2, 'i')
print(lijst)  # ['a', 'e', 'i', 'o', 'u']`}</CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>Elementen verwijderen</h2>
        <p>
          Je kan ook elementen verwijderen uit een lijst. Ook dit heeft effect
          op de lengte van een lijst.
        </p>
        <p>
          <Code>remove()</Code> verwijdert een specifiek element uit een lijst.
          Als het element meerdere keren bestaat in de lijst, wordt enkel de
          eerste ervan verwijderd.
        </p>
        <p>
          <Code>pop()</Code> verwijdert een element op basis van de positie.
          Indien je geen positie meegeeft, wordt het laatste element verwijderd.
        </p>
        <CodeBlock>{`lijst = [5,6,7,8,6]
lijst.remove(6)  # verwijdert de eerste 6
lijst.pop(1)  # verwijdert het 2e element
lijst.pop()  # verwijdert het laatste element
print(lijst)  # [5, 8]`}</CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>Opdracht</h2>
        <p>
          Maak volgende opdracht eerst met de hand (op papier of met een
          computerprogramma), zonder code te schrijven. Noteer hoe de lijst
          eruit ziet na elke stap. Herschrijf ze daarna naar een
          Python-programma en controleer of je hetzelfde resultaat bekomt.
        </p>
        <ol>
          <li>
            Maak een lijst aan met de volgende elementen:{" "}
            <Code>10, 'programmeren', 35, False, 'programmeren', -7, 10</Code>
          </li>
          <li>
            Voeg <Code>'programmeren'</Code> toe aan het einde van de lijst
          </li>
          <li>Verwijder het eerste element uit de lijst</li>
          <li>
            Verwijder de tweede <Code>'programmeren'</Code> uit de lijst
          </li>
          <li>
            Voeg het cijfer <Code>7</Code> toe als een nieuw element in de
            lijst. Het moet het 3e element worden in de lijst
          </li>
          <li>Print de uiteindelijke lijst</li>
        </ol>
      </RVSlide>
    </RVSlide>
  );
};

const Dictionaries = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Dictionaries</h1>
        <h2>Datastructuren waarin data geassocieerd wordt met een sleutel</h2>
      </RVSlide>
      <RVSlide>
        <h2>Dictionaries, keys en values</h2>
        <p>
          Een dictionary (letterlijk vertaald: <i>woordenboek</i>) is een
          datastructuur specifiek voor Python. Andere programmeertalen hebben
          vaak gelijkaardige structuren, maar er zijn subtiele verschillen.
        </p>
        <p>
          Dictionaries werken radicaal anders dan lijsten en tuples. In plaats
          van elementen te ordenen op plaats, bestaat elk element uit een{" "}
          <b>sleutel</b> (Engels: <i>key</i>) en een <b>waarde</b> (Engels:{" "}
          <i>value</i>).
        </p>
        <Image className="flex !mx-auto" src={Dictionary} alt="" />
      </RVSlide>
      <RVSlide>
        <h2>Dictionaries maken</h2>
        <p>
          Een dictionary herken je aan gekrulde haakjes <Code>{"{}"}</Code> en
          de dubbele punten (<Code>:</Code>) tussen keys en values.
        </p>
        <CodeBlock>{`lege_dict = {}
dict_met_1_element = {"vak": "Programmeren 1"}
een_element = "abc"
dict_met_4_elementen = {een_element: "", 17: True, "xyz": True, 123: een_element}`}</CodeBlock>
        <p>Opmerkingen:</p>
        <ul>
          <li>De keys kunnen van bijna elk eenvoudig type zijn</li>
          <li>De values kunnen van eender welk type zijn</li>
          <li>
            Je kan meerdere types gebruiken in één dictionary, zowel bij keys
            als values
          </li>
          <li>
            <b>Keys moeten uniek zijn</b>. Een dictionary kan elke key maar één
            keer bevatten
          </li>
          <li>Values moeten niet uniek zijn</li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Elementen uit een dictionary opvragen</h2>
        <p>
          Dit gebeurt zeer gelijkaardig aan hoe het wordt gedaan bij lijsten en
          tuples. Alleen gebruik je niet <Code>[index]</Code>, maar{" "}
          <Code>[key]</Code>.
        </p>
        <CodeBlock>{`mijn_dict = {"mijnSleutel": 1}
x = mijn_dict["mijnSleutel"]
print(x)  # 1`}</CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>Elementen aanpassen</h2>
        <p>
          Je kan de value van een element aanpassen door middel van de key. De
          syntax is zeer gelijkaardig aan het aanpassen van een variabele:
        </p>
        <CodeBlock>{`mijn_dict = {"nieuwe_key": 123}
mijn_dict["nieuwe_key"] = "q"
print(mijn_dict)  # {"nieuwe_key: "q"}`}</CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>Elementen toevoegen</h2>
        <p>
          De syntax om elementen toe te voegen is indentiek aan die om elementen
          te veranderen. Het verschil is dat de key nog niet mag bestaan in de
          dictionary:
        </p>
        <CodeBlock>{`mijn_dict = {}
mijn_dict["nieuwe_key"=] "q"
print(mijn_dict)  # {"nieuwe_key: "q"}`}</CodeBlock>
        {/* <p>
          De functie <Code>update()</Code> combineert toevoeging en aanpassing.
          Als de sleutel bestaat, pas dan de waarde aan. Anders, maak een nieuwe
          sleutel aan met de opgegeven waarde:
        </p>
        <CodeBlock>{`afmetingen = {"gewicht": 65}
afmetingen.update({"lengte": 170})  # voeg nieuwe key "lengte" toe met value 170
afmetingen.update({"gewicht": 60})  # pas value van element met sleutel "gewicht" aan`}</CodeBlock> */}
      </RVSlide>
      <RVSlide>
        <h2>Elementen verwijderen</h2>
        <p>
          Je kan een element verwijderen door middel van <Code>pop()</Code>,
          waarbij je de key als parameter meegeeft.
        </p>
        <CodeBlock>{`mijn_dict = {"nieuwe_key": 123}
mijn_dict.pop("nieuwe_key")
print(mijn_dict)  # {}`}</CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>Andere nuttige methodes</h2>
        <h3>
          <Code>len()</Code>
        </h3>
        Werkt hetzelfde als bij tuples en lijsten. Geeft de lengte van de
        dictionary terug.
        <h3 className="!mt-12">
          <Code>keys()</Code> en <Code>values()</Code>
        </h3>
        <p>
          Geven respectievelijk de keys en de values van een dictionary terug,
          als een lijst.
        </p>
        <CodeBlock>{`app = {"naam": "UCLL", "versie": 18}
app_keys = app.keys()  # ["naam", "versie"]
app_values = app.values()  # ["UCLL", 18]`}</CodeBlock>
        <p>
          Zie ook het handboek,{" "}
          <a
            target="_blank"
            href="https://www.w3schools.com/python/python_dictionaries_methods.asp"
          >
            W3Schools
          </a>{" "}
          of gelijkaardige websites.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Ordening van elementen in een dictionary</h2>
        <p>
          Dictionaries werken op basis van keys, niet op basis van plaats. Er is
          geen 'eerste' of 'derde' of 'laatste' element. Er is ook geen garantie
          dat de volgorde waarin je elementen toevoegt, ook de volgorde is
          waarin Python de elementen opslaat binnen de dictionary.
        </p>
        <p className="!mt-32">
          <b>P.S.</b>: Sinds Python 3.7 hebben dictionaries wel een ordening,
          maar dit wordt weinig gebruikt in de praktijk. Het is aan te raden
          hier niet gebruik van te maken.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Opdracht</h2>
        <p>Hermaak de opdracht van tuples, maar zorg ervoor dat:</p>
        <ol>
          <li>
            Het huisdier als een dictionary wordt voorgesteld. Kies zelf goede
            en duidelijke keys
          </li>
          <li>De variabelen de juiste values uit de dictionary ophalen</li>
        </ol>
      </RVSlide>
    </RVSlide>
  );
};

const Strings = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Strings</h1>
        <h2>Anders bekeken</h2>
      </RVSlide>
      <RVSlide>
        <h2>Strings zijn datastructuren</h2>
        <p>
          Een string is eigenlijk een datastructuur, net zoals tuples, lijsten
          en dictionaries. Het grote verschil is dat een string slechts één type
          van elementen kan bevatten: karakters.
        </p>
        <p>
          Je kan de lengte van een string opvragen met <Code>len()</Code>.
        </p>
        <p>
          Je kan een element uit een string selecteren op basis van de index.
        </p>
        <CodeBlock>{`mijn_string = "Hello world!"
print(len(mijn_string))  # 12
print(mijn_string[6])  # "w"`}</CodeBlock>
        <p>
          Net zoals tuples zijn strings <b>onaanpasbaar</b>.
        </p>
      </RVSlide>
    </RVSlide>
  );
};

const Vergelijking = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Vergelijking tussen datastructuren</h1>
      </RVSlide>
      <RVSlide>
        <PythonDataStructures />
      </RVSlide>
      <RVSlide>
        <h2>Wanneer gebruik je wat?</h2>
        <p>
          <b>Gebruik tuples</b> voor simpele, statische, geordende data.
        </p>
        <p>
          <b>Gebruik lijsten</b> als:
        </p>
        <ul>
          <li>de volgorde van elementen belangrijk is</li>
          <li>
            volgorde en/of lengte mag variëren (elementen toevoegen/verwijderen
            of van plaats wisselen)
          </li>
        </ul>
        <p>
          <b>Gebruik dictionaries</b> als:
        </p>
        <ul>
          <li>de volgorde van elementen niet vastligt of niet belangrijk is</li>
          <li>je de data kan beschrijven via keys</li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Conversies</h2>
        <p>
          Gebruik <Code>tuple()</Code> om een datastructuur te transformeren
          naar een tuple.
        </p>
        <CodeBlock>{`fruit = ["appel", "banaan", "kiwi"]
fruit_als_tuple = tuple(fruit)  # ("appel", "banaan", "kiwi")`}</CodeBlock>
        <p>
          De functie <Code>list()</Code> werkt identiek voor transformaties naar
          lijsten.
        </p>
        <h4>Opgelet</h4>
        <p>
          Deze functies geven een <b>volledig nieuwe datastructuur</b> terug,
          die de data kopieert van de bestaande structuur.
        </p>
        <p>
          Deze functies zijn <b>minder geschikt voor dictionaries</b>. Je past
          ze beter apart toe op keys of values van een dictionary.
        </p>
      </RVSlide>
    </RVSlide>
  );
};

const Gedeeld = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Gedeelde concepten</h1>
        <h2>
          <Code>len()</Code>, itereren en de <Code>in</Code> operator
        </h2>
      </RVSlide>
      <RVSlide>
        <h2>
          <Code>len()</Code> en <Code>in</Code>
        </h2>
        <p>
          Alle geziene datastructuren ondersteunen de functie <Code>len()</Code>{" "}
          om de lengte op te vragen.
        </p>
        <p>
          Daarnaast bestaat er ook de <Code>in</Code> operator. Deze bepaalt of
          een bepaald element wel/niet in een datastructuur voorkomt. Ze geeft
          een boolean terug:
        </p>
        <CodeBlock>{`mijn_lijst = [6, 12, -5, -78, 0]
if 0 in mijn_lijst:
  print("lijst bevat nul!")`}</CodeBlock>
        <p>Bij dictionaries wordt enkel naar de keys gekeken:</p>
        <CodeBlock>{`mijn_dict = {"appel": "lekker"}
print("appel" in mijn_dict)  # True
print("lekker" in mijn_dict)  # False`}</CodeBlock>
        <p>
          <b>Denkvraag:</b> hoe zou je kunnen controleren of iets als key OF als
          value voorkomt in een dictionary?
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Itereren over datastructuren</h2>
        <p>
          In de context van datastructuren betekent <i>itereren</i> dat je de
          elementen van een datastructuur één voor één afloopt.
        </p>
        <p>
          Je kan over eender welke datastructuur itereren door middel van
          lussen. Datastructuren en lussen worden <b>heel vaak</b> gecombineerd.
          Zorg dat je hier vlot mee kan werken!
        </p>
        <p>
          Er zijn twee veel voorkomende technieken voor iteraties. Zorg ervoor
          dat je beide technieken kent en kan gebruiken in Python.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Techniek 1: per index</h2>
        <CodeBlock>{`mijn_tuple = ("hallo", "OK", "bye")
lengte = len(mijn_tuple)  # 3

# i gaat van 0 tot en met 2
for i in range(lengte):
  element = tuple[i]  # haal het element op via de index
  print(element)`}</CodeBlock>
        <p>Voor- en nadelen:</p>
        <ul className="!list-none">
          <li>➕ Werkt in vrijwel elke programmeertaal</li>
          <li>➕ Je hebt zowel het element als de index ter beschikking</li>
          <li>➖ Langdradiger, meer kans op fouten</li>
          <li>
            ➖ Meestal ben je enkel geïnteresseerd in het element, niet in de
            index
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Techniek 2: per element</h2>
        <CodeBlock>{`mijn_tuple = ("hallo", "OK", "bye")

for element in mijn_tuple:
  print(element)  # element verandert in elke iteratie`}</CodeBlock>
        <p>Voor- en nadelen:</p>
        <ul className="!list-none">
          <li>➕ Korter en duidelijker</li>
          <li>➕ Geen index nodig</li>
          <li>➖ Niet elke taal ondersteunt deze techniek</li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Extra: wat als de lengte verandert?</h2>
        <p>
          Het is mogelijk dat de lengte van de datastructuur waarover je
          itereert, verandert binnen de lus. Een voorbeeld met lijsten:
        </p>
        <CodeBlock>
          {`# SLECHTE CODE, NIET GEBRUIKEN
mijn_lijst = [7, 6, 5]
for cijfer in mijn_lijst:
  mijn_lijst.append(0)
  print(cijfer)

print(mijn_lijst)`}
        </CodeBlock>
        <p>
          Hoe vaak wordt <Code>print(cijfer)</Code> uitgevoerd? Hoe ziet de
          lijst er op het einde uit?
        </p>
        <StatusBox variant="remember">
          <b>Vermijd dit!</b> Als je echt de lengte van de datastructuur moet
          aanpassen, gebruik dan een <Code>while</Code> lus om duidelijk te
          maken dat het aantal iteraties variabel is.
        </StatusBox>
      </RVSlide>
      <RVSlide>
        <h2>Opdracht</h2>
        <ol>
          <li>
            Maak een string die je voornaam en naam voorstelt en sla ze op in
            een variabele
          </li>
          <li>Gebruik techniek 2 om de letters één voor één af te printen</li>
          <li>
            Gebruik techniek 1 om de letters achterstevoren één voor één af te
            printen. Tip: gebruik <Code>range()</Code> met meerdere cijfers
          </li>
        </ol>
      </RVSlide>
    </RVSlide>
  );
};

const ComputationeelDenken = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Computationeel denken: decompositie</h1>
      </RVSlide>
      <RVSlide>
        <CDList toHighlight={["Decompositie"]} />
      </RVSlide>
      <RVSlide>
        <h2>Decompositie</h2>
        <Quote>
          Een groot probleem opdelen in kleinere, eenvoudigere problemen.
        </Quote>
        <p>Aandachtspunten:</p>
        <ul>
          <li>
            Elk deelprobleem kan je opnieuw opsplitsen. Dit blijft doorgaan tot
            de deelproblemen voldoende 'simpel' zijn
          </li>
          <li>
            Vermijd om al direct code te beginnen schrijven. Decompositie
            gebeurt vóór het eigenlijke programmeerwerk (eerst denken, dan
            doen). Het maakt voor decompositie ook niet uit in welke
            programmeertaal je nadien de oplossing programmeert.
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Decompositie: praktisch</h2>
        <p>
          Een veelgebruikte techniek om de decompositie van een probleem te
          visualiseren, is via boomstructuren. Dit kan op papier of met software
          (e.g. Excalidraw).
        </p>
        <Image className="!mx-auto" height={400} alt="" src={Decompositie} />
        <p>
          Het eindresultaat is een reeks van aparte, simpele instructies die
          door een ander persoon (of computer) uitgevoerd kunnen worden.
        </p>
      </RVSlide>
      <RVSlide>
        <p>Een ruw algoritme voor het opstellen van een boomstructuur:</p>
        <ol>
          <li>Start met één bronelement: het overkoepelende probleem</li>
          <li>Splits dit element op in een aantal aparte deelproblemen</li>
          <ul>
            <li>
              Vermijd overlap tussen de deelproblemen. Ze zijn best elk apart
              oplosbaar
            </li>
            <li>Duik niet onmiddellijk in de kleine details!</li>
            <li>Ruwe vuistregel: mik op minstens 2, maximum 5 deelproblemen</li>
          </ul>
          <li>
            Herhaal voorgaande stap voor elk deelprobleem. Voeg telkens iets
            meer details toe aan de deelproblemen
          </li>
          <li>
            Stop wanneer je deelproblemen enkel nog bestaan uit simpele
            instructies
          </li>
          <br />
          <li>
            (Extra) Vertaal je probleem naar code. Elk deelprobleem kan je
            omvormen tot een aparte functie. Je grote probleem wordt één functie
            waarbinnen je meerdere kleine functies in de juiste volgorde
            oproept.
          </li>
        </ol>
      </RVSlide>
      <RVSlide>
        <h2>Opdracht</h2>
        <p>
          Pas decompositie toe op volgend probleem. Maak een boomstructuur op
          papier of op de computer. Stop wanneer je deelproblemen simpel genoeg
          zijn om als taak aan een ander persoon (zonder veel kennis van de
          situatie) over te laten.
        </p>
        <p>
          <b>
            Je moet een verjaardagsfeest organiseren voor een familielid dat 40
            jaar wordt.
          </b>
        </p>
      </RVSlide>
    </RVSlide>
  );
};

const Genest = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Geneste datastructuren</h1>
      </RVSlide>
      <RVSlide>
        <h2>Datastructuren nesten</h2>
        <p>
          Je kan datastructuren combineren met elkaar. Men noemt dit ook wel
          geneste structuren.
        </p>
        <p>Enkele voorbeelden:</p>
        <CodeBlock>{`# Een matrix kan je voorstellen door een lijst van lijsten
matrix = [ [2, 4], 
           [6, 8] ]
print(matrix[1][0])  # 6

# Een dictionary kan andere structuren bevatten als value (niet als key)
school = {
  "vakken": ["Nederlands", "Fysica", "Informatica"],
  "adres": {"gemeente": "Leuven", "straat": "Naamsesteenweg"}
}
print(school["adres"]["straat"])  # "Naamsesteenweg
`}</CodeBlock>
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
        <h2>Dodona</h2>
        <ul>
          <li>Reeks 4: lijsten (en functies)</li>
          <li>Reeks 5: dictionaries</li>
        </ul>
        <p>Controleer op Toledo hoeveel opdrachten je minstens moet maken.</p>
        <br></br>
        <p>
          <b>P.S.</b> Info over Kotlin:
        </p>
        <ul>
          <li>
            Er is op Toledo extra info toegevoegd over de structuur van
            Kotlinprogramma's
          </li>
          <li>
            Je moet enkel Kotlin schrijven voor reeks 1 en 2. Exacte aantallen
            staan op Toledo
          </li>
          <li>
            Pak het slim aan: maak oefeningen die je al hebt opgelost in Python.
            De oplossingsstrategie blijft hetzelfde, enkel de schrijfwijze is
            anders
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Project</h2>
        <p>Komt normaal deze week online op Toledo.</p>
        <p>De focus ligt op de leerstof van les 1 t.e.m. les 6.</p>
        <p>Voor één deelopdracht is het aan te raden te wachten tot les 7.</p>
        <p>Deadline is 48u voor de verdediging in de examenperiode.</p>
      </RVSlide>
    </RVSlide>
  );
};

export default Les;
