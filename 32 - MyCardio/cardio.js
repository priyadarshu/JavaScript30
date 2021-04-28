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
p.classList.add("warning");

//const newDiv = myDiv.firstElementChild('div');

const newDiv = myDiv.querySelector(".mydivs");
