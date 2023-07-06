class Person
{
    constructor(name)
    {
        this.name = name;
    }
    static staticMethod()
    {
        console.log("Static method");
    }
    greetPerson(){
        console.log("Hi "+this.name);
    }
}

let p = new Person("Hakamaru");

console.log(p.name);
Person.staticMethod();
p.greetPerson();