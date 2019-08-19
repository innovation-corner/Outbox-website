'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    businessName: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    isVerified: DataTypes.BOOLEAN
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};