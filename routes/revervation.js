const router = (module.exports = require('express').Router());
const revervationController = require('../controllers/revervation.controller');

router.post('/', revervationController.createRevervation);
