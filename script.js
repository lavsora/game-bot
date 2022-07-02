'use strict'

const text = document.querySelector('h1');
const form = document.querySelector('#prompt');
const input = document.querySelector('input');
const btnStart = document.querySelector('#btn-start');
const btnTrueFalse = document.querySelectorAll('.btn-true-false')

let attempt = 10;

const printMessage = (str) => {
    text.textContent = str;
}

input.addEventListener('input', (e) => e.target.value = e.target.value.replace(/\D+/, ''));

const game = () => {

    let gameNumber = Math.round(Math.random() * 100)

    printMessage(`Угадайте число от 1 до 100. У вас есть ${attempt} попыток.`)

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        
        if(!(input.value === '')) {
            gameBot(+input.value)
    
            input.value = '';
        }
    });

    const gameBot = (userNumber) => {
        if (attempt < 2) {
            printMessage('Попытки закончились. Хотите сыграть еще?')

            form.style.display = 'none'

            btnTrueFalse[0].style.display = 'block';
            btnTrueFalse[1].style.display = 'block';

            btnTrueFalse[0].addEventListener('click', () => {
                btnTrueFalse[0].style.display = 'none';
                btnTrueFalse[1].style.display = 'none';

                form.style.display = 'block'

                gameNumber = Math.round(Math.random() * 100)
                attempt = 10

                return game()
            });

            btnTrueFalse[1].addEventListener('click', () => {
                btnTrueFalse[0].style.display = 'none';
                btnTrueFalse[1].style.display = 'none';

                printMessage('До свидания. Приходите играть еще!')

                form.style.display = 'none'

                return
            })
        }

        attempt--;

        if (userNumber === gameNumber) {
            printMessage(`Поздравляю, Вы угадали!!! Загаданное число: ${gameNumber} Хотели бы сыграть еще?`)

            form.style.display = 'none'

            btnTrueFalse[0].style.display = 'block';
            btnTrueFalse[1].style.display = 'block';

            btnTrueFalse[0].addEventListener('click', () => {
                btnTrueFalse[0].style.display = 'none';
                btnTrueFalse[1].style.display = 'none';

                form.style.display = 'block'

                gameNumber = Math.round(Math.random() * 100)
                attempt = 10

                return game()
            });

            btnTrueFalse[1].addEventListener('click', () => {
                btnTrueFalse[0].style.display = 'none';
                btnTrueFalse[1].style.display = 'none';

                printMessage('До свидания. Приходите играть еще!')

                form.style.display = 'none'

                return
            })

        } else if (userNumber > gameNumber) {
            printMessage(`Загаданное число меньше. Осталось попыток: ${attempt}`)
        } else if (userNumber < gameNumber) {
            printMessage(`Загаданное число больше. Осталось попыток: ${attempt}`)
        }
    }
}

game()
