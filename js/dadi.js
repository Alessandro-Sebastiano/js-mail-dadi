'use strict'


let players = [];
let output = document.querySelectorAll('span');
const btn = document.querySelector('button');


btn.addEventListener('click', () => {


    players.push(Math.floor(Math.random() * 6));
    players.push(Math.floor(Math.random() * 6));


    for (let i = 0; i < players.length; i++) {

        for (let o = 0; o < output.length; o++) {

            output[i].innerHTML = players[i];

        }

    }

    console.log(players);

    let result = document.querySelector('h2');

    if (players[0] > players[1]) {
        result.innerHTML = 'Hai vinto';
    } else if (players[0] == players[1]) {
        result.innerHTML = 'Pareggio';
    } else {
        result.innerHTML = 'Hai perso';
    }


})

