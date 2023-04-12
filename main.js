const btn = document.querySelector('#btn')
const firstInput = document.querySelector('#input1')
const secondInput = document.querySelector('#input2')


btn.addEventListener('click', func);

function func(e){
    console.log(e)
    console.log(firstInput.value)
}