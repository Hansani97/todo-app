const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/ToDoRoutes");
const cors = require("cors");

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

mongoose
  .connect("mongodb://127.0.0.1:27017/todo-list")
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(routes);
app.listen(port, () => console.log(`Listning on : ${port}`));
