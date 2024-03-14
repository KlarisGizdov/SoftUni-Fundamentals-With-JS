function storeProvision(stock, orderedProducts) {
    let products = [];

    for (let i = 0; i < stock.length; i += 2) {
        let productName = stock[i];
        let qty = Number(stock[i + 1]);

        let productObject = {
            name: productName,
            qty: qty
        };

        products.push(productObject);
    }

    for (let i = 0; i < orderedProducts.length; i += 2) {
        let productName = orderedProducts[i];
        let qty = Number(orderedProducts[i + 1]);

        let productFound = products.find(p => p.name === productName);

        if (productFound) {
            productFound.qty += qty;
        } else {
            let productObject = {
                name: productName,
                qty: qty
            };
            products.push(productObject);
        }
    }

    for (let productObj of products) {
        console.log(`${productObj.name} -> ${productObj.qty}`);
    }
}

storeProvision(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);
