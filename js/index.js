let keys = document.querySelectorAll('.number');
keys.forEach(function(i) {
    i.addEventListener('click', (e) => {
        console.log(e.target.value);
    })
})