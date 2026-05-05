/// Arrow Functions /Lambda Functions

/* Lambda referes to anonymous functions in programming.
Lambda functions are a concise mechanism to represent anonymous functions.
These functions are also called as Arrow functions
*/

// There are 3 parts to a lambda function
//1. parameters - A function may optionally have parameters
//2. The flat arrow notation/lambda notation (=>) - It is also called as the goes to operator)
//3. Statements - represent the functions instruction set

//syntax:
/* let variable =(parameters) => 
{
    //block of code
}

variable(); //function call */

//Example 1: Arrow function with no parameters and no return tyep
let greet=():void =>
{
    console.log("Hello Typescript");
}
greet();

//Example2: Arrow function with parameters and return type
let add1= (a:number , b:number):number =>
{
    return a+b;
}

console.log(add1(10,20));

//Example 3: Arrow function with Implicit return

let add=(a:number, b:number):number => a+b;
let multiply=(a:number,b:number):number=>a*b;
console.log(add(10,20))
console.log(multiply(10,20));

//Example 4: Arrow function with optional parameters
//if we make second parameter as optional then following parameter must also be optional. Optional parameters must be placed after the required parameters
let displayDetails= (id: number , name : string, mailid?:string): void => 
{ // :? put after the colon to make it optional
    console.log("ID",id);
    console.log("Name",name);
    if(mailid!==undefined){
        console.log("Email:",mailid);
    }
}

displayDetails(1,"Dinesh", "vdb@gmail.com");
displayDetails(2,"Suresh"); //optional parameter is not passed

//Example 5: Arrow function with default parameters

let calculateDiscount=(price: number,rate :number=0.50):void=>
{
    let discount:number =price*rate;
    console.log("Discount Amount:", discount);
}

calculateDiscount(1000,0.25); //default value of rate is overridden by the passed value
calculateDiscount(1000); //default value of rate is used

//Example 6: Arrow function with rest parameters
let findElements=(...elements:any[]):number =>
{
    return elements.length;
}

console.log(findElements(3,"john",2,1,"sena")); //5
console.log(findElements(3,4,5,6,7)); //7
console.log(findElements("abc","xyz")); //2








