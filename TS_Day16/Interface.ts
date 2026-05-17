/*
1. An interface in Typescript is a way to define the structure of an object.
2. It tells the compiler what properties and types an object should have
3. Its like a blue print for objects.

Abstract method: We only have signature method(there is no implementation)

interface InterfaceName{
properties
abstract methods
}

1.Regular properties
2.Optional properties
3.Read only properties and function types
4.Extending Interfaces
5.Class Implements Interface
*/

// Ex1: Basic Interface
interface Person{
    name:string;
    age:number;
}

let student:Person={
    name:"Dinesh",
    age:26
}

console.log(student.name);
console.log(student.age);
console.log(student); //{name:'John',age:30}

//Ex2: Optional Properties (?)
interface Employee{
    eid:number,
    ename:string,
    edepartment?:string
}

let emp1:Employee={
    eid:101,
    ename:"Dinesh"
}

let emp2:Employee={
    eid:101,
    ename:"Dinesh",
    edepartment:"accounts"
}
console.log(emp1.eid,emp1.ename,emp1.edepartment); //101 john undefined
console.log(emp2.eid,emp2.ename,emp2.edepartment); //102 smith accounts



//Example3: Readonly properties(readonly to prevent modification)& function type

interface Book{
    title:string;
    readonly isbn:string;
    display():void; //abstract method
}

let b1:Book={
    title:"learn Palywright",
    isbn:"123-ABC",
    display(){
        console.log(b1.isbn,b1.title);
    }
}
console.log("Before changing values ......");
console.log(b1.title); //Learn Playwright
console.log(b1.isbn);  //123-ABC
b1.display();

console.log("After changing values....");
b1.title="Learn Typescript";
console.log("After changing title:",b1.title);

//b1.isbn="123-XYZ"; //Error:Cannot assign to 'isbn' beacause it is a read- only property

//Ex4: Extending Interfaces(Inheritance is applicable)

//Parent INterface
interface Animal{
    name:string;
}

//Child interface
interface Dog extends Animal{
    color:string;
}

let mydog:Dog={
    name:"Zunnu",
    color:"White"
}

console.log(mydog.name,mydog.color); //Zunnu White

//Example5: 
// Class can extends another class
//Interface can extends another interface
//by default methods are abstract in interface
//Class can implement interface
//while implementing the class we should redeclare the variables and have to provide implementation to the class
//
interface Animal{
    name:string,
    sound():void;
}

class Dog implements Animal{
    name:string; //inherited from interfcae Animal
    color:string; //property belongs to Dog

    constructor(name:string,color:string){
        this.name=name;
        this.color=color;
    }
    sound(){
        console.log("bark.....")
    }
}

let pet=new Dog("Tommy","Black");
console.log(pet.name);
console.log(pet.color);
pet.sound();


 