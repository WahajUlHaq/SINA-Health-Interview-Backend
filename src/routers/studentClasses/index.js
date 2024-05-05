const express = require("express");
const router = new express.Router();

const studentClassController = require("../../controllers/studentClasses");

router.post("/students-class/create", studentClassController.createStudentClass);
router.get("/students-class/get/all", studentClassController.getStudentClasses);
router.get("/student-class/get/by-id", studentClassController.getStudentClass);
router.patch("/student-class/update", studentClassController.updateStudentClass);
router.patch("/student-class/delete", studentClassController.deleteStudentClass);

module.exports = router;
