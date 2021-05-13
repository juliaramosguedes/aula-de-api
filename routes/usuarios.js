const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuarios');

// GET /usuarios/ index (lista usuários)
router.get('/', controller.listarUsuarios);

// POST /usuarios/entrar (autentica o usuário enviado)
router.post('/entrar', controller.entrar);

// GET /usuarios/:email (recebe usuário por email)
router.get('/:email', controller.pegarUsuario);

// POST /usuarios/cadastro (envia cadastro de usuário)
router.post('/cadastro', controller.novoCadastro);

module.exports = router;
