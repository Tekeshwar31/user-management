// server.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

console.log("console is on")

///sdfsdfsdfds
///sdfsdfsdfds
///sdfsdfsdfds
///sdfsdfsdfds
///sdfsdfsdfds
///sdfsdfsdfds


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
