/* eslint-disable no-unused-vars */

var $pangram = document.querySelector('#pangram')

$pangram.textContent = 'Jaded zombies acted quaintly but kept driving their oxen forward.'

var letters = $pangram.textContent.split('')


function createLetter(letter) {
  var $letter = document.createElement('span')
  $pangram.appendChild($letter)
  $pangram.textContent = letter
}
