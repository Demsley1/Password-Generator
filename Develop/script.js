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
    
    // run each function and set the value for the function to equal a new variable.
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
    }

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
  var upCase = confirm("would you like the password to include Uppercase characters. Type 'Yes' or 'No' for answer.");
  if (upCase) {
    console.log(" password has uppercase included " + upCase);
    return upperCasedCharacters;
  }
  else if (upCase == false) {
    console.log("no uppercase included for password");
    return upCase;
  }
  else {
    alert("Not an accepted response");
    upperCaseChar();
  }
}

function lowerCaseChar() {
  var lowCase = confirm("would you like the password to include Lowercase characters. Type 'Yes' or 'No' for answer.");
  if (lowCase) {
    console.log(" password has lowercase included " + lowCase);
    return lowerCasedCharacters;
  }
  else if (lowCase == false) {
    console.log("no lowercase included for password");
    return lowCase;
  }
  else {
    alert("Not an accepted response");
    lowerCaseChar();
  }
}

function specialChar() {
  var specChar = confirm("would you like the password to include special characters. Type 'Yes' or 'No' for answer.");
  if (specChar) {
    console.log(" password has special character included " + specChar);
    return specialCharacters;
  }
  else if (specChar == false) {
    console.log("no special character included for password");
    return specChar;
  }
  else {
    alert("Not an accepted response");
    specialChar();
  }
}

function numericChar() {
  var numChar = confirm("would you like the password to include numeric characters. Type 'Yes' or 'No' for answer.");
  if (numChar) {
    console.log(" password has numeric character included " + numChar);
    return numericCharacters;
  }
  else if (numChar == false) {
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
  var arraySize = createLength();
  var charset = (JSON.stringify(UserOptions));
  arrayValue = "";
  for (var i = 0, n = charset.length; i < arraySize; i++) {
    arrayValue += charset.charAt(Math.floor(Math.random() * n));
  }
  return arrayValue;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/* method: create an empty array for each user generated password, then push() the chars in up to a certain length which is a breakpoint that is determined from a function asking for length of password. */
// change the fuctions that ask each question to a window confirm to get true or false value in each function.
// then use math.random method in each funciton to get the random array value for use.

/* function generate(min, max) {
  return Math.floor(Math.random()*(max - min) ) + min;
}

// create a while loop that iterates through each array depending on the values in the options object.
// while loop is working, but needs to run once for each variable then constanly push that variable into an ever growing array.
// only way to read whole string of array values is if all values are being pushed at once 
while (i < arraySize) {
  switch (UserOptions.upperCase === true) {
    case true:
    function generate(min, max) {
      return Math.floor(Math.random()*(max - min) ) + min;
    }
    var first = generate(0, 26);
    upperCasedCharacters[first];
    default:
      !generate();
  }
  switch (UserOptions.lowerCase === true) {
    case true:
    function generate(min, max) {
      return Math.floor(Math.random()*(max - min) ) + min;
    }
    var second = generate(0, 26);
    lowerCasedCharacters[second];
    default:
      !generate();
  }
  switch (UserOptions.numericCharacter == true) {
    case true:
    function generate(min, max) {
      return Math.floor(Math.random()*(max - min) ) + min;
    }
    var third = generate(0, 10);
    numericCharacters[third];
    default:
      !generate();
  }
  function specialCharacter(){
    if (UserOptions.specialCharacter == true) {
      var fourth = generate(0, 23);
      specialCharacters[fourth];
    }
    else {}
  }
    
 //  var wicked = []
 console.log(specialCharacter(),)
 //  console.log(wicked);
  i++;
}
// going to have to fix code to not accept or use a value if not-defined/undefined. If calue is not defined hopeflly not take up space in string for array.
// then bring all values in array out of array and if in string form out of string, then append into text, to show up in the box. */