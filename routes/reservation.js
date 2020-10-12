const router = (module.exports = require('express').Router());
const reservationController = require('../controllers/reservation.controller');

router.post('/', reservationController.createReservation);
