"use strict";
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define(
    "Location",
    {
      name: DataTypes.STRING,
      info: DataTypes.TEXT
    },
    {}
  );
  Location.associate = function(models) {
    // associations can be defined here
    Location.belongsTo(models.Business, {
      foreignKey: "businessId",
      onDelete: "CASCADE"
    });
    Location.hasMany(models.Desk, {
      foreignKey: "locationId",
      as: "desks"
    });
    Location.hasMany(models.User, {
      foreignKey: "locationId",
      as: "users"
    });
  };
  return Location;
};
