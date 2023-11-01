const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'secret_app',
    password: 'Horsejaran22',
    port: 5433,
})

const secret = "Horsejaran22";
// db.connect()
    
const insert = async (email,password) => {
    try {
        const client = await pool.connect()
        await client.query(`INSERT INTO public.user (email,password) VALUES ($1, pgp_sym_encrypt($2,$3))`, [email, password,secret]); // sends queries
        client.release();            // closes connection
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

const check = async (email,password) => {
    try {
        const client = await pool.connect()
        var check = await client.query(`SELECT pgp_sym_decrypt(password::bytea,$2) as password FROM public.user WHERE email=$1`, [email,secret]); // sends queries
        client.release();            // closes connection
        if (check.rows[0]) {
            if (check.rows[0].password==password) {
                return true;            
            }
        }
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

const checkRegister = async (email) => {
    try {
        const client = await pool.connect()
        var check = await client.query(`SELECT count(*) FROM public.user WHERE email=($1)`, [email]); // sends queries
        client.release();            // closes connection
        return(check.rows[0].count);
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

module.exports = { insert, check, checkRegister}

