

var poundTriangle = function() {
    for ( var i = 0; i < 7; i++){
        var arr = new Array(i+1);
        arr.fill("#");
        var s = arr.join("");
        console.log(s);
    }
}

var fizzBuzz = function() {
    const END_NUM = 100;
    for ( var i = 1; i < END_NUM; i++){
        if (i %3 !== 0 && i % 5 !== 0)
            console.log(i)
        if (i %3 === 0 && i % 5 !== 0)
            console.log("Fizz")
        if (i %3 !== 0 && i % 5 === 0)
            console.log("Buzz")
        if (i %3 === 0 && i % 5 === 0)
            console.log("FizzBuzz")
    }   
}

var chessBoard = function() {
    var s = "";
    var lightFirst = " # # # #";
    var darkFirst = "# # # # ";
    var combinedString = lightFirst + "\n" + darkFirst + "\n";
    for ( var i = 0; i < 4; i++){
        s += combinedString;
    }
    console.log(s)
}

poundTriangle();
console.log("-----");
//fizzBuzz();
chessBoard();
