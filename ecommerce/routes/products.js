const express = require('express');
const router = express.Router();
const productMocks = require('../utils/mocks/products');

router.get('/', (req, res) => {
    res.render('products', { products });
});

module.exports = router;