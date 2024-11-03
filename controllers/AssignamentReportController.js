const moment = require('moment');
const mongoose = require('mongoose');
const EmployeeSkills = require('../models/employeeSkills');
const Assignments = require('../models/assignments');
const TaskSkill = require('../models/taskSkills');
const Skills=require('../models/skills');

const AssignmentController = {};

AssignmentController.getReport = async (req, res) => {
    try {
        const { date } = req.query; 
        const formattedDate = moment(date, 'YYYY-MM-DD').format('YYYYMMDD');
        
        if (!date) {
            return res.status(400).json({ message: "Debe proporcionar una fecha para generar el reporte." });
        }


        const assignments = await Assignments.find({
            assignmentDate: formattedDate
        })
        .populate({ path: 'employee', select: 'name lastName' }) 
        .populate({ path: 'task', select: 'title description taskEstimationHH' })
        .lean();


        for (let assignment of assignments) {
            const taskSkills = await TaskSkill.find({ task: assignment.task._id })
            .populate({
                path: 'skill', 
                select: 'description category level' 
            }).lean();

            const employeeSkills = await EmployeeSkills.find({ employee: assignment.employee._id })
                .populate({
                    path: 'skill',
                    select: 'description category level' 
                })
                .lean();
            
            // Agregamos las habilidades al objeto de `employee` en cada `assignment`
            assignment.employee.skills = employeeSkills.map(es => ({
                description: es.skill.description,
                category: es.skill.category,
                level: es.skill.level
            }));

            assignment.task.skills = taskSkills.map(es => ({
                description: es.skill.description,
                category: es.skill.category,
                level: es.skill.level
            }));
        }

        if (assignments.length === 0) {
            return res.status(200).json({ message: "No hay asignaciones para la fecha especificada." });
        }

        // Construimos el reporte
        const report = assignments.map(assignment => {
            return {
                employee: 
                { 
                    name: assignment.employee.name + "," + assignment.employee.lastName,
                    skills: assignment.employee.skills
                },
                task: {
                    title: assignment.task.title,
                    description: assignment.task.description,
                    estimatedHours: assignment.task.taskEstimationHH,
                    skills: assignment.task.skills

                },
                startDate: assignment.startDate
                
            };
        });

        res.status(200).json({
            message: "Reporte de asignaciones para la fecha especificada",
            date: formattedDate,
            report
        });
    } catch (error) {
        console.error("Error al generar el reporte de asignaciones:", error);
        res.status(500).json({ message: "Error al generar el reporte de asignaciones." });
    }
};

module.exports = AssignmentController;

