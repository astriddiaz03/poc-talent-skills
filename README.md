
# Talent-Task-API

Talent-Task-API es una API desarrollada para gestionar la asignación óptima de tareas a empleados en función de su disponibilidad y habilidades. Este proyecto fue desarrollado como parte de un desafío técnico, optimizando el uso de los recursos de los empleados mediante algoritmos de asignación.

## Tabla de Contenidos
- [Descripción](#descripción)
- [Requisitos](#requisitos)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Modelos y Colecciones](#modelos-y-colecciones)
- [Endpoints](#endpoints)
- [Consideraciones Técnicas](#consideraciones-técnicas)

## Descripción
Esta API permite gestionar empleados y asignarles tareas de acuerdo a su disponibilidad y habilidades. Incluye:
1. Algoritmo de asignación que distribuye las tareas a los empleados de manera óptima.
2. Reporte de asignación que muestra cómo se distribuyeron las tareas en una fecha específica.

## Requisitos
- **Node.js**
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
├── services/
│   ├── employeeAvailabilityServices.js
│   └── taskServices.js
├── Dockerfile
├── docker-compose.yml
└── index.js
```

### Descripción de las Carpetas
- **controllers/**: Contiene los controladores de la API, encargados de manejar la lógica de negocio.
- **database/**: Archivo de conexión a la base de datos MongoDB.
- **models/**: Modelos Mongoose que representan las colecciones de MongoDB.
- **routes/**: Define las rutas de la API para las distintas operaciones CRUD.
- **services/**: Servicios que encapsulan la lógica de acceso a datos y procesamiento específico.

## Modelos y Colecciones

Basado en el esquema ER, los modelos principales son:

- **Employee**: Información sobre el empleado, incluyendo nombre, correo, telefono.
- **Task**: Representa la tarea con título, fecha, duración.
- **Assignment**: Asignaciones de tareas a empleados.
- **Skill**: Conjunto de habilidades disponibles en el sistema.
- **EmployeeAvailability**: Disponibilidad de los empleados en días y horas.
- **EmployeeSkills** y **TaskSkills**: Relacionan empleados y tareas con sus habilidades.

## Endpoints

### Asignaciones
- **POST /assignments**: Asigna tareas a empleados de manera óptima.
- **GET /assignments/report**: Genera un reporte de asignación para una fecha específica.

---

