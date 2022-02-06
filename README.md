# e-commerce-back-end

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

An Node.js back end for an e-commerce site. App is configured using a working Express.js API which utilises Sequelize to interact with the MySQL database.

The task was to develop this application by building and debugging starter code, and providing a walkthrough video that demonstrates the functionality and test various routes using Insomnia.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Directory Structure](#directory-structure)
- [Technologies Used](#technologies-used)
- [Schema](#schema)
- [Setup](#setup)
- [Demo](#demo)
- [Acknowledgements](#acknowledgements)
- [Questions](#questions)
- [License](#license)

## Installation

​Install dependencies using:

    npm install

## Usage

Login to mysql using the terminal using and the follow with your password:

    mysql -u root -p

The db schema will be added using the following:

```mysql
source .db/schema.sql

```

The application will then be invoked by using the following command:

    npm start

## Directory Structure

```md
.
├── config/
├── db/
├── models/
├── routes/
│ ├── api/
│ └── index.js
├── seeds/
├── .env
├── .gitignore
├── package.json
├── README.md
└── Server.js
```

## Technologies Used

- MySQL
- Express
- Node.js
- mysql2
- dotenv

## Schema

![Schema](./assets/schema-image.png)

## Setup

- Nodejs must be installed
- MySQL must be installed
- Insomnia must be installed to test routes
- MySQL Workbench (MySQL GUI recommended but not required)
- Text editor (VS Code recommended)

## Demo

[![Watch the video](./assets/my-video-player.png)](https://drive.google.com/file/d/1RoJ_t8hFmkak7h2BDBvQsZf7Kkvo2wDw/view)

## Acknowledgements

- https://www.npmjs.com/package/dotenv
- https://www.npmjs.com/package/express
- https://www.npmjs.com/package/mysql2
- https://www.npmjs.com/package/sequelize
- https://www.npmjs.com/package/nodemon

## Questions

Created by: [@moedaaboul](https://github.com/moedaaboul)

Feel free to contact me via [muhammad.daaboul1989@gmail.com](muhammad.daaboul1989@gmail.com)!

## License

This work is licensed under
[MIT](#).
