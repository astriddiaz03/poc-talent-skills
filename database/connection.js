const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI;

const connectWithRetry = async () => {
    try {
        await mongoose.connect(mongoURI, {
            serverSelectionTimeoutMS: 5000 // Tiempo de espera para reconectar
        });
        console.log("Conectado a MongoDB");
    } catch (error) {
        console.error("Error al conectar a MongoDB, intentando de nuevo en 5 segundos...", error);
        setTimeout(connectWithRetry, 5000); // Espera 5 segundos y vuelve a intentar
    }
};

module.exports = connectWithRetry;

