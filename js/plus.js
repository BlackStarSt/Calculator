const add = document.getElementById('n+');
let equal = document.getElementById('n=').addEventListener('click', (n1, n2) => {
    r = '';
    if(add.onkeyup) {
        r = n1 + n2;
        console.log(r.value);
        return r
    }
});