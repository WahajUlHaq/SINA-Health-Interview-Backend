const errorStrings = require("../../configs/errorStrings");
const studentServices = require("../../services/students");
const studentClassServices = require("../../services/studentClasses");
const {
  createStudentValidators,
  getStudentValidators,
  deleteStudentValidators,
  updateStudentValidators,
} = require("./validators");

exports.createStudent = async (req, res) => {
  const student = req.body;
  const queryCheckClass = {
    id: student.class_id,
  }
  try {
    const validators = createStudentValidators(student);
    const classCheckResponse = await studentClassServices.fetchStudentClass(queryCheckClass);
    const response = await studentServices.insertStudent(student);

    res.status(201).send({ message: "Student Inserted", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message, success: false });
  }
};

exports.getStudents = async (req, res) => {
  try {
    const response = await studentServices.fetchStudents();
    res.status(200).send({ students: response, success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message, success: false });
  }
};

exports.getStudent = async (req, res) => {
  const student = req.query;
  try {
    const validators = getStudentValidators(student);
    const response = await studentServices.fetchStudent(student);
    res.status(200).send({ student: response, success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message, success: false });
  }
};

exports.updateStudent = async (req, res) => {
  const student = req.body;
  try {
    const validators = updateStudentValidators(student);
    const responseStudentIdCheck = await studentServices.fetchStudent(student);
    const response = await studentServices.updateStudent(student);
    res.status(200).send({ message: "Student Updated", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message, success: false });
  }
};

exports.deleteStudent = async (req, res) => {
  const student = req.body;
  try {
    const validators = deleteStudentValidators(student);
    const responseStudentIdCheck = await studentServices.fetchStudent(student);
    const response = await studentServices.deleteStudent(student);
    res.status(200).send({ message: "Student Deleted", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message, success: false });
  }
};
