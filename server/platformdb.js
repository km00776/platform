const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: '192.168.1.159',
  database: 'platform',
  password: 'root',
  port: 5432,
});

const getClients = () => {
    return new Promise(function(resolve, reject) {
        pool.query('SELECT * FROM clients',  (error, results) => {
            if(error) {
                reject(error);
            }
            resolve(results.rows);
        })
    })
}

module.exports = {
    getClients
}