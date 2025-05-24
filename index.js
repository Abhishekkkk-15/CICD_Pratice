const express = require("express");
const app = express();
const PORT = 4002;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hey there" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
