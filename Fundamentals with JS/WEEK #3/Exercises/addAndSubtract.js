function addAndSubtract(array) {

    let sum = 0;
    let newArray = [];
    let sumNew = 0;
    
    for(let i = 0; i < array.length; i++) {
        let curNum = array[i]
        sum += curNum;

        if(curNum % 2 === 0) {
            curNum += i;
        } else {
            curNum -= i;
        }

        array[i] = curNum;

        sumNew += curNum;

    }

    console.log(array);
    console.log(sum);
    console.log(sumNew);

}
addAndSubtract([5, 15, 23, 56, 35])