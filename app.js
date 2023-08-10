let randomNumber1 = Math.floor(Math.random() * 6) + 1

let randomDiceImage = 'dice' + randomNumber1 + '.png'

let randomDiceImageSource = 'img/' + randomDiceImage

let image1 = document.querySelectorAll('img')[0]

image1.setAttribute('src', randomDiceImageSource)

let randomNumber2 = Math.floor(Math.random() * 6 ) + 1

let randomDiceImageSource2 = 'img/dice' + randomNumber2 + '.png'

document.querySelectorAll('img')[1].setAttribute('src', randomDiceImageSource2)

if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = '🏆  Jogador 1 Ganhou!!!'
} else if(randomNumber2 > randomNumber1) {
    document.querySelector('h1').innerHTML = '🏆  Jogador 2 Ganhou!!!'
}else{
    document.querySelector('h1').innerHTML = 'Empate!!!!'
}