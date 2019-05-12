"use strict";
exports.__esModule = true;
var server_1 = require("./classes/server");
var router_1 = require("./routes/router");
var bodyParser = require("body-parser");
var cors = require("cors");
var server = server_1["default"].instance;
// BodyParser
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());
// CORS
server.app.use(cors({ origin: true, credentials: true }));
// Rutas de servicios
server.app.use('/', router_1["default"]);
server.start(function () {
    console.log("Servidor corriendo en el puerto " + server.port);
});
