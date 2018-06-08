//init js file
//added for init MASTER
console.log("Up and running!");

var cards = ["queen","queen","king","king"];
var cardsInPlay = [];

cardOne = cards[2];
cardsInPlay.push (cardOne);

console.log ("User flipped " + cardOne);

cardTwo = cards[1];
cardsInPlay.push (cardTwo);

console.log ("User flipped " + cardTwo);

if (cardsInPlay.length === 2) {
	console.log(cardsInPlay.length + " Evaluate match!");
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	}
	else {
		alert("Sorry, try again..");
	}
}
else console.log("Draw another card!");

