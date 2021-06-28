const productsMock = [
    {
        name: 'Red dress',
        price: 100,
        image: 'https://res.cloudinary.com/drl9vgjbw/image/upload/v1624636245/vestido_wnaskp.jpg',
        tags: ['expensive', 'red']
    },
    {
        name: 'Black bike',
        price: 300,
        image: 'https://res.cloudinary.com/drl9vgjbw/image/upload/v1624636539/express/bike_g4yf7c.jpg',
        tags: ['expensive', 'black']
    }
];

function filteredProductsMock(tag) {
    return productsMock.filter(product => product.tags.includes(tag));
}

class ProductsServiceMock {
    async getProducts() {
        return Promise.resolve(productsMock);
    }

    async createProduct() {
        return Promise.resolve('60d660417e806d24d4fb5a87')
    }
}

module.exports = {
    productsMock,
    filteredProductsMock,
    ProductsServiceMock
};