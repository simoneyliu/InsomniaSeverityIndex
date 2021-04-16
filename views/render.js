const axios = require('axios');

exports.homeRoutes = (req, res) => {
    res.sendFile(__dirname + "/index.html");
}

exports.resultRoutes = (req, res) => {
    res.sendFile(__dirname + "/result.html");
}