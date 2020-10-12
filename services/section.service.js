const models = require('../models');
const Section = models['Section'];

exports.getSections = (branchId) => {
    return Section.findAll({
        where: { branch_id: branchId }
    })
};

exports.getSectionInfo = (sectionId) => {
    return Section.findByPk(sectionId)
};
