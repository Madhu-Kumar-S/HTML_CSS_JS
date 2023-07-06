console.log("HelloWorld!");
console.log("..................................................");
console.log();


//Variables
let number = 1;
console.log(number);
number = 2
console.log(number);

var num = 3
console.log(num)
var num = 4
console.log(num)

const pi = 3.14
console.log(pi)
console.log("..................................................");

//Data Types
let num1 = 56
console.log("DT= "+typeof num1)
let num2 = 10_00_000
let num3 = 1100000000000000000000000005n // big Int
let num4 = 0x5f
console.log(num1,num2,num3,num4)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MAX_VALUE)

let fname = "Kakashi"
let lname = "Hatake"
console.log(fname+" "+lname)

let bool = 5<6
console.log(bool)
console.log("..................................................");


// Type conversion
num = 56
console.log(num, typeof num)
num = String(num)
console.log(num, typeof num)
num = Number(num)
console.log(num, typeof num)
console.log("..................................................");

// Type Coercion
let x
console.log(x,typeof x)  // undefined
x = 4
console.log(x,typeof x)  // num
x = x + ""
console.log(x,typeof x)  // str
x = x - 2
console.log(x,typeof x)  // num
x = !x
console.log(x,typeof x) 
let y = 2
y = 2 + ""
console.log(y,typeof y)  //str
y = +2 + 2
console.log(y,typeof y)  //num
// boolean of any number = true, boolean of 0, undefined is false
console.log(parseInt("123 Naruto")) // takes only number and number need to be at 1st
console.log("..................................................");

// Template literal
let a = 50
let b = 6
let result = a + b
console.log(`Sum of ${a} and ${b} is ${result}`);
console.log(`Copy Cat Ninja
"The Kakashi Hatake"`);
console.log("..................................................");

// Objects
let input = 'name'
let student = {
    name:"Hakamaru",
    age:5,
    'address lane':"#1, Okinawa, Japan"
};
console.log(student);
console.log(student.name);
console.log(student[input]);
console.log(student['address lane']);
console.log("..................................................");

let myData = {
    name:"Kakashi",
    age:"23",
    work:{
        firstcompany:"Wipro"
    }
}
console.log(myData);
console.log(myData.work);
console.log(myData.work.firstcompany);
console.log(myData.work.secondcompany);
console.log(myData.work.secondcompany?.length);  
// means if myData object is there then it considers that and continue or if it is not there then it prints undefined 
console.log("..................................................");

// to delete object
// delete myData.work;
console.log(myData);
console.log("..................................................");
// for - in loop
for(let key in myData)
{
    console.log(key, myData[key]);
}
console.log("..................................................");
for(let key in myData.work)
{
    console.log(key, myData.work[key]);
}
console.log("..................................................");

// Functions
function show() {
    console.log("This is function.");
}
show();
console.log("..................................................");

function greetings() {
    return "Hello World!"; 
}
let str = greetings()
console.log(str);
console.log("..................................................");

function greetingUser(un) {
    let str = "Welcome to JS!"; 
    return `Hello ${un}...${str}`; // un and str are local var
}
let username = "Minato" // global var
str = greetingUser(username)
console.log(str);
console.log("..................................................");

// anonymous function
let add = function(num1, num2,num3=0){
    return num1+num2+num3;
}
console.log(add(50,6))
console.log("..................................................");

// Arrow Functions aka anonymous fun
let sum = (n1,n2) => n1+n2;
console.log(sum(1,2));
console.log("..................................................");

// Method
let method = {
    methodName :"Method is Greet",

    greet1: ()=> "greet message 1",
    
    greet2: function(){
        console.log("greet message 2");
    }
}
console.log(method.methodName);
console.log(method.greet1());
method.greet2();
console.log("..................................................");

// this - refers to a current object
let emp = {
    ename:"A",
    company:"Wipro",
    display: function (){
        return `${this.ename} is working in ${this.company}`
    }
}
console.log(emp.display());
console.log("..................................................");

let laptop1 = {
    cpu: "i7",
    ram: 16,
    brand: "HP",
    compare: function(other){
        if(this.cpu>other.cpu) console.log(this)
        else console.log(other)
    }
}
let laptop2 = {
    cpu: "i5",
    ram: 8,
    brand: "ASUS"
}
laptop1.compare(laptop2);
console.log("..................................................");

// constructor function
function Alien(name,okage)
{
    this.name = name;
    this.okage = okage;
    this.purpose = function()
    {
        console.log("Serving and protecting village.")
    }
}
let alien1 = new Alien("Hashirama",1);
let alien2 = new Alien("Tobirama",2)
let alien3 = new Alien()
console.log(alien1)
console.log(alien2)
console.log(alien3)
alien3.name = "Tsunade";
alien3.okage = 5;
console.log(alien3)
alien1.purpose();
console.log("..................................................");

// Arrays
let values = new Array();
values.push(1,2,3,4,5);
console.log(values);

let strings = [];
strings.push("A","B","C","D","E");
console.log(strings);

function display(){
    console.log("display function")
}
let mixedvalues = [1, {objEct:"A"}, display];
console.log(mixedvalues);
console.log(mixedvalues[0]);
console.log(mixedvalues[1]);
console.log(mixedvalues[1].objEct);
mixedvalues[2]();
console.log("..................................................");

// Array destructuring
console.log();
console.log("Array destructuring");
// values = [1,2,3,4,5]
let [g,h,i,j,k] = values;
let [l,m,n,...o] = values;
console.log(g,h,i,j,k);
console.log(l,m,n,o);
console.log(o);
console.log("..................................................");

// swapping
let p = 1;
let q = 2;
console.log(p,q);
[p,q] = [q,p]
console.log(p,q);
console.log("..................................................");

//spliting array
let stringArray = 'My name is Hatake Kakashi'.split(' ');
console.log(stringArray);
console.log("..................................................");

//for - each 
let nums = [56,24,37,24,95];
nums.forEach( eachValue => {
    console.log(eachValue);
})
nums.forEach((eachValue, index, nums) => {
    console.log(index, eachValue, nums)
})
console.log("..................................................");

// filter & map & reduce method for array
let nums1 = [23,76,45,92,29];
nums1.filter( n => n%2===0)
.map( n => n*2)
.forEach( n => {
    console.log(n);
})

let resultSum = [1,2,3,4,5].filter( n => n%2===0)
.map( n => n*2)
.reduce( (a,b) => a+b)

console.log(resultSum)
console.log("..................................................");

// set
let set = new Set(['Hatake Kakashi',1,2,2,3]);
console.log(set);
set.forEach(  n => { console.log(n) });
console.log(set.has(3));
console.log("..................................................");

// map
let map = new Map();
map.set('Uchiha', 'Itachi');
map.set('Hatake', 'Kakashi');
map.set('Uzumaki', 'Naruto');

console.log(map);
console.log(map.keys());
console.log(map.get('Madhu'));

for(let [k,v] of map){
    console.log(k,":",v);
}

map.forEach((k,v) => {
    console.log(k,":",v);
})

console.log("..................................................");

// rest operator - combines into array
displayColours = (message, ...colours) => {

    console.log(message);
    // spread operator - splits into single element
    console.log(...colours);
};

let msg = "List of Colours";
displayColours(msg, "Red");
displayColours(msg, "Red", "Blue");
displayColours(msg, "Red", "Blue", "Green");

let colours = ["Red", "Blue", "Green", "Yellow"];
displayColours(msg, ...colours);

console.log("..................................................");

// object literal

let firstname = "Hinata";
let lastname = "Hyuga";

let shinobi = { firstname,lastname }; // object

console.log(shinobi.firstname);
console.log(shinobi.lastname);
console.log();

function getdata(firstname, lastname, age) {
    let fullname = `${firstname} ${lastname}`;
    // returning object literal
    return { firstname, 
             lastname, 
             fullname,
             age,
             isSenior:() => {
                if(age>22) return true;
                else return false;
             }};
};

let s = getdata("Naruto","Uzumaki",23);
console.log(s.firstname);
console.log(s.lastname);
console.log(s.fullname);
console.log(s.age);
console.log(s.isSenior());

console.log("..................................................");

// destructuring objects

let employee = {
    efn : "Charles",
    eln : "Bing",
    egen : 'Male'
};

let {efn : fn, eln : ln , egen : gn} = employee;
console.log(fn);
console.log(ln);
console.log(gn);
console.log("..................................................");

// for - of loop
console.log("For-of");
for(let value of [1,2,3])
{
    console.log(value);
}
console.log();
for(let letter of "ABC")
{
    console.log(letter);
}
console.log();
// for - in loop
console.log("For-in");
for(let index in [4,5,6])
{
    console.log(values[index]);
}
console.log("..................................................");