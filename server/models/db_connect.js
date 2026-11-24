require("dotenv").config();
const mysql = require("mysql2");

const con = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

function query(sql, params) {
    return new Promise((resolve, reject) => {
        con.query(sql, params, (error, results) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(results);
        });
    });
}

module.exports = {
    con,
    query
};