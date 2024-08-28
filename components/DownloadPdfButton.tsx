import { createClassNames } from "../src/util";

const PUBLIC_PDF_FOLDER = "/pdfs"

export const DownloadPdfButton: (props: {
  routerPathName: string;
  className?: string;
  delayed?: boolean;
  children?: React.ReactNode;
}) => JSX.Element = ({ routerPathName, className, delayed, children }) => {
  const defaultFileName = `${routerPathName.substring(1).replaceAll("/", "-")}.pdf`
  const pathToPdf = `${PUBLIC_PDF_FOLDER}${routerPathName}.pdf`;
  return (
    <a
      download={defaultFileName}
      href={pathToPdf}
      className={createClassNames(
        [
          "bg-rose-600 !text-white p-4 rounded-md shadow-md text-base hover:bg-rose-700",
          className,
        ],
        delayed
      )}
    >
      Download PDF-versie
    </a>
  );
};
