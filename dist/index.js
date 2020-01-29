"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server/server"));
const routes_1 = __importDefault(require("./routes/routes"));
const mysql_1 = __importDefault(require("./mysql/mysql"));
const server = server_1.default.init(3000);
server.app.use(routes_1.default);
//const mysql = new MySQL();
mysql_1.default.instance;
server.start(() => {
    console.log("Servidor corriendo en el puerto 3000");
});
