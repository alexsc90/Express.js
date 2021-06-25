const express = require('express');
const path = require('path');
const products = require('./routes/views/products');
const productsApi = require('./routes/api/products');

// App
const app = express();

// Middlewares
app.use(express.json());

// Static files
app.use('/static', express.static(path.join(__dirname, 'public')));

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Routes
app.use('/products', products);
app.use('/api/products', productsApi);

app.get('/', (req, res) => {
    res.redirect('/products');
})

// Server
const server = app.listen(3000, () => {
    console.log(`Listening http://localhost:${server.address().port}`)
});