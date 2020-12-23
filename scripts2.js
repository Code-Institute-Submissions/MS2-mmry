// store cards in array

let card = document.getElementsByClassName("memory-card");
let cards = [...card];
// for loop to add eventListener to each card.
for (var i = 0 < cards.length; i++; ) {
  cards[i].addEventListener("click", displayCard);
}

function shuffle(array) {
  var currentIndex = array.lenght,
    tempValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    tempValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = tempValue;
  }
  return array;
}