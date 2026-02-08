const asyncHandler = require("../utils/asyncHandler");
const fetchAllJobs = require("../models/fetchjobs.models");

const fetchJobController = asyncHandler(async (req, res, next) => {
  try {
    const jobs = await fetchAllJobs();

    res.json({
      jobs,
      count: jobs.length,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = { fetchJobController };
