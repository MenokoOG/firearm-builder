const express = require("express");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(morgan("dev"));

const PORT = process.env.PORT || 5000;

// Route to serve the parts JSON
app.get("/api/parts", (req, res) => {
  const filePath = path.join(__dirname, "data", "parts.json");
  console.log(`Serving parts from: ${filePath}`);

  res.sendFile(filePath, (err) => {
    if (err) {
      console.error("Error sending parts.json:", err);
      res.status(500).send("Error loading parts.");
    }
  });
});

// Start the server
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
