const playerText = document.querySelector('#playerText')
const computerText = document.querySelector('#computerText')
const resultText = document.querySelector('#resultText')
const playerScore = document.querySelector('#playerScore')
const computerScore = document.querySelector('#computerScore')

const choiceBtns = document.querySelectorAll('.choiceBtn')

let player
let computer
let result
let score1 = 0, score2 = 0, totalcount = 0

// console.log(Math.floor(Math.random()*3)+1)

choiceBtns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent
    // console.log("player:"+button.textContent)
    computerTurn()
    // console.log("computer: "+computer)

    playerText.textContent = `Player: ${player}`
    computerText.textContent = `Computer: ${computer}`
    resultText.textContent = checkWinner()

    playerScore.textContent = `PlayerScore: ${score1}`
    computerScore.textContent = `ComputerScore: ${score2}`

}))

function computerTurn() {

    const randNum = Math.floor(Math.random() * 3) + 1
    // console.log(randNum)

    switch (randNum) {
        case 1:
            computer = "ROCK"
            break
        case 2:
            computer = "PAPER"
            break
        case 3:
            computer = "SCISSOR"
            break

    }

}


function checkWinner() {

    // if(totalcount ==5){
    //     // break
    //     return "game over"
    // }

    if (player == computer) {
        score1 += 0
        score2 += 0
        totalcount += 1
        console.log("player score: " + score1)
        console.log("computer score: " + score2)
        return "Draw!"
    }

    else if (computer == "ROCK") {
        // return (player == "PAPER") ? "You win!" : "You  lose!"
        if (player == "PAPER") {
            score1 += 1
            totalcount += 1
            console.log("player score: " + score1)
            return "You win!"
        }
        else {
            score2 += 1
            totalcount += 1
            console.log("computer score: " + score2)
            return "You lose!"
        }
    }

    else if (computer == "PAPER") {
        // return (player == "SCISSOR") ? "You win!" : "You  lose!"
        if (player == "SCISSOR") {
            score1 += 1
            totalcount += 1
            console.log("player score: " + score1)
            return "You win!"
        }
        else {
            score2 += 1
            totalcount += 1
            console.log("computer score: " + score2)
            return "You lose!"
        }
    }

    else if (computer == "SCISSOR") {
        // return (player == "ROCK") ? "You win!" : "You  lose!"
        if (player == "ROCK") {
            score1 += 1
            totalcount += 1
            console.log("player score: " + score1)
            return "You win!"
        }
        else {
            score2 += 1
            totalcount += 1
            console.log("computer score: " + score2)
            return "You lose!"
        }
    }
    // else if(totalcount == 0){
    //     break;
    // }

}



// 1-rock  2-paper  = paper
// paper scissor = scissor
// scissor rock =  rock