const router = (module.exports = require('express').Router());
const branchController = require('../controllers/branch.controller');

router.get('/:branchId([0-9]{1,10})', branchController.getBranchInfo);

router.get('/restaurant/:restaurantId([0-9]{1,10})', branchController.getBranchs);
