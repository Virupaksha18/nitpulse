const express = require("express");
const { registerTeacher, loginTeacher,TeacherForgotPassword} = require("../controllers/teacherController");

const router = express.Router();

router.post("/register", registerTeacher);
router.post("/login", loginTeacher);
router.post("/teacher/forgot-password",TeacherForgotPassword);

module.exports = router;