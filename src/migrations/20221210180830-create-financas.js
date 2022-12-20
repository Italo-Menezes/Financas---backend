'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Financas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        allowNull: false ,
        type: Sequelize.DATEONLY,
        valodation: {
          notEmpty: {
            msg: "Data não pode ser vazia"
          }
        }
      },
      categoria_id: {
        allowNull: false ,
        type: Sequelize.INTEGER,
        valodation: {
          notEmpty: {
            msg: "Categoria não pode ser vazia"
          },
          references:{
            model: 'Categoria',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
          }
        },
      titulo: {
        allowNull: false ,
        type: Sequelize.STRING,
        valodation: {
          notEmpty: {
            msg: "Título não pode ser vazio"
          }
        }
      },
      valor: {
        allowNull: false ,
        type: Sequelize.DOUBLE,
        valodation: {
          notEmpty: {
            msg: "Valor não pode ser vazio"
          }
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Financas');
  }
};