import { nanoid } from 'nanoid'
import './style.css'

const btnPassword = document.querySelector('button');
const fieldPassword = document.querySelector('#password');



btnPassword.addEventListener('click', () => {
    const randomPassword = nanoid()
    const getValue = document.getElementsByName('quant');
    const arr = Array.from(getValue).find((getval) => {
        if (getval.checked) {
            return getval.value;
        }
    })
    if (arr === undefined){
        displayPopup();
        return;
    }
    const split = randomPassword.substring(0,arr.value)
    fieldPassword.innerHTML = split
});

function displayPopup() {
    const popUp = document.getElementById('popup');
    popUp.style.display = 'block';
    const exitPopUp = document.getElementById('exit');
    exitPopUp.addEventListener('click', () => {
      popUp.style.display = 'none';
    });
}
