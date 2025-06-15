//1
let btnon = document.querySelector(".btnu");

let levent = () => btnon.style.backgroundColor = 'orange';

btnon.addEventListener('click', levent);

//1.1
let addStylesBtn = document.querySelector(".addstyles");
let title = document.querySelector(".title");
addStylesBtn.addEventListener('click', () => { title.addEventListener('click', addStyle) });

let addStyle = () => title.classList.add('style');

//2
let inp = document.querySelector(".input1");
let btn = document.querySelector(".add");
let listNew = document.querySelector(".addlist");
let done = document.querySelector(".done");



let inps = () => {
  let inputed = inp.value;
  done.textContent = `${inputed}`;
}

btn.addEventListener('click', inps);

//3 
let btnTest = document.querySelector(".btntest");

let handleClick = (event) => {
  console.log(event);
  console.log(event.type);
  console.log(this);
  console.log(event.target);
}
btnTest.addEventListener('click', handleClick);

//4 (test form)
let testForm = document.querySelector("#testform");

testForm.addEventListener('submit', function(event) {event.preventDefault();alert("form has been requested");});

//5
let nForm = document.querySelector("#nform");

let inputedd = nForm.value;

nForm.addEventListener('submit', function(event) {event.preventDefault();alert(`Ви зареєструвалися успішно! Дякую! You've registered! ${inputedd}`);});

//6
let classAdd = document.querySelector(".addclass");
let classhAdd = document.querySelector(".addhclass");
let added = document.querySelector("#added");

classAdd.addEventListener('click', () => {
  added.classList.add("none");
})

classhAdd.addEventListener('click', () => {
  added.classList.add("add");
})

//7
let moreFont = document.querySelector(".fontm");
let lessFont = document.querySelector(".fontl");
let someText = document.querySelector(".text");

moreFont.addEventListener('click', () => {
  someText.classList.add("larger");
})

lessFont.addEventListener('click', () => {
  someText.classList.add("less");
})