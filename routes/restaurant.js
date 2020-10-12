const router = (module.exports = require('express').Router());
const restaurantController = require('../controllers/restaurant.controller');

router.get('/:restaurantId([0-9]{1,10})', restaurantController.getRestaurantInfo);
