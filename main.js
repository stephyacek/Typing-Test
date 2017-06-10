/* eslint-disable no-unused-vars */

var $pangram = document.querySelector('#pangram')

//$pangram.textContent = 'Jaded zombies acted quaintly but kept driving their oxen forward.'

var letters = $pangram.textContent.split('')


function createLetter(character) {
  var $pan = document.createElement('span')
  $pan.textContent = character
  return $pan
}
