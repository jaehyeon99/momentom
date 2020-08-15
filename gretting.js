const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const user_name = "currentuser",
    showing_name= "showing";

function saveName(text){
    localStorage.setItem(user_name,text);
}

function handlesubmit(event){
    event.preventDefault();
    const currentvaule = input.value;
    paintGreeting(currentvaule);
    saveName(currentvaule);
}

function askForName(){
    form.classList.add(showing_name);
    form.addEventListener("submit",handlesubmit)
}

function paintGreeting(text) {
    form.classList.remove(showing_name);
    greeting.classList.add(showing_name);
    greeting.innerText = `안녕하세요 ${text}님`;

}
function loadName(){
    const currentuser = localStorage.getItem(user_name);
    if(currentuser === null){
        askForName();
    }
    else{
        paintGreeting(currentuser);
    }
}

function init(){
    loadName();
}
init();