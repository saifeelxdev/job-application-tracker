const express = require("express");
const cors = require("cors");
const app = express();

const errorMiddleware = require("./middleware/error.middleware");
const healthRoutes = require("./routes/health.router");
const authRoutes = require("./routes/auth.routes");
const profileRoutes = require("./routes/profile.routes");
const jobsRoutes = require("./routes/jobs.routes");
const fetchJobsRoutes = require("./routes/fetchjobs.routes");
app.use(express.json());
app.use(cors());

app.use("/api", healthRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/recruiter", jobsRoutes);
app.use("/api/candidate", fetchJobsRoutes);

app.use(errorMiddleware);

module.exports = app;
