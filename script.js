fetch("content.json")
.then(response => response.json())
.then(data => {

document.getElementById("title").innerText = data.title;
document.getElementById("subtitle").innerText = data.subtitle;

const container = document.getElementById("content");

data.sections.forEach(section => {

const block = document.createElement("section");

const title = document.createElement("h2");
title.innerText = section.title;

const text = document.createElement("p");
text.innerText = section.text;

block.appendChild(title);
block.appendChild(text);

container.appendChild(block);

});

});