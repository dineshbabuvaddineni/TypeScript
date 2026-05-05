// Anonymus function (UnNamed function /Nameless function)

/* In ananymous function is a function that does not have a name.
Instead it is assigned to a variable which acts as its name

syntax: 

let variable =function(parameters)(
    //function body
);

variable(); //calling the function
*/

//Example1: Anonymous function

let msg=function(): string 
{
    return "Hello Typescript";
}

console.log(msg()); //calling the function

//Example 2: Anonymous function with parameters

let multiply=function(a:number, b:number):number
{
    return a*b;
}
console.log(multiply(10,20)); //200


