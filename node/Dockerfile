#This image does not contain the common packages contained in the default tag
#and only contains the minimal packages needed to run node.
#Unless you are working in an environment where only the node image will be deployed
#and you have space constraints, we highly recommend using the default image of this repository.
FROM node:slim

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY ./src/package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY ./src /usr/src/app

EXPOSE 8080

