
var range = ( a, b, step ) => { 
    var retArr = [];
    step = step || 1;
    if(step > 0) {
        for(var i = a; i <= b; i += step ){
            retArr.push(i);
        }
    } else {
        for(var i = a; i >= b; i += step ){
            retArr.push(i);
        }
    }
    return retArr;
}

var reverseArray = arr => {
    var retArr = []
    for( var elt in arr ) retArr.unshift(arr[elt]);
    return retArr;
}

var reverseArrayInPlace = arr => {
    var len = arr.length;
    for(var i = 0; i < Math.floor( len/2 ); i++ ){
        [ arr[i], arr[len - 1 - i] ] = [ arr[len - 1 - i], arr[i] ];
    }    
}

var nth = (list , n) => {
    return n === 0 ? list.value : nth( list.rest, n - 1 );
};

var prepend = ( elt, list ) => {
    return list = {
        value: elt,
        rest: list
    };
};

var arrayToList = arr => {
    var retList = null;
    for( var i  = arr.length - 1; i >= 0; i-- ) {
        retList = {
            value: arr[i],
            rest: retList
        };
    }
    return retList;
};

var listToArray = list => { 
    var retArr = []
    for (var node = list; node; node = node.rest) {
        retArr.push(node.value);
    }
    return retArr;
};

var deepEqual = (a, b) => {
    if (a === b) return true;
    if ( typeof a === "object" && typeof b === "object") {
        if ( a=== null || b === null ) return false;
        if ( Object.keys( a ).length === Object.keys( b ).length ) {
            for ( var elt in a ) {
                if (!deepEqual( a[elt], b[elt] )) return false;
            }
            return true;
        }
    }
    return false;

}


console.log(range(6, 10));
console.log(range(5, 2, -1));

console.log(reverseArray(["A", "B", "C"]));
var arr = [ "a", "b", "c"];
reverseArrayInPlace(arr);
console.log(arr);

console.log(arrayToList([10, 20]));
console.log(nth(arrayToList([10, 20, 30]), 1));


var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
