/* eslint-disable no-unused-vars */

var $pangram = document.querySelector('#pangram')

var $input = document.querySelector('.input')

var typeThis = 'Jaded zombies acted quaintly but kept driving their oxen forward.'

var letters = typeThis.split('')

document.addEventListener('DOMContentLoaded', createPrompt(letters))

var $firstChild = $pangram.children[0]

$firstChild.setAttribute('class', 'active')

$input.addEventListener('keydown', matching)

function matching(event) {
  var $activeChar = document.querySelector('.active')
  if (event.key === $activeChar.textContent.toLowerCase()){
    $activeChar.classList.add('correct')
  }
  else {
    $activeChar.classList.add('incorrect')
  }

  $activeChar.classList.remove('active')
  $activeChar.nextSibling.setAttribute('class','active')

  var $correct = document.querySelectorAll('.correct')
  var score = $correct.length/typeThis.length
  var $totalScore = document.querySelector('.total-score')
  $totalScore.textContent = Math.ceil(score * 100 + 1) + "%"
}

function createLetter(character) {
  var $pan = document.createElement('span')
  $pan.textContent = character
  return $pan
}

function createPrompt(sentence) {
  for (var i = 0; i < sentence.length; i++) {
    var eachLetter = createLetter(sentence[i])
    $pangram.appendChild(eachLetter)
  }
}
