//init js file
//added for init MASTER
//console.log("Up and running!");

var cards = ["queen","queen","king","king"];
var cardsInPlay = [];

var checkForMatch = function () {


if (cardsInPlay[0] === cardsInPlay[1]) {
alert("You found a match!");
} else 
alert("Sorry, try again.");

}


var flipCard = function (cardID) {
	
	console.log ("User flipped " + cards[cardID]);

	cardsInPlay.push (cards[cardID]);

	if (cardsInPlay.length === 2) {
	//console.log(cardsInPlay.length + " Evaluate match!");
	checkForMatch();
}
	else; //console.log(cardsInPlay.length +" Draw another card!");

}
flipCard (0);
flipCard (2);


