let myset = new Set([1,2,3]);

myset.add("A");
myset.add(1);
myset.add(true);
myset.add({});
myset.add({});
console.log(myset);
console.log(myset.size);

// chaining
myset.add(0).add(1).add(4).add('B');
console.log(myset);
console.log(myset.has(5));
myset.delete(4);
console.log(myset);

// for-each 
myset.forEach( (element1, element2, callingset) => {
    // since element1 and element2 are identical
    console.log(element1);
});


// Weak Set
let weakset = new WeakSet();
let key = {};
weakset.add(key);
console.log(weakset);

key = null;
console.log(weakset);