// BULLET 2
const sentence = prompt("Please enter a sentence no more than 30 characters long");

// BULLET 3
// function capitalizeFirst(element1) {
//   return element1.charAt(0).toUpperCase();
// }
// const firstLetter = capitalizeFirst(sentence);

// BULLET 3
// sentLength = parseInt(sentence.length) - 1;
// function capitalizeLast(element) {
//   return element.charAt(sentLength).toUpperCase();
// }
// const lastLetter = capitalizeLast(sentence);

// BULLET 3
// function combineFirstLast (element1, element2) {
//   return element1 + element2;
// }
// const combinedLetters = combineFirstLast(firstLetter, lastLetter);

// BULLET 4
// function combineLastFirst (element1, element2){
//  return element2 + element1;
// }
// const reverseLetters = combineLastFirst(firstLetter, lastLetter);
// alert(reverseLetters);

// BULLET 5
function ultimateFunction(element) {
  const firstLetter = element.charAt(0).toUpperCase();
  const lastLetter = element.charAt(parseInt(element.length) - 1).toUpperCase();
  return element + lastLetter + firstLetter;
}
prompt(ultimateFunction(sentence));

//BULLET 6

