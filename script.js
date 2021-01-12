// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "`~!@#$%^&*()_+=-[]\|}{;:,<.>/?";

var input = [];

function generatePassword() {
  var lengthConfirm = prompt("Please choose between 8 and 128 characters for your password.");

  if (lengthConfirm < 8 || lengthConfirm > 128) {
    alert("Password must be BETWEEN 8 and 128 characters.")
    return password = "";
  }

  else {
    var lowerConfirm = confirm("Would you like it to contain lower case letters?");

    if (lowerConfirm = false) {
      password -= lowerCase;
    }

    else {
      var upperConfirm = confirm("Would you like it to contain upper case letters?");

      if (upperConfirm = false) {
        password -= upperCase;
      }

      else {
        var numberConfirm = confirm("Would you like it to contain numbers?");

        if (numberConfirm = false) {
          password -= numbers;
        }
  
        else {
          var symbolConfirm = confirm("Would you like it to contain symbols?");

          if (symbolConfirm = false) {
            password -= symbols
          }

          else if (lowerConfirm === false && upperConfirm === false && numberConfirm === false && symbolConfirm === false) {
            alert("At least one character set MUST be chosen.")
          }

          else {
            return writePassword();
          }
        }

      }
    }
    passwordInput = "";
      for(var i=0; i<lengthConfirm; i++) {

        var finalPwd = Math.floor(Math.random() * input.length);
        passwordInput += input[finalPwd] + "";
      }

      return finalPwd;
  }
 
  

  
    
  

 

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
