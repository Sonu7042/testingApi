const express = require("express");

const app = express();
const PORT = 5000;

app.use(express.json());

// Health API
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is working",
    timestamp: Date.now(),
  });
});


// Example users API
app.get("/api/users", (req, res) => {
  res.status(200).json({
    success: true,
    users: [
      { id: 1, name: "Rahul" },
      { id: 2, name: "Amit" },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});