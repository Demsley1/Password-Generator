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
    if (clickConfirm) {
      alert("Let's get started then");
      
      var passwordLength = prompt("How long should password length be? Choose an answer between '8' and '128' characters.");
      // Press cancel after prompt should result in confirm end of functions.
      if (passwordLength >= 8 &&  passwordLength <= 128) {
        console.log(" password length is set to " + passwordLength + " characters.");
      }
      else if (passwordLength < 8 || passwordLength > 128) { 
        alert("Amount selected is outside of acceptable range, Try Again");
        getUserOptions();
      }
      else {
        alert("Invalid input");
        getUserOptions();
      }
      
    }
 
    else {
      alert("Have a nice day.");
    }

  // return optionsObject ()
}

function generatePassword (choices) {

  var paswordArray = []
  var potentialChars = [];
  var mustHaveChars = [];

  //if chocies.upperCase === true
    // mustHavechars.push(random char from UpperCase Array)

  // same for each array

  // loop to the length of the asked for password
    // push from the potentialChars to the passwordArray

  // loop through must have
    // replace for each one in the password Array


  //Ask the user, using prompts, pass criteria
   
  // ask length
  // calidate between 8-128

  // user chooses if to include lowercase & Uppercase
    // check if upper
    // add to password a random char from the uppercase chars

    // check if lower 
    // add to password a random char from the lowercase chars

  // upercase
  // numeric
  // and or special characters

  //validate that the user choose at least one character type

  // generate password



  // return password as string 
  return UserOptions;



}

// Write password to the #password input
function writePassword() {
  var UserOptions = getUserOptions();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



/* for([initial expression]; [condition]; [increment expression]) {
   statement
} */

/* example: for(var i = 0; i < 1; i++) {
  console.log("apple");
} 
  example 2:for(var i=0; i < specialCharacters.length; i++) {
    console.log(specialCharacters[i]);

    while loop ex: while ([condition]) {statement};

    call it in whatever function: getUserOptions(specialCharacters);
} */

// math.floor(math.random() * arr.length);
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
