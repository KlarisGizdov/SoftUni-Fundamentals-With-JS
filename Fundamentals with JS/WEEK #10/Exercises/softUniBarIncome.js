function processOrders(input) {
    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>[0-9]+\.?\d*)\$/

    let total = 0;

    for(let line of input) {
        let match = [];
        if(line === 'end of shift') {
            break;
        }
    

        if(pattern.test(line)) {
            match = line.match(pattern);
            let price = Number(match.groups.price) * Number(match.groups.count);
            total += price;
            console.log(`${match.groups.name}: ${match.groups.product} - ${price.toFixed(2)}`);

        }
    }

    console.log(`Total income: ${total.toFixed(2)}`);
}

processOrders([
    '%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift'

]);
