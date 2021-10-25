"use strict";
const score1 = document.querySelector("#score--0");
const score2 = document.querySelector("#score--1");
const name1 = document.querySelector("#name--0");
const name2 = document.querySelector("#name--1");
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");
const current1 = document.querySelector("#current--0");
const current2 = document.querySelector("#current--1");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const dice = document.querySelector(".dice");
const btn50 = document.querySelector(".btn--50");
const btn100 = document.querySelector(".btn--100");
let count = 100;
score1.textContent = "0";
score2.textContent = "0";
dice.src = "dice-1.png";
const winner = function (player, playerName) {
  btnHold.disabled = true;
  btnRoll.disabled = true;
  player.classList.add("player--winner");
  playerName.textContent = ` The Winner is ${playerName.textContent}🎉`;
};
const changeTurn = function () {
  current1.textContent = "0";
  current2.textContent = "0";
  if (player1.classList.contains("player--active")) {
    if (Number(score1.textContent) >= count) winner(player1, name1);
    player2.classList.add("player--active");
    player1.classList.remove("player--active");
  } else {
    if (Number(score2.textContent) >= count) winner(player2, name2);
    player1.classList.add("player--active");
    player2.classList.remove("player--active");
  }
};
btnRoll.addEventListener("click", function () {
  const randomDice = Math.trunc(Math.random() * 6) + 1;
  dice.src = `dice-${randomDice}.png`;
  if (randomDice == 1) {
    changeTurn();
  } else {
    document.querySelector(
      ".player--active .current .current-score"
    ).textContent =
      Number(
        document.querySelector(".player--active .current .current-score")
          .textContent
      ) + randomDice;
  }
});
btnHold.addEventListener("click", function () {
  let winnerScore = document.querySelector(".player--active .score");
  console.log(winnerScore);
  winnerScore.textContent =
    Number(winnerScore.textContent) +
    Number(
      document.querySelector(".player--active .current .current-score")
        .textContent
    );

  changeTurn();
});
btnNew.addEventListener("click", function () {
  btnHold.disabled = false;
  btnRoll.disabled = false;
  score1.textContent = "0";
  score2.textContent = "0";
  name1.textContent = "Player 1";
  name2.textContent = "Player 2";
  current1.textContent = "0";
  current2.textContent = "0";
  document.querySelector(".player--winner").classList.remove("player--winner");
});
btn50.addEventListener("click", function () {
  btn50.classList.add("btn-active");
  btn100.classList.remove("btn-active");
  count = 50;
});
btn100.addEventListener("click", function () {
  btn100.classList.add("btn-active");
  btn50.classList.remove("btn-active");
  count = 100;
});
