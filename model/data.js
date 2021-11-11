const db = require('../db');

async function getAnträge() {
  const { rows } = await db.query('SELECT * FROM anmeldungen');
  return {
    code: 200,
    data: rows,
  };
}


module.exports = { getAnträge };
