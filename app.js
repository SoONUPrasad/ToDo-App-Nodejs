// Import required modules
const express = require("express");
const app = express();
const port = 8000;
const expressLayout = require("express-ejs-layouts");
const db = require("./config/mongoose");

// Middleware setup
app.use(expressLayout); // Using express-ejs-layouts for better templating
app.use(express.urlencoded({ extended: true })); // Using the body parser middleware

// Define routes
app.use("/", require("./routes")); // Using the routes defined in './routes' folder

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Set up EJS as the view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// Extract styles and scripts from layout file
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// Start the server
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server on port ${port}`);
    return;
  }
  console.log(`Server is running @ http://localhost:${port}`);
});
