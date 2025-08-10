const express = require("express");
const { registerStudent, loginStudent,forgotPassword } = require("../controllers/studentController");

const router = express.Router();

router.post("/register", registerStudent);
router.post("/login", loginStudent);
router.post("/forgot-password",forgotPassword);

module.exports = router;