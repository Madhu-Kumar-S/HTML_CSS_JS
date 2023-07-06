let s1 = Symbol("FirstName");
console.log(s1);
console.log(s1.toString);
console.log(s1.description);

// s2,s3 are diff
let s2 = Symbol("Test");
let s3 = Symbol("Test");
console.log(s1===s3);

// checks if it has "RegSymbol" if not then creates one in Symbol
let s4 = Symbol.for("RegSymbol");
let s5 = Symbol.for("RegSymbol");
console.log(s4===s5);