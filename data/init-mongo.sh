#!/bin/bash

# Definir la base de datos
DATABASE="talent_skill"

# Crear la base de datos y cambiar a ella
echo "Creando la base de datos y cambiando a ella..."
echo "use $DATABASE" | mongo --host db

# Crear las colecciones en la base de datos
echo "Creando las colecciones..."
echo "
    db.createCollection('assignments');
    db.createCollection('employee');
    db.createCollection('task');
    db.createCollection('skills');
    db.createCollection('task_skill');
    db.createCollection('employee_skills');
    db.createCollection('employee_availability');
" | mongo --host db $DATABASE

# Importar datos en la colección employee desde un archivo JSON
echo "Importando datos en la colección employee..."
mongoimport --host db --db $DATABASE --collection employee --file /data/talent_skill.employee.json --jsonArray
mongoimport --host db --db $DATABASE --collection employee_skills --file /data/talent_skill.employee_skills.json --jsonArray
mongoimport --host db --db $DATABASE --collection employee_availability --file /data/talent_skill.employee_availability.json --jsonArray
mongoimport --host db --db $DATABASE --collection task --file /data/talent_skill.task.json --jsonArray
mongoimport --host db --db $DATABASE --collection task_skill --file /data/talent_skill.task_skill.json --jsonArray
mongoimport --host db --db $DATABASE --collection skills --file /data/talent_skill.skills.json --jsonArray


echo "Inicialización completada."


