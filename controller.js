'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok('aplikasi REST API berjalan !', res);
};


// show all data users

exports.showallusers = function (req, res) {
    connection.query('SELECT * FROM tbl_users', function (error, rows, fields) {
        if (error) {
            connection.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};