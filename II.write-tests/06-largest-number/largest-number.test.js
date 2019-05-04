
var getLargestNumber = require("./largest-number");

test("Largest Number", function() {

    var expected = 88;
    var input = [3, 21, 88, 4, 36];
    var result = getLargestNumber(input);
    expect(result).toEqual(expected);

});


// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
