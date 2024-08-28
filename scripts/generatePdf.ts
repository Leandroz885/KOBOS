import { spawn } from "child_process";
import path from "node:path";

const KEY = "Space";
const LOAD_PAUSE = 3000;
const SIZE = "1920x1280";
const PDF_FOLDER = "public/pdfs";

console.log("❗ Make sure to run `yarn build` and yarn `start` to run the project in release mode, before generating PDFs.")

if (process.argv.length < 3) {
  console.log(`Usage:
$ tsx scripts/generatedPdf <pageFilePath>

pageFilePath    The path to the .tsx file to render inside the 'pages' directory, relative to the root directory
                Example: ucll/programmeren-2/topic-2.tsx`);
  process.exit(1);
}

const [, , relativePath] = process.argv;
const relativePathWithoutPages = relativePath.replace(`pages${path.sep}`, "");
const file = path.parse(relativePathWithoutPages);
const myURL = new URL(
  `${file.dir.replaceAll("\\", "/")}/${file.name}`,
  "http://localhost:3000/"
);
const outputFile = path.join(PDF_FOLDER, file.dir, `${file.name}.pdf`);

console.log(
  `Generating pdf of ${myURL.toString()} and saving it to ${outputFile}`
);

const decktapeProcess = spawn(
  "npx",
  [
    "decktape",
    "generic",
    myURL.toString(),
    outputFile,
    "--key",
    KEY,
    "--size",
    SIZE,
    "--load-pause",
    `${LOAD_PAUSE}`,
    // "--max-slides",
    // `${nbSlides}`,
  ],
  { shell: true }
);

decktapeProcess.stdout.on("data", (data) => {
  console.log(`${data}`);
});

// decktapeProcess.stderr.on("data", (data) => {
//   console.log(`${data}`);
// });

decktapeProcess.on("error", (error) => {
  console.log(`${error.message}`);
});

decktapeProcess.on("close", (code) => {
  console.log(`child process exited with code ${code}`);
});
