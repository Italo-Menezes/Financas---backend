const sequelize = require("sequelize");
const db = require("../models");
const op = sequelize.Op;

const Fincancas = {
  create: async (req, res) => {
    try {
      const { titulo, valor, data, categoria_id } = req.body;
      const Financa = await db.Financas.create({
        titulo,
        valor,
        data,
        categoria_id,
      });
      return res.status(201).json({ msg: "Finança criada com sucesso" });
    } catch (error) {
      return res.status(500).json({ msg: "Erro ao criar finança" + error });
    }
  },
  update: async (req, res) => {
    /* fazer alterações */
    try {
      const { id } = req.params;
      const Financas = req.body;
      const Financa = await db.Financas.update(Financas, { where: { id } });
      return res.status(200).json({ msg: "Financas atualizada com sucesso" });
    } catch (error) {
      return res.status(500).json({ msg: "Erro ao atualizar Financas" });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const Financa = await db.Financas.destroy({ where: { id } });
      return res.status(201).json({ msg: "Finança deletada com sucesso" });
    } catch (error) {
      return res.status(500).json({ msg: "Erro ao deletar finança" });
    }
  },
  list: async (req, res) => {
    /* com paginas com limite de 5  */
    try {
      const { page } = req.params;
      const limit = 5;

      const Financas = await db.Financas.findAndCountAll({
        order: [["date", "ASC"]],
        limit: limit,
        include: {
          all: true,
        },
        offset: parseInt(page),
      });

      return res.status(200).json(Financas);
    } catch (error) {
      return res.status(500).json({ msg: "Erro ao listar Financas" });
    }
  },
  listDate: async (req, res) => {
    /* com paginas com limite de 5  */
    try {
      const { dataInicial, dataFinal, page } = req.params;
      const limit = 5;

      const Financas = await db.Financas.findAndCountAll({
        where: {
          date: {
            [op.between]: [dataInicial, dataFinal],
          },
        },
        order: [["date", "ASC"]],
        limit: limit,
        offset: parseInt(page),
        include: {
          all: true,
        },
      });

      return res.status(200).json(Financas);
    } catch (error) {
      return res.status(500).json({ msg: "Erro ao listar Financas" });
    }
  },
  findbyid: async (req, res) => {
    try {
      const { id } = req.params;
      let saldo = 0;
      let soma = 0;
      const Financas = await db.Financas.findAll({
        where: {
          categoria_id: parseInt(id),
        },
        include: {
          all: true,
        },
      });

      if (Financas.length === 0) {
        return res.status(200).json(Categoria, saldo);
      } else {
       for (soma of Financas) {
          saldo = saldo + soma.valor;
        }
        return res.status(200).json(saldo,Categoria);
      }
    } catch (error) {
      return res.status(500).json({ msg: "Erro ao listar Financas" });
    }
  },
};

module.exports = Fincancas;
