# oh-my-boilingpoint
An spxrogers-opinionated starting point for a React application (not library). Includes friends.

## It's YARBR (yet another react boilerplate repo)

I know, I know...

_We_ don't need this, but this one works for _me._  
I started a new React side project over the weekend and the last time I boostrapped something from _completely zero_ was 2017 -- **yikes** -- so documenting a logical step-by-step on what I got to work in a way I liked it.

## Is it different at all? 

Yes. But mostly **no**. 

This repo, unlike most boilerplate examples, includes [[initial commits]](https://github.com/spxrogers/oh-my-boilingpoint/commits/mainline) taking one step at a time on introducing each new element to the project structure. This is, hopefully apprecated, in contrast to repos where it says "here is my `package.json`, go nuts" or a CRA template with a whole swath of opaque scripts and configs and oh-my-gosh...

## Technology

| oh-my-boilingpoint | React  | Webpack | Babel   | TypeScript | Storybook | ESLint | Prettier | Jest   | Bundle Chunking + Lazy Loading | Dev Server + Hot Reloading |
| ---                | ---    | ---     | ---     | ---        | ---       | ---    | ---      | ---    | ---                            | ---                        |
| 1.0.0              | 17.0.1 | 5.11.1  | 7.12.10 | 4.1.3      | 6.1.11    | 7.16.0 | 2.2.1    | 26.6.3 | ✅                            | ✅                         |

## NPM Scripts

- `build`: 
  - Cleans build directory, lints `src/`, verifies TypeScript build, runs tests, builds production bundle.
- `build:dev`: 
  - Cleans build directory, builds development bundle.
- `build:prod`: 
  - Cleans build directory, builds production bundle.
- `build:serve`: 
  - Start a webpack hot reloading dev server, using the `src/index.html` to mount.
- `build:watch`: 
  - Start a webpack build in watch mode (long running, rebuilds changes on save) and outputs to the build `dist/` directory, using devlopment config.
- `lint`: 
  - Lint files, automatically fixing where possible.
- `sortPackageJson`: 
  - Keeps the `package.json` file tidy. 
- `storybook:build`: 
  - Builds a static storyboard output. Share it or deploy it.
- `storybook:serve`: 
  - Starts a storyboard server that rebuilds your component stories on file changes.
- `test`: 
  - Runs all tests in your `src/` directory with the `*.test.(ts|tsx|js|jsx)` file pattern.
- `test:coverage`: 
  - Runs tests and outputs coverage data.
- `test:watch`: 
  - Runs tests in watch mode: long running and reruns on file changes.
- `types:check`: 
  - Runs TypeScript type checking.
- `types:watch`: 
  - Runs TypeScript type checking in watch mode: long running and runs on file changes.
