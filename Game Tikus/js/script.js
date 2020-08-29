const tanah = document.querySelectorAll('.tanah');
const tikus = document.querySelectorAll('.tikus');
const papanSkor = document.querySelector('.papan-score');
const pop = document.querySelector('#pop');
const theend = document.querySelector('#theend');
const ongame = document.querySelector('#ongame');

let tanahSebelumnya;
let selesai;
let score;

function randomTanah(tanah){
    const t = Math.floor(Math.random() * tanah.length);
    const tRandom = tanah[t];
    if(tRandom == tanahSebelumnya){
        randomTanah(tanah);
    }
    tanahSebelumnya = tRandom;
    return tRandom;
}

function randomWaktu(min, max){
    return Math.round(Math.random() * (max-min) + min)
}

function munculkanTikus(){
    const tRandom = randomTanah(tanah);
    const wRandom = randomWaktu(400, 1000);
    tRandom.classList.add('muncul');
    setTimeout(() => {
        tRandom.classList.remove('muncul');
        if(!selesai){
            munculkanTikus();
        }
    }, wRandom);
}

function mulai(){
    selesai = false;
    score = 0;
    papanSkor.textContent = "SCORE : "+0;
    munculkanTikus();
    ongame.play();
    setTimeout(() => {
        selesai = true;
        if(selesai == true){
            theend.play();
        }
    }, 27500)
}

function pukul(){
    score++;
    this.parentNode.classList.remove('muncul');
    pop.play();
    papanSkor.textContent = "SCORE : "+score;
}

tikus.forEach(t => {
    t.addEventListener('click', pukul);
});