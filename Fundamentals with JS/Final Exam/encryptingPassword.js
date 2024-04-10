function processPasswords(inputs) {
    const numInputs = parseInt(inputs[0]);
  
    for (let i = 1; i <= numInputs; i++) {
      const password = inputs[i];
      const match = password.match(/^(.+?)(>)(.*?)\|(.*?)\|(.*?)\|(.*?)(<)\1$/);
  
      if (match) {
        const middleGroups = match[3].length === 3 &&
                             match[4].length === 3 &&
                             match[5].length === 3 &&
                             match[6].length === 3;
  
        const numbersValid = match[3].match(/^\d+$/);
        const lowercaseValid = match[4].match(/^[a-z]+$/);
        const uppercaseValid = match[5].match(/^[A-Z]+$/);
        const symbolsValid = match[6].match(/^[^<>]+$/);
  
        if (middleGroups && numbersValid && lowercaseValid && uppercaseValid && symbolsValid) {
          const encrypted = match[3] + match[4] + match[5] + match[6];
          console.log(`Password: ${encrypted}`);
        } else {
          console.log("Try another password!");
        }
      } else {
        console.log("Try another password!");
      }
    }
  }
  
processPasswords((["3",
"##>00|no|NO|!!!?<###",
"##>123|yes|YES|!!!<##",
"$$<111|noo|NOPE|<<>$$"])
)