// req = request = requisição
// res = response = resposta
const ola = (req, res) => {
  const { nome } = req.params;
  res.send(`Olá ${nome}`);
}

module.exports = {
  ola
};