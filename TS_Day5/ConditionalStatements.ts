//if condition



/* if(condition){

    //Statements to be executed if condition is true
} */


//Ex1: If age is greater than or equal to 18 , the message "you re eligible to vote" will be printed
let age:number=25;
if(age>=18){
    console.log("you are eligible for vote");
}

//Ex2: if else condition
/*
if(condition){
    statements;
}
else{
    statements;
};
*/

//Example2: Print number is even or odd
let num:number=15;
if(num%2 ==0){
    console.log(`${num} is a Even Number`);
}else{
    console.log(`${num} is a Odd Number`);
}

//Example3: Nested if else
/*if(condition1)
{
    statements;
}
else if(condition2)
{
    statements;
}
else if(condition3)
{
    statements;
}else
{
    statements;
}*/

//Example3: Depending on the marks , display appropriate message
/*
marks>=90 Grade A
marks>=75 Grade B
marks>=60 Grade C
Grade D
*/

let marks:number=50;
if(marks>=90 && marks<=100){     //Condition 1
    console.log("Grade A");
}else if(marks>=75 && marks<90){ //Condition 2
    console.log("Grade B");
}else if(marks>=60 && marks <75){ //Condition 3
    console.log("Grade C");
}
else{
    console.log("Grade D");
}

//Example 4:Browser selection 
let browser:string="chrome";
if(browser==="chrome"){
    console.log("Browser is chrome");
}else if(browser==="firefox"){
    console.log("Browser is firefox");
}else if(browser==="safari"){
    console.log("Browser is safari");
}else{
    console.log("Other browser");
}

// condition ----> should always return boolean value (true/false)
//expression ----> should always return some value (number/string/boolean/array/object/any data type)

/*switch(expression){
case value1: statements;
break;

case value2; statements
break;

case value3: statements;
break;

default:statements;
}

*/

//Example 5: Depending on the the value of corresponding day of the week

let day:number=3;
switch(day){
    case 1: console.log("Monday");
    break;

    case 2: console.log("Tuesday");
    break;

    case 3: console.log("Wednesday");
    break;

    case 4: console.log("Thursday");
    break;

    case 5: console.log("Friday");
    break;

    case 6: console.log("Saturday");
    break;

    case 7: console.log("Sunday");
    break;

    default: console.log("Invalid week");

}


//Example 6: The switch statement can also include an expression that evaluates to a value and the case labels can be any valid expression that evaluates to a value of the same type as the switch expression.
let x:number=10, y:number=5;

switch(x-y){
    case 0: console.log("Result zero");
    break;

    case 5: console.log("Result is five");
    break;

    case 10: console.log("Result is Ten");
    break;

    default: console.log("Result is something else");
}





