'use strict'

let game;

const gameBot = function () {
    let gameNumber = Math.round(Math.random()*100)
    return function () {
        let userNumber = prompt('Угадай число от 1 до 100');

        if (userNumber === null) {
            alert('Игра окончена')
            return

        } else if (isNaN(userNumber)) {
            alert('Введи число!')
            game();
        }

        if (+userNumber === gameNumber) {
            alert('Поздравляю, Вы угадали!!!');
        } else if (+userNumber > gameNumber) {
            alert('Загаданное число меньше');
            game();
        } else if (+userNumber < gameNumber) {
            alert('Загаданное число больше');
            game();
        }
    }
}

const goGame = function () {
    let question = confirm('Хочешь поиграть в игру?')

    if (question === true) {
        game();
    } else {
        alert('Не задерживайте очередь')
        return
    }
}

game = gameBot();

goGame();
