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

// Schema
const WorkexperienceSchema = new mongoose.Schema({
    companyname: {
        type: String,
        required: true
    },
    jobtitle: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Workexperience = mongoose.model("Workexperience", WorkexperienceSchema);

// Routes 
app.get("/api", async (req, res) => {
    res.json({message: "Välkommen till detta API"});
});

app.get("/workexperiences", async(req, res) => {
    try {
        let result = await Workexperience.find({});
        return res.json(result);
    } catch {
        return res.status(500).json(error);
    }
});

app.post("/workexperiences", async(req, res) => {
    try {
        let result = await Workexperience.create(req.body);
        return res.json(result);
    } catch(error) {
        return res.status(400).json(error);
    }
});

// Starta applikationen
app.listen(port, () => {
    console.log("Server is running on port: " + port);
});



