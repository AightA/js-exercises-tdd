
var greetPeople = require("./greet-people");

test("print list of names prefixed with Hello", function() {
  // Arrange
  // Act
  // Assert
  var expected = "Hello IrinaAshleighEtza" ;
  var mentors = ['Irina', 'Ashleigh', 'Etza'];
  var result = greetPeople(mentors);
  expect(result).toEqual(expected);

});