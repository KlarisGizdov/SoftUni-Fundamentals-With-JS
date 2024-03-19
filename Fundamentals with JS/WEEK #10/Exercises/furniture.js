function calculateTotalCost(input) {
    
    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>[0-9.]+)!(?<quantity>\d+)/;
    let price = 0;
    console.log("Bought furniture:");
    for(let line of input) {
        if(line === 'Purchase') {
            break;
        }

        if(pattern.test(line)) {
            let product = pattern.exec(line);
            let currPrice = Number(product.groups.price) * Number(product.groups.quantity);
            price += currPrice;
            console.log(product.groups.name);
        }
    }
    console.log(`Total money spend: ${price.toFixed(2)}`);
}

calculateTotalCost([
    '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
]);
