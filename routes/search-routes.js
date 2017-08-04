const express = require('express');
const itemController = require('../controllers/item-controller');
const commentHelper = require('../services/comments/comment-helper');

const searchRoutes = express.Router();

searchRoutes.get('/', itemController.index);
searchRoutes.get('/:category',itemController.category);
searchRoutes.get('/sub/:subCategory',itemController.subCategory);
searchRoutes.get('/id/:id', commentHelper.getComments, itemController.id);
searchRoutes.get('/comments/:id',itemController.comments);
searchRoutes.get('/addCart/:id', itemController.addCart);
module.exports= searchRoutes;
