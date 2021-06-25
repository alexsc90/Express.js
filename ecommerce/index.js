const express = require('express');
const path = require('path');
const app = express();

const products = require('./routes/products');

app.use('/static', express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/products', products);

const server = app.listen(3000, () => {
    console.log(`Listening http://localhost:${server.address().port}`)
});