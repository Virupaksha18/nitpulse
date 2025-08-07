const express = require("express");
const router = express.Router();
const notesController = require("../controllers/notesController");

router.get("/", notesController.getNotes);
router.get("/:slug", notesController.getNoteBySlug);
router.post("/", notesController.createNote);

module.exports = router;