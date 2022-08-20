const express = require('express');
const app = express();
const routes = require('./routes');

// Middlewares
app.use(express.json());

// Routes
app.use(routes);

app.listen(3000);
console.log('Server on port 3000')