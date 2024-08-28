import { useRouter } from "next/router";
import { CDList } from "../../../components/CompetenceList";
import {
  RVPresentation,
  RVSlide,
  CodeBlock,
  Quote,
} from "../../../components/RevealComponents";
import { DownloadPdfButton } from "../../../components/DownloadPdfButton";

const Les = () => {
  const router = useRouter();
  return (
    <RVPresentation>
      <RVSlide>
        <h2>Programmeren 2: topic 2</h2>
        <h1>Inleiding tot Computationeel denken</h1>
        <DownloadPdfButton routerPathName={router.pathname} />
      </RVSlide>
      <RVSlide>
        <h2>Overzicht</h2>
        <ul>
          <li>Definitie</li>
          <li>Deelcompenties</li>
          <li>In het onderwijs (kort)</li>
        </ul>
      </RVSlide>
      <Introductie />
      <InOnderwijs />
      <InVak />
    </RVPresentation>
  );
};

const Introductie = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h2>Definitie en Deelcompetenties</h2>
        <h1>Introductie</h1>
      </RVSlide>
      <RVSlide>
        <h2>Wat is informatica?</h2>
        <div className="fragment">
          <Quote className="">
            Het <b>modelleren</b> en <b>automatiseren</b> van (voornamelijk)
            mentale processen en systemen.
          </Quote>
          <p>
            Hoe modelleer je processen? Hoe analyseer je een probleem? Hoe
            ontwerp je een geautomatiseerde oplossing?
          </p>
          <p>
            Merk op: er wordt niet specifiek gesproken over computers. We
            bekijken het ruimer en abstracter.
          </p>
        </div>
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
            De technologieën veranderen, maar de onderliggende principes niet.
            Ze zijn abstract en voldoende algemeen, waardoor ze toepasbaar zijn
            in een grote waaier aan situaties
          </li>
          <li>CD focust op het begrijpen en toepassen van deze principes</li>
        </ul>
      </RVSlide>
      <RVSlide>
        <CDList />
      </RVSlide>
      <RVSlide>
        <h2>Meer informatie over deelcompetenties</h2>
        <ul>
          <li>Zie volgende lessen</li>
          <li>Bekijk het extra bestand bij deze les</li>
        </ul>
      </RVSlide>
    </RVSlide>
  );
};

const InOnderwijs = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h2></h2>
        <h1>Computationeel denken in het onderwijs</h1>
      </RVSlide>
      <RVSlide>
        <h2>CD in het Vlaamse onderwijs</h2>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://onderwijsdoelen.be/resultaten?onderwijsstructuur=SO_1STE_GRAAD_V2_0&filters=onderwijsniveau%255B0%255D%255Bid%255D%3D0767c5a44ffdc8a05697bbe5b2021167fb49cf6e%26onderwijsniveau%255B0%255D%255Btitel%255D%3DSecundair%2520onderwijs%26onderwijsniveau%255B0%255D%255Bwaarde%255D%3DSecundair%2520onderwijs%26onderwijssoort%255B0%255D%255Bid%255D%3Dd614031b440b32c6f1441ccde2cdc6620b9f2977%26onderwijssoort%255B0%255D%255Btitel%255D%3DSecundair%2520onderwijs%2520%253E%2520Secundair%26onderwijssoort%255B0%255D%255Bwaarde%255D%3DSecundair%26so_graad%255B0%255D%255Bid%255D%3D4a3baa9f1d45654512ad68bfffca369060cbdd06%26so_graad%255B0%255D%255Btitel%255D%3DSecundair%2520onderwijs%2520%253E%2520Secundair%2520%253E%25202de%2520graad%26so_graad%255B0%255D%255Bwaarde%255D%3D1ste%2520graad%26versie%255B0%255D%255Bwaarde%255D%3D2.0%26vlaamse_sleutelcompetentie%255B0%255D%255Bid%255D%3D12c966ffc7661dab995d55ee1f3d79af627751d8%26vlaamse_sleutelcompetentie%255B0%255D%255Btitel%255D%3DDigitale%2520competenties%26vlaamse_sleutelcompetentie%255B0%255D%255Bwaarde%255D%3DDigitale%2520competenties"
            >
              1ste graad
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://onderwijsdoelen.be/resultaten?onderwijsstructuur=SO_2DE_GRAAD_V2_1&filters=onderwijsniveau%255B0%255D%255Bid%255D%3D0767c5a44ffdc8a05697bbe5b2021167fb49cf6e%26onderwijsniveau%255B0%255D%255Btitel%255D%3DSecundair%2520onderwijs%26onderwijsniveau%255B0%255D%255Bwaarde%255D%3DSecundair%2520onderwijs%26onderwijssoort%255B0%255D%255Bid%255D%3Dd614031b440b32c6f1441ccde2cdc6620b9f2977%26onderwijssoort%255B0%255D%255Btitel%255D%3DSecundair%2520onderwijs%2520%253E%2520Secundair%26onderwijssoort%255B0%255D%255Bwaarde%255D%3DSecundair%26so_graad%255B0%255D%255Bid%255D%3D4a3baa9f1d45654512ad68bfffca369060cbdd06%26so_graad%255B0%255D%255Btitel%255D%3DSecundair%2520onderwijs%2520%253E%2520Secundair%2520%253E%25202de%2520graad%26so_graad%255B0%255D%255Bwaarde%255D%3D2de%2520graad%26versie%255B0%255D%255Bwaarde%255D%3D2.1%26vlaamse_sleutelcompetentie%255B0%255D%255Bid%255D%3D12c966ffc7661dab995d55ee1f3d79af627751d8%26vlaamse_sleutelcompetentie%255B0%255D%255Btitel%255D%3DDigitale%2520competenties%26vlaamse_sleutelcompetentie%255B0%255D%255Bwaarde%255D%3DDigitale%2520competenties"
            >
              2e graad
            </a>
          </li>
        </ul>
        <p>
          Op dit moment maar heel beperkt aanwezig in de eindtermen van de 2e en
          3e graad. Wel nog duidelijk aanwezig in 1e graad, maar dit is onzeker.
        </p>
        <p>
          Voor meer context: zie Vakdidactiek Informatica en de recente
          hervormingen van de eindtermen in het secundair onderwijs.
        </p>
      </RVSlide>
      <RVSlide>
        <h2>CD wereldwijd</h2>
        <ul>
          <li>Neemt toe aan belang</li>
          <li>
            Er is een groeiende hoeveelheid (Engelstalig) onderzoek en materiaal
            naar hoe CD geïntegreerd kan worden in onderwijs:
            <ul>
              <li>
                <a
                  href="https://www.csunplugged.org/en/computational-thinking/"
                  target="_blank"
                >
                  Computational Thinking and CS Unplugged
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://edu.google.com/resources/programs/exploring-computational-thinking/"
                >
                  Exploring Computational Thinking
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=computational+thinking&btnG=&oq=computational+thi"
                >
                  Google Scholar
                </a>
              </li>
            </ul>
          </li>
          <li>
            Verschillende landen hebben hun curriculum hervormd met meer
            aandacht voor Informatica en CD, of zijn hier mee bezig
          </li>
          <li>Zie ook Vakdidactiek Informatica</li>
        </ul>
      </RVSlide>
    </RVSlide>
  );
};

const InVak = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h2>CD in Programmeren 2</h2>
        <h1>Link met het vak</h1>
      </RVSlide>
      <RVSlide>
        <h2>Link met het vak</h2>
        <ul>
          <li>
            Doorheen dit vak zal regelmatig verwezen worden naar de
            deelcompetenties
          </li>
          <li>
            Een doelstelling van dit vak is om de deelcompetenties te beheersen,
            zowel theoretisch als praktisch
          </li>
          <li>Op het examen zal je vragen krijgen i.v.m. CD</li>
          <li>
            Een goed gemaakt project heeft duidelijke links naar de
            deelcompetenties van CD
          </li>
        </ul>
      </RVSlide>
    </RVSlide>
  );
};

export default Les;
