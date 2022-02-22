'use strict';

// variables 
var userChoice = document.getElementById('user-choice');
var compChoice = document.getElementById('comp-choice');
var userScore = document.getElementById('user-score');
var compScore = document.getElementById('comp-score');
var userScoreNum, compScoreNum;
var userWinner = document.getElementById('user-winner');
var compWinner = document.getElementById("comp-winner");
var choices = ['Rock', 'Paper', 'Scissors'];
var isTrueChoice = true;
var compChoiceImage = document.getElementById("comp-choice-img");
var userChoiceImage = document.getElementById("user-choice-img");

// function to return random
function getRandomChoice () {
    compChoice.innerHTML = choices[Math.floor(Math.random()*3)];
    if (compChoice.innerHTML === "Paper"){
        compChoiceImage.src = "assets/img/paper.png";
    }else if (compChoice.innerHTML === "Rock"){
        compChoiceImage.src = "assets/img/rock.png";
    }else if (compChoice.innerHTML === "Scissors"){
        compChoiceImage.src = "assets/img/scissors.png";
    }
}

// function score adder
function addScore(score, scoreNum){
    if (isTrueChoice){
        scoreNum = parseInt(score.innerHTML); 
        scoreNum += 1;
        score.innerHTML = scoreNum ;
    }else {
        userWinner.innerHTML = "Draw";
        compWinner.innerHTML = "Draw";
        userWinner.style.color = 'black';
        compWinner.style.color = 'black';
    }
}


// game brain 

function play() {
    if ((userChoice.innerHTML === 'Rock' && compChoice.innerHTML === 'Paper') ||  (userChoice.innerHTML === 'Paper' && compChoice.innerHTML === 'Scissors') || (userChoice.innerHTML === 'Scissors' && compChoice.innerHTML === 'Rock')){
        userWinner.innerHTML = "Losed";
        userWinner.style.color = 'red';
        compWinner.innerHTML = "Win";
        compWinner.style.color = 'green';
        addScore(compScore, compScoreNum);
    }
    else if ((userChoice.innerHTML === 'Rock' && compChoice.innerHTML === 'Scissors') || (userChoice.innerHTML === 'Paper' && compChoice.innerHTML === 'Rock') || (userChoice.innerHTML === 'Scissors' && compChoice.innerHTML === 'Paper') ) {
        userWinner.innerHTML = "Win";
        userWinner.style.color = 'green';
        compWinner.innerHTML = "Losed";
        compWinner.style.color = 'red';
        addScore(userScore, userScoreNum);
    }
    else {
        userWinner.innerHTML = "Draw";
        compWinner.innerHTML = "Draw";
        userWinner.style.color = 'black';
        compWinner.style.color = 'black';
    }
}

// Functions for  <768 screen
function chooseRock (){
    getRandomChoice();
    userChoice.innerHTML = "Rock";
    userChoiceImage.src = "assets/img/rock.png";
    play();
}

function choosePaper (){
    getRandomChoice();
    userChoice.innerHTML = "Paper";
    userChoiceImage.src = "assets/img/paper.png";
    play();
}

function chooseScissors (){
    getRandomChoice();
    userChoice.innerHTML = 'Scissors';
    userChoiceImage.src = "assets/img/scissors.png";
    play();
}


// function to press keys
document.onkeyup = function(event){
    isTrueChoice = true;
    getRandomChoice();
    event =  event.key;
    if (event === 'r'){
        userChoice.innerHTML = "Rock";
        userChoiceImage.src = "assets/img/rock.png";
    }
    else if (event === 'p'){
        userChoice.innerHTML = "Paper";
        userChoiceImage.src = "assets/img/paper.png";
    }
    else if (event === 's'){
        userChoice.innerHTML = 'Scissors';
        userChoiceImage.src = "assets/img/scissors.png";
    }
    else {
        alert("Please select one of the 'R S P' (press) buttons to play");
        isTrueChoice = false;
    }
    play();
}


if (window.screen.availWidth <= 768){
    
    document.getElementById("rock-button").onclick = chooseRock;
    document.getElementById("paper-button").onclick = choosePaper;
    document.getElementById("scissors-button").onclick = chooseScissors;
    let userChoiceDivImage = document.querySelector(".user-choice-div-img");
    userChoiceDivImage.remove();
}else if (window.screen.availWidth > 769){
    let divChild = document.querySelector(".press-button-div");
    divChild.remove();
}

