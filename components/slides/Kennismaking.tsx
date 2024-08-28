import { RVSlide } from "../RevealComponents";
import { TwoColumns } from "../TwoColumns";

export const KennismakingSlide: (props: {
  className?: string;
  delayed?: boolean;
  children?: React.ReactNode;
}) => JSX.Element = ({ className, delayed, children }) => {
  return (
    <RVSlide>
      <h2>Over mij</h2>
      <ul>
        <li>Nicky Helsen</li>
        <li>Computerwetenschappen aan de KU Leuven</li>
        <li>Educatieve master Wetenschappen en Technologie aan de KU Leuven</li>
        <li>Software engineer bij Twipe Mobile Solutions</li>
        <li>Lesgever bij CodeFever</li>
      </ul>
      <TwoColumns
        left={
          <img
            className="bg-red-700 p-4 h-20"
            src="https://www.codefever.be/src/Frontend/Themes/Custom/src/Layout/Images/logo.svg"
          />
        }
        right={
          <img
            className=""
            src="https://www.twipemobile.com/wp-content/uploads/2022/05/cropped-Twipe-Final-Logo-2022.png"
          />
        }
      />
    </RVSlide>
  );
};
