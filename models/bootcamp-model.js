
const koneksi = require('../config/database');
const { responseData, responseMessage } = require('../utils/response-handler');
const ErrorResponse = require('../utils/errorResponse')

// insert bootcamp
exports.insertBootcamp = (response, statement, data, next) => {
    // jalankan query
    koneksi.query(statement, data, (err, rows, field) => {
        // error handling
        if (err) {
            return next(new ErrorResponse (err.message, 500))
        }

        // jika request berhasil
        responseMessage(response, 201, 'Berhasil insert data!');
    });
};

// get data bootcamp
exports.getBootcamps = (response, statement) => {
    // jalankan query
    koneksi.query(statement, (err, rows, field) => {
        // error handling
        if (err) {
            return next(new ErrorResponse(err.message, 500));
        }

        // jika request berhasil
        responseData(response, 200, rows);
    });
};

// update data bootcamp
exports.updateBootcamp = (response, searchStatement, updateStatement, id, data) => {
    // jalankan query untuk melakukan pencarian data
    koneksi.query(searchStatement, id, (err, rows, field) => {
        // error handling
        if (err) {
            return next(new ErrorResponse(err.message, 500));
        }

        // jika id yang dimasukkan sesuai dengan data yang ada di db
        if (rows.length) {
            // jalankan query update
            koneksi.query(updateStatement, [data, id], (err, rows, field) => {
                // error handling
                if (err) {
                    return next(new ErrorResponse(err.message, 500));
                }

                // jika update berhasil
                responseMessage(response, 200, 'Berhasil update data!');
            });
        } else {
            return next(new ErrorResponse(err.message, 500));
        }
    });
};

// delete bootcamp
exports.deleteBootcamp = (response, searchStatement, deleteStatement, id) => {
    // jalankan query untuk melakukan pencarian data
    koneksi.query(searchStatement, id, (err, rows, field) => {
        // error handling
        if (err) {
            return next(new ErrorResponse(err.message, 500));
        }

        // jika id yang dimasukkan sesuai dengan data yang ada di db
        if (rows.length) {
            // jalankan query delete
            koneksi.query(deleteStatement, id, (err, rows, field) => {
                // error handling
                if (err) {
                    return next(new ErrorResponse(err.message, 500));
                }

                // jika delete berhasil
                responseMessage(response, 200, 'Berhasil hapus data!');
            });
        } else {
            return next(new ErrorResponse(err.message, 500));
        }
    });
};