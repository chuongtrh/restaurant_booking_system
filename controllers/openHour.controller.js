const openHourService = require("../services/openHoure.service");


exports.getOpenHours = async (req, res, next) => {
    let branchId = req.params.branchId;

    openhours = await openHourService.getOpenHours(branchId)

    if (!openhours) {
        return res.failure("Not found");
    }

    return res.success("Okie", {
        data: openhours
    });
};
