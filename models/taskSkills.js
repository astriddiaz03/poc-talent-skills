// models/TaskSkill.js
const mongoose = require('mongoose');

const TaskSkillSchema = new mongoose.Schema({
    task: { type: mongoose.Schema.Types.ObjectId, ref: 'task', required: true },
    skill: { type: mongoose.Schema.Types.ObjectId, ref: 'Skills', required: true }
});

module.exports = mongoose.model('TaskSkill', TaskSkillSchema,"task_skill");
