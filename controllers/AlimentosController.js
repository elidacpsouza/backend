const Alimentos = require("../models/Alimentos");

module.exports = {
  async index(req, res) {

  },
  async store(req, res) {
    if (req.body || '') {
        const alimentos = req.body
      for (let index = 0; index < alimentos.length; index++) {
        const alimento = await Alimentos.create(alimentos[index]);
        console.log(alimento) 
      }
      
    } else {
      console.log("Veio Vazio");
    }

    return res.json({ ok: true });
  }
};
