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

// all options in this function are supposed to work to deliver a template for the object that wil be used to determine what array is being pulled from or not. 
function getUserOptions() {
  // Ask user if they would like to continue and proceed if yes
  var clickConfirm = window.confirm("Would you like to create a new random password?");
  if(clickConfirm) {
    alert("Let's get started then");

    // Use the retrieved variable values and input them all into a options object that should serve as the template for the selections to iterate each value in password.
    // create a function for each variable in object that is a math random method to get a random index position that attributes to that value.
    let options = {
      upperCase: upperCaseChar(),
      numericCharacter: numericChar(),
      specialCharacter: specialChar(), 
      lowerCase: lowerCaseChar(),
    }

    console.log(options);
    return options;
  }
  else {
    alert("Have a nice day.");
    return;
  }
}

/* Used uppercase value funciton to ask and return value for prompt of uppercase character inclusion that will be turned a boolean value. 
Funciton serves as template for every function that will ask for inclusion of that character from the matching array. 
Possible redundancy in code and time permitting will be changed once you have a working model set-up. */
function upperCaseChar() {
  var upCase = confirm ("would you like the password to include Uppercase characters.");
  switch (upCase) {
    case true:
      console.log(" password has uppercase included " + upCase);
      return upCase;
    case false:
      console.log("no uppercase included for password");
      return upCase;
  }
}      

function lowerCaseChar() {
  var lowCase = confirm("would you like the password to include Lowercase characters.");
  switch (lowCase) {
    case true:
      console.log(" password has lowercase included " + lowCase);
      return lowCase;
    case false:
      console.log("no lowercase included for password");
      return lowCase;
  }
}

function specialChar() {
  var specChar = confirm("would you like the password to include special characters.");
  switch (specChar) {
    case true:
      console.log(" password has special characters included " + specChar);
      return specChar;
    case false:
      console.log("no special characters included for password");
      return specChar;
  }
}

function numericChar() {
  var numChar = confirm("would you like the password to include numeric characters.");
  switch (numChar) {
    case true:
      console.log(" password has numeric characters included " + numChar);
      return numChar;
    case false:
      console.log("no numeric characters included for password");
      return numChar;
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
  var arraySize = createLength();

  var paswordArray = [];
  var potentialChars = [];  
  var mustHaveChars = [];
  

  if (UserOptions.upperCase === true) {
    var upValue = Math.floor(Math.random()* 26);
    var pushUp = upperCasedCharacters[upValue];
    mustHaveChars.push(pushUp);
  }
  if (UserOptions.lowerCase === true) {
    var lowValue = Math.floor(Math.random()* 26);
    var pushLow = lowerCasedCharacters[lowValue];
    mustHaveChars.push(pushLow);
  }
  if (UserOptions.numericCharacter === true) {
    var numValue = Math.floor(Math.random()* 10);
    var pushNum = numericCharacters[numValue];
    mustHaveChars.push(pushNum);
  }
  if (UserOptions.specialCharacter === true) {
    var specValue = Math.floor(Math.random()* 23);
    var pushSpec = specialCharacters[specValue];
    mustHaveChars.push(pushSpec);
  }

  let integerPush = "";
  for (let i = 0; i < arraySize; i++) {
    integerPush = i;
    potentialChars.push(integerPush);
  }
  console.log(mustHaveChars);
  console.log(potentialChars);



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
