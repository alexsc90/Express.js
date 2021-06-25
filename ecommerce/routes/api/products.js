const express = require('express');
const router = express.Router();
const productMocks = require('../../utils/mocks/products');

router.get('/', (req, res) => {
    const { query } = req.query;

    res.status(200).json({
        data: productMocks,
        message: 'products listed'
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    res.status(200).json({
        data: productMocks[0],
        message: 'product retrieved'
    });
});

router.post('/', (req, res) => {

    res.status(201).json({
        data: productMocks[0],
        message: 'product created'
    });
});

router.put('/:id', (req, res) => {

    res.status(200).json({
        data: productMocks,
        message: 'products updated'
    });
});

router.delete('/', (req, res) => {
    res.status(200).json({
        data:productMocks[0],
        message: 'products deleted'
    });
});

module.exports = router;