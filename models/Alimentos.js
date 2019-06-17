const mongoose = require("mongoose");

const AlimentosSchema = new mongoose.Schema(
  {
    descricao: String,
    calorias: {
      type: Number,
      default: 0
    },
    choPorcao: {
      type: Number,
      default: 0
    },
    quantidadeNaPorcao: {
      type: Number,
      default: 0
    },
    unidade: {
      descricao: String,
      id: Number
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Alimentos", AlimentosSchema);
