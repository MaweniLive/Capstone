const express = require("express"); // Used to set up a server
const cors = require("cors"); // Used to prevent errors when working locally

// Import routes
const userRoute = require("./routes/userRoute");
const productsRoute = require("./routes/productsRoute");

const app = express(); // Initialize express as an app variable
app.set("port", process.env.PORT || 6969); // Set the port
app.use(express.json()); // Enable the server to handle JSON requests
app.use(cors()); // Dont let local development give errors

// Use individual routes when visiting these URLS
app.use("/users", userRoute);

// Use individual routes when visiting these URLS
app.use("/products",  productsRoute);

app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  // res.sendFile(__dirname + "/" + "index.html");
  res.send("Morning world");
});

// Set up server to start listening for requests
app.listen(app.get("port"), () => {
  console.log(`Listening for calls on port ${app.get("port")}`);
  console.log("Press Ctrl+C to exit server");
});