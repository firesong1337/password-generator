const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //26
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"; //26
const numberLetters = "0123456789"; //10
const symbolLetters = "-=[]\\;',./!@#$%^&*()_+|:\"<>?"; 
const LettersBank = [upperCaseLetters, lowerCaseLetters, numberLetters, symbolLetters];
const passwordStrength  = ["empty!","too weak", "weak", "medium", "strong"];


const uppercaseInput = document.getElementById("uppercase-checkbox");
const lowercaseInput = document.getElementById("lowercase-checkbox");
const numbersInput = document.getElementById("numbers-checkbox");
const symbolsInput = document.getElementById("symbols-checkbox");

const checkboxOptions = document.querySelectorAll(".option-checkbox");
const passwordPlaceholder = document.getElementById("password-placeholder");

let passwordBank = "";
let passwordBankBeforeGen = "";

function generatePassword() {
    let passwordLength = Number(rangeValue.textContent);
    let password = "";
    
    checkboxOptions.forEach((checkbox, index) => {
        passwordBank += checkbox.checked ? LettersBank[index] : "";
    });
    passwordBankBeforeGen = passwordBank;

    for (let i = 0; i < passwordLength; i++ ) {
        password += passwordBank.charAt(Math.floor(Math.random() * passwordBank.length));
    }
    passwordPlaceholder.textContent = password;
    passwordBank = "";
    return password;
}


function knowPasswordDifficulty(charactersBank) {
    let bankLength = charactersBank.length;
    let symbolsQuantity = Number(rangeValue.textContent);
    let passwordStrengthBit = symbolsQuantity * Math.log2(bankLength);
    passwordBankBeforeGen = "";
    //console.log(passwordStrengthBit);
    difficultyDescription(passwordStrengthBit);
    
}


const generatePasswordBtn = document.getElementById("generate-password-btn");
const copiedMsg = document.getElementById("copied-text");
const generatePasswordBtnHandler = function() {
    generatePassword();
    knowPasswordDifficulty(passwordBankBeforeGen);
    copiedMsg.textContent = "";
}
generatePasswordBtn.addEventListener("click", generatePasswordBtnHandler);



const rangeInput = document.getElementById("password-length");
const rangeValue = document.getElementById("password-length-value");
const rangeHandler = function() {
    rangeValue.textContent = rangeInput.value;
};
rangeInput.addEventListener("input", rangeHandler);

const copypasswordBtn = document.getElementById("copy-btn");
function copyPassword() {
    if (passwordPlaceholder.textContent) {
        navigator.clipboard.writeText(passwordPlaceholder.textContent)
            .then(() => {
                copiedMsg.textContent = "copied"
            })
            .catch(() => {
                console.log("Something went wrong");
            });
    } else {
        console.log("Password placeholder is empty.");
    }
}
copypasswordBtn.addEventListener("click", copyPassword);



const strengthDesc = document.getElementById("strength-desc");
const strengthBars = Array.from(document.querySelectorAll(".strength-result-item"));
function difficultyDescription(strengthBit) {
    strengthBars.forEach((element) => {
        element.style.backgroundColor = "";
        element.style.borderColor = "";
    });
    switch(true) {
        case (strengthBit < 0):
            strengthDesc.textContent = passwordStrength[0];
            strengthBars.forEach((element) => {
                element.style.backgroundColor = "";
                element.style.borderColor = "";
            });
            break;
        case (strengthBit >= 0 && strengthBit < 35):
            strengthDesc.textContent = passwordStrength[1];
            strengthBars[0].style.backgroundColor = "red";
            strengthBars[0].style.borderColor = "red";
            break;
        case(strengthBit >= 35 && strengthBit < 60):
            strengthDesc.textContent = passwordStrength[2];
            strengthBars.slice(0,2).forEach((element) => {
                element.style.backgroundColor = "orange";
                element.style.borderColor = "orange";
              });
            break;
        case(strengthBit >= 60 && strengthBit < 120):
            strengthDesc.textContent = passwordStrength[3];
            strengthBars.slice(0,3).forEach((element) => {
                element.style.backgroundColor = "yellow";
                element.style.borderColor = "yellow";
              });
            break;
        case(strengthBit >= 120):
            strengthDesc.textContent = passwordStrength[4];
            strengthBars.forEach((element) => {
                element.style.backgroundColor = "#a4ffae";
                element.style.borderColor = "#a4ffae";
            });
            break;
    }   

}