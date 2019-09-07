/*
	Define the values for each of the face cards.
	Define the values for each of the suits (for games where the hierarchy of suits matters).
	
	ACE is defined as 1 for the purposes of creating the deck.  In any game where the ace is the high card or holds a value other than 1, it needs to be treated as a special case.
*/
var JACK = 11, QUEEN = 12, KING = 13, ACE = 1;
var CLUB = 0, DIAMOND = 1, HEART = 2, SPADE = 3;
BLUE_BACK = "back-blue-75-3.png";

/*
	generateStandardDeck
	
	Builds a standard deck of 52 card objects and puts them into an array.
	
	Returns
		The deck array.
*/
function generateStandardDeck()
{
	var deck = [];
	
	/*
		This double for loop will iterate 13 times (ACE to KING), creating one card of each rank.
		The inner loop iterates 4 times, creating one card of each rank of each suit.
	*/
	for (var r = ACE; r <= KING; r++)
		for (var s = CLUB; s <= SPADE; s++)
		{
			/*
				Create an empty card object and assign it the necessary properties and values.
				The images distributed with the card deck file are designed to work with the rank and suit values.
			*/
			var card = {};
			card.rank = r;
			card.suit = s;
			card.imgFile = r + "-" + s + ".png";
			deck.push(card);
		}
		
	return deck;
}

/*
	shuffleDeck
	
	Scrambles the card objects in a deck array.
	
	This function DOES empty the array passed into the deck parameter, which WILL change the argument that is passed in.
	
	Parameters:
		deck - The deck array
		
	Returns:
		The shuffled deck array.
*/
function shuffleDeck(deck)
{
	var tmp = [];
	
	/*
		While the original deck is not empty, pull out a random card and simply push it into the temporary deck.
	*/
	while (deck.length > 0)
		tmp.push(deck.splice(getRandomInteger(0, deck.length - 1), 1)[0]);
	
	return tmp;
}

/*
	dealCard
	
	Returns the top card of a deck array.
	This function WILL change the argument that is passed in.
	
	Parameters:
		deck - the deck array.
		
	Returns:
		The 0th card from the deck array.
*/
function dealCard(deck)
{
	return deck.shift();
}

/*
	peekCard
	
	Allows the caller to see any card in the deck.
	This is useful when using a card deck array as a hand of cards.
	
	Parameters:
		deck - the card deck array
		idx (optional) - the index number of the card to peek at
		
	Returns:
		the card object at idx
*/
function peekCard(deck, idx)
{
	/*
		idx is an optional parameter.  If it is omitted, the function sets it to 0.
	*/
	if (!idx || idx == null)
		idx = 0;
	
	return deck[idx];
}