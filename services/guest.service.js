const models = require('../models');
const Guest = models['Guest'];

exports.createGuest = (guestData) => {
    return Guest.create(guestData)
};

exports.getGuestInfo = (guestId) => {
    return Guest.findByPk(guestId)
};

exports.getGuestByEmail = (email) => {
    return Guest.findOne({
        where: { email }
    })
};
