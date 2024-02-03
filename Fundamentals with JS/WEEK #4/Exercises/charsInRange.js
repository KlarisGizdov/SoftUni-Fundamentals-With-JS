function printCharactersBetween(char1, char2) {

  const code1 = char1.charCodeAt(0);
  const code2 = char2.charCodeAt(0);

  const start = Math.min(code1, code2) + 1;
  const end = Math.max(code1, code2);

  let result = '';
  for (let i = start; i < end; i++) {
    result += String.fromCharCode(i) + ' ';
  }

  console.log(result);
}

printCharactersBetween('a', 'd');
