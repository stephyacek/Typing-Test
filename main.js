/* eslint-disable no-unused-vars */

var $pangram = document.querySelector('#pangram')

var typeThis = 'Jaded zombies acted quaintly but kept driving their oxen forward.'

var letters = typeThis.split('')

document.addEventListener('DOMContentLoaded', createPrompt(letters))

var $firstChild = $pangram.children[0]

$firstChild.setAttribute('class', 'active')

//creating span with one character inside
function createLetter(character) {
  var $pan = document.createElement('span')
  $pan.textContent = character
  return $pan
}
//Looping through the characters in array split which
//calls the createLetter() and then finishes by
//appending to the actual sentence
function createPrompt(sentence) {
  for (var i = 0; i < sentence.length; i++) {
    var zombie = createLetter(sentence[i])
    $pangram.appendChild(zombie)
  }
}
