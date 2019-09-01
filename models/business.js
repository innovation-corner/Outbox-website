"use strict";
module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define(
    "Business",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: { msg: "Invalid email" },
          notNull: { msg: "email is required" }
        },
        unique: {
          args: true,
          msg: "Email address already in use!"
        }
      }
    },
    {}
  );
  Business.associate = function(models) {
    // associations can be defined here
    Business.hasMany(models.Location, {
      foreignKey: "businessId",
      as: "locations"
    });
    Business.hasMany(models.User, {
      foreignKey: "businessId",
      as: "users"
    });
  };
  return Business;
};
