//const { Person } = require("./person");
const dotenv = require("dotenv");

const connectToDatabase = require("./src/database/connect");

dotenv.config();

connectToDatabase();
//const person = new Person("José");
//require("./modules/http");
//require("./modules/path");
//require("./modules/fs")

//require("./modules/express");
