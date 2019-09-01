const { Booking } = require("../models");
const { Attendee } = require("../models");

module.exports = {
  async listLocationBookings(req, res) {
    try {
      const { id } = req.params;

      const bookings = Booking.findAll({ where: { locationId: id } });

      if (!bookings) {
        return res.status(400).json({ message: "no bookings at this time" });
      }
      return res.status(200).json({ message: "bookings retrieved", bookings });
    } catch (error) {
      return res.status(400).json({ message: "an error occured", error });
    }
  },

  async placeBooking(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;

      const start = data.time;
      const end = data.time + data.duration * 60000;

      const query = {
        time: {
          ">=": start,
          "<=": end
        },
        deskId: id
      };

      const bookings = await Booking.findAll({ where: { query } });

      if (bookings.length) {
        return res.status(400).json({
          message: "Desk is already booked for the selected time",
          bookings
        });
      }

      const booked = await Booking.create(data);

      if (data.user.length) {
        data.user.forEach(user => {
          const details = { userId: user.id, bookingId: booked.id };
          Attendee.create(details);
        });
      }

      return res.status(200).json({ message: "Desk booked", booked });
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
        const start = data.time;
        const end = data.time + data.duration * 60000;

        query = {
          time: {
            ">=": start,
            "<=": end
          },
          deskId: booking.deskId
        };

        const checkBooking = await Booking.findAll({ where: { query } });

        if (checkBooking.length) {
          return res.status(400).json({
            message: "Desk is already booked for the selected time",
            checkBooking
          });
        }
      }

      if (data.deskId) {
        const start = data.time;
        const end = data.time + data.duration * 60000;

        query = {
          time: {
            ">=": start,
            "<=": end
          },
          deskId: data.deskId
        };
        const checkBook = await Booking.findAll({ where: { query } });

        if (checkBook.length) {
          return res.status(400).json({
            message: "Desk is already booked for the selected time",
            checkBook
          });
        }
      }

      const updatedBooking = await Booking.update(data, {
        returning: true,
        where: { id }
      });

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
