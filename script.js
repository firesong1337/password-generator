const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numberLetters = "0123456789";
const symbolLetters = "-=[]\\;',./!@#$%^&*()_+|:\"<>?";
let passwordBank = "";

const passwordStrength  = ["too weak", "weak", "medium", "strong"];
let passwordLength = 10;

// radios
let a = 1; 
let b = 5;
let c = 13;
let d = 23;

const uppercaseInput = document.getElementById("uppercase-checkbox");
const lowercaseInput = document.getElementById("lowercase-checkbox");
const numbersInput = document.getElementById("numbers-checkbox");
const symbolsInput = document.getElementById("symbols-checkbox");

// result radios
let y = 0;
switch(y) {
    // a
    case (1):
        passwordBank = upperCaseLetters;
        break;
    case (6):
    passwordBank = upperCaseLetters + lowerCaseLetters;
    break;
    case (14):
        passwordBank = upperCaseLetters + numberLetters;
        break;
    case (24):
    passwordBank = upperCaseLetters + symbolLetters;
    break; 
    // b
    case (5):
        passwordBank = lowerCaseLetters;
        break;
    case (18):
    passwordBank = lowerCaseLetters + numberLetters;
    break;
    case (28):
        passwordBank = lowerCaseLetters + symbolLetters;
        break;
    // c 
    case (13):
        passwordBank = numberLetters;
        break;
    case (36):
    passwordBank = numberLetters + symbolLetters;
    break;
    // d 
    case (23):
        passwordBank = symbolLetters;
        break;
    
    // sum > 3 
    case (19):
        passwordBank = upperCaseLetters + lowerCaseLetters + numberLetters;
        break;
    case (29):
    passwordBank = upperCaseLetters + lowerCaseLetters + symbolLetters;
    break;
    case (37):
        passwordBank = upperCaseLetters + numberLetters + symbolLetters;
        break;
    case (41):
    passwordBank = lowerCaseLetters + numberLetters + symbolLetters;
    break; 
    // sum = 4
    case(42): 
    passwordBank = upperCaseLetters + lowerCaseLetters + numberLetters + symbolLetters;
    break;
}
function generatePassword() {
    let password = "";
    for (let i = 0; i < passwordLength; i++ ) {
        password += passwordBank.charAt(Math.floor(Math.random() * passwordBank.length));
    }
    return password;
}

/*
function knowPasswordDifficulty() {
    let lengthBank = passwordBank.length;
    let symbolsQuantity = passwordLength;
    let passwordStrengthBit = lengthBank * Math.log(symbolsQuantity)/Math.log(2);
}
*/

const rangeInput = document.getElementById("password-length");
const rangeValue = document.getElementById("password-length-value");
const rangeHandler = function() {
    rangeValue.textContent = rangeInput.value;
};
rangeInput.addEventListener("input", rangeHandler)
