
const express = require('express');
const dotenv = require('dotenv').config();

const { errorHandler } = require('./middleware/errorMiddleware');

const port = process.env.PORT || 8000;

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api/tasks', require('./routes/taskRoutes'));
g
app.use(errorHandler);
it
app.listen(port, () => {
console.log(`
    Server listening on port ${port}`);
});


