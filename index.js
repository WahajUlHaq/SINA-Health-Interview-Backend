const express = require("express");
const cors = require("cors");
require("dotenv").config();

const studentRouter = require("./src/routers/students");
const studentClassRouter = require("./src/routers/studentClasses");
const { initDB } = require("./src/database/initialization");


const app = express();
const PORT = process.env.PORT || 4000;

// Initialize database
initDB();
// CORS
app.use(cors());
// Other Configs
app.use(express.json());
// Routers
app.use(studentRouter);
app.use(studentClassRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
