const productMocks = require('../utils/mocks/products');

class ProductsService {
    constructor() {

    }

    getProducts({ tags }) {
        return Promise.resolve(productMocks);
    };

    getProduct({ id }) {
        return Promise.resolve(productMocks[0]);
    };

    createProduct({ product }) {
        return Promise.resolve(productMocks[0]);
    };

    updateProduct({ id, product }) {
        return Promise.resolve(productMocks[0]);
    };

    deleteProduct({ id }) {
        return Promise.resolve(productMocks[0]);
    };

};

module.exports = ProductsService;