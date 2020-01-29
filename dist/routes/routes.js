"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get("/clientes", (req, res) => {
    res.json({
        ok: true,
        mensaje: "Pagina de clientes"
    });
});
router.get("/clientes/:id", (req, res) => {
    const id = req.params.id;
    res.json({
        ok: true,
        mensaje: "Cliente numero: ",
        id: id
    });
});
exports.default = router;
