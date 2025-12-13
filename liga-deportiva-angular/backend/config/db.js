const mongoose = require('mongoose');

const conectarDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://ligauser:liga1234@ligadeportivacluster.musjtmr.mongodb.net/LigaDeportiva?retryWrites=true&w=majority'
    );
    console.log('MongoDB conectado');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = conectarDB;