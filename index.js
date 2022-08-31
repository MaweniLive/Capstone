const express = require("express");
const cors = require("cors");

const app = express();
app.set("port", process.env.PORT || 3232);
app.use(express.json());
app.use(cors());

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(_dirname + "/" + "index.html");
});

app.listen(app.get("port"), () => {
  console.log(`Listening for calls on port ${app.get("port")}`);
  console.log("Press Ctrl+C to exit server");
});

// IMPORTING ROUTES

const userRoutes = require("./routes/userRoute");
const productsRoute = require("./routes/productsRoute");

// USING THE ROUTES

app.use("/users", userRoutes);
app.use("/products", productsRoute);
