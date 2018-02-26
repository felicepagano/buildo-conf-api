# Configuration API

HTTP API for managing the configuration values of a system.

[![generator-api](https://img.shields.io/badge/built%20with-generator--api-green.svg)](https://github.com/ndelvalle/generator-api)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You can run the entire application stack in local just through docker without the need of installing all the dependecies in your dev machine.

[Docker](https://docs.docker.com/engine/installation/) :whale: & [docker-compose](https://docs.docker.com/compose/install/).

But, as developer, we suggest to install the following optional tools:

[nodejs/npm](https://https://nodejs.org/en/) and the following packages:

```
├── yo
├── generator-api
├── jsdoc
└── yarn
```

yo ([yeoman](http://yeoman.io)) is a scaffolding tool, used to scaffold the application.

[generator-api](https://github.com/ndelvalle/generator-api) a yeoman generator for creating RESTful NodeJS APIs, using ES6, Mongoose and Express.

[jsdoc](http://usejsdoc.org) an API documentation generator for JavaScript.

[yarn](https://yarnpkg.com/lang/en/) dependecies management.

### Installing

To start the application in local using docker just type in console the following command from the project root project (sudo could be unnecessary):

```bash
sudo docker-compose up
```

This will setup an environment with:
an nginx server that will expose the port 443 (https with a self signed certificate) using basic auth and will redirect to the backend.
an express server
a mongodb used to persist data.

docker-compose will do its magic and at the end you will be able to call the REST api using the address https://localhost/configurations.

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc


## production

build the Docker :whale: container and run it:

_you'll likely be consuming mongodb as a service, so make sure you set the env var to connect to it._

```bash
sudo docker build -t <image-name> .
sudo docker run \
  -p <host-port>:8080 \
  -d <image-name> \
  -e MONGO_DB_URI=mongodb://<username>:<password>@<host>:<port> \
  npm run start
```



--------------------------------------------------------------------------------
