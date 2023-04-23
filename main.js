const body = document.body
const btn = document.querySelector('#btn')
const firstInput = document.querySelector('#input1')
const secondInput = document.querySelector('#input2')
let fcount = 0 
let scount = 0
let result = 0

console.log(firstInput)
console.log(secondInput)

const rock = "rock";
const paper = "paper"
const scissor = "scissor"

btn.addEventListener('click', func);

const succes = "successfull"

function func(e) {

    const text = document.createElement('p')
    // if(((firstInput.value == 1) < (secondInput.value == 2)) || ((firstInput.value==2) < (secondInput.value==3)) || ((firstInput.value==3) < (secondInput.value==1))){
    //     console.log("successfull-1");
    //     text.innerText = "successfull-1"
    //     body.append(text)
    // }

    if(firstInput.value == secondInput.value){
        console.log("both are equal, so match is draw")
        fcount += 0 
        scount += 0
        console.log("count for 1: "+fcount+" count for 2: "+scount);
    }
    else if(((firstInput.value == "rock") && (secondInput.value == "paper")) || ((firstInput.value == "paper")&&(secondInput.value == "rock"))){
        if(firstInput.value  == "paper"){
            console.log("1-paper")
            fcount += 1
            console.log("count for 1:"+ fcount)
        }
        else{
            console.log("2-paper")
            scount += 1
            console.log("count for 2:"+ scount )
        }
    }
    else if(((firstInput.value == "paper") && (secondInput.value == "scissor")) || ((firstInput.value == "scissor")&&(secondInput.value == "paper"))){
        if(firstInput.value  == "scissor"){
            console.log("1-scissor")
            fcount += 1
            console.log("count for 1:"+ fcount)
        }
        else{
            console.log("2-scissor")
            scount += 1
            console.log("count for 2:"+ scount)
        }
    }
    else if(((firstInput.value == "rock") && (secondInput.value == "scissor")) || ((firstInput.value == "scissor")&&(secondInput.value == "rock"))){
        if(firstInput.value  == "rock"){
            console.log("1-rock")
            fcount += 1
            console.log("count for 1:"+ fcount)
        }
        else{
            console.log("2-rocx")
            scount += 1
            console.log("count for 2:"+ scount)
        }
    }
    else{
        console.log("input are beyond the limit")
    }


    if(fcount == scount){
        console.log("both are equal")
    }
    else if(fcount > scount){
        console.log("winner is 1")
    }
    else{
        console.log("winner is 2")
    }
}



// 1-rock  2-paper  = paper
// paper scissor = scissor
// scissor rock =  rock