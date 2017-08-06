const express = require('express');
const itemController = require('../controllers/item-controller');
const commentHelper = require('../services/comments/comment-helper');
const authHelpers = require('../services/auth/auth-helpers');
const cartHelpers = require('../services/comments/addToCart-helper');

const searchRoutes = express.Router();

searchRoutes.get('/', itemController.index);
searchRoutes.get('/:category',itemController.category);
searchRoutes.get('/sub/:subCategory',itemController.subCategory);
searchRoutes.get('/id/:id', commentHelper.getComments, itemController.id);
searchRoutes.get('/comments/:id',itemController.comments);
searchRoutes.post('/addCart/:id',authHelpers.loginRequired, cartHelpers.addToCart,itemController.getCart);
module.exports= searchRoutes;
