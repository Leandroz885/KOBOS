import Image from "next/image";
import CDIcons from "../public/cd-iconen.png";

type TCategory =
  | "Abstractie"
  | "Algoritmisch denken"
  | "Veralgemening"
  | "Decompositie"
  | "Evaluatie";

export const CDList: (props: { toHighlight?: TCategory[] }) => JSX.Element = ({
  toHighlight,
}) => {
  const competences: { naam: TCategory; description: string }[] = [
    {
      naam: "Abstractie",
      description: "Onnodige details weglaten",
    },
    {
      naam: "Veralgemening",
      description: "Principes veralgemenen zodat ze breder toepasbaar zijn",
    },
    {
      naam: "Decompositie",
      description: "Opdeling in kleinere, eenvoudigere problemen",
    },
    {
      naam: "Algoritmisch denken",
      description:
        "Opstellen van een stappenplan voor het oplossen van een probleem",
    },
    {
      naam: "Evaluatie",
      description: "Kritisch bekijken van oplossing",
    },
  ];
  return (
    <div className="">
      <h2>Deelcompetenties CD</h2>
      <div className="flex justify-between items-center">
        <Image
          className="!mx-auto mb-4"
          src={CDIcons}
          width={700}
          height={200}
          alt=""
        />
        <div className="text-sm">
          <div className="">Iconen: CoDe-platform KU Leuven</div>
          <a
            target={"_blank"}
            className="block w-48"
            href="https://docs.google.com/presentation/d/1OXm5IcVH6CTrZnnYsyEqDpSxaeS-a3wCwQ2DC4Vw9IY/edit#slide=id.gbec77001e7_0_138"
          >
            Link naar de slides waarop deze leerstof gebaseerd is
          </a>
        </div>
      </div>
      <div className="flex flex-col divide-y-2">
        {competences.map((competence) => {
          const higlight = toHighlight?.includes(competence.naam);
          return (
            <div
              className={`grid grid-cols-3 items-center p-2 ${
                toHighlight ? (higlight ? "bg-rose-200" : "text-gray-400") : ""
              }`}
              key={competence.naam}
            >
              <div className="font-bold">{competence.naam}</div>
              <div className="col-span-2">{competence.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
