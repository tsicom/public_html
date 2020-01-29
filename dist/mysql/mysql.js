"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
class MySQL {
    constructor() {
        this.conectado = false;
        console.log("Clase inicializada");
        this.cnn = mysql.createConnection({
            /*host: "localhost",
            user: "soporte_1",
            password: "6730",
            database: ""*/
            host: "tsicomservices.tk",
            user: "admin_soporte",
            password: "tsicom6730",
            database: "admin_tsicomservices"
        });
        this.conectarDB();
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    conectarDB() {
        this.cnn.connect((err) => {
            if (err) {
                console.log("err.message");
                return;
            }
            this.conectado = true;
            console.log("Base de Datos on line");
        });
    }
}
exports.default = MySQL;
