const express = require('express');
const app = express();

// Middleware function for API key authentication
function apiKeyMiddleware(req, res, next) {
  const apiKey = 'aaabbbssss'; // Replace with your actual API key

  // Get the API key from the 'Authorization' header
  const providedApiKey = req.headers.authorization;

  // Check if the provided API key matches the expected API key
  if (providedApiKey === apiKey) {
    // API key is valid, grant access
    next();
  } else {
    // API key is invalid, send an error response
    res.status(401).json({ error: 'Invalid API key' });
  }
}

// Use the API key middleware for all routes that require authentication
app.use(apiKeyMiddleware);

// Protected route that requires API key authentication
app.get('/protected', (req, res) => {
  res.json({ message: 'Access granted to protected route' });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
