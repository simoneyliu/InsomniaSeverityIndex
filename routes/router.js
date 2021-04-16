const express = require('express');
const route = express.Router()

const redirect = require("../views/render");
const controller = require("../controller");

route.get('/', redirect.homeRoutes);
route.get('/result', redirect.resultRoutes);

// API - TODO: update, delete
route.post('/', controller.create);
route.get('/', controller.find);


module.exports = route