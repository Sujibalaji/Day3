//if the variable is of primitive datatype like number,string, boolean, undefined or null means '===' can be used.
//Using Stringify method
var obj1 = {name: "Person 1", age:5};
var obj2 = { age:5, name: "Person 1"};
console.log(JSON.stringify(obj1) === JSON.stringify(obj2));

/* Explaination
Json stringify converts Object into String and compare strings in order
since, obj1 and obj2 are not in order this will display output as false.