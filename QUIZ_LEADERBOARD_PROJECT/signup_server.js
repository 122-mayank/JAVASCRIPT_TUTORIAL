// signup_server.js

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5500;

// Middleware
app.use(cors({
  origin: ["http://127.0.0.1:5500", "http://localhost:5500"],
  methods: ["POST"],
  credentials: true
}));

app.use(express.json());

// Dummy user store
const users = [];

// Route: Signup
app.post("/signup", (req, res) => {
    console.log("Incoming Signup Data:", req.body);
  const { name, email, password } = req.body;

  // Basic validation
  if (!name || !email || !password) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  // Check if user already exists
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(409).json({ success: false, message: "User already exists" });
  }

  // Save user
  users.push({ name, email, password });

  console.log("User Registered:", { name, email });

  res.status(201).json({ success: true, message: "Signup successful!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Signup server is running at http://localhost:${PORT}`);
});