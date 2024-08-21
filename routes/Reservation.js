const express = require('express');
const router = express.Router({ mergeParams: true });
const auth = require('../middleware/auth');
const { getReservations, getReservationById, createReservation, deleteReservation } = require('../controllers/reservationController');


router.get('/', auth, getReservations);
router.get('/:reservationId', auth, getReservationById);
router.post('/', auth, createReservation);
router.delete('/:reservationId', auth, deleteReservation);

module.exports = router;
