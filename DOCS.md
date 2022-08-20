# DOCS

goje-frontend documents for developers

## table of contents

- [What You nedd to know?](#what-you-nedd-to-know)
- [Getting Started](#getting-started)
  - [Install](#install)
  - [Run](#run)
- [Testing](#testing)
- [Folder/File Structure](#folderfile-structure)

## What You nedd to know?

in order to work with goje-frontend source you need a good undrestanding of:

- React, Chakra UI and JavaScript

also be familiar with:

- Command Line (Bash/PowerShell), Git, Yarn, Cypress and axios

## Getting Started

### install

#### - softwares:

make sure you have this installed on your machine:

- [Node](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)
- MySQL `(for local backend server)`
  in order for some scripts to run properly my suggestion is to use [LAMP](https://bitnami.com/stack/lamp) for linux/mac and [XAMP](https://www.apachefriends.org/download.html) for windows
- [PHP](https://www.php.net/) `(for local backend server)`
- PowerShell `(if OS is windows)`

#### - source:

clone the frontend repo:

```shell
git clone https://github.com/goje-softwares/goje-frontend.git
```

install dependencies:

```shell
yarn
```

for pre-committing(husky) to work run:

```shell
npx husky install
```

dont forget to clone and insatll [backend](https://github.com/goje-softwares/goje-backend#readme) <u>next to frontend foler</u>

### Run

run the backend(while you are in the <u>goje-frontend</u> directory):

- with original script<br>
  (if you installed LAMPP/XAMP)
  <br>
  (if OS is windows run MySQL from XAMP manually)

  ```shell
  yarn start:backend
  ```

- or bring up your installed [MySQL](https://www.mysql.com/) <br>
  and then (in <u>goje-backend</u> directory) run:

  ```shell
  php artisan db:wipe; php artisan migrate; php artisan serve
  ```

finally run the frontend:

```shell
yarn dev
```

## Testing

we use [Cypress](https://www.cypress.io/) for testing
for opening Cypress run:

```shell
yarn test
```

## Folder/File Structure

in order for easly reading the source here is some explenation of some importand files and folders:

- /cypress: find all the testing stuff here
- /scripts: some scripts for easy developing experince and wiping database for testing purposes
- /src: real application
  - /Components: react components
  - /Context: react contenxts
  - /Global: app global settings
  - /Hooks: react custome hooks
  - /Pages: Pages of application
  - App.jsx: main file and routings

also i do my best to get the 'code should speaks it self' approach so if you are a React developer it shouldent be hard to work with source code
