    const express = require('express');
const app = express();
const PORT = 4001;

// Middleware
app.use(express.json());

// Route
app.get('/', (req, res) => {    
  res.send('Hello from abhishek jangid 33');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
