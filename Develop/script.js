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

    // Use the retrieved variable values and input them all into a options object that should serve as the template for the selections to iterate each value in password.
    var uppCaseValue =  upperCaseChar();
    var lowCaseValue = lowerCaseChar();
    var numCharValue = numericChar();
    var specCharValue = specialChar();
    
    
    var options = {
      upperCase: uppCaseValue,
      numericCharacter: numCharValue,
      specialCharacter: specCharValue,
      lowerCase: lowCaseValue,
    }
    // Need to set a conditional statement so that when the parameter of all var's returning a boolean value of false, then it should re-run the funciton and alert user to choose true for at least one option.
    /* if (Object.keys(options).every((k) => !options[k])) {
          alert("You need to choose ok for at least one option to continue");
          getUserOptions();
        }
      // Causes it to give undefined for each property of the object after the function is re-run to get a true value.
      if (uppCaseValue || specCharValue || lowCaseValue || numCharValue) {}
      else {
      alert ("you need to select ok to at least one option");
      getUserOptions();
      } 
     */
    console.log(options);
    return options; 
  }
  // should stop all functions from executing after this condition is activated
  else {
    alert("Have a nice day.");
    return;
  }
}

/* each function pertaining to the chracter arrays is essentially identical except for portions that are unique to that variable. 
  I attempted to shorten or condense functions into one but kept running into issues.*/
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

  var passwordArray = [];
  var potentialChars = [];  
  var mustHaveChars = [];
  
  // loop to add each element according to conditional statement up until chosen size of array.
  while ( mustHaveChars.length < (arraySize - 1)) {
    if (UserOptions.upperCase === true) {
      // ex: var case to get random index number for array, then picks and pushes random char from global array into new consolidated array based on chosen chars.
      var upValue = Math.floor(Math.random()* 26);
      var onePush = upperCasedCharacters[upValue];
      mustHaveChars.push(onePush);
    }
    if (UserOptions.lowerCase === true) {
      var lowValue = Math.floor(Math.random()* 26);
      var onePush = lowerCasedCharacters[lowValue];
      mustHaveChars.push(onePush);
    }
    if (UserOptions.numericCharacter === true) {
      var numValue = Math.floor(Math.random()* 10);
      var onePush = numericCharacters[numValue];
      mustHaveChars.push(onePush);
    }
    if (UserOptions.specialCharacter === true) {
      var specValue = Math.floor(Math.random()* 23);
      var onePush = specialCharacters[specValue];
      mustHaveChars.push(onePush);
    }
  }

  // for loop to determine the length of password generating array, based on length creating funcion.
  let integerPush = "";
  for (let i = 0; i < arraySize; i++) {
    integerPush = i;
    potentialChars.push(integerPush);
  }
  
  passwordArray.push(potentialChars);
  console.log(potentialChars);
  
  console.log(mustHaveChars);
  
  passwordArray.splice(0, arraySize, mustHaveChars);
  console.log(passwordArray);

  

  // returns value for password array created through user options, and pushed random character values.
  // still leaves array in comma sectioned array form when using .join method
  return passwordArray.join(" ");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
