"use strict";
module.exports = (sequelize, DataTypes) => {
  const Attendee = sequelize.define(
    "Attendee",
    {
      time: {
        type: DataTypes.DATE
      },
      endTime: {
        type: DataTypes.DATE
      },
      duration: DataTypes.INTEGER,
      endTime: {
        type: DataTypes.DATE
      }
    },
    {}
  );
  Attendee.associate = function(models) {
    // associations can be defined here
    Attendee.belongsTo(models.Booking, {
      foreignKey: "bookingId",
      onDelete: "CASCADE",
      as: "attendees"
    });
  };
  return Attendee;
};
