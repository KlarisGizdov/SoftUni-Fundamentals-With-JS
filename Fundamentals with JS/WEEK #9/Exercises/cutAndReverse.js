function cutAndReverse(string) {

    let middle = string.length / 2;
    let firstHalf = string.slice(0, middle).split('').reverse().join('');
    let rightHalf = string.slice(middle).split('').reverse().join('');

    console.log(firstHalf);
    console.log(rightHalf);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')