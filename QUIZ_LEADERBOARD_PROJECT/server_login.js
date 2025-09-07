const express = require("express");
const cors = require("cors");

const app = express();

// ✅ Correct CORS setup
app.use(cors({
  origin: 'http://127.0.0.1:5500', // Allow frontend
  methods: ['GET', 'POST'],        // Allow specific methods
  credentials: true
}));

app.use(express.json());

// Dummy data
const users = [
  { email: "user@example.com", password: "12345" },
  { email: "admin@example.com", password: "adminpass" }
];

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    res.json({ success: true, message: "Login successful!" });
  } else {
    res.json({ success: false, message: "Invalid email or password" });
  }
});

app.listen(3000, () => {
  console.log("✅ Server running on http://localhost:3000");
});
