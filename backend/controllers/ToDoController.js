const ToDoModel = require("../models/ToDoModel");
const ToDo = require("../models/ToDoModel");

const getTodo = async (req, res) => {
  let todo;
  try {
    todo = await ToDo.find();
  } catch (err) {
    console.log(err);
  }
  if (!todo) {
    return res.status(404).json({ message: "Todo list is empty!!" });
  }
  return res.status(200).json(todo);
};

const addTodo = async (req, res) => {
  const { title, description } = req.body;

  let todo = new ToDo({ title, description });
  await todo.save();
};

const updateTodo = async (req, res) => {
  const { _id } = req.params;
  const { title, description } = req.body;
  ToDo.findByIdAndUpdate(_id, { title, description })
    .then(() => res.send("Updated successfully..."))
    .catch((err) => console.log(err));
};

const deleteTodo = async (req, res) => {
  const { _id } = req.params;
  ToDo.findByIdAndDelete(_id)
    .then(() => res.send("Deleted successfully..."))
    .catch((err) => console.log(err));
};

exports.getTodo = getTodo;
exports.addTodo = addTodo;
exports.updateTodo = updateTodo;
exports.deleteTodo = deleteTodo;
