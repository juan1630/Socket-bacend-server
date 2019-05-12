"use strict";
exports.__esModule = true;
var express = require("express");
var environment_1 = require("../global/environment");
var socketIO = require("socket.io");
var http = require("http");
var socket = require("../sockets/socket");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express();
        this.port = environment_1.SERVER_PORT;
        this.httpServer = new http.Server(this.app);
        this.io = socketIO(this.httpServer);
        this.escucharSockets();
    }
    Object.defineProperty(Server, "instance", {
        get: function () {
            return this._intance || (this._intance = new this());
        },
        enumerable: true,
        configurable: true
    });
    Server.prototype.escucharSockets = function () {
        var _this = this;
        console.log('Escuchando conexiones - sockets');
        this.io.on('connection', function (cliente) {
            console.log('Cliente conectado');
            // Mensajes
            socket.mensaje(cliente, _this.io);
            // Desconectar
            socket.desconectar(cliente);
        });
    };
    Server.prototype.start = function (callback) {
        this.httpServer.listen(this.port, callback);
    };
    return Server;
}());
exports["default"] = Server;
