const Reservation = require('../models/Reservation');
const Catway = require('./models/Catway');

exports.getReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find({ catwayNumber: req.params.id });
        res.json(reservations);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

exports.getReservationById = async (req, res) => {
    try {
        const reservation = await Reservation.findById(req.params.reservationId);
        if (!reservation) return res.status(404).json({ msg: 'Reservation not found' });
        res.json(reservation);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

exports.createReservation = async (req, res) => {
    try {
        const { clientName, boatName, checkIn, checkOut } = req.body;
        const newReservation = new Reservation({
            catwayNumber: req.params.id,
            clientName,
            boatName,
            checkIn,
            checkOut
        });
        const reservation = await newReservation.save();
        res.json(reservation);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

exports.deleteReservation = async (req, res) => {
    try {
        let reservation = await Reservation.findById(req.params.reservationId);
        if (!reservation) return res.status(404).json({ msg: 'Reservation not found' });

        await Reservation.findByIdAndRemove(req.params.reservationId);
        res.json({ msg: 'Reservation removed' });
    } catch (err) {
        res.status(500).send('Server Error');
    }
};
