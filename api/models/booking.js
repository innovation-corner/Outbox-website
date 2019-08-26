"use strict";
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define(
    "Booking",
    {
      name: {
        type: DataTypes.STRING
      },
      date: {
        type: DataTypes.DATEONLY
      },
      duration: {
        type: DataTypes.INTEGER
      },
      time: {
        type: DataTypes.DATE
      },
      endTime: {
        type: DataTypes.DATE
      },
      type: {
        type: DataTypes.STRING
      },
    },
    {}
  );
  Booking.associate = function(models) {
    // associations can be defined here
  };
  return Booking;
};
