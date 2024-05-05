const errorStrings = require("../../configs/errorStrings");

exports.createStudentValidators = (data) => {
  if (!data.reg_no) {
    throw new Error(errorStrings.REG_NO_REQUIRED);
  }
  if (!data.student_name) {
    throw new Error(errorStrings.STUDENT_NAME_REQUIRED);
  }
  if (!data.class_id) {
    throw new Error(errorStrings.CLASS_ID_REQUIRED);
  }
};

exports.updateStudentValidators = (data) => {
  if (!data.id) {
    throw new Error(errorStrings.ID_REQUIRED);
  }
  if (!data.reg_no) {
    throw new Error(errorStrings.REG_NO_REQUIRED);
  }
  if (!data.student_name) {
    throw new Error(errorStrings.STUDENT_NAME_REQUIRED);
  }
  if (!data.class_id) {
    throw new Error(errorStrings.CLASS_ID_REQUIRED);
  }
};

exports.deleteStudentValidators = (data) => {
  if (!data.id) {
    throw new Error(errorStrings.ID_REQUIRED);
  }
};

exports.getStudentValidators = (data) => {
  if (!data.id) {
    throw new Error(errorStrings.ID_REQUIRED);
  }
};
