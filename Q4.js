const express = require('express');
const app = express();

// Middleware function for logging request information
function requestLoggerMiddleware(req, res, next) {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.url;

  console.log(`[${timestamp}] ${method} ${url}`);
  next();
}

// Use the request logger middleware for all incoming requests
app.use(requestLoggerMiddleware);

// Route that will be logged by the middleware
app.get('/hello', (req, res) => {
  res.send('Hello, World!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
