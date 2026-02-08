const pool = require("../config/db");

const fetchAllJobs = async () => {
  const query = `SELECT title, job_type, location, application_deadline FROM jobs`;

  const [rows] = await pool.execute(query);
  return rows;
};

module.exports = fetchAllJobs;
