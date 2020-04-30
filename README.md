# JS Coding Sandbox

Start here. Code away!

## Overview

This project gives you a quick start on coding and testing with the latest and greatest from JavaScript. It's a sandbox to play, test and be creative with your projects. Don't worry about setting up things. Focus on coding. For beginners and experienced developers.

## Technologies Used

- [Node.js](https://nodejs.org/en/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Babel](https://babeljs.io/) - Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.
- [Jest](https://jestjs.io/) - Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

## Folders & Files Structure

Really simple. You have the `root` of the project and you have `src`.

```
src/
  ...projects
.gitignore
babel.config.js
package-lock.json
package.json
README.md
```

## How To Use

Even simpler. To run a project, just do:

```
$ npm run dev <project-path>

// Example:
$ npm run dev ./src/simple-math
```

This will run your project and refresh it every time that you save:
![](https://leo.d.pr/UqTYPS+)

To run tests for a particular project, do:

```
$ npm run test <project-path>

// Example
$ npm run test ./src/simple-math
```

This will give you a scoped view of the test suite for the particular project. Like this:

![](https://leo.d.pr/kzmssk+)

## Creating a Project

You can definitely get creative in your project structure, but to start we recommend only 3 files. A project file, a test file for your project and an `index` file. After you're comfortable with the structure, go crazy!

```
src/
  simple-math/
    index.js
    simpleMath.js
    simpleMath.test.js
```

In this example we have:

- `simpleMath.js`: your project file, where you're exporting the needed pieces for your project to run and be tested
- `simpleMath.test.js`: your test file, this file will host your specs
- `index.js`: your "command" file, where you'll interact with your project

So, let's assume that you want to create a Tic Tac Toe project. Start by creating a `tic-tac-toe` folder under `src` with 3 files:

```
src/
  tic-tac-toe/
    index.js
    ticTacToe.js
    ticTacToe.test.js
```

Have fun!

## License

This project is an open-sourced software licensed under the [MIT license](https://github.com/busayo/meanmap/blob/master/LICENSE).
