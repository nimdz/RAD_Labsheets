const express = require('express');
const path= require('path');

const app=express();
const PORT=3000;

// Serve images from the "images" directory using the express.static middleware
app.use('/images', express.static(path.join(__dirname, 'images')));

// Define a route to serve the HTML page
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Image Gallery</title>
      </head>
      <body>
        <h1>Image Gallery</h1>
        <img src="./images/image1.jpg" alt="Image 1">
        <img src="./images/img2.jpg" alt="Image 2">
        <img src="./images/img3.jpg" alt="Image 2">
        <img src="./images/img4.jpg" alt="Image 2">
      </body>
    </html>
  `);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//run http://localhost:3000 to see output