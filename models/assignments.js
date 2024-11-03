// models/Assignment.js
const mongoose = require('mongoose');

const AssignmentSchema = new mongoose.Schema({
    employee: { type: mongoose.Schema.Types.ObjectId, ref: 'employee', required: true },
    task: { type: mongoose.Schema.Types.ObjectId, ref: 'task', required: true },
    assignmentDate: { type: Number ,},
    startDate: { type: Number },
    endDate: { type: Number }
});

module.exports = mongoose.model('Assignments', AssignmentSchema,"assignments");
