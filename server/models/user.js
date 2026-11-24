const db = require("./db_connect");

async function getAllUsers() {
    const sql = "SELECT user_id, username FROM user";
    const users = await db.query(sql, []);

    return users;
}

module.exports = {
    getAllUsers
};

