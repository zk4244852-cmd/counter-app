var screenScore = document.querySelector(".screen");
var initialScore = 0;
var button1 = document.querySelector("#btn1");
var button2 = document.querySelector("#btn2");

// Audio ko shuru mein hi load kar lein (Path check kar lein)
var sound = new Audio('./universfield-mouse-click-351398.mp3'); 

button1.addEventListener("click", () => {
    initialScore++;
    screenScore.innerHTML = initialScore;
    
    // Sound ko reset kar ke play karein taake lagatar click par bhi awaz aaye
    sound.currentTime = 0; 
    sound.play().catch(e => console.log("Audio play error:", e));
});

button2.addEventListener("click", () => {
    initialScore = 0;
    screenScore.innerHTML = initialScore;
    
    sound.currentTime = 0;
    sound.play().catch(e => console.log("Audio play error:", e));
});
