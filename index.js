const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Allows frontend requests
app.use(express.json()); // Allows backend to read JSON data

// Dummy Data for Testing
const todos = [
    { _id: 1, title: "Learn MERN", description: "Complete the project", dueDate: "2025-03-01" },
    { _id: 2, title: "Build To-Do App", description: "Practice CRUD operations", dueDate: "2025-03-05" }
];

// ✅ Home Route
app.get("/", (req, res) => {
    res.send("Server is running!");
});

// ✅ To-Do API Route (GET)
app.get("/todos", (req, res) => {
    res.json(todos);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
