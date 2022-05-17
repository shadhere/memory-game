const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },

  {
    name: "blank",
    img: "images/blank.png",
  },

  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },

  {
    name: "hotdog",
    img: "images/hotdog.png",
  },

  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },

  {
    name: "pizza",
    img: "images/pizza.png",
  },

  {
    name: "fries",
    img: "images/fries.png",
  },

  {
    name: "blank",
    img: "images/blank.png",
  },

  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },

  {
    name: "hotdog",
    img: "images/hotdog.png",
  },

  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },

  {
    name: "pizza",
    img: "images/pizza.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < 12; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipcard);

    gridDisplay.appendChild(card);
  }
}
createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("img");
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];

  console.log("check for match!");

  if (optionOneId == optionTwoId) {
    alert("you have click same image");
  }

  if (cardsChosen[0] == cardsChosen[1]) {
    alert("you found a match");
    cards[cardsChosenIds[0]].setAttribute("src", "immages/white.png");
    cards[cardsChosenIds[1]].setAttribute("src", "immages/white.png");
    cards[cardsChosenIds[0]].removeEventListener("click", flipcard);
    cards[cardsChosenIds[1]].removeEventListener("click", flipcard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
    alert("sorry try again");
  }

  cardsChosen = [];
  cardsChosenIds = [];

  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.innerHTML = Congratulations;
  }
}

function flipcard() {
  const cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
