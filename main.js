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


    if ((firstInput.value) < (secondInput.value)) {
        console.log("successfull-1");
        text.innerText = "successfull-1"
        body.append(text)
    }
    // else if ((firstInput.value==3) > (secondInput.value==3)){
    //     console.log("successfull-2");
    //     text.innerText = "successfull-2"
    //     body.append(text)
    // }
    else {
        console.log("failed")
        text.innerText = "failed"
        body.append(text)

    }

}