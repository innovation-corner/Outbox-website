const { Room } = require("../models");
const { Booking } = require("../models");

module.exports = {
  async listRooms(req, res) {
    try {
      const { id } = req.params;
      const criteria = { locationId: id };
      const { search } = req.query;

      if (search) {
        criteria.push({ name: { $like: search } });
      }

      const rooms = await Room.findAll({ where: { criteria } });

      if (!rooms) {
        return res.status(400).json({ message: "no results found" });
      }
      return res.status(200).json({ message: "locations retrieved", rooms });
    } catch (error) {
      return res.status(400).json({ message: "An error occured", error });
    }
  },

  async findRoom(req, res) {
    try {
      const { id } = req.params;
      const { time, capacity, amenities, duration } = req.body;
      const end = time + duration;
      let rooms = [];
      const bookedRooms = [];

      const criteria = {
        locationId: id,
        time: {
          $notBetween: [time, end]
        },
        endTime: {
          $notBetween: [time, end]
        }
      };

      const bookings = await Booking.findAll({ where: { criteria } });
      let allRooms = await Room.findAll({
        where: {
          capacity: { $lte: capacity },
          amenities: { $like: { $any: { amenities } } }
        }
      });

      if (bookings.length) {
        await bookings.forEach(room => {
          const bookedRoom = Room.findOne({ where: { id: room.roomId } });
          bookedRooms.push(bookedRoom);
        });
      }

      if (!bookedRooms.length) {
        const room = await allRooms.filter(el => !bookedRooms.includes(el));
        rooms.push(room);
      }

      if (!rooms.length) {
        return res.status(400).json({ message: "no results found" });
      }

      return res.status(200).json({ message: "rooms retrieved", rooms });
    } catch (error) {
      return res.status(400).json({ message: "An error occured", error });
    }
  },

  async viewRoomBookings(req, res) {
    try {
        
    } catch (error) {
      return res.status(400).json({ message: "An error occured", error });
    }
  }
};
