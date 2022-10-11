'use strict'


let userNumber;

let hostNumber;

let players = [userNumber, hostNumber];

console.log(players);


for (let i = 0; i < players.length; i++) {

    players[i] = Math.floor(Math.random() * 6);

    console.log(players[i]);

}


if (players[0] > players[1]) {
    console.log('Hai vinto');
} else if (players[0] == players[1]) {
    console.log('Pareggio');
} else {
    console.log('Hai Perso');
}

