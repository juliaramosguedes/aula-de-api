const model = require('../models/usuarios');

const listarUsuarios = (req, res) => {
  const usuarios = model.listarUsuarios();
  return res.json(usuarios);
};

const pegarUsuario = (req, res) => {
  const { email } = req.params;
  const usuario = model.pegarUsuario(email);
  return res.json(usuario);
};

const novoCadastro = (req, res) => {
  const usuarioDoFormulario = { 
    email: req.body.email, 
    senha: req.body.senha,
    confirmarSenha: req.body.confirmarSenha
  };

  const usuarioCadastrado = model.cadastrarUsuario(usuarioDoFormulario);
  return res.json(usuarioCadastrado);
};

const entrar = (req, res) => {
  const usuarioDoFormulario = { 
    email: req.body.email, 
    senha: req.body.senha,
  };
  
  const usuarioAutenticado = model.autenticarUsuario(usuarioDoFormulario);
  return res.json(usuarioAutenticado);
}

module.exports = {
  pegarUsuario,
  entrar,
  listarUsuarios,
  novoCadastro,
};