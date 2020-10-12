const models = require('../models');
const OpenHour = models['OpenHour'];

exports.getOpenHours = (branchId) => {
    return OpenHour.findAll({
        where: { branch_id: branchId }
    })
};

