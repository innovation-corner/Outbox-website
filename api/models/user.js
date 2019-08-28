"use strict";

const JwtService = require("../modules/auth.module");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      fullname: {
        type: DataTypes.STRING
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
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "password is required" }
        }
      },

      verificationCode: {
        type: DataTypes.STRING,
      },

      isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },

      role: {
        type: DataTypes.ENUM("systemAdmin", "subAdmin", "user"),
        defaultValue: "user"
      }
    },
    {}
  );
  User.associate = function(models) {
    // associations can be defined here
    User.belongsTo(models.Business, {
      foreignKey: "businessId",
      as: "business"
    });
  };
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  User.beforeCreate(user => {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(8), null);
  });

  User.beforeUpdate(user => {
    if (user.password) {
      user.password = bcrypt.hashSync(
        user.password,
        bcrypt.genSaltSync(8),
        null
      );
    }
  });

  User.prototype.toJSON = function() {
    var values = Object.assign({}, this.get());

    delete values.password;
    if(values.verificationCode){
    delete values.verificationCode;}
    return values;
  };
  return User;
};
