const productMocks = require('../utils/mocks/products');
const MongoLib = require('../lib/mongo');

class ProductsService {
    constructor() {
        this.collection = 'products';
        this.mongoDB = new MongoLib();
    }

    async getProducts({ tags }) {
        const query = tags && { tags: { $in: tags } };
        const products = await this.mongoDB.getAll(this.collection, query);
        return products || [];
    };

    async getProduct({ id }) {
        const product = await this.mongoDB.get(this.collection, id);
        return product || {};
    };

    async createProduct({ product }) {
        const createProductId = await this.mongoDB.create(this.collection, product);
        return createProductId;
    };

    async updateProduct({ id, product }) {
        const updateProductId = await this.mongoDB.update(
            this.collection,
            id,
            product 
            );

        return updateProductId;
    };

    async deleteProduct({ id }) {
        const deletedProductId = await this.mongoDB.delete(
            this.collection,
            id
        )

        return deletedProductId
    };

};

module.exports = ProductsService;