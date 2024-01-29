function maxNumber(array) {

    let topNums = [];

    for(let i = 0; i < array.length; i++) {
        let curNum = array[i];
        let isTop = true;

        for(let j = i + 1; j < array.length; j++) {
            let rightNum = array[j];

            if(curNum <= rightNum) {
                isTop = false;
            }
        }

        if(isTop) {
            topNums.push(curNum);
        }

    }

    console.log(topNums.join(' '));

}

maxNumber([14, 24, 3, 19, 15, 17])