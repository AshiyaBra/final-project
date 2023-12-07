const express = require("express");
const app = express();
const Joi = require("joi");
const multer = require("multer");
app.use(express.static("public"));
app.use(express.json());
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");

const upload = multer({ dest: __dirname + "/public/images" });


mongoose
    .connect("mongodb+srv://ashiyabranch2:ellajones@cluster0.2mkt3ng.mongodb.net/")
    .then(() => console.log("Connected to mongodb..."))
    .catch((err) => console.error("could not connect to mongodb...", err));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/input.html");
});

const deviceSchema = new mongoose.Schema({
    name: String,
    date: String,
    authenticity: String,
    condition: String,
    description: String,
    img: String,
});

const Device = mongoose.model("Device", deviceSchema);

app.get("/api/devices", (req, res) => {
    getDevices(res);
});

const getDevices = async (res) => {
    const devices = await Device.find();
    res.send(devices);
}

app.post("/api/devices", upload.single("img"), (req, res) => {
    console.log("Received POST request to /api/devices");
    const result = validateDevice(req.body);

    if (result.error) {
        console.log("Validation error:", result.error.details[0].message);
        res.status(400).send(result.error.details[0].message);
        return;
    }

    console.log("Validated input:", req.body);

    const newDevice = new Device({
        name: req.body.name,
        date: req.body.date,
        authenticity: req.body.authenticity,
        condition: req.body.condition,
        description: req.body.description,
    });

    if (req.file) {
        newDevice.img = "images/" + req.file.filename;
    }

    createDevice(newDevice, res);
});


const createDevice = async (newDevice, res) => {
    const result = await newDevice.save();
    res.send(newDevice);
}

app.put("/api/devices/:id" , upload.single("img"), (req, res) => {
    console.log(`Received PUT request to /api/devices/${req.params.id}`);
    const result = validateDevice(req.body);

    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
      }

    updateDevice(req, res);
});

const updateDevice = async (req, res) => {
    let fieldsToUpdate = {
        name: req.body.name,
        date: req.body.date,
        authenticity: req.body.authenticity,
        condition: req.body.condition,
        description: req.body.description,

    };

    if (req.file) {
        fieldsToUpdate.img = "images/" + req.file.filename;
    }

    const result = await Device.updateOne({ _id: req.params.id }, fieldsToUpdate);
    const device = await Device.findById(req.params.id);
    res.send(device);
};

app.delete("/api/devices/:id", upload.single("img"), (req, res) => {
    console.log(`Received DELETE request to /api/devices/${req.params.id}`);
    removeDevice(res, req.params.id);
});

const removeDevice = async (res, id) =>{
    const device = await Device.findByIdAndDelete(id);
    res.send(device);
}

const validateDevice = (device) => {
    const schema = Joi.object({
        _id: Joi.allow(""),
        name: Joi.string().min(3).required(),
        date: Joi.string().min(3).required(),
        authenticity: Joi.string().required(),
        condition: Joi.allow(""),
        description: Joi.allow(""),
        
       
    });
    console.log("Validating device:", device);
    return schema.validate(device);
};

app.listen(3000, () => {
    console.log("I'm Listening");
});
