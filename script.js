'use strict'

const gameBot = () => {
    let gameNumber = Math.round(Math.random() * 100)
    let attempt = 10;

    const game = () => {
        let userNumber = prompt('Угадайте число от 1 до 100');

        if (userNumber === null) {
            alert('Игра окончена.')
            return
        }

        if (isNaN(userNumber)) {
            alert('Ошибка! Введите число!')
        }

        if (attempt === 0) {
            let questionAttempt = confirm('Попытки закончились. \nХотите сыграть еще?')

            if (questionAttempt === true) {
                return gameBot();
            } else {
                alert('До свидания. \nПриходите играть еще!')
                return
            }

        }

        attempt--;


        if (+userNumber === gameNumber) {
            let questionWin = confirm('Поздравляю, Вы угадали!!! \nЗагаданное число: ' + gameNumber + ' \nХотели бы сыграть еще?');

            if (questionWin === true) {
                return gameBot();
            } else {
                alert('До свидания. \nПриходите играть еще!')
                return
            }

        } else if (+userNumber > gameNumber) {
            alert('Загаданное число меньше. \nОсталось попыток: ' + attempt);
        } else if (+userNumber < gameNumber) {
            alert('Загаданное число больше. \nОсталось попыток: ' + attempt);
        }

        return game();
    }

    return game();
}

gameBot();
