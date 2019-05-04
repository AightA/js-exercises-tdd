
var removeVowels = require("./remove-vowels");

test("remove vowels from word", function() {
  // Arrange
  // Act
  // Assert
  var expected = "sml" ;

  var result = removeVowels('samuel');
  expect(result).toEqual(expected);
});
