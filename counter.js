var screenScore = document.querySelector(".screen");
var initialScore = 0;
var button1 = document.querySelector("#btn1");
var button2 = document.querySelector("#btn2");

button1.addEventListener("click", () => {
    initialScore++;
    screenScore.innerHTML = initialScore;
});

button2.addEventListener("click", () => {
    initialScore = 0;
    screenScore.innerHTML = initialScore;
});