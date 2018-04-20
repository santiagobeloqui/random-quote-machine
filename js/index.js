import {quotes} from './quotes.js';

let quote = document.getElementById("quote");
let author = document.getElementById("author");
let quoteButton = document.getElementById("changeQuote");
let tweetButton = document.getElementById("tweet");
let linkTwitter = document.getElementById("linkTwitter");
let body = document.getElementById("body");

let currentColor;
let currentQuote;




function change(){
	let randomQuote = Math.floor(Math.random()*103);
	let randomColor = Math.floor(Math.random()*8)	
	while (randomQuote == currentQuote || randomColor == currentColor){
		randomQuote = Math.floor(Math.random()*103);
		randomColor = Math.floor(Math.random()*8)
	}
	quote.textContent = `"${quotes[randomQuote]["quote"]}"`;
	author.textContent = quotes[randomQuote]["name"];
	body.style.backgroundColor = colors[randomColor];
	quoteButton.style.backgroundColor = colors[randomColor];
	tweetButton.style.backgroundColor = colors[randomColor];
	linkTwitter.setAttribute("href", `https://twitter.com/home/?status="${quotes[randomQuote]["quote"]}", ${quotes[randomQuote]["name"]}.`);
	currentColor = randomColor;
	currentQuote = randomQuote;

}


window.onload = change;
quoteButton.addEventListener("click", change);



let colors = ["#16A086", "#27AE61", "#297FB8", "#8D44AF", "#2D3E50", "#F39C11", "#D25400", "#C1392B"];

