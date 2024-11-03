const Task = require('../models/task');

const TaskService = {};

TaskService.updateTaskStatus = async (taskId, status) => {
    
    if (!['Pendiente', 'Asignada', 'Completada'].includes(status)) {
        throw new Error("Estado no válido. Los valores permitidos son 'Pendiente', 'Asignada' o 'Completada'.");
    }


    const updatedTask = await Task.findByIdAndUpdate(
        taskId,
        { status: status },
        { new: true }
    );


    if (!updatedTask) {
        throw new Error("Tarea no encontrada.");
    }

    return updatedTask;
};

module.exports = TaskService;
