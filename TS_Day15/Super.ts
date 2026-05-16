// super() -used to invoke immediate parent class constructor
// super - used to invoke immediate parent class method
// super - canot be used to invoke the parent class property (In Java it is possible).
// but in jave we can access parent class varibles using super keyword

class Parent{
    num:number=10;
    constructor(){
        console.log("This is Parent class constructor..");
    }
    display(){
        console.log("This is display() method from parent class... ")
    }
}

class Child extends Parent{
    num:number=20; //overiden
    constructor(){
        super(); // this will call parent class constructor(must be called)
        console.log("This is child class constructor");
    }

    show(){
        //console.log(super.num); //Parents num TS does not support super num to access parent class properties directly like java does.
        console.log(this.num); //20
        console.log("This is show() method from the child class.....")
    }


    //overrided method
    display(){
        super.display(); //This will invoke parent class method
        console.log("This is display() method from child class....");
    }

}

let c1=new Child();
c1.show(); //child class
c1.display(); //child class


