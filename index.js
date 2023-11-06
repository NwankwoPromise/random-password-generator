const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 15
let password = ""
let randomPassword1 = document.getElementById("random-password-1")
let randomPassword2 = document.getElementById("random-password-2")

//  generates 15 random keys from characters array
function passwordGenerator() {
  for (let i = 0; i < passwordLength; i++) {
    let randomKey = Math.floor(Math.random() * characters.length)
    password += characters[randomKey]
  }
  return password
}

// displays password 1
function renderRandomPassword1() {
  password = "" //everytime function is called it resets it to display a new set, rather than adding to already existing one.
  let RandomPassword = passwordGenerator()
  randomPassword1.value = RandomPassword
}

// displays password 2
function renderRandomPassword2() {
  password = "" //everytime function is called it resets it to display a new set, rather than adding to already existing one.
  let RandomPassword = passwordGenerator()
  randomPassword2.value = RandomPassword
}

// combines the two functions to be called at once.
function renderRandomPassword() {
  renderRandomPassword1();
  renderRandomPassword2();
}

// copies password on click 
function copyPassword1() {
  randomPassword1.select()
  randomPassword1.setSelectionRange(0, 99999)
  document.execCommand('copy')
}
function copyPassword2() {
  randomPassword2.select()
  randomPassword2.setSelectionRange(0, 99999)
  document.execCommand('copy')
}

document.getElementById("my-btn").addEventListener("click", renderRandomPassword)

document.getElementbyId("copy-btn1").addEventListener("click", copyPassword1)
document.getElementbyId("copy-btn2").addEventListener("click", copyPassword2)
