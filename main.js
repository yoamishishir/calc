function display(value) {
    document.getElementById("calPLayground").value += value;
}

function clearScreen() {
    document.getElementById("calPLayground").value = "";
}

function solve() {
    let input = document.getElementById("calPLayground").value;
    if (input) {
        document.getElementById("calPLayground").value = eval(input);
    }
}

// info display js
let infoBtn = document.getElementById("infoBtn");
let infoWrap = document.getElementById("infoWrap");
let infoContainer = document.getElementById("infoContainer");
let infoClosebtn = document.getElementById("infoClosebtn");

infoBtn.addEventListener("click", ()=>{
if(infoClosebtn.value == "close")
{
    infoContainer.style.top="0";
    infoClosebtn.value="open";
    setTimeout(()=>{
    infoContainer.style.borderBottomRightRadius="0";
    infoContainer.style.borderBottomLeftRadius="0";
    },150);
}
});

infoClosebtn.addEventListener("click", ()=>{

if(infoClosebtn.value == "open")
{
    infoContainer.style.top="-100%";
    infoContainer.style.borderBottomRightRadius="20%";
    infoContainer.style.borderBottomLeftRadius="50%";
    infoClosebtn.value="close";
}
    
});