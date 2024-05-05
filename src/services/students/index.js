const errorStrings = require("../../configs/errorStrings");
const pool = require("../../database");

// To Create a Table
exports.createStudentTable = async () => {
  const query = `
        CREATE TABLE IF NOT EXISTS students (
            id SERIAL PRIMARY KEY,
            reg_no VARCHAR(50),
            student_name VARCHAR(100),
            isActive BOOLEAN DEFAULT TRUE,
            class_id SMALLINT, 
            FOREIGN KEY (class_id) REFERENCES student_class(id)
        )
    `;
  try {
    const response = await pool.query(query);
    console.log("Student Table Created");
    return response;
  } catch (error) {
    console.log(errorStrings.ERROR_CREATING_STUDENT_TABLE);
    throw new Error(error);
  }
};

// To Insert a Student
exports.insertStudent = async (student) => {
  const query = `
        INSERT INTO students (reg_no, student_name, class_id) VALUES ($1, $2, $3)
    `;
  const values = [student.reg_no, student.student_name, student.class_id];
  try {
    const response = await pool.query(query, values);
    console.log("Student Inserted");
    return response;
  } catch (error) {
    console.log(errorStrings.ERROR_INSERTING_STUDENT);
    throw new Error(error);
  }
};

// To Fetch All Students
exports.fetchStudents = async () => {
    const query = `
    SELECT s.id, s.reg_no, s.student_name, c.id AS class_id, c.class_name
    FROM students s
    JOIN student_class c ON s.class_id = c.id
    WHERE s.isActive = true;
  `;
  try {
    const response = await pool.query(query);
    console.log("Students Fetched");
    return response.rows;
  } catch (error) {
    console.log(errorStrings.ERROR_FETCHING_STUDENTS);
    throw new Error(error);
  }
};

// To Fetch a Student
exports.fetchStudent = async (student) => {
    const query = `
    SELECT s.id, s.reg_no, s.student_name, c.id AS class_id, c.class_name
    FROM students s
    JOIN student_class c ON s.class_id = c.id
    WHERE s.id = $1 AND s.isActive = true;
  `;
  
  const values = [student.id];
  try {
    const response = await pool.query(query, values);
    console.log("Student Fetched");

    if (response.rows.length === 0) {
      throw new Error(errorStrings.STUDENT_NOT_FOUND);
    }

    return response.rows;
  } catch (error) {
    console.log(errorStrings.ERROR_FETCHING_STUDENT);
    throw new Error(error.message);
  }
};

// To Update a Student
exports.updateStudent = async (student) => {
  const query = `
        UPDATE students SET reg_no = $1, student_name = $2, class_id = $3 WHERE id = $4
    `;
  const values = [
    student.reg_no,
    student.student_name,
    student.class_id,
    student.id,
  ];
  try {
    const response = await pool.query(query, values);
    console.log("Student Updated");
    return response;
  } catch (error) {
    console.log(errorStrings.ERROR_UPDATING_STUDENT);
    throw new Error(error);
  }
};

// To Delete a Student
exports.deleteStudent = async (student) => {
  const query = `
        UPDATE students SET isActive = false WHERE id = $1
    `;
  const values = [student.id];
  try {
    const response = await pool.query(query, values);
    console.log("Student Deleted");
    return response;
  } catch (error) {
    console.log(errorStrings.ERROR_DELETING_STUDENT);
    throw new Error(error);
  }
};
