function passwordValidator(pass) {
  let isValidLength = checkLength(pass);
  let hasOnlyLettersDigits = checkOnlyLettersDigits(pass);
  let aboveTwoDigits = checkDigitsCount(pass);

  if (
    isValidLength === true &&
    hasOnlyLettersDigits === true &&
    aboveTwoDigits === true
  ) {
    console.log("Password is valid");
  }

  function checkLength(password) {
    if (password.length < 6 || password.length > 10) {
      console.log("Password must be between 6 and 10 characters");
      return false;
    } else {
      return true;
    }
  }

  function checkOnlyLettersDigits(password) {
    let pattern = /^[A-Za-z0-9]+$/;

    let isValid = pattern.test(password);

    if (isValid === true) {
      return true;
    } else {
      console.log("Password must consist only of letters and digits");
      return false;
    }
  }

  function checkDigitsCount(password) {
    let pattern = /[0-9]{2,}/;

    let isValid = pattern.test(password);

    if (isValid === true) {
      return true;
    } else {
      console.log("Password must have at least 2 digits");
      return false;
    }
  }
}
passwordValidator("logIn");
