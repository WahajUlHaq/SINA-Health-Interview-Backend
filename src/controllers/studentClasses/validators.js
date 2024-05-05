const errorStrings = require("../../configs/errorStrings");

exports.createStudentClassValidators = (data) => {
  if (!data.class_name) {
    throw new Error(errorStrings.CLASS_NAME_REQUIRED);
  }
};

exports.updateStudentClassValidators = (data) => {
  if (!data.id) {
    throw new Error(errorStrings.CLASS_ID_REQUIRED);
  }
  if (!data.class_name) {
    throw new Error(errorStrings.CLASS_NAME_REQUIRED);
  }
};

exports.deleteStudentClassValidators = (data) => {
  if (!data.id) {
    throw new Error(errorStrings.CLASS_ID_REQUIRED);
  }
};

exports.getStudentClassValidators = (data) => {
  if (!data.id) {
    throw new Error(errorStrings.CLASS_ID_REQUIRED);
  }
};
