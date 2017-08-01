const express = require('express');
const itemController = require('../controllers/item-controller');

const searchRoutes = express.Router();

searchRoutes.get('/', itemController.index);

module.exports= searchRoutes;
