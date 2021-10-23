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
    // for create length function i am going to set a while loop that iterates through each array asking for a random value filling a new array, < less the value determined already from the funciton.
    createLength();
    // run each funcion and set the value for the function to equal a new variable.

    var upperCaseValue = upperCaseChar();
    var lowerCaseValue = lowerCaseChar();
    var specialCharValue = specialChar();
    var numericCharValue = numericChar();

    // Use the retrieved variable values and input them all into a options object that should serve as the template for the selections to iterate each value in password.
    // create a function for each variable in object that is a math random method to get a random index position that attributes to that value.
    let options = {
      upperCase: upperCaseValue,
      numericCharacter: numericCharValue, 
      specialCharacter: specialCharValue, 
      lowerCase: lowerCaseValue,
      randomIndex: function call(min, max) {
        return Math.floor(Math.random()*(max - min) ) + min;
      }
    };

    console.log(options);
    return options;
  }
  else {
    alert("Have a nice day.");
  }
}

/* Used uppercase value funciton to ask and return value for prompt of uppercase character inclusion that will be turned a boolean value. 
Funciton serves as template for every function that will ask for inclusion of that character from the matching array. 
Possible redundancy in code and time permitting will be changed once you have a working model set-up. */
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
  // trying to create while loop using number value in creatLength function as a paramater in the while expresion, currently just re-runs the aforementined function again and ends the script so it wont start the switch statements and create the array housing elements of created password.
  var arraySize = createLength();
  // create a while loop that iterates through each array depending on the values in the options object.
  while (generatePassword.length < arraySize) {
    switch (UserOptions.upperCase === true) {
      case true:
      function generate(min, max) {
        return Math.floor(Math.random()*(max - min) ) + min;
      }
      var first = generate(0, 26);
      var firstNum = upperCasedCharacters[first];
      default:
        !generate();
    }
    switch (UserOptions.lowerCase === true) {
      case true:
      function generate(min, max) {
        return Math.floor(Math.random()*(max - min) ) + min;
      }
      var second = generate(0, 26);
      var secondNum = lowerCasedCharacters[second];
      default:
        !generate();
    }
    switch (UserOptions.numericCharacter == true) {
      case true:
      function generate(min, max) {
        return Math.floor(Math.random()*(max - min) ) + min;
      }
      var third = generate(0, 10);
      var thirdNum = numericCharacters[third];
      default:
        !generate();
    }
    switch (UserOptions.specialCharacter == true) {
      case true:
      function generate(min, max) {
        return Math.floor(Math.random()*(max - min) ) + min;
      }
      var fourth = generate(0, 23);
      var fourthNum = specialCharacters[fourth];
      default: 
      !generate();
    }
  } 
  
  // going to have to fix code to not accept or use a value if not-defined/undefined. If calue is not defined hopeflly not take up space in string for array.
  // then bring all values in array out of array and if in string form out of string, then append into text, to show up in the box.
  passwordGenerate = [];
  passwordGenerate.push(firstNum, secondNum, thirdNum, fourthNum);

  console.log(passwordGenerate);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/* method: create an empty array for each user generated password, then push() the chars in up to a certain length which is a breakpoint that is determined from a function asking for length of password. */