const body = document.body
const btn = document.querySelector('#btn')
const firstInput = document.querySelector('#input1')
const secondInput = document.querySelector('#input2')


btn.addEventListener('click', func);

const succes = "successfull"

function func(e) {

    const text = document.createElement('p')
    // if(((firstInput.value == 1) < (secondInput.value == 2)) || ((firstInput.value==2) < (secondInput.value==3)) || ((firstInput.value==3) < (secondInput.value==1))){
    //     console.log("successfull-1");
    //     text.innerText = "successfull-1"
    //     body.append(text)

    // }


    // if ((firstInput.value) < (secondInput.value)) {
    //     console.log("successfull-1");
    //     text.innerText = "successfull-1"
    //     body.append(text)
    // }
    // else if ((firstInput.value==3) > (secondInput.value==3)){
    //     console.log("successfull-2");
    //     text.innerText = "successfull-2"
    //     body.append(text)
    // }
    // else {
    //     console.log("failed")
    //     text.innerText = "failed"
    //     body.append(text)

    // }

    // if( ((firstInput.value ==1) && (secondInput.value == 2)) || ((firstInput.value ==2) && (secondInput.value == 1)) ) {
    //     // console.log("1")
    //     // console.log ("paper");
    //     if(firstInput.value == 1){
    //             console.log("1")
    //             console.log ("paper");
    //     }
    //     else{
    //         console.log("2")
    //         console.log ("paper");
    //     }
    // }
    // else if ( ((firstInput.value ==2) && (secondInput.value == 3)) || ((firstInput.value ==2) && (secondInput.value == 3))){
    //     // console.log("1")
    //     // console.log ("scissor");
    //     if(firstInput.value == ){

    //     }
        
    // }
    // else if ((firstInput.value ==3) && (secondInput.value == 1)){
    //     console.log("2")
    //     console.log ("rock");
    // }
    // // else if ((firstInput.value ==2) && (secondInput.value == 1)){
    // //     console.log("2")

    // //     console.log("paper")
    // // }
    // else if ((firstInput.value ==3) && (secondInput.value == 2)){
    //     console.log("2")
    //     console.log("scissor")
    // }
    // else if ((firstInput.value ==1) && (secondInput.value == 3)){
    //     console.log("1")
    //     console.log("rock")
    // }
    // else if (firstInput.value == secondInput.value){
    //     console.log ("draw")
    // }


    if(firstInput.value == secondInput.value){
        console.log("both are equal, so match is draw")
    }
    else if(((firstInput.value == 1) && (secondInput.value == 2)) || ((firstInput.value == 2)&&(secondInput.value == 1))){
        if(firstInput.value  == 2){
            console.log("1-paper")
        }
        else{
            console.log("2-paper")
        }
    }
    else if(((firstInput.value == 2) && (secondInput.value == 3)) || ((firstInput.value == 3)&&(secondInput.value == 2))){
        if(firstInput.value  == 3){
            console.log("1-scissor")
        }
        else{
            console.log("2-scissor")
        }
    }
    else if(((firstInput.value == 3) && (secondInput.value == 1)) || ((firstInput.value == 1)&&(secondInput.value == 3))){
        if(firstInput.value  == 1){
            console.log("1-rock")
        }
        else{
            console.log("2-rocx")
        }
    }
    else{
        console.log("input are beyond the limit")
    }
}



// 1-rock  2-paper  = paper
// paper scissor = scissor
// scissor rock =  rock