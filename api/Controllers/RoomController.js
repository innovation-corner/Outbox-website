const { Room } = require("../models");
const { Booking } = require("../models");
const moment = require("moment");
const { Op } = require("sequelize");

module.exports = {
  async listRooms(req, res) {
    try {
      const { id } = req.params;
      const criteria = { locationId: id };
      const { search } = req.query;

      if (search) {
        criteria.push({ name: { [Op.like]: search } });
      }

      const rooms = await Room.findAll({ where: criteria });

      if (!rooms) {
        return res.status(400).json({ message: "no results found" });
      }
      return res.status(200).json({ message: "locations retrieved", rooms });
    } catch (error) {
      return res.status(400).json({ message: "An error occured", error });
    }
  },

  async listroomBookings(req, res) {
    try {
      const { id } = req.params;

      const bookings = await Booking.findAll({
        where: { roomId: id }
      });

      if (!bookings.length) {
        return res.status(400).json({ message: "no bookings at this time" });
      }
      return res.status(200).json({ message: "bookings retrieved", bookings });
    } catch (error) {
      return res.status(400).json({ message: "an error occured", error });
    }
  },

  async findRoom(req, res) {
    try {
      const { locationId } = req.user;
      const { time, capacity, duration } = req.body;
      const end = moment(time)
        .add(duration, "m")
        .toDate();
      let rooms = [];
      const bookedRooms = [];

      const criteria = {
        locationId,
        time: {
          [Op.notBetween]: [time, end]
        },
        endTime: {
          [Op.notBetween]: [time, end]
        }
      };

      const bookings = await Booking.findAll({ where: criteria });
      console.log("bookings:", bookings);

      let allRooms = await Room.findAll({
        where: {
          capacity: { [Op.gte]: capacity }
        }
      });
      // console.log(moment().toDate());
      // console.log(allRooms);

      if (bookings.length) {
        await bookings.forEach(room => {
          const bookedRoom = Room.findOne({ where: { id: room.roomId } });
          bookedRooms.push(bookedRoom);
        });
      }

      console.log("bookedRooms:", bookedRooms);
      if (!bookedRooms.length) {
        const room = await allRooms.filter(el => !bookedRooms.includes(el));
        rooms.push(room);
      }

      console.log("rooms:", rooms);
      if (!rooms.length || !rooms[0].length) {
        return res.status(400).json({ message: "no results found" });
      }

      return res.status(200).json({ message: "rooms retrieved", rooms });
    } catch (error) {
      return res.status(400).json({ message: "An error occured", error });
    }
  },

  async viewRoomBookings(req, res) {
    try {
      const { id } = req.params;
      let { start, end } = req.query;

      if (!start || !end) {
        start = moment()
          .startOf("day")
          .toDate();
        end = moment()
          .startOf("day")
          .add(1, "day")
          .toDate();
      }

      const criteria = { time: { [Op.gte]: start, [Op.lte]: end }, roomId: id };
      console.log(criteria)
      const bookings = await Booking.findAll({ where: criteria });

      if (!bookings) {
        return res.status(400).json({ message: "no results found" });
      }

      return res.status(200).json({ message: "bookings retrieved", bookings });
    } catch (error) {
      return res.status(400).json({ message: "An error occured", error });
    }
  },

  async addRoom(req, res) {
    try {
      const data = req.body;

      const room = await Room.create(data);

      return res.status(200).json({ message: "room added", room });
    } catch (error) {
      return res.status(400).json({ message: "An error occured", error });
    }
  }
};
