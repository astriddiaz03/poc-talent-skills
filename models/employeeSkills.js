// models/EmployeeSkill.js
const mongoose = require('mongoose');

const EmployeeSkillSchema = new mongoose.Schema({
    employee: { type: mongoose.Schema.Types.ObjectId, ref: 'employee', required: true },
    skill: { type: mongoose.Schema.Types.ObjectId, ref: 'Skills', required: true }
});

module.exports = mongoose.model('EmployeeSkills', EmployeeSkillSchema,"employee_skills");
