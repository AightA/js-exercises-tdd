
var removeVowelsForWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function() {
  
// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]

// Arrange
// Act
// Assert

  var expected = ["rn", "tz", "Dnl"] ;
  var input = ["Irina", "Etza", "Daniel"];
  var result = removeVowelsForWords(input);
  expect(result).toEqual(expected);
});
