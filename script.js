const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //26
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"; //26
const numberLetters = "0123456789"; //10
const symbolLetters = "-=[]\\;',./!@#$%^&*()_+|:\"<>?"; 
let passwordBank = "";
const LettersBank = [upperCaseLetters, lowerCaseLetters, numberLetters, symbolLetters];

const passwordStrength  = ["too weak", "weak", "medium", "strong"];


// radios
let a = 1; 
let b = 5;
let c = 13;
let d = 23;

const uppercaseInput = document.getElementById("uppercase-checkbox");
const lowercaseInput = document.getElementById("lowercase-checkbox");
const numbersInput = document.getElementById("numbers-checkbox");
const symbolsInput = document.getElementById("symbols-checkbox");

const checkboxOptions = document.querySelectorAll(".option-checkbox");
const passwordPlaceholder = document.getElementById("password-placeholder");

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



const rangeInput = document.getElementById("password-length");
const rangeValue = document.getElementById("password-length-value");
const rangeHandler = function() {
    rangeValue.textContent = rangeInput.value;
};
rangeInput.addEventListener("input", rangeHandler);





function knowPasswordDifficulty(charactersBank) {
    let bankLength = charactersBank.length;
    let symbolsQuantity = Number(rangeValue.textContent);
    let passwordStrengthBit = symbolsQuantity * Math.log2(bankLength);
    passwordBankBeforeGen = "";
    console.log(passwordStrengthBit);
    difficultyDescription(passwordStrengthBit);
    
}

const strengthDesc = document.getElementById("strength-desc");
const strengthBars = Array.from(document.querySelectorAll(".strength-result-item"));
function difficultyDescription(strengthBit) {
    switch(true) {
        case (strengthBit < 35):
            strengthDesc.textContent = passwordStrength[0];
            strengthBars[0].style.backgroundColor = "red";
            strengthBars[0].style.borderColor = "red";
            break;
        case(strengthBit > 35 && strengthBit < 60):
            strengthDesc.textContent = passwordStrength[1];
            strengthBars.slice(0,2).forEach((element) => {
                element.style.backgroundColor = "orange";
                element.style.borderColor = "orange";
              });
            break;
        case(strengthBit > 60 && strengthBit < 120):
            strengthDesc.textContent = passwordStrength[2];
            strengthBars.slice(0,3).forEach((element) => {
                element.style.backgroundColor = "yellow";
                element.style.borderColor = "yellow";
              });
            break;
        case(strengthBit > 120):
            strengthBars.forEach((element) => {
                element.style.backgroundColor = "#a4ffae";
                element.style.borderColor = "#a4ffae";
            });
            strengthDesc.textContent = passwordStrength[3];
            break;
        
    }

}


const generatePasswordBtn = document.getElementById("generate-password-btn");
const generatePasswordBtnHandler = function() {
    generatePassword();
    knowPasswordDifficulty(passwordBankBeforeGen);
}
generatePasswordBtn.addEventListener("click", generatePasswordBtnHandler);

const copypasswordBtn = document.getElementById("copy-btn");
/*
copypasswordBtn.addEventListener("click", () => {
   // Создаем временный элемент textarea
  const textarea = document.createElement("textarea");
  textarea.value = passwordPlaceholder.textContent;
  document.body.appendChild(textarea);

  // Выделяем текст в textarea и копируем его в буфер обмена
  textarea.select();
  document.execCommand("copy");

  // Удаляем временный элемент
  document.body.removeChild(textarea);

  // Оповещаем пользователя
  alert("Текст скопирован в буфер обмена");

}); */
function copyPassword() {
    //navigator.clipboard.writeText(passwordPlaceholder.textContent);
    //alert("Copied the text: " + passwordPlaceholder.textContent);
    navigator.clipboard.writeText(passwordPlaceholder.textContent).then(function() {
        console.log('Async: Copying to clipboard was successful!');
      }, function(err) {
        console.error('Async: Could not copy text: ', err);
      });
}
copypasswordBtn.addEventListener("click", copyPassword());