const express = require("express");
const Todo = require("../models/Todo");
const router = express.Router();

// CREATE To-Do
router.post("/add", async (req, res) => {
  try {
    const { title, description, dueDate } = req.body;
    const newTodo = new Todo({ title, description, dueDate });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ All To-Dos
router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// UPDATE To-Do
router.put("/:id", async (req, res) => {
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedTodo);
});

// DELETE To-Do
router.delete("/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Todo deleted" });
});

module.exports = router;
