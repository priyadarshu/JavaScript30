const myDiv = document.createElement("div");
myDiv.classList.add("wrapper");

document.body.appendChild(myDiv);

// creating list items
/*

const newlist= document.createElement('ul');

const listitem1= document.createElement('li');
listitem1.textContent="one";
const listitem2= document.createElement('li');
listitem2.textContent="two";
const listitem3= document.createElement('li');
listitem3.textContent="three";

newlist.appendChild(listitem1);
newlist.appendChild(listitem2);
newlist.appendChild(listitem3);

myDiv.insertAdjacentElement('afterbegin',newlist);
*/

const ul = `<ul>
<li>one</li>
<li>two</li>
<li>three</li>
</ul>`;

myDiv.innerHTML = ul;

const myimg = document.createElement("img");
myimg.src = "./images/bg.jpg";
myimg.width = 250;
myimg.height = 250;
myimg.classList.add("cute");
myimg.alt = "Cute puppy";

myDiv.appendChild(myimg);

const myHTML = `<div class="mydivs">
                    <p>Abc</p>
                    <p>pqr</p>
                </div>`;

const ulElement = myDiv.querySelector("ul");

ulElement.insertAdjacentHTML("beforebegin", myHTML);


//const newDiv = myDiv.firstElementChild('div');

const newDiv = myDiv.querySelector(".mydivs");
console.log(newDiv);
console.log(newDiv.children);
newDiv.children[1].classList.add('warning');
newDiv.firstElementChild.remove();


function generatePlayerCard(name, age, height){
    const playersdetails=`<div class="playerCard"><h2>${name} - ${age} </h2><p>They are ${height} and ${age} years old. In Dog years this person would be ${age *7}. That would be a tall dog!</p>
    
    <button type="button" class="delete"> &times; Delete</button></div>`;
 return playersdetails;
}

const cards= document.createElement("div");
cards.classList.add("cards");

let cardsHTML = generatePlayerCard('priya', 12, 150);
cardsHTML= cardsHTML + generatePlayerCard('wes', 23, 110);
cardsHTML+= generatePlayerCard('swiss', 33, 165);
cardsHTML+= generatePlayerCard('leo', 43, 125);

//console.log(cardsHTML);
cards.innerHTML=cardsHTML;
myDiv.insertAdjacentElement('beforebegin',cards);

//select all the buttons

const buttons= document.querySelectorAll('.delete');
console.log(buttons);
//delete cards
function deleteCard(event){
    const buttonGotClicked = event.currentTarget;
    console.log(buttonGotClicked);
    //buttonGotClicked.parentElement.remove();
    buttonGotClicked.closest(".playerCard").remove();
    console.log('Delete Card');
}
//loop and delete the card based on delete click event

buttons.forEach(button => button.addEventListener('click',deleteCard));