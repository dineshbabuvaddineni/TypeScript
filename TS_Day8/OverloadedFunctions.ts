//Step1: Write  signature of functions

//Step2: implement a function(we have to implement like it should satisfy all the signatue functions).

//step3: calling the function

//Example1: Different parameter Types(data types)
function getInfo(id:number):string;
function getInfo(name:string):string;

function getInfo(param:number| string):string{
    if(param=="number"){
        return (`User ID is ${param}`);
    }else{
        return (`User name is ${param}`);
    }
}

console.log(getInfo(101));
console.log(getInfo("Dinesh"));

// Examle2: Different number of parameters
function add(a:number,b:number):number;
function add(a:number,b:number,c:number):number;

function add(a:number,b:number,c?:number):number
{
    if(c!==undefined){
        return a+b+c;
    }
    return a+b;

}
console.log(add(10,20)); //30
console.log(add(10,20,30)); //60

//Example3: Different return types
function processInput(input:string):string;
function processInput(input:number):number;

function processInput(input:string|number):string|number{
    if(typeof input === "string"){
        return input.toUpperCase();
    }else{
        return input ** 2;
    }
}

console.log(processInput("Welcome"));
console.log(processInput(10));


//Example4:

function greet(name:string):string;
function greet(age:number):string;
function greet(param:boolean):string;

function greet(value:string|number|boolean):string{
    if(typeof value==="string"){
        return `Hello ${value}`;
    } 
    else if(typeof value==="number"){
        return `You are ${value} years old`;
    }else{
        let res:string=value?"married":"single";
        return res;
    }
}

console.log(greet("Dinesh"));
console.log(greet(25));
console.log(greet(true)); 
console.log(greet(false));
