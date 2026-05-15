/*
1.Class 
2.Read Only Properties.
3.Optional property
4. Static Variables and methods
    //1) Static properties/methods are common/shared across all the objects
    //2) static properties/metods can be accessed through class name directly
    //3) static properties/methods can be modified using any object
    //4) We canot use objects for static properties/emthods calling, instead we can use only class name for calling in Typescript
*/

class student
{
    readonly studentId: number; //Read-only property(can only be assigned once, inside constructor)
    name:string; //Regular Property
    email?:string; //Optional property(can be undefined)
    static schoolName:string="Sri Saraswathi High School";

    //constructor
    constructor(id:number,name:string,email?:string){
        this.studentId=id;
        this.name=name;
        this.email=email; //if you dont pass email then it is undefined 
    }

    //Method
    displayInfo():void{
        console.log("Student ID:",this.studentId);
        console.log("Student Name:",this.name);
        if(this.email){
             console.log("Email:",this.email);
        }else{
            console.log("Email is not provided");
        }
        console.log("School Name is ",student.schoolName);
    }

    static changeSchoolName(newName:string):void{
        student.schoolName=newName;

    }
}



//Usage
let s1=new student(101,"John");
let s2=new student(102,"Kenedy","dinesh@gmail.com");

//Display student life
s1.displayInfo();
s2.displayInfo();

//Try to modify the studentId of s1 Object
//s1.studentId=111;  //Cannot assign to 'studentId' because it is a read only property

//change the school Name using static method
student.changeSchoolName("ABC High School");

//Display Student Info
console.log("Displaying student info after changing the school name..... ");
s1.displayInfo();
s2.displayInfo();










