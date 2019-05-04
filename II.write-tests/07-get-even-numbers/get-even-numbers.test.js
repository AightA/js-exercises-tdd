// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];

var getEven = require("./get-even-numbers");

test("Get Even number", function() {

    var expected = [22, 82, 4] ;
    var input =  [ 22, 13, 73, 82, 4];
    var result = getEven(input);
    expect(result).toEqual(expected);

});