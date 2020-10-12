const openHourService = require("../services/openHoure.service");


exports.getOpenHours = async (req, res, next) => {
    let branchId = req.params.branchId;
    try {
        openhours = await openHourService.getOpenHours(branchId)

        if (!openhours) {
            return res.failure("Not found");
        }

        return res.success("Okie", {
            data: openhours
        });
    } catch (err) {
        next(err);
    }
};
