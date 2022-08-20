require('dotenv').config();
const { Pool } = require('pg');
console.log(process.env.USER)
const pool = new Pool({
    host: process.env.HOST_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE,
    port: process.env.PORT,
    ssl: {
        rejectUnauthorized: false,
    },
});

const getTasks = async (req, res) => {
    const response = await pool.query('SELECT * FROM lista_quehaceres.task');
    res.status(200).json(response.rows);
}

module.exports = {
    getTasks
}