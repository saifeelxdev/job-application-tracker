const pool = require("../config/db");

const createUser = async ({ name, email, password_hash, role }) => {
  const [result] = await pool.execute(
    `
        INSERT INTO users (name, email, password_hash, role) 
        VALUES (?, ?, ?, ?)
        `,
    [name, email, password_hash, role],
  );

  return result.insertId;
};

const createRecruiter = async ({ name, email, password_hash }) => {
  const [result] = await pool.execute(
    `
      INSERT INTO companies (name, email, password_hash)
      VALUES (?, ?, ?)
    `,
    [name, email, password_hash],
  );

  return result.insertId;
};

const findUserByEmail = async (email) => {
  const [rows] = await pool.execute(
    `
        SELECT * FROM users WHERE email = ? LIMIT 1
         `,
    [email],
  );
  return rows.length ? rows[0] : null;
};

const findUserById = async (id) => {
  const [rows] = await pool.execute(
    `
        SELECT * FROM users WHERE id = ? LIMIT 1
        `,
    [id],
  );
  return rows[0];
};

module.exports = {
  createUser,
  createRecruiter,
  findUserByEmail,
  findUserById,
};
