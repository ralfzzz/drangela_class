const { Client } = require('pg');
const db = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'Horsejaran22',
    port: 5433,
})
    
db.connect()

const queryDB =  db.query('SELECT * FROM mms_dlr.mms_log', (err, res) => {
    if (err) {
        console.error(err.stack);
    } else {
        console.log(res.rowCount);
    }

db.end()
})

module.exports = queryDB

