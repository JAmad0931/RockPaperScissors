let playerValue;
let aiValue;

//Function that allows player to choose rock
const element1 = document.getElementById("button1");
element1.addEventListener("click", chooseRock());

function chooseRock() {
    document.getElementById("player").innerHTML = `<img src="./rock.png">`;
    playerValue = "rock";
    return playerValue;
}
//Function that allows player to choose paper
const element2 = document.getElementById("button2");
element2.addEventListener("click", choosePaper());

function choosePaper() {
    document.getElementById("player").innerHTML = `<img src="./paper.png">`;
    playerValue = "paper";
    return playerValue;
}
//Function that allows player to choose scissors
const element3 = document.getElementById("button3");
element3.addEventListener("click", chooseScissors());

function chooseScissors() {
    document.getElementById("player").innerHTML = `<img src="./scissors.png">`;
    playerValue = "scissors";
    return playerValue;
}
//Function that makes a random selection between the given options
const element4 = document.getElementById("button4");
element4.addEventListener("click", aiChoice());

function aiChoice(){
    let myArray = ["rock", "paper", "scissors"];
    let randomItem = myArray[Math.floor(Math.random()*myArray.length)];
    let result;

    switch(randomItem){
        case "rock":
            result = document.getElementById("AI").innerHTMl = `<img src="./${randomItem}.png">`;
            aiValue = "rock";
            break;
        case "paper":
            result = document.getElementById("AI").innerHTMl = `<img src="./${randomItem}.png">`;
            aiValue = "paper";
            break;
        case "scissors":
            result = document.getElementById("AI").innerHTMl = `<img src="./scissors.png">`;
            aiValue = "scissors";
            break;
    }
    document.getElementById("AI").innerHTML = result;
}
//Function that adds 1 to score depending on who wins
element4.addEventListener("click", add());
function add(){
    if ( (playerValue==="rock" && aiValue==="rock") || (playerValue==="paper" && aiValue==="paper") || (playerValue==="scissors" && aiValue==="scissors")) {
        let score = document.getElementById("draw").innerHTML;
        let value = parseInt(score, 10) + 1;
        document.getElementById("draw").innerHTML = value;
    }
    else if (playerValue==="rock" && aiValue==="scissors") {
        let score = document.getElementById("p").innerHTML;
        let value = parseInt(score, 10) + 1;
        document.getElementById("p").innerHTML = value;;
    }
    else if (playerValue==="rock" && aiValue==="paper") {
        let score = document.getElementById("ai").innerHTML;
        let value = parseInt(score, 10) + 1;
        document.getElementById("ai").innerHTML = value;
    }
    else if (playerValue==="paper" && aiValue==="scissors") {
        let score = document.getElementById("ai").innerHTML;
        let value = parseInt(score, 10) + 1;
        document.getElementById("ai").innerHTML = value;
    }
    else if (playerValue==="paper" && aiValue==="rock") {
        let score = document.getElementById("p").innerHTML;
        let value = parseInt(score, 10) + 1;
        document.getElementById("p").innerHTML = value;
    }
    else if (playerValue==="scissors" && aiValue==="rock") {
        let score = document.getElementById("ai").innerHTML;
        let value = parseInt(score, 10) + 1;
        document.getElementById("ai").innerHTML = value;
    }
    else if (playerValue==="scissors" && aiValue==="paper") {
        let score = document.getElementById("p").innerHTML;
        let value = parseInt(score, 10) + 1;
        document.getElementById("p").innerHTML = value;
    }
}