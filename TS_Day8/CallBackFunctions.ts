//A callback function :A function passed as an argument to another function and executed later.

//Example1:
//Function that takes callback function as an parameter
function greet(name:string,msg:(message:string)=>void)
{
    console.log(name);
    msg("Hello");
}

//callback function
function showMessage(message:string)
{
    console.log(message);
}

//calling the function by passing the callback function an argument.
greet("Dinesh",showMessage);


//Example 2:

function sum(a:number,b:number,callback:(result:number)=>void)
{
    let result=a+b;
    callback(result);
}
//callbackfunction
function displayResult(result:number):void{
    console.log(result);
}

sum(10,20,displayResult);