const butn=document.querySelector(".btn");
const collbtn =document.querySelector(".cool");

function handleClick() {
    console.log('hello');
}
butn.addEventListener('click', handleClick);

// to unbinding the event listener from the element, it can always work on named function and rrow function asssigned to a variable
// it wont work on a anonymous function

const hooray= ()=> console.log('happiness is treasure');
butn.addEventListener('click', hooray);

butn.removeEventListener('click',handleClick);

// listen to all the buttons

const lstnallbutton = document.querySelectorAll('button.buy');

function buyItems() {
    console.log("Buyong Item");
}
function attachListner(buyButton){
    console.log('Binding the buy button');
    buyButton.addEventListener('click', buyItems)
}
lstnallbutton.forEach(attachListner);
//console.log(lstnallbutton);