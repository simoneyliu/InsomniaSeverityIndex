const express = require('express');
const route = express.Router()
const redirect = require("../views/render");
const controller = require("../controller");

// Render page for each route
route.get('/', redirect.homeRoutes);
route.get('/result', redirect.resultRoutes);


// API 
route.post('/', controller.create);

module.exports = route