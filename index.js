const express = require("express");
const path = require("path");
const app = express();
const PORT = 4002;

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
