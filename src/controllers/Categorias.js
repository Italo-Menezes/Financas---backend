const sequelize = require("sequelize");
const db = require("../models");

const Categorias = {
  create: async (req, res) => {
    try {
      const descricao = req.body;
      const Categoria = await db.Categoria.create(descricao);
      return res.status(201).json({ msg: "Categoria criada com sucesso" });
    } 
    catch (error) {
      return res.status(500).json({ msg: "Erro ao criar categoria" });
    }
  },

  update: async (req, res) => {
    /* fazer alterações */
    try {
      const { id } = req.params;
      const descricao = req.body;
      const Categoria = await db.Categoria.update(descricao, { where: { id } }); 
      return res.status(200).json({ msg: "Categoria atualizada com sucesso" });
    } catch (error) {
      return res.status(500).json({ msg: "Erro ao atualizar categoria" });
    }
    
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const Categoria = await db.Categoria.destroy({ where: { id } });
      return res.status(200).json({ msg: "Categoria deletada com sucesso" });
    } catch (error) {
      return res.status(500).json({ msg: "Erro ao deletar categoria" });
    }
  },

  list: async (req, res) => {
    /* com paginas com limite de 5  */
    try {
      const { page } = req.params;
      const limit = 5;
      const offset = page * limit;
      const Categoria = await db.Categoria.findAndCountAll({
        limit,
        offset,
        order: [["id", "ASC"]],
      });
      return res.status(200).json(Categoria);
    } catch (error) {
      return res.status(500).json({ msg: "Erro ao listar categorias" });
    }
  },
};

module.exports = Categorias;
