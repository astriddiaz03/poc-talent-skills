# Usa una imagen base de Node.js
FROM node:20

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /appSkill

# Copia todo el contenido de tu proyecto en el directorio de trabajo del contenedor
# Copia los archivos de dependencia al directorio de trabajo /app
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el resto de los archivos de la aplicación a /app
COPY . .

# Expone el puerto en el que tu aplicación se ejecutará (por defecto suele ser 3000 en aplicaciones Express)
EXPOSE 3000

# Comando para ejecutar tu aplicación
CMD ["npm", "start"]
