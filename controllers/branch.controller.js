const branchService = require("../services/branch.service");

exports.getBranchs = async (req, res, next) => {
    let restaurantId = req.params.restaurantId;

    branches = await branchService.getBranchs(restaurantId)
    if (!branches) {
        return res.failure("Not found");
    }
    return res.success("Okie", {
        data: branches
    });
};


exports.getBranchInfo = async (req, res, next) => {
    let branchId = req.params.branchId;

    branch = await branchService.getBranchInfo(branchId)

    if (!branch) {
        return res.failure("Not found");
    }
    return res.success("Okie", {
        data: branch
    });
};
