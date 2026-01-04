const startBtn = document.getElementById('activate');
const startWrap = document.querySelector('.front-img');
const mainRoom = document.querySelector('.room');

startBtn.addEventListener('click', ()=>{
    startWrap.classList.add('hide');
    mainRoom.classList.add('start');
})