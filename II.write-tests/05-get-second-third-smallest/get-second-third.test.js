

var getSecondThird = require("./get-second-third");

test("Get Second Third", function() {

    var expected = [6, 8] ;
    var input =  [90, 5, 11, 8, 6];
    var result = getSecondThird(input);
    expect(result).toEqual(expected);

});

// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
