'use strict'

const gameBot = function () {
    let gameNumber = Math.round(Math.random() * 100)
    let attempt = 10;
    let questionAttempt;
    let questionWin;

    const isNumber = function (num) {
        return !isNaN(num) && !/\s/g.test(num) && isFinite(num)
    }

    const checkQuestionAttempt = function () {
        if (questionAttempt === true) {
            gameBot();
        } else {
            alert('До свидания. Приходите играть еще!')
            return
        }
    }

    const checkQuestionWin = function () {
        if (questionWin === true) {
            gameBot();
        } else {
            alert('До свидания. \nПриходите играть еще!')
            return
        }
    }

    const game = function () {
        const userNumber = prompt('Угадайте число от 1 до 100');

        if (attempt === 0) {
            questionAttempt = confirm('Попытки закончились. \nХотите сыграть еще?')
            checkQuestionAttempt();
        } else if (userNumber === null) {
            alert('Игра окончена.')
            return
        } else if (!isNumber(userNumber)) {
            alert('Введи число!')
            game();
        } else if (+userNumber === gameNumber) {
            questionWin = confirm('Поздравляю, Вы угадали!!! \nЗагаданное число: ' + gameNumber + ' \nХотели бы сыграть еще?');
            checkQuestionWin();
        } else if (+userNumber > gameNumber) {
            attempt--;
            alert('Загаданное число меньше. \nОсталось попыток: ' + attempt);
            game();
        } else if (+userNumber < gameNumber) {
            attempt--;
            alert('Загаданное число больше. \nОсталось попыток: ' + attempt);
            game();
        }
    }

    game();
}

gameBot();
