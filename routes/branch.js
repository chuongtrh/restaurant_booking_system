const router = (module.exports = require('express').Router());
const branchController = require('../controllers/branch.controller');

router.get('/:branchId([0-9]{1,10})', branchController.getBranchInfo);
router.get('/:branchId([0-9]{1,10})/reservation', branchController.getReservations);
router.get('/:branchId([0-9]{1,10})/table', branchController.getTables);
router.post('/:branchId([0-9]{1,10})/reservation', branchController.createReservation);

router.get('/restaurant/:restaurantId([0-9]{1,10})', branchController.getBranchs);
