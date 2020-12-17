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
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};


//show all data users by id

exports.showallbyid = function (req, res) {

    let id = req.params.id;
    connection.query('SELECT * FROM tbl_users WHERE id =?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};