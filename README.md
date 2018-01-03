# React NPM library starter kit

based on Facebook's <a href="https://github.com/facebookincubator/create-react-app" target="_blank">Create react app</a>

## Converted to custom setup

Moved all dependencies to dev dependencies because we don't need extra dependencies for our library after build, but we want all this features while developing one: 

* Compile SCSS to css
* React, JSX, ES6, and Flow syntax support.
* Language extras beyond ES6 like the object spread operator.
* A dev server that lints for common errors.
* Import CSS and image files directly from JavaScript.
* Autoprefixed CSS, so you don’t need `-webkit` or other prefixes.
* A `build` script to bundle JS, CSS, and images for production.

## Getting Started

Install dependencies

`npm install` or `yarn install`

Start development server

`npm start` or `yarn start`

Runs the demo app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Library files

All library files are located inside `src/lib`  

## Testing

`npm run test` or `yarn run test`

There is a known problem with jest for now which require you to install watchman. 
If you encounter a problem when running test that looks like this: 

`Error: Error watching file for changes: EMFILE
at _errnoException (util.js:1022:11)
at FSEvent.FSWatcher._handle.onchange (fs.js:1351:9)`

You need to run 'brew install watchman'

## Build library

`npm run build`

Produces production version of library under the `build` folder.

## Publish library

`npm publish`


