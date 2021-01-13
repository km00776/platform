const Pool = require('pg').Pool;
require("dotenv").config();

//192.168.1.159
const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;

const proConfig = process.env.DATABASE_URL; //heroku addons

const pool = new Pool({
    connectionString:
      process.env.NODE_ENV === "production" ? proConfig : devConfig,
      // ssl: { rejectUnauthorized: false }
  });

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'platform',
//   password: 'root',
//   port: 5432,
// });

// const getClients = () => {
//     return new Promise(function(resolve, reject) {
//         pool.query('SELECT * FROM clients',  (error, results) => {
//             if(error) {

//                 reject(error);
//             }
//             resolve(results.rows);
//         })
//     })
// }

module.exports = pool;