/* Type/DataType
Annotations
TypeInference

let age:number=30;
    number --> dataType

Annotation ---> :number
The process of explicitly assigning datatype to variables is called annotation

TypeInference --->
The process of automatically assigning datatype to varaibles based on the assignment is called TypeInference. */


/* 1)Prmitive Data SVGUnitTypes(Built-in)  -> Stores single value at a time
Number
String
Boolean
null
undefined
any
Union Type
void

2)Non-Premitive Data SVGUnitTypes(Objects) - Stores multiple values at a time
Array
class
function 
Interface
Touple
 */

/*
1. NUMBER TYPE
let age:number=30;
Represents both integers and floating point integers
*/


let age:number=25;
let price1=25.5;
let big=243536774683;

console.log("Age: ",age);
console.log("Price: ",price1);
console.log("Big Number: ",big);

console.log(typeof(age));
console.log(typeof(price1));

//2. STRING TYPE
//Represnts textual Data

/*
1. Single Quote('')
2. Double Quote(" ")
3. Backtick(``)
*/

let firstName: string="John";
let lastName:String="Deer";

console.log("Hello",firstName,lastName); //Hello John Deer

let greeting :string=`Hello ${firstName} ${lastName}`;
console.log(greeting);

//3. Boolean Type
//Represents true/false values

let isStudent:boolean =true;
let hasJob:boolean=false;

console.log("Is Student?",isStudent ); //Is Student? true
console.log("Has job?",hasJob);

//4. Null and UNDEFINED
//Special types for absenceof value

/* let emptyValue:null=null;
let notAssigned:undefined=undefined;

console.log(emptyValue);
console.log(notAssigned);

let price:number;
console.log(price); //undefined */


//5. ANY TYPE
//We need to use it carefully beacuse lt cause loss of type safety

let value:any ="Welcome";
console.log(typeof(value));

value=100;
console.log(typeof(value));

value=true;
console.log(typeof(value));

console.log(value);


//6. UNION TYPE - COmbine multiple types

let id:number| string |boolean;
id="ABC123";
console.log(id);

id=12345
console.log(id);

id=true
console.log(id);

//7. Void Type
// used for functions that don't return anything

/* function show():void
{
    console.log("Welcome");
}
show(); */

function sum(x:number ,y:number){
    //console.log(x+y);
    return(x+y);
}

let res:number=sum(10,20);
console.log(res);
