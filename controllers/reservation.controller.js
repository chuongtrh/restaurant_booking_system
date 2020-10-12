// const branchService = require("../services/branch.service");

exports.createReservation = async (req, res, next) => {

    const { branchId, reservationDate, adults, children, node, guest } = req.body;
    const { firstName, lastName, email, phoneNumber } = guest;

    return res.success("Okie", {

    });
};

