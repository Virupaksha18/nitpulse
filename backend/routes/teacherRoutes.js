const express = require("express");
const { registerTeacher, loginTeacher,teacherForgotPassword } = require("../controllers/teacherController");

const router = express.Router();

router.post("/register", registerTeacher);
router.post("/login", loginTeacher);
router.post("/teacher/forgot-password",teacherForgotPassword);

module.exports = router;