const express = require('express');
const router = express.Router();

const products = [
    {
        name: 'Red shoes',
        price: 75,
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Red_shoes.jpg',
    },
    {
        name: 'Black bike',
        price: 300,
        image: '',
    }

];

router.get('/', (req, res) => {
    res.render('products', { products });
});

module.exports = router;