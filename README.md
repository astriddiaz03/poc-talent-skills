# poc-talent-skills
# Talent-Task-API

Talent-Task-API es una API desarrollada para gestionar la asignación óptima de tareas a empleados en función de su disponibilidad y habilidades. Este proyecto fue desarrollado como parte de un desafío técnico para Talana, optimizando el uso de los recursos de los empleados mediante algoritmos de asignación.

## Tabla de Contenidos
- [Descripción](#descripción)
- [Requisitos](#requisitos)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación y Ejecución](#instalación-y-ejecución)
- [Modelos y Colecciones](#modelos-y-colecciones)
- [Endpoints](#endpoints)
- [Consideraciones Técnicas](#consideraciones-técnicas)

## Descripción
Esta API permite gestionar empleados y asignarles tareas de acuerdo a su disponibilidad y habilidades. Incluye:
1. Registro de empleados con sus habilidades, días y horas de disponibilidad.
2. Registro de tareas con una fecha específica, duración estimada y habilidades requeridas.
3. Algoritmo de asignación que distribuye las tareas a los empleados de manera óptima.
4. Reporte de asignación que muestra cómo se distribuyeron las tareas en una fecha específica.

## Requisitos
- **Node.js** v14+
- **MongoDB**
- **Docker** y **Docker Compose** (para despliegue y testing)

## Estructura del Proyecto
La estructura del proyecto es la siguiente:

```plaintext
TALENT-TASK-API/
├── controllers/
│   ├── AssignmentController.js
│   ├── AssignmentReportController.js
├── database/
│   └── connection.js
├── models/
│   ├── assignments.js
│   ├── employee.js
│   ├── employeeAvailability.js
│   ├── employeeSkills.js
│   ├── skills.js
│   ├── task.js
│   └── taskSkills.js
├── routes/
│   ├── assignmentRoutes.js
│   ├── employeeRoutes.js
│   └── taskRoutes.js
├── services/
│   ├── employeeAvailabilityServices.js
│   └── taskServices.js
├── Dockerfile
├── docker-compose.yml
└── index.js

