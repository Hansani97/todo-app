const express = require("express");
const router = express.Router();
const TodoController = require("../controllers/ToDoController");

router.get("/", TodoController.getTodo);
router.post("/add", TodoController.addTodo);
router.put("/update/:_id", TodoController.updateTodo);
router.delete("/delete/:_id", TodoController.deleteTodo);
module.exports = router;
