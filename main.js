/* eslint-disable no-unused-vars */

var $pangram = document.querySelector('#pangram')

var $input = document.querySelector('.input')

var typeThis = 'Jaded zombies acted quaintly but kept driving their oxen forward.'

var letters = typeThis.split('')

document.addEventListener('DOMContentLoaded', createPrompt(letters))

var $firstChild = $pangram.children[0]
//make first array item active
$firstChild.setAttribute('class', 'active')

$input.addEventListener('keydown', matching)

function matching(event) {
  //Selecting first active character
  var $activeChar = document.querySelector('.active')
  //If typed correct, give 'correct' class
  if (event.key === $activeChar.textContent.toLowerCase()){
    $activeChar.classList.add('correct')
  }
  //If typed incorrect, give 'incorrect' class
  else {
    $activeChar.classList.add('incorrect')
  }
  //Move to sibling span to loop through again
  $activeChar.classList.remove('active')
  $activeChar.nextSibling.setAttribute('class','active')
}

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
