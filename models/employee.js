// models/Employee.js
const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    location: { type: String },
    levelSkill: { type: Number } 
});

module.exports = mongoose.model('employee', EmployeeSchema,"employee");
