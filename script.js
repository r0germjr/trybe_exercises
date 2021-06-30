const text = document.getElementById('text');
let clickcount = 0;
document.querySelector('#associated').addEventListener('click', () => text.innerText = clickcount += 1);
