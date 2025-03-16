const {Client} = require('pg')
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME , PORT } = process.env
const conn = new Client({
    user: DB_USER,
    host: DB_HOST,
    database: DB_NAME,
    password: DB_PASSWORD,
    port: PORT,
})

conn.connect()
.then(() => {
    console.log('Connected to PostgreSQL database');
})
.catch((err) => {
    console.error('Error connecting to PostgreSQL database', err);
});

module.exports = conn