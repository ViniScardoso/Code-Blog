var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.get("/", function (req, res) {
    avisoController.testar(req, res);
});

router.get("/listarJs", function (req, res) {
    avisoController.listarJs(req, res);
});

router.get("/listarPy", function (req, res) {
    avisoController.listarPy(req, res);
});

router.get("/listarJava", function (req, res) {
    avisoController.listarJava(req, res);
});

router.get("/listarCmais", function (req, res) {
    avisoController.listarCmais(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    avisoController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    avisoController.pesquisarDescricao(req, res);
});

router.post("/publicarJs/:idUsuario", function (req, res) {
    avisoController.publicarJs(req, res);
});

router.post("/publicarPy/:idUsuario", function (req, res) {
    avisoController.publicarPy(req, res);
});

router.post("/publicarJava/:idUsuario", function (req, res) {
    avisoController.publicarJava(req, res);
});

router.post("/publicarCmais/:idUsuario", function (req, res) {
    avisoController.publicarCmais(req, res);
});

router.post("/publicarResposta/:idPost", function (req, res) {
    avisoController.publicarResposta(req, res);
});

router.put("/editar/:idPost", function (req, res) {
    avisoController.editar(req, res);
});

router.delete("/deletar/:idPost", function (req, res) {
    avisoController.deletar(req, res);
});

module.exports = router;