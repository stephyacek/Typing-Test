/* eslint-disable no-unused-vars */

var $pangram = document.querySelector('#pangram')

var typeThis = 'Jaded zombies acted quaintly but kept driving their oxen forward.'

var letters = typeThis.split('')

document.addEventListener('DOMContentLoaded', createPrompt(letters))

function createLetter(character) {
  var $pan = document.createElement('span')
  $pan.textContent = character
  return $pan
}

function createPrompt(sentence) {
  for (var i = 0; i < sentence.length; i++) {
    var zombie = createLetter(sentence[i])
    $pangram.appendChild(zombie)
  }
  //loop through sentence and call createLetter
  //return prompt
}
