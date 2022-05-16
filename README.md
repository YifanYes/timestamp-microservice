# Node.js Timestamp Microservice

This is a simple Node.js application that returns the current timestamp as a JSON object containing a unix and a utc format.
Detailed instructions for building this project can be found at https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice

### Project requirements

- A request to `/api/:date?` with a valid date should return a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds (as type Number)
- A request to `/api/:date?` with a valid date should return a JSON object with a utc key that is a string of the input date in the format: Thu, 01 Jan 1970 00:00:00 GMT
- A request to `/api/1451001600000` should return { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }
- Your project can handle dates that can be successfully parsed by new Date()
- If the input date string is invalid, the api returns an object having the structure { error : "Invalid Date" }
- An empty date parameter should return the current time in a JSON object with a unix key and a utc key

### Useful commands

To run this repository, first install the required packages:

```
$ npm install
```

And to run the server:

```
$ node server.js
```

Alternatively, if you have **nodemon** installed globally for automatic refreshing of the server when changes are made:

```
$ nodemon server.js
```

You can install nodemon with:

```
$ npm install -g nodemon
```
