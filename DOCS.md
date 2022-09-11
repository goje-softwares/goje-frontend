# DOCS

goje-frontend document for developers

## Table of contents

- [What You need to know?](#what-you-nedd-to-know)
- [Getting Started](#getting-started)
  - [Install](#install)
  - [Run](#run)
- [Testing](#testing)
- [Folder/File Structure](#folderfile-structure)
- [.env](#env)

## What You need to know?

to work with the goje-frontend source you need a good understanding of:

- React, Chakra UI, and JavaScript

also, be familiar with:

- Command Line (Bash/PowerShell), Git, Yarn, Cypress, and axios

## Getting Started

### Install

#### - Softwares:

make sure you have this installed on your machine:

- [Node](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)
- MySQL `(for local backend server)`
  for some scripts to run properly, my suggestion is to use [LAMP](https://bitnami.com/stack/lamp) for Linux/Mac and [XAMP](https://www.apachefriends.org/download.html) for windows
- [PHP](https://www.php.net/) `(for local backend server)`
- PowerShell `(if OS is windows)`

#### - Source:

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

finally, run the frontend:

```shell
yarn dev
```

## Testing

we use [Cypress](https://www.cypress.io/) for testing.
for running test run:

```shell
yarn test
```

for opening Cypress run:

```shell
yarn cypress
```

## Folder/File Structure

for easy reading of the source here is an explanation of some important files and folders:

- /cypress: find all the testing stuff here
- /scripts: some scripts for easy developing experience and wiping database for testing purposes
- /src: real application
  - /Components: react components
  - /Context: react contexts
  - /Global: app global settings
  - /Hooks: react custom hooks
  - /Pages: Pages of application
  - App.jsx: main file and routings

also, i do my best to get the "code should speak itself" approach so if you are a React developer it shouldn't be hard to work with source code## .ENV

## .env

[Adding Custom Environment Variables](https://create-react-app.dev/docs/adding-custom-environment-variables/)
