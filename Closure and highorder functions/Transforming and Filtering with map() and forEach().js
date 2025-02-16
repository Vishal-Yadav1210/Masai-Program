function processProducts(products) {
    // Step 1: Use map() to extract the product names
    const productNames = products.map(product => product.name);

    // Step 2: Use forEach() to iterate over the products and log messages
    products.forEach(product => {
        if (product.price > 50) {
            console.log(`${product.name} is above $50`);
        } else {
            console.log(`${product.name} is below $50`);
        }
    });
}

// Example usage:
const products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 20 }
];

processProducts(products);
