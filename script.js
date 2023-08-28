const start = document.querySelector(".start");
const toobig = document.querySelector(".too_big");
const toosmall = document.querySelector(".too_small");
const correct = document.querySelector(".correct");
const guess = document.querySelector(".com_guess");
let count;
let lastguess;
let newguess;

start.addEventListener("mousedown", startSpillet);

function startSpillet() {
  console.log("start");
  count = 1;
  start.removeEventListener("mousedown", startSpillet);
  newguess = 100 / 2;
  guess.textContent = `Jeg gætter på ${newguess}.`;
  toobig.addEventListener("mousedown", forHøjt);
  toosmall.addEventListener("mousedown", forLavt);
  correct.addEventListener("mousedown", rigtigtGættet);
  return newguess;
}

function forHøjt() {
  console.log("too big");
  count = count + 1;
  if (newguess === 50 || previous === 0) {
    previous = 0;
  } else if (previous < lastguess) {
    previous = previous;
  } else {
    previous = lastguess;
  }
  lastguess = newguess;
  newguess = Math.floor((previous + lastguess) / 2);
  guess.textContent = `Jeg gætter på ${newguess}.`;
  return newguess;
}

function forLavt() {
  console.log("too small");
  count = count + 1;
  if (newguess === 50) {
    previous = newguess * 2;
  } else if (previous > lastguess) {
    previous = previous;
  } else {
    previous = lastguess;
  }
  lastguess = newguess;
  newguess = Math.ceil((previous + lastguess) / 2);
  guess.textContent = `Jeg gætter på ${newguess}.`;
  return newguess;
}

function rigtigtGættet() {
  start.addEventListener("mousedown", startSpillet);
  toobig.removeEventListener("mousedown", forHøjt);
  toosmall.removeEventListener("mousedown", forLavt);
  correct.removeEventListener("mousedown", rigtigtGættet);
  console.log("correct");
  guess.textContent = `Jeg gættede det i ${count}. forsøg`;
}
