

var flattening = arr=> {
    var isObj = elt => typeof(elt) === "object";
    var concatPush = (arr, elt) => {
        if (isObj(elt))
            return arr.concat( elt );
        else return arr.push(elt);
    }

    return arr.reduce( concatPush, [] )
}

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
var ancestry = JSON.parse(ANCESTRY_FILE);

ancestry.forEach( person => byName[person.name] = person );

var differences = ancestry.filter( person => byName[person.mother] != null)
  .map( person => person.born - byName[person.mother].born );

function groupBy(array, groupOf) {
  var groups = {};
  array.forEach(function(element) {
    var groupName = groupOf(element);
    if (groupName in groups)
      groups[groupName].push(element);
    else
      groups[groupName] = [element];
  });
  return groups;
}

var byCentury = groupBy(ancestry, person => Math.ceil(person.died / 100) );

var every = (arr, func) => arr.reduce( (current, elt) => current && func(elt), true);
var some = (arr, func) => arr.reduce( (current, elt) => current || func(elt), false);


var arrays = [[1, 2, 3], [4, 5], [6]];
console.log( flattening(arrays));

console.log(average(differences));

for (var century in byCentury) {
  var ages = byCentury[century].map(function(person) {
    return person.died - person.born;
  });
  console.log(century + ": " + average(ages));
}

console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN));
console.log(some([NaN, 3, 4], isNaN));
console.log(some([2, 3, 4], isNaN));
