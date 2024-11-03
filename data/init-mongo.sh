#!/bin/bash
#!/bin/bash

echo "Esperando que MongoDB esté listo..."

echo "Iniciando la importación de datos a MongoDB..."
#!/bin/bash

# Nombre de la base de datos
DATABASE="talent_skill"



# Crear la base de datos y las colecciones si no existen
echo "Creando la base de datos y las colecciones..."
echo "use $DATABASE; db.createCollection('assignments'); db.createCollection('employee');" | mongo --host db

# Importar datos en la colección employee desde un archivo JSON
echo "Importando datos en la colección employee..."
mongoimport --host db --db $DATABASE --collection employee --file /data/talent_skill.employee.json --jsonArray

echo "Inicialización completada."
