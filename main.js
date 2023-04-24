const playerText = document.querySelector('#playerText')
const computerText = document.querySelector('#computerText')
const resultText = document.querySelector('#resultText')

const choiceBtns = document.querySelectorAll('.choiceBtn')

let player
let computer
let result

    // console.log(Math.floor(Math.random()*3)+1)

    choiceBtns.forEach(button => button.addEventListener("click", () => {
        player = button.textContent
        console.log("player:"+button.textContent)
        computerTurn()

        playerText.textContent = `Player: ${player}`
        computerText.textContent = `Computer: ${computer}`
        resultText.textContent = checkWinner()

        console.log("computer: "+computer)



    }))

    function computerTurn(){

        const randNum = Math.floor(Math.random() * 3) + 1
        console.log(randNum)

        switch(randNum){
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

    function checkWinner(){

        if(player == computer){
            return "Draw!"
        }

        else if(computer == "ROCK"){
            return (player == "PAPER") ? "You win!" : "You  lose!"
        }

        else if(computer == "PAPER"){
            return (player == "SCISSOR") ? "You win!" : "You  lose!"
        }    

        else if(computer == "SCISSOR"){
            return (player == "ROCK") ? "You win!" : "You  lose!"
        }
    }



// 1-rock  2-paper  = paper
// paper scissor = scissor
// scissor rock =  rock