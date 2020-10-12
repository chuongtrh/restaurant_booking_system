const restaurantService = require("../services/restaurant.service");

exports.getRestaurantInfo = async (req, res, next) => {
    let restaurantId = req.params.restaurantId;

    restaurant = await restaurantService.getRestaurant(restaurantId)

    if (!restaurant) {
        return res.failure("Not found");
    }
    return res.success("Okie", {
        data: restaurant
    });
};
