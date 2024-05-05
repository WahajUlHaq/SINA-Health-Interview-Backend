const express = require("express");
const router = new express.Router();

const studentController = require("../../controllers/students");

router.post("/students/create", studentController.createStudent);
router.get("/students/get/all", studentController.getStudents);
router.get("/student/get/by-id", studentController.getStudent);
router.patch("/student/update", studentController.updateStudent);
router.patch("/student/delete", studentController.deleteStudent);

module.exports = router;
