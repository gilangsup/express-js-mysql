const mysql = require('mysql');
// buat konfigurasi koneksi
const koneksi = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mantab213!',
    database: 'mahasiswa',
    multipleStatements: true
});
// koneksi database
koneksi.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
module.exports = koneksi;