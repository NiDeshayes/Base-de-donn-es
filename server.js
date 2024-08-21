const express = require('express');
const connectDB = require('../config/db');

const app = express();

connectDB();

app.use(express.json({ extended: false }));


app.use('/api/user', require('../routes/user'));
app.use('/api/auth', require('../routes/auth'));
app.use('/api/catways', require('../routes/catway'));
app.use('/api/catways/:id/reservations', require('../routes/reservation'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
