function addressBook(input) {
    let addressMap = new Map();

    for (let entry of input) {
        let [name, address] = entry.split(':');
        addressMap.set(name, address);
    }

    let sortedEntries = Array.from(addressMap.entries()).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, address] of sortedEntries) {
        console.log(`${name} -> ${address}`);
    }
}

addressBook([
    'Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
]);
