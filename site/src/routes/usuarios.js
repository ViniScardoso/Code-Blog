var express = require("express");
var router = express.Router();
var usuarioController = require("../controllers/usuarioController");
var multer = require("multer");


const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, "site/public/assets/imgPerfil")
    },
    filename: function (req, file, cb){
        cb(null, file.originalname)
    }
})

const upload = multer({storage})

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/atualizarPerfil", function (req, res) {
    usuarioController.atualizarPerfil(req, res);
});

router.post("/upload", upload.single("uploadImg"),function (req, res) {
    res.send(alert('arquivo recebido'));
});


module.exports = router;