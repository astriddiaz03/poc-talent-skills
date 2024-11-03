// models/Task.js
const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    taskDate: { type: Number , required: true },
    taskEstimationHH: { type: Number, required: true }, 
    description: { type: String },
    priority: { type: Number }, 
    complexityLevel: { type: Number }, 
    urgency: { type: Number }, 
    status: { type: String, enum: ['Pendiente', 'Asignada', 'Completada'], default: 'Pendiente' },
    deadline: { type: Number  }
});

module.exports = mongoose.model('task', TaskSchema,"task");
