import { CDList } from "../../../components/CompetenceList";
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
import forLoopFlowchart from "../../../public/for-loop.png";

const Les = () => {
  return (
    <RVPresentation>
      <RVSlide>
        <h1>Programmeren 1</h1>
        <h2>Les 5</h2>
      </RVSlide>
      <RVSlide>
        <h2>Overzicht</h2>
        <ul>
          <li>Commentaar en documentatie</li>
          <li>Syntax van programmeertalen</li>
          <li>Computationeel denken: algoritmisch denken en veralgemening</li>
          <li>Info i.v.m. project</li>
        </ul>
      </RVSlide>
      <VorigeLes />
      <Commentaar />
      <Syntax />
      <ComputationeelDenken />
      <Project />
    </RVPresentation>
  );
};

const VorigeLes = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Thuisopdracht</h1>
      </RVSlide>
      <RVSlide>
        <h2>Resultaten thuisopdracht</h2>
        <p>
          Onderzoek functies in Kotlin en 2 andere programmeertalen
          (uitgezonderd Python). Meer bepaald:
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
      </RVSlide>
    </RVSlide>
  );
};

const Commentaar = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Commentaar en documentatie</h1>
        <CodeBlock className="text-base">{`def geef_nulpunten(a, b, c):
  """
  Berekent de nulpunten van de vergelijking
  ax^2 + bx + c = 0 en geeft deze terug.

  :param a: de waarde van a in de vergelijking
  :param b: de waarde van b in de vergelijking
  :param c: de waarde van c in de vergelijking
  :returns:
  - Twee waardes indien de vergelijking twee nulpunten heeft.
  - Een waarde indien de vergelijking slechts 1 nulpunt heeft.
  - None indien de vergelijking geen nulpunten heeft.
  """
  # Hier start de code van de functie
`}</CodeBlock>
      </RVSlide>
      <RVSlide>
        <h2>Waarom nood aan commentaar en documentatie?</h2>
        <p>
          Naarmate de code van een project groeit, wordt het moeilijker (of
          zelfs onmogelijk) om te onthouden wat elke variabele, functie, ...
          doet.
        </p>
        <p>
          Wanneer andere mensen je code lezen, hebben ze niet dezelfde
          achtergrondinformatie. Hoe kunnen zij begrijpen wat je code doet? Hoe
          kunnen ze jouw code correct aanpassen en uitbreiden?
        </p>
        <p>
          Commentaar en documentatie bieden een oplossing voor deze problemen.{" "}
          <b>Commentaar</b> zijn kleine lijnen tekst die tussen of naast code
          geplaats kunnen worden. <b>Documentatie</b> is meer formeel en moet op
          specifieke plaatsen geschreven worden.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Syntax in Python</h2>
        <p>1 lijn:</p>
        <CodeBlock>{`x = 5  # alles na de hashtag is commentaar
# commentaar kan ook aan het begin van een lijn
`}</CodeBlock>
        <p>Meerdere lijnen:</p>
        <CodeBlock>{`"""
Alles tussen de 6 aanhalingstekens wordt 
geïnterpreteerd als commentaar of documentatie.
"""`}</CodeBlock>
        <p>
          Documentatie van een functie in Python moet <b>binnen</b> de functie
          staan, net onder de <Code>def</Code> en naar rechts geïndenteerd.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Documentatie tonen</h2>
        <p>
          Veel programmeertalen en programmeeromgevingen hebben technieken om
          documentatie zichtbaar te maken.
        </p>
        <p>Specifiek voor Python:</p>
        <ul>
          <li>
            De ingebouwde functie <Code>help()</Code> geeft de documentatie
            terug van functies
          </li>
          <li>
            Een IDE zoals Pycharm (zie laatste lessen) kunnen automatisch de
            documentatie van een functie tonen door bv. te typen of de muis er
            over te houden
            <ul>
              <li>
                Uitzondering: Repl.it heeft er moeite mee, vaak werkt dit niet
              </li>
            </ul>
          </li>
        </ul>
        <p>
          <b>Opdracht:</b> gebruik <Code>help</Code> om de documentatie van de
          functie <Code>print()</Code> op te vragen.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Tips & tricks</h2>
        <ul>
          <li>
            Documentatie van een functie wordt meestal in de 3e persoon
            geschreven, en begint met een werkwoord
          </li>
          <li>
            Documentatie toevoegen aan een variabele kan, maar wordt niet
            opgepikt door IDEs en <Code>help()</Code>. Dit is een beperking van
            Python
          </li>
          <li>
            Documentatie is geen excuus om lelijke of onleesbare code te
            schrijven!
          </li>
          <li>
            Net een moeilijk stuk code geschreven op basis van internetbronnen?
            Voeg de links toe als commentaar, met wat context erbij
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Hoeveel documentatie?</h2>
        <p>
          Wanneer heb je genoeg documentatie geschreven? Beeld je het volgende
          in:
        </p>
        <ul>
          <li>Een andere programmeur krijgt over een jaar jouw code</li>
          <li>
            Hij/zij heeft ongeveer evenveel kennis als jij toen je aan het
            project begon
          </li>
          <li>
            Hij/zij kan je geen vragen stellen, want je bent veranderd van
            richting/job/...
          </li>
          <li>Hij/zij is een psychopaat en weet waar je woont</li>
        </ul>
        <p>Conclusie: geef hun geen reden om jou te bezoeken ;)</p>
        {/* <p>
          Op je project zal je geëvalueerd worden op leesbaarheid van je code.
          </p>
          <ul>
          <li>Documenteer je functies</li>
          <li>Zet commentaar bij complexe stukken code om ze kort samen te vatten</li>
          <li>Documentatie kan ook jezelf helpen bij de mondeling verdediging</li>
        </ul> */}
      </RVSlide>
    </RVSlide>
  );
};

const Syntax = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Syntax van programmeertalen</h1>
      </RVSlide>
      <RVSlide>
        <h2>Wat is syntax?</h2>
        <p>
          De syntax van een programmeertaal omvat alle regels voor het schrijven
          van correcte code in die taal.
        </p>
        <p>Voorbeelden van syntaxregels in Python:</p>
        <ul>
          <li>Indentatie is cruciaal</li>
          <li>
            Variabelen worden gedeclareerd volgens het formaat{" "}
            <Code>{`<naam> = <waarde>`}</Code>
          </li>
          <li>
            Na een <Code>if</Code> komt een conditie. Haakjes rond de conditie
            zijn optioneel
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>(On)zin van syntax</h2>
        <p>
          Je <b>moet</b> de syntax van een taal kennen om er deftig mee te
          kunnen werken. Maar vaak hoef je niet alles in één keer te leren.
        </p>
        <p>
          Syntax is vooral een kwestie van <b>van buiten leren</b>. Zelfs de
          meest ervaren programmeur heeft studietijd nodig om de syntax van een
          nieuwe taal te leren.
        </p>
        <p>
          Syntax is vaak een hinderpaal voor jonge, beginnende programmeurs.
          Blokgebaseerde talen zoals Scratch bieden hiervoor een oplossing: in
          plaats van syntaxregels, leer je welke blokken code er bestaan.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Tips & tricks voor het leren van syntax</h2>
        <ul>
          <li>
            Hoe meer talen je kent, hoe meer gelijkenissen qua syntax je kan
            vinden
            <ul>
              <li>
                Bv: <Code>=</Code> wordt in bijna elke taal gebruikt om
                variabelen een waarde te geven
              </li>
            </ul>
          </li>
          <li>Lees veel code van andere programmeurs</li>
          <li>Schrijf zelf code</li>
          <li>
            Zoek samenvattingen van de syntax van programmeertalen op
            <ul>
              <li>
                Een veelgebruikte term is <Code>syntax cheat sheet</Code>
              </li>
              <li>
                Voorwaarde: je <b>begrijpt</b> de concepten al, je bent enkel op
                zoek naar de syntax
              </li>
            </ul>
          </li>
        </ul>
        <p>
          <b>Opdracht:</b> Zoek online naar minstens twee samenvattingen van de
          syntax van Python. Slaag ze op zodat je ze makkelijk kan raadplegen
          wanneer je oefeningen maakt of aan het project werkt.
        </p>
      </RVSlide>
    </RVSlide>
  );
};

const ComputationeelDenken = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Computationeel denken deel 2</h1>
        <h2>Algoritmisch denken & veralgemening</h2>
      </RVSlide>
      <RVSlide>
        <CDList toHighlight={["Algoritmisch denken", "Veralgemening"]} />
      </RVSlide>
      <RVSlide>
        <h2>Algoritmisch denken</h2>
        <Quote>
          Opstellen van een stappenplan voor het oplossen van een probleem
        </Quote>
        <div className="grid grid-cols-2 justify-items-end">
          <div>
            <p>
              Al behandeld in les 2, maar kunnen we verder linken aan nieuwe
              leerstof.
            </p>
            <p>
              De werking van een for-lus kan je voorstellen met een
              stroomdiagram. Merk op dat dit stroomdiagram geen
              Python-specifieke code toont.
            </p>
            <p>
              Lussen hebben geen apart icoon in stroomdiagrammen, maar je kan ze
              makkelijk herkennen: ze vormen letterlijk een lus in het diagram.
            </p>
          </div>
          <Image src={forLoopFlowchart} width={300} height={600} alt="" />
        </div>
      </RVSlide>
      <RVSlide>
        <h2>Veralgemening</h2>
        <Quote>Principes veralgemenen zodat ze breder toepasbaar zijn</Quote>
        <p>Een probleem veralgemenen:</p>
        <ul>
          <li>
            Een wiskundevraagstuk herschrijven met variabelen in plaats van
            getallen
          </li>
          <li>Een routebeschrijving naar locaties buiten België</li>
        </ul>
        <p>Een oplossing veralgemenen:</p>
        <ul>
          <li>Het kortste pad vinden op een kaart, of in een videogame</li>
          <li>Spelstrategieën voor schaken/Go/dammen</li>
        </ul>
        <p>
          Een meer algemeen probleem vereist vaak een meer algemene oplossing.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Veralgemening: praktisch</h2>
        <p>
          <b>Denkopdracht:</b> Hoe kunnen we de geziene programmeerconcepten
          gebruiken om meer algemene code te schrijven?
        </p>
        <ul>
          <li>Lussen</li>
          <li>If-else</li>
          <li>Functies en parameters</li>
        </ul>
      </RVSlide>
    </RVSlide>
  );
};

const Project = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Project</h1>
        <h2>Voorbereiding</h2>
      </RVSlide>
      <RVSlide>
        <h2>Leesbaarheid</h2>
        <p>
          Op je project zal je geëvalueerd worden op leesbaarheid van je code.
        </p>
        <ul>
          <li>Documenteer je functies</li>
          <li>
            Zet commentaar bij complexe stukken code om ze kort samen te vatten
          </li>
          <li>
            Documentatie kan ook jezelf helpen bij de mondeling verdediging
          </li>
        </ul>
        <h2 className="pt-8">Natuurlijke taal</h2>
        <p>
          Klassiek worden programma's in het Engels geschreven. Uitzonderingen
          zijn mogelijk, zeker in een onderwijscontext.
        </p>
        <p>Afspraken:</p>
        <ul>
          <li>
            Namen van functies, variabelen, ... schrijf je in het Engels, tenzij
            het moeilijk te vertalen is
          </li>
          <li>
            Documentatie en commentaar kan in het Engels of Nederlands. Wees wel
            consequent
          </li>
          <li>
            De opdracht en de verdediging zullen in het Nederlands gebeuren
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Voorbereiding</h2>
        <p>
          Het project komt (onder voorbehoud) online in week na de paasvakantie.
        </p>
        <p>
          Om het project tot een goed einde te brengen, heb je minstens alle
          concepten van les 1 t.e.m. les 6 nodig. Les 6 is de eerste les na de
          paasvakantie. Concepten van de lessen nadien kunnen nuttig zijn, maar
          zullen minder aan bod komen.
        </p>
        <p>Goede beheersing van Python-syntax bespaart tijd.</p>
        <p>Beste voorbereiding: veel oefeningen maken (bv. op Dodona).</p>
      </RVSlide>
    </RVSlide>
  );
};

export default Les;
