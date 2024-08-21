const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,  
            useFindAndModify: false 
        });
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
        process.exit(1); // Quitter le processus en cas d'erreur
    }
};

module.exports = connectDB;
