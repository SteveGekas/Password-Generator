
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "`~!@#$%^&*()_+=-[]\|}{;:,<.>/?";
var possibleCharacters = ''




function generatePassword() {
  var finalPwd = '';
  var lengthConfirm = prompt("Please choose between 8 and 128 characters to make your password.");

  if (lengthConfirm < 8 || lengthConfirm > 128) {
    alert("Password must be BETWEEN 8 and 128 characters.")
    console.log(lengthConfirm);
  }

  else {
    var lowerConfirm = confirm("Would you like it to contain lower case letters?");


    if (lowerConfirm) {
      possibleCharacters += lowerCase;
      console.log(possibleCharacters);
    }

    var upperConfirm = confirm("Would you like it to contain upper case letters?");

    if (upperConfirm) {
      possibleCharacters += upperCase;
      console.log(possibleCharacters);
    }
    var numberConfirm = confirm("Would you like it to contain numbers?");

    if (numberConfirm) {
      possibleCharacters += numbers;
      console.log(possibleCharacters);
    }

    var symbolConfirm = confirm("Would you like it to contain symbols?");

    if (symbolConfirm) {
      possibleCharacters += symbols;
      console.log(possibleCharacters);

    }

  
  if (lowerConfirm === false && upperConfirm === false && numberConfirm === false && symbolConfirm === false) {
    alert("At least one character set MUST be chosen.")
    //generatePassword()
  }

  for (var i = 0; i < lengthConfirm; i++) {

    var index = Math.floor(Math.random() * possibleCharacters.length);

    finalPwd += possibleCharacters[index];

  }
  return finalPwd;
}

}
// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


