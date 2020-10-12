const models = require('../models');
const Table = models['Table'];

exports.getTables = (branchId) => {
    return Table.findAll({
        where: { branch_id: branchId }
    })
};

