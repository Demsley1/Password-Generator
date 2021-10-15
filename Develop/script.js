// Assignment Code
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () {
  var UserOptions() = getUserOptions();
  //Ask the user, using prompts, pass criteria
   
  // ask length
  // calidate between 8-128

  // user chooses if to include lowercase
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



}

function getUserOptions() {
  var optionsObject = {
  }










  return optionsObject ()
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
