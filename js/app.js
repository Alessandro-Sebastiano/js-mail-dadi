'use strict'

let inputs = document.querySelectorAll('input');

const trustEmail = ['test@email.com', 'test1@email.com', 'test2@email.com'];

let btn = inputs[1];

let userEmail;



btn.addEventListener('click', () => {
    userEmail = inputs[0].value;

    for (let i = 0; i < trustEmail.length; i++) {

        let text = document.querySelector('h1');

        if (trustEmail[i] == userEmail) {

            text.innerHTML = 'Email presente in lista';

            console.log('ok');

            break;

        } else {

            text.innerHTML = 'Email non presente in lista';

            console.log('no');

        }

    }



});


