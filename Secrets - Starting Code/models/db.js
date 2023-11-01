const { Client } = require('pg');
const db = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'secret_app',
    password: 'Horsejaran22',
    port: 5433,
})
    
db.connect()

const insert = async (email,password) => {
    // db.query(`INSERT INTO public.user (email,password) VALUE ($1,$2)`, [email,password], (err, res) => {
    //     if (err) {
    //         console.log(err.stack);
    //     } else {
    //         console.log('data inserted!');
    //     }
    //     db.end()
    // })
    try {
        await db.query(`INSERT INTO public.user (email,password) VALUE ($1, $2)`, [email, password]); // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    } finally {
        await db.end();               // closes connection
    }
};

module.exports = insert

