let keys = document.querySelectorAll('.number');
const display = document.getElementById('display');

keys.forEach(function(i) {
    i.addEventListener('click', (e) => {
        display.innerHTML = e.target.value;
    })
})