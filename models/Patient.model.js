const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
    name: String,
    firstSurname: String,
    secondSurname: String,
    email: String,
    phone: Number,
    address: String,
    newPatient: Boolean,
    professional: { type: Schema.Types.ObjectId, ref: 'Professional' },
    history: String
});


module.exports = mongoose.model('Patient', patientSchema);
