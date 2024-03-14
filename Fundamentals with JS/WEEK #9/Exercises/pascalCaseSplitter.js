function pascalCaseSplitter(str) {

    let result = str.split(/(?=[A-Z])/)

    console.log(result.join(', '));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')