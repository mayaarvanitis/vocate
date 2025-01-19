const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const qs = require("qs");
require("dotenv").config();


const app = express();
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

const symptomSchema = new mongoose.Schema({
    userId: String,
    symptom: String,
    severity: Number,
    frequency: String,
    date: Date,
    notes: String,
});
const Symptom = mongoose.model("Symptom", symptomSchema);

app.get("/get-symptoms/:userId", async (req, res) => {
    try {
        const symptoms = await Symptom.find({ userId: req.params.userId });
        res.status(200).json(symptoms);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.post("/add-symptom", async (req, res) => {
    try {
        const newSymptom = new Symptom(req.body);
        await newSymptom.save();
        res.status(201).send("Symptom logged successfully!");
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get("/", (req, res) => {
    res.status(200).send("Vocate API is running!");
});
