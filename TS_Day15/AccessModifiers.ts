//Parent class

class person{
    public name:string; //public property - accessible anywhere
    protected age:number; //protected property - accessible within the class and its subclasses.
    private ssn:number; //private property - accessible only within this class

    constructor(name:string, age:number, ssn:number){
        this.name=name;
        this.age=age;
        this.ssn=ssn;
    }

    displayInfo(){
        console.log("Name",this.name);
        console.log("Age",this.age);
        console.log("SSN",this.ssn);
    }
}

class Employee extends person{
    private employeeId:number;
    constructor(name:string, age:number, ssn:number,employeeId:number){
        super(name,age,ssn);
        this.employeeId=employeeId;
    }
    showEmployeeDetails(){
        console.log(this.name); //public - accessible
        console.log(this.age); //protected- accessbile in child class
        //console.log("SSN", this.ssn);//Error:private property
        console.log("employeeId",this.employeeId); //Private ,still we can access since it is declared inside the same class

    }


}

let emp=new Employee("John",30, 22334455,101);
emp.displayInfo();
emp.showEmployeeDetails();
console.log(emp.name); //accessible
//console.log(emp.age); //Not accessible
console.log(emp.ssn); //Not accessbilen 

