"use strict";
module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define(
    "Room",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "name is required" }
        }
      },

      amenities: {
        type: DataTypes.STRING,
        allowNull: false,
        get() {
          return this.getDataValue("amenities").split(";");
        },
        set(val) {
          this.setDataValue("amenities", val.join(";"));
        },
        validate: {
          notNull: { msg: "list of amenities is required" }
        }
      },
      capacity: {
        type: DataTypes.NUMBER,
        allowNull: false,
        validate: {
          notNull: { msg: "capacity is required" }
        }
      }
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
