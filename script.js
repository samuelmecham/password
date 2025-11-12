const paswordbox = document.getElementById("password")
const generateBttn = document.getElementById("generate")

// checkboxes 
let upercase_box = document.getElementById("uppercase")
let numbers_box = document.getElementById("numbers")
let symbles_box = document.getElementById("symbols")

let langth = document.getElementById("length")



let curpasword = ""

//options
let optionArray = [];
let lowercase_list = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
]
let uppercase_list = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
]
let symble_list = [
    "!","@","#","$","%","^","&","*","(",")",",","<",".",">","/","?",";",":","'","[","{","]","}","|","-","_","=","+","~","`"
]
let number_list =[ 
    "1","2","3","4","5","6","7","8","9","0"
]

generateBttn.addEventListener("click", (e) =>{
    optionArray.push(lowercase_list)
    if(upercase_box.checked){
        optionArray.push(uppercase_list)
    }
    if(numbers_box.checked){
        optionArray.push(number_list)
    }
    if(symbles_box.checked){
        optionArray.push(symble_list)
    }
    curpasword =""
    //console.log(optionArray)
    for(let i = 0; i < langth.value; i++){
        
        let randomindex = Math.floor(Math.random() * optionArray.length)
        let randomletter = Math.floor(Math.random() * optionArray[randomindex].length )
        let selected = optionArray[randomindex][randomletter]
        curpasword += selected
        paswordbox.value = curpasword
    }





    optionArray = []
})