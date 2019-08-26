"use strict";
module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define(
    "Room",
    {
      name: DataTypes.STRING,

      amenities: {
        type: DataTypes.BLOB
      },
      capacity: DataTypes.NUMBER
    },
    {}
  );
  Room.associate = function(models) {
    // associations can be defined here
    Room.belongsTo(models.Location, {
      foreignKey: "locationId",
      onDelete: "CASCADE"
    });
    Room.hasMany(models.Booking, {
      foreignKey: "roomId",
      as: "bookings"
    });
  };
  return Room;
};
