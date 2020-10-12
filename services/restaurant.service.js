
const models = require('../models');
const Restaurant = models['Restaurant'];
exports.getRestaurant = (restaurantId) => {
    return Restaurant.findByPk(restaurantId)
};
