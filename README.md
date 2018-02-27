# Configuration API

HTTP API for managing the configuration values of a system.

[![generator-api](https://img.shields.io/badge/built%20with-generator--api-green.svg)](https://github.com/ndelvalle/generator-api) &leftarrow; Click here for details.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You can run the entire application stack in local just through docker without the need of installing all the dependecies in your dev machine.

[Docker](https://docs.docker.com/engine/installation/) :whale: & [docker-compose](https://docs.docker.com/compose/install/).

But, as developer, you would like to install the following tools:

[nodejs/npm](https://https://nodejs.org/en/) and the following packages globally:

```
├── yo
├── generator-api
├── jsdoc
└── yarn

e.g.

yarn install -g yarn
```

yo ([yeoman](http://yeoman.io)) is a scaffolding tool, used to scaffold the application.

[generator-api](https://github.com/ndelvalle/generator-api) a yeoman generator for creating RESTful NodeJS APIs, using ES6, Mongoose and Express.

[jsdoc](http://usejsdoc.org) an API documentation generator for JavaScript.

[yarn](https://yarnpkg.com/lang/en/) dependecies management.

## Running the tests

Explain how to run the automated tests for this system

## Running the generated project

Make sure you have node version `>= 6` because this project uses native supported ES6 features.

### Development

- Run: `mongod` to start the local mongodb in a separated terminal instance (If you don't have mongodb installed locally, visit It's [webpage](https://docs.mongodb.com/manual/installation/) to learn how to install it).
- Run: `npm run dev` to run the app (By default the app will run at `localhost:8080`, you can change this in the config file).

**Did you choose Docker (:whale:) support?**

You only need [Docker](https://docs.docker.com/engine/installation/) and [docker-compose](https://docs.docker.com/compose/install/) installed, forget about having node, mongodb or npm.

- Run: `docker-compose up` to run the app. _You might need `sudo` for this one_.

_NOTE_: The Dockerfile uses `node:latest` as its starting point, if you wish to use another version of Node check out the available ones [here](https://hub.docker.com/_/node/).

### Production

You'll likely be consuming mongodb as a service, so make sure to set the env var pointing at it. Then run `npm start`.

**Using Docker**

Build the Docker container and run it:

```bash
sudo docker build -t <image-name> .
sudo docker run \
  -p <host-port>:8080 \
  -d <image-name> \
  -e MONGO_DB_URI=mongodb://<username>:<password>@<host>:<port> \
  npm run start
```

Docker image build is also triggered via github commit, so you can find the latest available image on [docker-hub](https://hub.docker.com/r/fpagano/buildo-node/)

## Built With

* [npm](https://www.npmjs.com/) - Dependency Management
* [express](https://expressjs.com/) - The web framework used
* [bluebird](http://bluebirdjs.com/docs/getting-started.html)
* [body-parser]() - Third party promise library
* [express-mongoose-status](https://www.npmjs.com/package/express-mongoose-status) -  handle mongoose responses and convert them to correct HTTP status in a REST API using Express
* [helmet](https://helmetjs.github.io/) - Helmet helps you secure your Express apps by setting various HTTP headers.
* [http-status-codes](https://www.npmjs.com/package/http-status-codes) - Constants enumerating the HTTP status codes.
* [mongoose](http://mongoosejs.com/) - elegant mongodb object modeling for node.js
* [morgan](https://github.com/expressjs/morgan) - HTTP request logger middleware for node.js

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code.

## Authors

* **Felice Pagano** - [felicepagano](https://github.com/felicepagano)