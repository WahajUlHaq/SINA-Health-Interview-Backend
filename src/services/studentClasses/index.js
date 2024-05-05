const errorStrings = require("../../configs/errorStrings");
const pool = require("../../database");

// To Create a Table
exports.createStudentClassTable = async () => {
  const query = `
        CREATE TABLE IF NOT EXISTS student_class (
            id SERIAL PRIMARY KEY,
            class_name VARCHAR(50),
            isActive BOOLEAN DEFAULT TRUE
        )
    `;
  try {
    const response = await pool.query(query);
    console.log("Student Classes Table Created");
    return response;
  } catch (error) {
    console.log(errorStrings.ERROR_CREATING_CLASSES_STUDENT_TABLE);
    throw new Error(error);
  }
};

// To Insert a Student Class
exports.insertStudentClass = async (stdClass) => {
  const query = `
        INSERT INTO student_class (class_name) VALUES ($1)
    `;
  const values = [stdClass.class_name];
  try {
    const response = await pool.query(query, values);
    console.log("Student Class Inserted");
    return response;
  } catch (error) {
    console.log(errorStrings.ERROR_INSERTING_STUDENT_CLASS);
    throw new Error(error);
  }
};

// To Fetch All Students Class
exports.fetchStudenClasses = async () => {
  const query = `
        SELECT * FROM student_class where isActive = true
    `;
  try {
    const response = await pool.query(query);
    console.log("Students Classes Fetched");
    return response.rows;
  } catch (error) {
    console.log(errorStrings.ERROR_FETCHING_STUDENT_CLASSES);
    throw new Error(error);
  }
};

// To Fetch a Student Class
exports.fetchStudentClass = async (stdClass) => {
  const query = `
        SELECT * FROM student_class WHERE id = $1 AND isActive = true
    `;
  const values = [stdClass.id];
  try {
    const response = await pool.query(query, values);

    if (response.rows.length === 0) {
      throw new Error(errorStrings.CLASS_NOT_FOUND);
    }

    console.log("Student Class Fetched");
    return response.rows;
  } catch (error) {
    console.log(errorStrings.ERROR_FETCHING_STUDENT_CLASS);
    throw new Error(error.message);
  }
};

// To Update a Student
exports.updateStudentClass = async (stdClass) => {
  const query = `
        UPDATE student_class SET class_name = $1 WHERE id = $2
    `;
  const values = [stdClass.class_name, stdClass.id];
  try {
    const response = await pool.query(query, values);
    console.log("Student Class Updated");
    return response;
  } catch (error) {
    console.log(errorStrings.ERROR_UPDATING_STUDENT_CLASS);
    throw new Error(error);
  }
};

// To Delete a Student
exports.deleteStudentClass = async (stdClass) => {
  const query = `
        UPDATE student_class SET isActive = false WHERE id = $1
    `;
  const values = [stdClass.id];
  try {
    const response = await pool.query(query, values);
    console.log("Student CLass Deleted");
    return response;
  } catch (error) {
    console.log(errorStrings.ERROR_DELETING_STUDENT_CLASS);
    throw new Error(error);
  }
};
