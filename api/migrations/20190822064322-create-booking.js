"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Bookings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATEONLY
      },
      time: {
        type: Sequelize.DATE
      },
      endTime: {
        type: Sequelize.DATE
      },
      duration: {
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      roomId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Rooms",
          key: "id",
          as: "roomId"
        }
      },
      deskId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Desks",
          key: "id",
          as: "deskId"
        }
      },
      bookedBy: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
          as: "bookedBy"
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Bookings");
  }
};
