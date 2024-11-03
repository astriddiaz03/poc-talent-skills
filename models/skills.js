// models/Skill.js
const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
    description: { type: String, required: true },
    category: { type: String },
    level: { type: Number } // Nivel de habilidad específico
});

module.exports = mongoose.model('Skills', SkillSchema,"skills");
