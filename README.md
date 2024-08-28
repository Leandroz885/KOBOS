<<<<<<< HEAD
# kobos
=======
# Reveal slides in Next.js

## Technologies

This codebase uses [Next.js](https://nextjs.org/), a web framework on top of [React]([https://](https://react.dev/)).
Code is written in [TypeScript](https://www.typescriptlang.org/), a type-safe superset of JavaScript.
Next.js has documentation available on [project structure](https://nextjs.org/docs/getting-started/project-structure) and [core concepts](https://nextjs.org/docs/pages/building-your-application).

Hosting a Next.js website can be done for free via providers such as [Netlify](https://netlify.app/) and [Vercel](https://vercel.com).
[Self-hosting](https://nextjs.org/docs/pages/building-your-application/deploying#self-hosting) is also possible.

## How to install

Dependencies are managed using NPM (Node Package manager).
Instructions to install:

1. Install [Node.js](https://nodejs.org/en/download/prebuilt-installer)
2. Make sure to install npm when following the installation steps
3. It's recommended to install [Yarn](https://yarnpkg.com/getting-started/install) on top of npm.
   Commands in this repo assume you use `yarn`
4. After the installation is complete, you should be able to run `yarn install` inside the repository to download all dependencies

## How to run

`yarn dev` spins up a local server for development.
Navigate to `localhost:3000/path/to/page` to see a page.

Example: <http://localhost:3000/ucll/programmeren-1/les-1>

## How to create a PDF of a page

1. If `yarn dev` is running, stop it
2. Run `yarn build` to create an optimised release build of the project
3. Run `yarn start` to run the release build
4. Run the following command:

    ```bash
    yarn print-pdf <RELATIVE_PATH_TO_TSX_FILE>
    ```

   The resulting PDF is stored in `pdfs` and follows the same subfolder structure
   as `pages`.
>>>>>>> d4d5785 (Initial commit)
