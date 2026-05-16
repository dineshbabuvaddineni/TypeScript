//Inheritance
//A Class can reuse the properties and methods of another class.
//Inheritance is a mechanism where one class (child) can inherit the properties and methods of another class(parent).
//Inheritance allows you to reuse the functionality of an existing class without rewriting it.

// Method Overriding:
//A subclass/child class can provide a specific implementation of a method that is already defined in its superclass.
//A ------- properties+methods (Parent class/Base Class/Super class)
//B extends A--- properties+methods(Child class/derived class/Subclass)

class Car{
    name:string;
    color:string;
    model:string;

    constructor(name:string,color:string,model:string){
        this.name=name;
        this.color=color;
        this.model=model;
    }

    start(){
        console.log("Car started.....")
    }
    stop(){
        console.log("Car stopped");
    }

    displayInformation(){
        console.log(`Name: ${this.name},Color:${this.color},Model:${this.model}`);
    }
}

//Child class - Honda
class Honda extends Car{
    year:number;

    constructor(name:string,color:string,model:string,year:number){
        super(name,color,model);
        this.year=year;
    }

    //Method overriding
    start(){
        console.log("Honda started");
    }

    yom(){
        console.log(`Name: ${this.name},Color:${this.color},Model:${this.model},Year : ${this.year}`);
    }
}

//child class - Maruthi
class Maruthi extends Car{
    year:number;
    constructor(name:string,color:string,model:string,year:number){
        super(name,color,model);
        this.year=year;
    }

    //Method overriding
    start(){
        console.log("Maruthi started");
    }
    yom(){
        console.log(`Name: ${this.name},Color:${this.color},Model:${this.model},Year : ${this.year}`);
    }
}

//Usage
//Create Honda Object
let honda=new Honda("Honda","Red","Honda City",2024);

console.log(honda.name);
console.log(honda.color);
console.log(honda.model);
console.log(honda.year);

honda.start(); //called child class method which is overrided method
honda.displayInformation();
honda.stop(); //Car stopped....  //Parent class
honda.yom();

//Create a Maruthi Object
let maruthi=new Maruthi("Maruthi", "Blue", "Suzuki", 2023);
maruthi.start(); //Parent class
maruthi.displayInformation(); //Name: Maruthi,Color:Blue,Model:Suzuki
maruthi.stop();
maruthi.yom();//Name: Maruthi,Color:Blue,Model:Suzuki,Year : 2023

//Parent class Variable holding child class Object
let car:Car=new Honda("Honda","Red","Honda City",2024);
car.displayInformation(); //Name: Honda,Color:Red,Model:Honda City
car.start(); //Honda started

//car.yom(); //Not accessible,yom() defined inside the child class but not there in the parent






