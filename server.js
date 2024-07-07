/* DT207G, Moment 3. Åsa Lindskog, sali1502@student.miun.se */

/* Webbtjänst med MongoDB och Express */
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Initiera Express
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Anslut till MongoDB
mongoose.connect("mongodb://localhost:27017/workexperiences").then(() => {
    console.log("Ansluten till MongoDB");
}).catch((error) => {
    console.log("Ett fel uppstod vid anslutning till MongoDB: " + error);
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
    startdate: {
        type: Date,
        required: true
    },
    enddate: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Workexperience = mongoose.model("Workexperience", WorkexperienceSchema);

/* ROUTES */

// Hämta arbetserfareneter (alla)
app.get("/workexperiences", async (req, res) => {
    try {
        let result = await Workexperience.find({});
        return res.json(result);
    } catch {
        return res.status(500).json(error);
    }
});

// Lägg till arbetserfarenhet
app.post("/workexperiences", async (req, res) => {
    try {
        let result = await Workexperience.create(req.body);
        return res.json(result);
    } catch (error) {
        return res.status(400).json(error);
    }
});

// Hämta arbetserfarenhet (med id)
app.get("/workexperiences/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const workexperience = await Workexperience.findById(id);
        if (!workexperience) {
            return res.status(404).json({ message: "Arbetserfarenhet kunde inte hämtas." });
        }
        res.json(workexperience);
    } catch (err) {
        res.status(500).json({ error: "Ett serverfel uppstod: " + err });
    }
});

// Uppdatera arbetserfarenhet (med id)
app.put("/workexperiences/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const workexperience = await Workexperience.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!workexperience) {
            return res.status(404).json({ message: "Arbetserfarenhet kunde inte uppdateras." });
        }
        res.json(workexperience);
    } catch (err) {
        res.status(500).json({ error: "Ett serverfel uppstod: " + err });
    }
});

// Radera arbetserfarenhet (med id)
app.delete("/workexperiences/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const workexperience = await Workexperience.findByIdAndDelete(id);
        if (!workexperience) {
            return res.status(404).json({ message: "Arbetserfarenhet kunde inte raderas." });
        }
        res.json(workexperience);
    } catch (err) {
        res.status(500).json({ error: "Ett serverfel uppstod: " + err });
    }
});

// Starta applikationen
app.listen(port, () => {
    console.log("Servern är ansluten på port: " + port);
});



