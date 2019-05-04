var largerThanTen = require("./numbers-Greater-Than-10");

test("Get numbers greater than 10", function() {

    var expected = [32, 21] ;
    var input =  [4, 10, 32, 9, 21];
    var result = largerThanTen(input);
    expect(result).toEqual(expected);

});

// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];
