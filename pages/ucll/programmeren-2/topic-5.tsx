import { useRouter } from "next/router";
import { DownloadPdfButton } from "../../../components/DownloadPdfButton";
import { CodeBlock, RVPresentation, RVSlide } from "../../../components/RevealComponents";

const Les = () => {
  const router = useRouter();
  return (
    <RVPresentation>
      <RVSlide>
        <h2>Programmeren 2: topic 5</h2>
        <h1>Programmeren in het secundair onderwijs: een inleiding</h1>
        <DownloadPdfButton routerPathName={router.pathname} />
      </RVSlide>
      <RVSlide>
        <h2>Overzicht</h2>
        <ul></ul>
      </RVSlide>
    </RVPresentation>
  );
};

const Introductie = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h2></h2>
        <h1></h1>
      </RVSlide>
      <RVSlide>
        <h2></h2>
        <p></p>
      </RVSlide>
    </RVSlide>
  );
};

const LagereGraad = () => {
  return (
    <RVSlide>
      <RVSlide>
        <h2></h2>
        <h1></h1>
      </RVSlide>
      <RVSlide>
        <h2></h2>
        <p></p>
      </RVSlide>
    </RVSlide>
  );
};

export default Les;
