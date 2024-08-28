import { DownloadPdfButton } from "../../../components/DownloadPdfButton";
import {
  RVPresentation,
  RVSlide,
  CodeBlock,
  Quote,
} from "../../../components/RevealComponents";
import { useRouter } from "next/router";
import { KennismakingSlide } from "../../../components/slides/Kennismaking";

const Les = () => {
  const router = useRouter();
  return (
    <RVPresentation>
      <RVSlide>
        <h2>Programmeren 2</h2>
        <h1>Inleiding</h1>
        <DownloadPdfButton routerPathName={router.pathname} />
      </RVSlide>
      <RVSlide>
        <h2>Overzicht</h2>
        <ul>
          <li>Kennismaking</li>
          <li>Inleiding tot dit vak</li>
          <li>Doelstellingen, leerstof en evaluatie</li>
          <li>Praktische zaken en tips</li>
        </ul>
      </RVSlide>
      <Voorstelling />
      <Inleiding />
      <Doelstellingen />
      <Varia />
    </RVPresentation>
  );
};

const Voorstelling = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Welkom!</h1>
        <h2>Kennismaking</h2>
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

const Inleiding = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Positionering in opleiding</h1>
        <h2></h2>
      </RVSlide>
      <RVSlide>
        <h2>Link met andere vakken</h2>
        <p>
          Programmeren staat centraal in het domein van informatica. Binnen de
          lerarenopleiding van de UCLL zijn er 2 vakken die zich hierop richten:
        </p>
        <ul>
          <li>Programmeren 1 - 5 SP - 1e fase</li>
          <li>Programmeren 2 - 7 SP - 2e fase</li>
        </ul>
        <p>
          Uit de{" "}
          <a href="https://onderwijsaanbod.leuven.ucll.be/syllabi/n/MSC21AN.htm">
            ECTS-fiche
          </a>
          :
        </p>
        <Quote>
          Dit opleidingsonderdeel bouwt expliciet voort op Programmeren 1 in de
          eerste opleidingsfase en veronderstelt dat de student dit met succes
          heeft doorgemaakt. Evenwaardige competententies verworven in een
          andere context voldoen desgevallend ook.
        </Quote>
      </RVSlide>
      <RVSlide>
        <h2>Link met andere vakken</h2>
        <p>
          Eens je kan programmeren, kan je dit benutten in andere vakken.
          Bijvoorbeeld:
        </p>
        <ul>
          <li>Webdesign en multimedia</li>
          <li>Applicatiesoftware</li>
          <li>Andere onderwijsvakken?</li>
          <li>...</li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Studiebelasting en aanpak</h2>
        <p>7 SP ~= 175 - 210 uren</p>
        <ul>
          <li>~45u les</li>
          <li>125 - 160 uren zelfstandig werk:</li>
          <ul>
            <li>Project</li>
            <li>Examen</li>
          </ul>
        </ul>
      </RVSlide>
    </RVSlide>
  );
};

const Doelstellingen = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Doelstellingen, leerstof en evaluatie</h1>
        <h2>Wat je op het einde kent en kunt</h2>
      </RVSlide>
      <RVSlide>
        <h2>Doelstellingen</h2>
        <p>
          <b>Verdieping</b> kennis en beheersing van programmeerconcepten en
          -technieken uit Programmeren 1:
        </p>
        <ul>
          <li>Algoritmen ontwerpen en beschrijven</li>
          <li>Controlestructuren in algoritmen en programma's</li>
          <li>Datastructuren in Python (en daarbuiten)</li>
          <li>Iteraties (herhalingen)</li>
          <li>Recursie</li>
          <li>Objectgericht ontwerpen en programmeren</li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Doelstellingen (2)</h2>
        <p>
          Noties bezitten van enkele fundamentelere aspecten van algoritmiek,
          programmeren en informaticawetenschappen:
        </p>
        <ul>
          <li>Enkele klassieke algoritmes en oplossingswijzen</li>
          <li>Efficiëntie, complexiteit, berekenbaarheid</li>
          <li>Grafen- en automatentheorie (als er tijd voor is)</li>
          <li>Principes van kunstmatige intelligentie (als er tijd voor is)</li>
        </ul>
        <p>Programmeren (in Python) kunnen plaatsen in een context:</p>
        <ul>
          <li>Programmeren en programmeertalen vroeger en nu</li>
          <li>
            Programmeren en <b>computationeel denken</b>
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Doelstellingen (3)</h2>
        <p>
          Conceptueel <b>inzicht</b> in en elementaire{" "}
          <b>gebruiksvaardigheid</b> met een aantal min of meer courante
          benaderingen en omgevingen voor programmeren en/of computationeel
          denken in het secundair onderwijs.
        </p>
        <p>
          Zelf, <b>in samenwerking met collega's</b>, benaderingen en werktuigen
          voor het aanleren van computationeel denken en/of programmeren in de
          eerste en/of de tweede graad van het secundair onderwijs kunnen{" "}
          <b>opsporen, onderzoeken, uittesten</b>, in minstens één ervan een
          project voor beoogde leerlingen <b>uitwerken</b>, en dit alles aan
          collega's <b>verduidelijken</b> zowel conceptueel als qua gebruik.
        </p>
        <p>→ via project in groep</p>
      </RVSlide>
      <RVSlide>
        <h2>Leerstof</h2>
        <ul>
          <li>Slides zijn voornaamste bron</li>
          <li>Handboek: de Programmeursleerling</li>
          <li>Bijkomende materialen via Toledo</li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2>Evaluatie</h2>
        <p>Project "Programmeren in het sec. onderwijs":</p>
        <ul>
          <li>Telt mee voor 50% van het totaal voor dit vak</li>
          <li>In groep</li>
          <li>
            Opstartsessie voorzien begin oktober: meer info over doelen,
            werkwijze, evaluatie
          </li>
          <li>
            In principe krijgt ieder teamlid hetzelfde punt, maar hier kan van
            afgeweken worden op basis van feedback. De docent beslist
            uiteindelijk.
          </li>
        </ul>
        {/* Ook 2e zit */}
      </RVSlide>
      <RVSlide>
        <h2>Evaluatie (2)</h2>
        <p>Examen over de leerstof:</p>
        <ul>
          <li>Telt mee voor 50% van het totaal voor dit vak</li>
          <li>Mondelinge verdediging</li>
          <li>
            Bespreking en verdediging van het portfolio met
            programmeeroefeningen dat je doorheen het OPO opbouwt:
          </li>
          <ul>
            <li>Inzicht in concepten</li>
            <li>Procedurele vaardigheden (concepten toepassen)</li>
            <li>Metacognitieve kennis</li>
            <li>
              Attitude: doorzettingsvermogen, samenwerking, initiatief,
              leergierigheid
            </li>
          </ul>
        </ul>
        <p>Hoe dit voor te bereiden:</p>
        <ul>
          <li>Maak de oefeningen tijdens het jaar en hou ze geordend bij</li>
          <li>Verzin zelf vragen/oefeningen en probeer ze op te lossen</li>
          <li>Ga online op zoek naar nieuwe oefeningen/theorie/concepten</li>
        </ul>
        <p>
          Het examen is open boek. Je brengt je portfolio mee en mag het
          raadplegen tussendoor. Je mag ook online informatie opzoeken tijdens
          het examen.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>Evaluatie (3)</h2>
        <p>
          Tijdens de tweede zittijd kan enkel het examen opnieuw gedaan worden.
          Je punt van het project wordt ongewijzigd overgenomen.
        </p>
      </RVSlide>
    </RVSlide>
  );
};

const Varia = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h1>Varia</h1>
        <h2>Praktische zaken, tips</h2>
      </RVSlide>
      <RVSlide>
        <h2>Praktisch</h2>
        <ul>
          <li>Lessen op maandagavond en donderdagvoormiddag</li>
          <ul>
            <li>Let op met sluiting van de poort/fietsenstalling</li>
          </ul>
          <li>Zie lessenrooster voor exacte data</li>
          <li>
            Meestal op de campus, maar een paar zullen online zijn. Dit wordt op
            voorhand aangekondigd via Toledo
          </li>
          <li>
            De les op donderdag 12/10 wordt vervangen door een online zelfstudie
            ter voorbereiding van het project
          </li>
        </ul>
      </RVSlide>
      <RVSlide>
        <h2 className="!mt-8">Tips om te leren programmeren</h2>
        <ul>
          <li>
            Programmeren leer je <b>niet</b> door alleen maar code te lezen,
            maar door ze <b>zelf</b> te schrijven
          </li>
          <li>
            Belangrijkste is om de concepten en het denkproces onder de knie te
            krijgen:
          </li>
          <ul>
            <li>
              Afkijken van oplossingen heeft weinig zin, als je er niets mee
              doet
            </li>
            <li>Veel oefeningen (her)maken is nuttig</li>
          </ul>
        </ul>
        <p>
          <b>
            Zelf (online) kunnen zoeken naar informatie, is cruciaal voor een
            programmeur.
          </b>{" "}
          Neem initiatief en raadpleeg online/offline bronnen, vraag raad aan
          medestudenten of de lector, ...
        </p>
      </RVSlide>
    </RVSlide>
  );
};

export default Les;
