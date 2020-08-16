const askName = document.querySelector(".askName"),
      input = document.querySelector(".nameBox"),
      greetings = document.querySelector(".greeting");

const USER_LS = "userName",
      SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text)
}

function ask() {
  askName.classList.add(SHOWING_CN);
  askName.addEventListener("submit", function(a) {
    a.preventDefault();
    const userName = input.value;
    greeting(userName);
    saveName(userName);
  });
}

function greeting(text) {
  askName.classList.remove(SHOWING_CN);
  greetings.classList.add(SHOWING_CN);
  greetings.innerText = `Greeting, ${text}!`;
}

function init() {
  const userName = localStorage.getItem(USER_LS);
  if(userName === null) { //이름이 없다면
    ask();
  } else { //이름이 있다면
    greeting(userName);
  }
}

init();