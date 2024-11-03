// controllers/AssignmentController.js
const mongoose = require('mongoose');
const moment = require('moment');
const Employee = require('../models/employee');
const Task = require('../models/task');
const EmployeeAvailability = require('../models/employeeAvailability');
const EmployeeSkills = require('../models/employeeSkills');
const Assignments = require('../models/assignments');
const taskSkills = require('../models/taskSkills');
const TaskService=require('../services/taskServices');
const EmployeeAvailabilityService=require('../services/employeeAvailabilityServices');


async function assignTasks(req, res) {
    const { date } = req.body;
    const formattedDate = parseInt(moment(date, 'YYYY-MM-DD').format('YYYYMMDD'));
    const assignments = [];

    const tasks = await Task.find({ 
        taskDate: formattedDate ,
        status:"Pendiente"
    }).lean();

    for (const task of tasks) {
        const requiredSkills = await taskSkills.find({task: task._id}).lean();
        const candidates = await Employee.find({
            _id: {
                $in: (await EmployeeSkills.find({
                    skill: { $in: requiredSkills.map(skill => skill.skill) }
                })).map(es => es.employee)
            }
        }).lean();

        for (const candidate of candidates) {
            const availability = await EmployeeAvailability.findOne({
                employee: candidate._id,
                availableDate: formattedDate,
                isAvailable:true
            });
            
            if (availability) {
                if (availability.availableHours >= task.taskEstimationHH) {
                assignments.push({
                    employee: candidate._id,
                    task: task._id,
                    assignmentDate: parseInt(moment().format('YYYYMMDD')),
                    startDate: task.taskDate,
                });

                availability.availableHours -= task.taskEstimationHH;
                await availability.save();
                if (availability.availableHours ===0){
                    EmployeeAvailabilityService.updateAvailability(candidate._id) ;
                }
                TaskService.updateTaskStatus (task._id,"Asignada");
                break;
            }
            else{
                console.log(`Empleado ${candidate._id} no tiene suficientes horas disponibles para esta tarea.`);
            }
            }
            else{
                console.log(`No hay empleados disponibles para la tarea.`);

            }
        }
    }

    if (!assignments || assignments.length === 0) {
        return res.status(200).json({ message: "No se pudo asignar ninguna tarea" });
    }
    else{   
        await Assignments.insertMany(assignments);
        return res.status(200).json({ 
            message: "Asignacion Completada exitosamente" 
        });

    }

}

module.exports = { assignTasks };
