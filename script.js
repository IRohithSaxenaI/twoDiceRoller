let images = [
  "dice-01.svg",
  "dice-02.svg",
  "dice-03.svg",
  "dice-04.svg",
  "dice-05.svg",
  "dice-06.svg",
];

let dice = document.querySelectorAll("img");

function roll() {
  dice.forEach(function (die) {
    die.classList.add("shakes");
  });
  setTimeout(() => {
    dice.forEach((die) => {
      die.classList.remove("shakes");
    });
    let dieOneValue = Math.floor(Math.random() * 6) ;
    let dieTwoValue = Math.floor(Math.random() * 6) ;
    document
      .querySelector("#img1")
      .setAttribute("src", "/images/" + images[dieOneValue]);
    document
      .querySelector("#img2")
      .setAttribute("src", "/images/" + images[dieTwoValue]);
    document.querySelector("#tot").innerHTML =
      "Your roll is " + (dieOneValue + dieTwoValue+2);
  }, 1000);
}
roll();
