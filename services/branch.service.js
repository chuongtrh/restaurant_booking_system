
const models = require('../models');
const Branch = models['Branch'];

exports.getBranchs = (restaurantId) => {
    return Branch.findAll({
        where: { restaurant_id: restaurantId }
    })
};

exports.getBranchInfo = (branchId) => {
    return Branch.findByPk(branchId)
};
