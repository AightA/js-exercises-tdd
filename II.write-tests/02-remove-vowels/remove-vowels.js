function removeVowels(word) {
  var characters = word.split("");

  var result = [];

  characters.forEach(function(character) {
    var characterLowerCase = character.toLowerCase ()
    if (
      !(characterLowerCase === "a" ||
      characterLowerCase === "o" ||
      characterLowerCase === "i" ||
      characterLowerCase === "e" ||
      characterLowerCase === "u")
    ) {
      result.push(character);
    } else {
      result.push("");
    }
  });

  return result.join("");
}

module.exports = removeVowels;

/*
  Let's trace this piece of code - what is the value of result with this input

  var result = removeVowels('samuel');

  what is the value of result?
*/
