let keys = document.querySelectorAll('.number');
const display = document.getElementById('display');
const arrayDisplay = [];
const displayResult = document.getElementById('displayResult');

keys.forEach(function(i) {
    i.addEventListener('click', (e) => {
        arrayDisplay.push(e.target.value);
        display.innerText = arrayDisplay.join('');
        console.log(arrayDisplay);
    })
})