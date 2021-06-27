const express = require('express');
const path = require('path');
const boom = require('boom');

const products = require('./routes/views/products');
const productsApi = require('./routes/api/products');

const {
    logErrors,
    wrapErrors,
    clientErrorHandler,
    errorHandler
} = require('./utils/middlewares/errorsHandlers');

const isRequestAjaxOrApi = require('./utils/isRequestAjaxOrApi')

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
});

app.use((req, res, next) => {
    if(isRequestAjaxOrApi(req)) {
        const {
            output: { statusCode, payload }
        } = boom.notFound();

        res.status(statusCode).json(payload);
    }

    res.status(404).render('404');
})

// error handler
app.use(logErrors);
app.use(wrapErrors);
app.use(clientErrorHandler);
app.use(errorHandler);


// Server
const server = app.listen(3000, () => {
    console.log(`Listening http://localhost:${server.address().port}`)
});