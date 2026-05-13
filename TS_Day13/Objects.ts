//Object - object contans properties and behaviour
//Objects contains variables and & methods
//Objects is collection of key and value pairs


//Ex:

//employee -- name, designation, sal, dep
//              bonus(),getemdetails(),setDetails()

//student - name,sid,grade
            //getDetails(),setDetails()

//Different ways to create an object in JS/TS.
//1. Using 'Object' type- Directly define the values for variable(JS/TS)
//2. Inline Type Object - We also define the datatype of the keys(TS)
//3. Using type aliases(JS/TS)
//4. USing the classes(JS ES16/TS)

//1. Using 'Object' type -Directly define the values for variables
//The typescript 'object' type represents all values that are not in primitive types.

Ex:1
let employee:object={
        name:"John",
        age:30,
        salary:50000,
        job:"Engineer"
}

let employee1 ={
        name:"John",
        age:30,
        salary:50000,
        job:"Engineer",
        getDetails:function(): string{
                //console.log(this.name1,this.age,this.salary,this.job)
                return `${this.name} is a ${this.job} earning ${this.salary}`;
        }
}
console.log(typeof employee1); //Object

//accessing object - approach 1 (using dot notation)

console.log(employee1.name,employee1.salary,employee1.job); //
console.log(employee1.getDetails()); //John is a Engineer earning 50000

//accessing object - approach2(using braket notation)
console.log(employee1["name"],employee1["salary"],employee1["job"]); //John 50000 Engineer
console.log(employee1["getDetails"]()); //John is a Engineer earning 50000

//Modify the value
employee1.job="Manager";
console.log("Modified job is:",employee1.job); 


//2. Inline Type Object - We also define the data  type of the keys(TS)
let student:{
        name:string,
        age:number,
        grade:string,
        getSummary:()=>string
} =
{
        name:"scott",
        age:15,
        grade:"A",
        getSummary: function()
        {
                return `${this.name} is ${this.age} years old and scored grade ${this.grade}`;
        }
}

console.log(student.getSummary()); //scott is 15 years old and scored gradeA

//Problem with Inline Type Object: Need to repeat structure for every object
let student1:{
        name:string,
        age:number,
        grade:string,
        getSummary:()=>string
} =
{
        name:"James",
        age:20,
        grade:"B",
        getSummary: function()
        {
                return `${this.name} is ${this.age} years old and scored grade ${this.grade}`;
        }
}

console.log(student1.getSummary()); 


//3. Using type aliases(TS) :allows creating a new name for an existing type

//Example1; 
type product= {
        name:string,
        price:number,
        getInfo: ()=>string
};

let book1:product={
        name:"Learn Java",
        price:300,
        getInfo:function(){
                return `${this.name} costs ${this.price}`
        }
}

let book2:product=
{
        name:"Learn Python",
        price:500,
        getInfo:function(){
                return `${this.name} costs ${this.price}`
        }

}

let book3:product=
{
        name:"Learn Java Script",
        price:600,
        getInfo:function(){
                return `${this.name} costs ${this.price}`
        }
}

console.log(book1.getInfo()); //Learn java costs 300
console.log(book2.getInfo()); //Learn Python costs 500
console.log(book3.getInfo()); //Learn Java script costs 600

//Ex2: Intersection Types
type Personal={
        name:string,
        age:number;
} ;
type Contact={
        email:string,
        phone:number
}

type Candidate=Personal & Contact &
{
        getContactInfo:()=>string;
}

let candidate: Candidate={
        name:"scott",
        age:25,
        email:"dinesh@gmail.com",
        phone:9934567213,
        getContactInfo:function(){
                return `${this.name} can be contacted at ${this.email} or ${this.phone}`;
        }

}
console.log(candidate.getContactInfo());



//4. Using the classes
class Person{
        ssn:string;
        firstName:string;
        lastName:string;



constructor(ssn:string,firstName:string,lastName:string)
{
        this.ssn=ssn;
        this.firstName=firstName;
        this.lastName=lastName;
}

getFullName():string{
        return `${this.firstName} ${this.lastName}`;
}

getDetails():string{
        return `SSN:${this.ssn},Name:${this.getFullName()}`;
}
}



//object creation
let Person1=new Person('11212333333','John','Kenendy');
console.log(Person1.getDetails());

let Person2=new Person('22222222222','David','Goggins');
console.log(Person2.getDetails());

let Person3=new Person('44444444444','Dwyne','Jhonson');
console.log(Person3.getDetails());












 


