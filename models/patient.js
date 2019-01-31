const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Appointment = require("./appointment");
const patientSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    image: {type: String},
    age: {type: Number},
    conditions: {type: String},
    medications: {type: String},
    appointments: [{
        type: Schema.Types.ObjectId,
        ref: "Appointment"
    }],
    contacts: [{
        type: Schema.Types.ObjectId,
        ref: "Contact"
    }]
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
