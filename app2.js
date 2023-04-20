// Traversing the DOM
// var itemButton = document.querySelector(".button");
// perentNode
// console.log(itemButton.perentNode);
// itemButton.perentNode.style.backgroundColor = "#f4f4f4";

// perentElement do the same thing like parentNode
// childNodes
// console.log(itemButton.childNodes);
// it is an array it represents in one line 0 for text, it is line break, white space in code. Not to sugest to use childNodes

// console.log(itemButton.children); HTML Colection
// console.log(itemButton.children[0]);
// itemButton.children[0].style.backgroundColor = "yellow";
// // FirstChild one of the properties - usefull
// // firstElementChild
// console.log(itemButton.firstElementChild);
// itemButton.firstElementChild.textContent = "P";
// LastChild
// lastElementChild
// nextSibling
// console.log(itemButton.nextSibling);
// nextElementSibling
// console.log(itemButton.nextElementSiblings);
// previousSibling
// console.log(itemButton.previousSibling);
// previousElementSibling
// console.log(itemButton.previousElementSibling);
// itemButton.previousElementSibling.style.backgroundColor = "green";

// Create Element - create a div

// var newDiv = document.createElement("div");
// console.log(newDiv);
// newDiv.className = "hello";
// newDiv.id = "hello1";
// newDiv.setAttribute("title", "Hello Div");

// // Create text Node

// var newDivText = document.createTextNode("Hello World");
// newDiv.appendChild(newDivText);
// var container = document.querySelector("header .container");
// var h1 = document.querySelector("header h1");
// console.log(newDiv);
// container.insertBefore(newDiv, h1);
// h1.style.fontSize = "20px";

// var button = document.getElementById("button");
// button.addEventListener("dblclick", runEvent);
// button.addEventListener("mousedown", runEvent);
// button.addEventListener("mouseup", runEvent);
// .addEventListener("click", runEvent);
// var itemInput = document.querySelector("input[type=search]");
// var form = document.querySelector("form");
// form.addEventListener("submit", runEvent);
// itemInput.addEventListener("keydown", runEvent);
// itemInput.addEventListener("keyup", runEvent);
// itemInput.addEventListener("keypress", runEvent);
// itemInput.addEventListener("blur", runEvent);
// itemInput.addEventListener("focus", runEvent);
// itemInput.addEventListener("cut", runEvent);
// itemInput.addEventListener("paste", runEvent);
// itemInput.addEventListener("copy", runEvent);
// itemInput.addEventListener("input", runEvent);
// var select = document.querySelector("select");
// select.addEventListener("change", runEvent);
// function runEvent(e) {
//   e.preventDefault();
// console.log("button clicked");
// document.getElementById("header-title").textContent = "Changed";
// console.log("EVENT TYPE:" + e.type);

// console.log(e.target.value); // give us the value in console
// document.getElementById("toDoContainer").innerHTML =
//   "<h3>" + e.target.value + "</h3>";

// output.innerHTML =
// "<h3>MouseX:" + e.offsetX + "</h3><h3>MouseY:" + e.offsetY + "</h3>";
// document.body.style.backgroundColor =
// "rgb(" + e.offsetX + "," + e.offsetY + ",40)";
// }

// var box = document.getElementById("box");
// box.addEventListener("mouseenter", runEvent); // it is only for elements
// box.addEventListener("mouseleave", runEvent); // the same thing with these two
// box.addEventListener("mouseover", runEvent); // it is for elemnt and innerElements
// box.addEventListener("mouseout", runEvent);
// box.addEventListener("mousemove", runEvent);
