const models = require('../models');
const Reservation = models['Reservation'];
const sequelize = require("sequelize");

exports.createReservation = (reservationData) => {
    return Reservation.create(reservationData)
};

exports.getReservationInfo = (reservationId) => {
    return Reservation.findByPk(reservationId)
};

exports.getReservationsOfBranch = (branchId) => {
    return Reservation.findAll({
        where: { branch_id: branchId }
    })
};

exports.getReservationsOfBranchByDate = (branchId, reservationDate) => {
    return Reservation.findAll({
        where: {
            [sequelize.Op.and]: [
                { branch_id: branchId },
                sequelize.literal(`reservation_date = '${reservationDate}'::date`),
            ]
        }
    })
};
