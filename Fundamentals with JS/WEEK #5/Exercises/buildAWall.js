function buildAWall(arr) {

    let concreteQtys = [];
    let totalConcrete = 0;

    while(arr.some(arr => arr < 30)) {
        let dailyConcrete = 0;

        for(let i in arr) {
            if(arr[i] < 30) {
                arr[i]++;
                dailyConcrete += 195;
            }
        }

        concreteQtys.push(dailyConcrete);
        totalConcrete += dailyConcrete;

    }

    console.log(concreteQtys.join(', '));           ;
    console.log(`${totalConcrete * 1900} pesos`);

}
buildAWall([21, 25, 28])