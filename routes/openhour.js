const router = (module.exports = require('express').Router());
const openHourController = require('../controllers/openHour.controller');


router.get('/branch/:branchId([0-9]{1,10})', openHourController.getOpenHours);
