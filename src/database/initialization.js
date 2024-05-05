const studentServices = require("../services/students");
const studentClassesServices = require("../services/studentClasses");

exports.initDB = async () => {
  try {
    console.log("Database Connected");
    console.log("Initializing Database");
    await studentServices.createStudentTable();
    await studentClassesServices.createStudentClassTable();
    console.log("Database Initialized");
  } catch (error) {
    console.log(error.message);
  }
};
