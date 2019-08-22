"use strict";
module.exports = (sequelize, DataTypes) => {
  const Desk = sequelize.define(
    "Desk",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      amenities: {
        type: DataTypes.BLOB
      },
      capacity: DataTypes.NUMBER
    },
    {}
  );
  Desk.associate = function(models) {
    // associations can be defined here
    Desk.belongsTo(models.Location, {
      foreignKey: "locationId",
      onDelete: "CASCADE"
    });
  };
  return Desk;
};
