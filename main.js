var btn = document.getElementById("play-button");

function dice(){
    var random = Math.floor(Math.random() * 6) + 1;
    console.log(random);
    var imageFiles = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
    document.getElementById("dice").src = imageFiles[random - 1];

    var random_2 = Math.floor(Math.random()*6) + 1;
    console.log(random_2);
    document.getElementById("dice2").src = imageFiles[random_2 - 1];

    if (random < random_2) {
        document.querySelector("h2").innerHTML= "Player 2 Win"
    }else     if (random > random_2) {
        document.querySelector("h2").innerHTML= "Player 1 Win"
    }else{
        document.querySelector("h2").innerHTML= "Draw"
    }

    btn.innerHTML="Play Again"
}

document.getElementById("play-button").addEventListener("click", dice);