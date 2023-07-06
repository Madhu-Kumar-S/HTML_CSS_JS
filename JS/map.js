let mymap = new Map([['id',1]]);

mymap.set('firstname',"Rock");
mymap.set('lastname',"Lee");

console.log(mymap);
console.log(mymap.get('firstname'));

let obj1 = {};
let obj2 = {};

mymap.set(obj1,10);
mymap.set(obj2,20);
console.log(mymap.get(obj1));

console.log(mymap.size);

console.log();
console.log(...mymap);
console.log(...mymap.keys());
console.log(...mymap.values());
console.log();

for(let entry of mymap.entries())
{
    console.log(`${entry[0]} -> ${entry[1]}`);
}
for(let [k,v] of mymap.entries())
{
    console.log(`${k} -> ${v}`);
}
console.log();

// for-each (value, key, mymap)
mymap.forEach( (value, key, callingmap) => {
    console.log(key+"="+value);
});

console.log();
mymap.delete(obj2);
console.log(mymap);
mymap.clear();
console.log(mymap);
