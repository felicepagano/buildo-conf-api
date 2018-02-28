# Configuration API

HTTP APIs for managing the configuration values of a system. These API are exposed through nodejs and express web server and the configuration object are stored and retrieved from a mongodb instance.
The entire infrastructure is provided by a docker-compose file, so no deploy phase is necessary.

Resources are provided in json format. APIs produces and consumes the following model:

```json
{
	"_id": "foo",
	"name": "Configuration for Foo",
	"value": "This is the value for configuration Foo"
}
```

express will expose the following api:

'GET /configurations' will return all the configurations.
'POST /configurations' with a JSON payload will create a new entry.
'PUT /configurations/:id' will update the object with the given id.
'GET /configurations/:id' will return the object with the given id.
'DELETE' will delete the object with the given id.

[here](https://documenter.getpostman.com/view/2212215/configuration/RVg5986u) you can find the API calls for postman.

[![generator-api](https://img.shields.io/badge/built%20with-generator--api-green.svg)](https://github.com/ndelvalle/generator-api) &leftarrow; Click here for details.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You can run the entire application stack locally with docker without the need to install all the dependencies in your dev machine.

[Docker](https://docs.docker.com/engine/installation/) :whale: & [docker-compose](https://docs.docker.com/compose/install/).

As developer, you will need to install the following tools:

[nodejs/npm](https://https://nodejs.org/en/) and the following packages globally:

```
├── yo
├── generator-api
├── jsdoc
├── mocha
└── yarn

e.g.

yarn install -g yarn
```

yo ([yeoman](http://yeoman.io)) is a scaffolding tool.

[generator-api](https://github.com/ndelvalle/generator-api) a yeoman generator for creating RESTful NodeJS APIs, using ES6, Mongoose and Express.

[jsdoc](http://usejsdoc.org) an API documentation generator for JavaScript.

[yarn](https://yarnpkg.com/lang/en/) dependecies management.

[mocha](https://mochajs.org/) test framework

## Running the tests

Under the `./node/test` folder you can find the `package.json` file. This is a copy of the `./node/src/package.json`. I didn't find a nice way to share the two files, so I'm fine with a little effort to maintains both.

You need the following steps to run tests:

```bash
yarn install -g yarn
yarn install -g mocha

npm install
npm test
```

This will execute all the js files under the `./node/test/` directory

## Running the generated project

You can 

### Development

If you would like to run the application out of the container make sure you have node version `>= 6` because this project uses native supported ES6 features.

Inside the `./node/src` directory type the following commands:

```bash
yarn install
npm dev
```

https://github.com/remy/nodemon

### Production

You only need [Docker](https://docs.docker.com/engine/installation/) and [docker-compose](https://docs.docker.com/compose/install/) installed, forget about having node, mongodb or npm.

- Run: `docker-compose up` to run the app. _You might need `sudo` for this one_

_NOTE_: The Dockerfile uses `node:latest` as its starting point, if you wish to use another version of Node check out the available ones [here](https://hub.docker.com/_/node/).

The Docker image is available on docker-hub and his build is triggered by github commits; you can find the latest available image on [docker-hub](https://hub.docker.com/r/fpagano/buildo-node/)

You can also build your image using the following command under the `./node/` folder:

```bash
sudo docker build -t <image-name> .
```

## Built With

* [npm](https://www.npmjs.com/) - Dependency Management
* [express](https://expressjs.com/) - The web framework used
* [bluebird](http://bluebirdjs.com/docs/getting-started.html) - Third party promise library
* [body-parser](https://www.npmjs.com/package/body-parser) - body parsing middleware.
* [express-mongoose-status](https://www.npmjs.com/package/express-mongoose-status) -  handle mongoose responses and convert them to correct HTTP status in a REST API using Express
* [helmet](https://helmetjs.github.io/) - Helmet helps you secure your Express apps by setting various HTTP headers.
* [http-status-codes](https://www.npmjs.com/package/http-status-codes) - Constants enumerating the HTTP status codes.
* [mongoose](http://mongoosejs.com/) - elegant mongodb object modeling for node.js
* [morgan](https://github.com/expressjs/morgan) - HTTP request logger middleware for node.js

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code.

## Authors

* **Felice Pagano** - [felicepagano](https://github.com/felicepagano)
