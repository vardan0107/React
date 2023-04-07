# Igniting our App

## What is `NPM`?

- npm is a node package manager but it does not stand for node package manager.
- It manages all the dependencies in a projects like version ^ ~ , creates node modules which keep all dependent lib's code, can write scripts for commands. and all main configurations of the project
- created a package.json(configirations) and package-json.lock files
- It the world's largest software registry.

---

## How we can install/run npm commands

NPM is included with Node. js installation

---

## What are the types of dependencies in a project?

There are two types of dependencies

- `dependencies` : libraries which are required in production and debug mode
- `dev dependencies` : these are libraries which are used only while building the project not in production

---

## what does the below commands stands for?

```sh
npm init
```

Create a package.json file

```sh
npm i -D <package-name>
```

This command is installing a package into a project as a dev dependency.

```sh
npm install-ci-test
```

Install a project with a clean slate and run tests

---

## difference between `npm ci` vs `npm i`

- The project must have an existing package-lock.json or npm-shrinkwrap.json.
- If dependencies in the package lock do not match those in package.json, npm ci will exit with an error, instead of updating the package lock.
- npm ci can only install entire projects at a time: individual dependencies cannot be added with this command.
- If a node_modules is already present, it will be automatically removed before npm ci begins its install.
- It will never write to package.json or any of the package-locks: installs are essentially frozen.
  [More details](https://doc.codingdict.com/npm-ref/cli/ci.html#description)

---

## do we need to add --save flag in npm commands? why is it used?

The --save option instructed NPM to include the package inside of the dependencies section of your package.json but  
As of npm 5.0.0, installed modules are added as a dependency by default, so the --save option is no longer needed. The other save options still exist and are listed in the documentation for npm install.

---

## About [semantic versioning](https://docs.npmjs.com/about-semantic-versioning)

|                Code status                |     Stage     |                                Rule                                | Example version |
| :---------------------------------------: | :-----------: | :----------------------------------------------------------------: | :-------------: |
|               First release               |  New product  |                          Start with 1.0.0                          |      1.0.0      |
|       Backward compatible bug fixes       | Patch release |                     Increment the third digit                      |      1.0.1      |
|     Backward compatible new features      | Minor release |      Increment the middle digit and reset last digit to zero       |      1.1.0      |
| Changes that break backward compatibility | Major release | Increment the first digit and reset middle and last digits to zero |      2.0.0      |

- ^ in package.json is used for automatically updating a `minor` release version of libraries
- ~ it is used for automatically updating a `major` release version of libraries ( Not recommended )

---

## package.json vs package-lock.json?

package.json:

- This file is mandatory for every project
- It contains basic information about the project
- Application name/version/scripts

package-lock.json is created for locking the dependency with the installed version.

- `Why should we commit package-lock.json with our project source code`?  
   During deployment, when you again run “npm i” with the same package.json file without the package-lock.json, the installed package might have a higher version now from what you had intended.  
   Now, what if you wanted to have that particular version for your dependency during deployment which you used at the time of development. This is the need of creating a package-lock.json file and keeping it with the source code. This file is created with the details of the specific version installed in your project.

---

## Why should I not modify `package-lock.json`?

package-lock.json file contains the information about the dependencies and their versions used in the project. Deleting it would cause dependencies issues in the production environment. So don't modify it, It's being handled automatically by NPM.

---

## what is `npm-shrinkwrap.json`?

npm-shrinkwrap.json is a file created by npm shrinkwrap. It is identical to package-lock.json, with one major caveat: Unlike package-lock.json, npm-shrinkwrap.json may be included when publishing a package.

- what should be used `npm-shrinkwrap.json` or `package-lock.json`?  
  if npm version > 5 we should be using package-lock.json as this is automatially generated from npm install

---

## What is `node_modules` ? Is it a good idea to push that on git?

node modules is collection of dependencies . it is generated by npm i command . which runs on projects package.json and install all the dependent libraries into node module folder.  
the command even looks into package.json of the dependencies as well and install them as also, which is also know as `trasitive dependency`  
No we should not push node modules to git. as it can re re-geneated easily buy command

---

## What is `.gitignore`? What should we add and not add into it?

The .gitignore file is a text file that tells Git which files or folders to ignore in a project during commit to the repository.
we should add all the files and folders which can re-generated

---

## What is `Parcel/Webpack`? Why do we need it?

Parcel/Webpack are type of bundlers that we use to power our application with different type functionalities and features.

---

## What is npx?

npx is a tool that is used to execute the packages. It comes with the npm, when you installed npm above 5.2.0 version then automatically npx will installed. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package.

```sh
npx parcel Lecture?02/Code/index.html
```

by exceuting this command it will first see in node_modules if the package is present , will exceute from there but if not it will ask to install the package for the first time and it will not be present anywhere in node modules or package.json of our project.

npx caches the packages in a \_npx directory. so it will not ask again and again to install the package

---

## What is `.parcel-cache`?

.parcel-cache is used by parcel(bundler) to reduce the building time. It stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.

---

## What is Tree Shaking?

Tree shaking is process of removing the unwanted code that we do not use while developing the application. In computing, tree shaking is a dead code elimination technique that is applied when optimizing code.

---

## What is Hot Module Replacement?

Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways: Retain application state which is lost during a full reload.

---

## List down your favorite 5 superpowers of Parcel and describe any 3 of them in your own words.

- Zero config
- Dev server
- Hot reloading
- beautiful diagnostics
- Tree shaking
- Differential bundling  
  When you use `<script type="module">`, Parcel automatically generates a nomodule fallback for old browsers as well, depending on your browser targets.  
   This results in much smaller bundles for a majority of users in modern browsers, while still supporting older browsers as well!
- HTTPS
- minification
- Code Splitting - This allows you to split your application code into separate bundles which can be loaded on demand, resulting in smaller initial bundle sizes and faster load times.
- Image optimization
- Browser compatibility

---

## What is the `dist` folder?

The /dist folder contains the minimized version of the source code. The code present in the /dist folder is actually the code which is used on production web applications.

---

## What is [browserlists](https://github.com/browserslist/browserslist#full-list)?

Browserslist is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file. It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.
