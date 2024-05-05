const errorStrings = require("../../configs/errorStrings");
const studentClassesServices = require("../../services/studentClasses");
const { createStudentClassValidators, getStudentClassValidators, updateStudentClassValidators, deleteStudentClassValidators } = require("./validators");

exports.createStudentClass = async (req, res) => {
  const studentClass = req.body;
  try {
    const validators = createStudentClassValidators(studentClass);
    const response = await studentClassesServices.insertStudentClass(
      studentClass
    );

    res.status(201).send({ message: "Student Class Inserted", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message, success: false });
  }
};

exports.getStudentClasses = async (req, res) => {
  try {
    const response = await studentClassesServices.fetchStudenClasses();
    res.status(200).send({ studentClasses: response, success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message, success: false });
  }
};

exports.getStudentClass = async (req, res) => {
  const studentClass = req.query;
  try {
    const validators = getStudentClassValidators(studentClass);
    const response = await studentClassesServices.fetchStudentClass(studentClass);
    res.status(200).send({ studentClass: response, success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message, success: false });
  }
};

exports.updateStudentClass = async (req, res) => {
  const studentClass = req.body;
  try {
    const validators = updateStudentClassValidators(studentClass);
    const responseStudentIdCheck = await studentClassesServices.fetchStudentClass(studentClass);
    const response = await studentClassesServices.updateStudentClass(studentClass);
    res.status(200).send({ message: "Student Class Updated", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message, success: false });
  }
};

exports.deleteStudentClass = async (req, res) => {
  const studentClass = req.body;
  try {
    const validators = deleteStudentClassValidators(student);
    const responseStudentIdCheck = await studentClassesServices.fetchStudentClass(studentClass);
    const response = await studentClassesServices.deleteStudentClass(studentClass);
    res.status(200).send({ message: "Student Class Deleted", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message, success: false });
  }
};
