class Person
{
    constructor()
    {
        console.log("Person constructor");
    }
}

class Employee extends Person
{
    constructor()
    {
        super();
        console.log("Employee constructor");
    }
}

let e = new Employee();