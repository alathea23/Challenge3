var generateBtn = document.querySelector("#generate");

//defining character sets
var UpperCaseSet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z'];
var LowerCaseSet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var NumberSet = ['0', "1", '2', '3', '4', '5', '6', '7', '8', '9']
var SpecialSet = ['!', '?', '$', '#', '&', '*', '@', '#']


function generatePassword() {
  //setting up alert boxes asking about password specifications
  var uppercase = confirm("Would you like uppercase letters in your password? \n \n   Select 'cancel' for no.");
  var lowercase = confirm("Would you like lowercase letters in your password? \n \n   Select 'cancel' for no.");//true or false
  var numbers = confirm("Would you like numbers in your password? \n \n   Select 'cancel' for no.");//true or false
  var specialcharacters = confirm("Would you like special characters in your password? \n \n   Select 'cancel' for no.");//true or false
  var passwordlength = prompt("How long would you like your password to be? \n \n   Enter a value between 8 and 128.");

//setting up warning messages for incorrect password lengths.  NOTE: seems to be impossible to actually limit character input into prompt boxes, so set up warnings with the option for one-time correction.  
  if (passwordlength > 128) {
  passwordlength = prompt("ERROR - Your number was too large, please enter a value between 8 to 128.")
}
else if(passwordlength < 8) {
  passwordlength = prompt("ERROR - Your number was too small, please enter a value between 8 to 128.")
}
else if(isNaN(passwordlength)) {
  passwordlength = prompt("ERROR - You must enter a number, please enter a value between 8 to 128.")
}

//console tests for code function (could remove but I used these when building)
  console.log(passwordlength)
  console.log(uppercase)
  console.log(numbers)

  //setting up variables
  var allCharacters = []
  var password = ""
  console.log(allCharacters)

  //sestablishing character array in response to user input
  if (uppercase) {
    allCharacters = allCharacters.concat(UpperCaseSet)
    console.log(allCharacters)
  };
  if (lowercase) {
    allCharacters = allCharacters.concat(LowerCaseSet)
    console.log(allCharacters)
  };
  if (numbers) {
    allCharacters = allCharacters.concat(NumberSet)
    console.log(allCharacters)
  };
  if (specialcharacters) {
    allCharacters = allCharacters.concat(SpecialSet)
    console.log(allCharacters)
  };

  //generating random password string based on all parameters
  for (let i = 0; i < passwordlength; i++) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)]
    console.log(password)
  }

  //generate return. Will generate error message for incorrect entry of passwordlength
if (passwordlength > 7 && passwordlength < 129) return password
else return password="ERROR ENTERING PASSWORD LENGTH"
  }




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

