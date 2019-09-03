const { Booking } = require("../models");
const { Attendee } = require("../models");
const { Op } = require("sequelize");
const moment = require("moment");

module.exports = {
  async placeBooking(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      let alreadyBooked = [];


      const start = moment(data.time).toDate();
      const end = moment(start)
        .add(data.duration, "m")
        .toDate();
      data.endTime = end;
      console.log(data)

      const query = {
        roomId: id
      };

      if (start <= moment().toDate()) {
        return res.status(400).json({
          message: "Invalid time"
        });
      }

      const bookings = await Booking.findAll({ query });

      if (bookings.length) {
        await bookings.forEach(booking => {
          if (
            (start >= booking.time && start < booking.endTime) ||
            (end >= booking.time && end < booking.endTime)
          ) {
            alreadyBooked.push(booking.id);
          }
        });
      }

      if (alreadyBooked.length) {
        return res.status(400).json({
          message: "Room is already booked for the selected time"
        });
      }

      data.roomId = id;

      const booked = await Booking.create(data);

      if (data.user) {
        data.user.forEach(user => {
          const details = {
            userId: user.id,
            bookingId: booked.id,
            endTime: end,
            time: data.time,
            duration: data.duration
          };
          Attendee.create(details);
        });
      }

      return res.status(200).json({ message: "Room booked", booked });
    } catch (error) {
      return res.status(400).json({ message: "an error occured", error });
    }
  },

  async viewBooking(req, res) {
    try {
      const { id } = req.params;
      const booking = await Booking.findOne({ where: { id } });

      if (!booking) {
        return res.status(400).json({ message: "booking not found" });
      }

      return res.status(200).json({ message: "booking retrieved", booking });
    } catch (error) {
      return res.status(400).json({ message: "an error occured", error });
    }
  },

  async editBooking(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      let query;

      const booking = await Booking.findOne({ where: { id } });

      if (!booking) {
        return res.status(400).json({ message: "booking not found" });
      }

      if (data.time) {
        const start = moment(data.time).toDate();
        const end = moment(start)
          .add(data.duration, "m")
          .toDate();

        query = {
          time: {
            [Op.gte]: start,
            [Op.lte]: end
          },
          endTime: {
            [Op.lte]: end
          },
          roomId: data.roomId
        };

        if (start <= moment().toDate()) {
          return res.status(400).json({
            message: "Invalid time"
          });
        }
        const checkBooking = await Booking.findAll({ where: query });

        // console.log(id);
        if (checkBooking.length && checkBooking[0].id != id) {
          return res.status(400).json({
            message: "Room is already booked for the selected time"
          });
        }
      }

      if (data.roomId) {
        start = moment(data.time).toDate();
        end = moment(start)
          .add(data.duration, "m")
          .toDate();

        query = {
          time: {
            [Op.gte]: start,
            [Op.lte]: end
          },
          endTime: {
            [Op.lte]: end
          },
          roomId: data.roomId
        };
        const checkBook = await Booking.findAll({ where: query });
        console.log(checkBook, '"_"', id);
        if (checkBook.length && checkBook[0].id == id) {
          return res.status(400).json({
            message: "Room is already booked for the selected time"
          });
        }
      }

      await Booking.update(data, {
        where: { id }
      });
      const updatedBooking = await Booking.findOne({ where: { id } });

      return res
        .status(200)
        .json({ message: "booking updated", updatedBooking });
    } catch (error) {
      return res.status(400).json({ message: "an error occured", error });
    }
  },

  async cancelBooking(req, res) {
    try {
      const { id } = req.params;

      const booking = await Booking.findOne({ where: { id } });

      if (!booking) {
        return res.status(400).json({ message: "booking not found" });
      }
      await Booking.destroy({ where: { id } });
      return res.status(200).json({ message: "booking cancelled" });
    } catch (error) {
      return res.status(400).json({ message: "an error occured", error });
    }
  }
};
