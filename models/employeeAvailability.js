// models/EmployeeAvailability.js
const mongoose = require('mongoose');

const EmployeeAvailabilitySchema = new mongoose.Schema({
    employee: { type: mongoose.Schema.Types.ObjectId, ref: 'employee', required: true },
    availableDate: { type: Number, required: true },
    dayOfWeek: { type: String, enum: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'], required: true },
    startTime: { type: String, required: true }, // formato HH:MM
    endTime: { type: String, required: true }, // formato HH:MM
    isAvailable: { type: Boolean, default: true },
    availableHours: { type: Number, required: true }, // Horas disponibles en el día específico
    notes: { type: String }
});

module.exports = mongoose.model('EmployeeAvailability', EmployeeAvailabilitySchema,"employee_availability");
