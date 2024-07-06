/* DT207G, Moment 3. Åsa Lindskog, sali1502@student.miun.se */

/* Webbtjänst med MongoDB och Express */

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Initiera Express
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Anslut till MongoDB
mongoose.connect("mongodb://localhost:27017/workexperiences").then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.log("Error connection todatabase: " + error);
})

// Routes 
app.get("/api", async (req, res) => {
    res.json({message: "Welcome to this API"});
});

// Starta applikationen
app.listen(port, () => {
    console.log("Server is running on port: " + port);
});



