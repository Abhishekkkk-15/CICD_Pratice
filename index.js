    const express = require('express');
const app = express();
const PORT = 4002;

// Middleware
app.use(express.json());

// Route
app.get('/', (req, res) => {    
  res.json({message:"Hey there"});
});

// Start server
app.listen(PORT,'0.0.0.0', () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
