function fancyBarcode(input) {

    let pattern = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/;
    let digitPattern = /[0-9]/g;

    let barcodeCount = Number(input.shift());

    for(let i = 0; i < barcodeCount; i++) {
        let curBarCode = input[i];

        if(pattern.test(curBarCode)) {
            let digits = curBarCode.match(digitPattern);
            
            if(digits) {
                let productGroup = digits.join('');
                console.log(`Product group: ${productGroup}`);
            } else {
                console.log('Product group: 00')
            }
        } else {
            console.log('Invalid barcode');
        }
    }
}

fancyBarcode((["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"])
)