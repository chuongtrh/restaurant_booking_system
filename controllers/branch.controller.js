const moment = require('moment');
const branchService = require("../services/branch.service");
const reservationService = require("../services/reservation.service");
const tableService = require("../services/table.service");
const guestService = require("../services/guest.service");

exports.getBranchs = async (req, res, next) => {
    let restaurantId = req.params.restaurantId;

    try {
        let branches = await branchService.getBranchs(restaurantId)
        if (!branches) {
            return res.failure("Not found");
        }
        return res.success("Okie", {
            data: branches
        });
    } catch (err) {
        next(err);
    }
};


exports.getBranchInfo = async (req, res, next) => {
    let branchId = req.params.branchId;

    try {
        let branch = await branchService.getBranchInfo(branchId)
        if (!branch) {
            return res.failure("Not found");
        }
        return res.success("Okie", {
            data: branch
        });
    } catch (err) {
        next(err);
    }
};

exports.getReservations = async (req, res, next) => {
    let branchId = req.params.branchId;
    const { reservation_date } = req.query;
    console.log('reservation_date', reservation_date);
    try {
        let reservations = await reservationService.getReservationsOfBranchByDate(branchId, reservation_date)
        return res.success("Okie", {
            data: reservations
        });
    } catch (err) {
        next(err);
    }
};


exports.getTables = async (req, res, next) => {
    let branchId = req.params.branchId;

    try {
        let tables = await tableService.getTables(branchId)
        return res.success("Okie", {
            data: tables
        });
    } catch (err) {
        next(err);
    }
};


exports.createReservation = async (req, res, next) => {
    let branchId = req.params.branchId;

    const { reservationDate, adults, children, note, guest } = req.body;
    const { firstName, lastName, email, phoneNumber } = guest;

    try {
        let guestInfo = await guestService.getGuestByEmail(email);
        if (!guestInfo) {
            const guestData = {
                first_name: firstName,
                last_name: lastName,
                email,
                phone_number: phoneNumber
            }
            guestInfo = await guestService.createGuest(guestData);
        }

        let reservationTime = moment(reservationDate).format("HH:mm:ss");

        const reservationData = {
            branch_id: branchId,
            guest_id: guestInfo.id,
            reservation_date: reservationDate,
            reservation_time: reservationTime,
            adults,
            children,
            note,
            status: 'active',
        }
        let reservation = await reservationService.createReservation(reservationData)
        return res.success("Okie", {
            data: reservation
        });
    } catch (err) {
        next(err);
    }
};

