let clickCount = 0;
const doll = document.getElementById("doll");
const guards = [
    document.getElementById("guard1"),
    document.getElementById("guard2"),
    document.getElementById("guard3"),
    document.getElementById("guard4")
];
const gameOverText = document.getElementById("game-over");

let playBtn = document.getElementById("playBtn");
playBtn.innerHTML = `<img src="img/play.png" alt="Play">`;

playBtn.addEventListener("click", () => {
    if (clickCount === 0 || clickCount === 1 || clickCount === 2|| clickCount === 3) {
        doll.src = "img/squid-doll-4.PNG"; 
        console.log("turn around");
    }

    if (clickCount < 4) {
        let randomGuard = guards.splice(Math.floor(Math.random() * guards.length), 1)[0];
        randomGuard.style.opacity = "0";

        //Get the guard's position and size
        const guardRect = randomGuard.getBoundingClientRect();
        
        //Create a new image element for the boom icon
        let boomIcon = document.createElement("img");
        boomIcon.src = "img/boom.png";  //Replace with the path to your own boom image
        boomIcon.alt = "Boom!";
        boomIcon.style.position = "absolute";  //Position it absolutely
        boomIcon.style.left = `${guardRect.left + guardRect.width / 2 - 25}px`; //Center the boom icon horizontally
        boomIcon.style.top = `${guardRect.top + guardRect.height / 2 - 25}px`;   //Center the boom icon vertically
        boomIcon.style.width = "80px";  //Adjust size if needed
        boomIcon.style.height = "80px";
        boomIcon.style.animation = "boom-animation 0.5s ease-out";  //Add animation for boom effect
        document.body.appendChild(boomIcon);  //Append it to the document

        //Remove the boom icon after animation completes
        setTimeout(() => {
            boomIcon.remove();
        }, 500);  //Removes the icon after 0.5s, adjust timing to match the animation

        clickCount++;
    }
    if (clickCount === 4) {
        playBtn.style.display = "none";
        gameOverText.style.display = "block";
    }

    //Flip the doll back to the original image after 5 seconds
    setTimeout(() => {
        doll.src = "img/background1.PNG"; //replace with the original doll image path
    }, 2000);
});

