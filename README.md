# micro-node-mongo-ts

It’s built with JavaScript – a very light [node](https://nodejs.org) plus [express](http://expressjs.com) server, [sequelize](https://sequelize.org/) with [postgres](https://www.postgresql.org/) database.

## Table of Contents

- [Installation](#installation)
- [Features](#features)

## Installation

You can either run it manually or using Docker commands to spawns up all the stack components.

#### Manually

1. Go to `sample-api`
3. Run the following commands:
    1. `npm install --save-dev sequelize-cli`
    2. `npx sequelize-cli db:migrate`
    1. `npm install`
    2. `npx ts-node-dev src/server.ts`

You can now access to API-Endpoints through [http://localhost:3000/api/](http://localhost:3000/api/). See [API-Endpoints Documentation](#documentation).

#### Docker

Run the following commands: `docker-compose up`

You can now access to API-Endpoints through 
- [http://localhost:3000/api/](http://localhost:3000/api/).
- [http://localhost:3000/graphql/](http://localhost:3000/graphql/).

## Features

- [x] Login/Register
- [x] Create notes
- [x] List their own notes
