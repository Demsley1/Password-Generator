// Assignment Code
var generateBtn = document.querySelector("#generate");
// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];



function getUserOptions() {
  // Ask user if they would like to continue and proceed if yes
  var clickConfirm = window.confirm("Would you like to create a new random password?");
  if(clickConfirm) {
    alert("Let's get started then");
    // for create length function i am going to set a while loop that iterates through each array asking for a random value filling a new array, < less the value determined already from the funciton.
    createLength();
    // run each funcion and set the value for the function to equal a new variable.

    var upperCaseValue = upperCaseChar();
    var lowerCaseValue = lowerCaseChar();
    var specialCharValue = specialChar();
    var numericCharValue = numericChar();

    // Use the retrieved variable values and input them all into a options object that should serve as the template for the selections to iterate each value in password.
    let options = {
      Casevalue1 : upperCaseValue,
      Casevalue2 : lowerCaseValue,
      Casevalue3 : specialCharValue,
      Casevalue4 : numericCharValue,
    };

    console.log(options);
    return options;
  }
  else {
    alert("Have a nice day.");
  }
}

/* Used uppercase value funciton to ask and return a value for prompt of uppercase character inclusion. 
Funciton serves as template for every array that will be asked for inclusion. Possible redundancy and will be changed 
with working model set-up. */
function upperCaseChar() {
  var upCase = prompt("would you like the password to include Uppercase characters. Type 'Yes' or 'No' for answer.");
  if (upCase == 'YES' || upCase == 'yes') {
    upCase = true; 
    console.log(" password has uppercase included " + upCase);
    return upCase;
  }
  else if (upCase == 'NO' || upCase == 'no') {
    upCase = false;
    console.log("no uppercase included for password");
    return upCase;
  }
  else {
    alert("Not an accepted response");
    upperCaseChar();
  }
}

function lowerCaseChar() {
  var lowCase = prompt("would you like the password to include Lowercase characters. Type 'Yes' or 'No' for answer.");
  if (lowCase == 'YES' || lowCase == 'yes') {
    lowCase = true; 
    console.log(" password has lowercase included " + lowCase);
    return lowCase;
  }
  else if (lowCase == 'NO' || lowCase == 'no') {
    lowCase = false;
    console.log("no lowercase included for password");
    return lowCase;
  }
  else {
    alert("Not an accepted response");
    lowerCaseChar();
  }
}

function specialChar() {
  var specChar = prompt("would you like the password to include special characters. Type 'Yes' or 'No' for answer.");
  if (specChar == 'YES' || specChar == 'yes') {
    specChar = true; 
    console.log(" password has special character included " + specChar);
    return specChar;
  }
  else if (specChar == 'NO' || specChar == 'no') {
    specChar = false;
    console.log("no special character included for password");
    return specChar;
  }
  else {
    alert("Not an accepted response");
    specialChar();
  }
}

function numericChar() {
  var numChar = prompt("would you like the password to include numeric characters. Type 'Yes' or 'No' for answer.");
  if (numChar == 'YES' || numChar == 'yes') {
    numChar = true; 
    console.log(" password has numeric character included " + numChar);
    return numChar;
  }
  else if (numChar == 'NO' || numChar == 'no') {
    numChar = false;
    console.log("no numeric character included for password");
    return numChar;
  }
  else {
    alert("Not an accepted response");
    numericChar();
  }
}

function createLength() {
  var passwordLength = parseInt(prompt("How long should password length be? Choose a Value between '8' and '128' characters."));
  // Press cancel after prompt should result in confirm end of functions.
  if (passwordLength >= 8 &&  passwordLength <= 128) {
    console.log(" password length is set to " + passwordLength + " characters.");
    return passwordLength;
  }
  else if (passwordLength < 8 || passwordLength > 128) { 
    alert("Amount selected is outside of acceptable range, Try Again");
    createLength();
  }
  else {
    alert("Invalid input");
    createLength();
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;
}

function generatePassword() {
  var UserOptions = getUserOptions();
  // create a while loop that iterates through each array depending on the values in the options object.
  UserOptions = [];
  console.log(UserOptions);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/* method: create an empty array for each user generated password, then push() the chars in up to a certain length which is a breakpoint that is determined from a function asking for length of password. */