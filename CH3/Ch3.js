
var min = function(a, b){
    return (a<b) ? a  : b;
}

var isEven = function( n ){
    if (n ===0) return true;
    if (n===1 ) return false;
    if (n < 0) return isEven(-n)
    return isEven(n-2)
}

var countChar = function(s, c ){
    var total = 0;
    for( var i = 0; i < s.length; i++) {
        if( s[i] === c) total += 1;
    }
    return total;
}

var countBs = function(s){
    return countChar(s, "B");
}



console.log( min(5, 6));
console.log( isEven(1117));
console.log( countBs("BBC"));
console.log( countChar("kakkerlak", "k"));

