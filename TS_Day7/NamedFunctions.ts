//Named Function: A function that is declared with a name. It can be called by its name to execute the code inside the function.

/*syntax 

function functionName(parameters):returnType
{
    //block of code
}

functionName();  //calling the function/invoking the function
*/

//Example1: Named function with no parameters and no return type
function display():void{
    console.log("welcome to typescript");
}
display(); //calling the function



//Example 2: Named function with parameters and return type
function addNumbers(x:number,y:number):number{
    return x+y;
}
let res:number=addNumbers(2,3);
console.log(res);

//console.log(addNumbers(10,5));
//console.log(addNumbers(10,5,6)); //compile time error :expected 2 but got 3
//console.log(addNumbers(10));  //compile time error : expected 2 but got 1


// Example 3: Named function with Rest Parameters
// Rest parameters don't restrict the number of values you can pass
function addNumbers1(...nums: number[]) {
    let sum: number = 0;

    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }

    console.log("sum of numbers", sum);
}

// Correct function calls
addNumbers1(1, 2);
// addNumbers1(1, 2, 3);
// addNumbers1(1, 2, 3, 4, 5);//sum of numbers is 15

//Example 4: Named function with Rest Parameters and multiple types
function findElements(...elements:(number | string)[]): number {
    return elements.length;
}

console.log(findElements(3,"john",2,1,"sena")); //2
console.log(findElements(3,4,5,6,7)); //5
console.log(findElements("abc","xyz")); //2

//Example 5: Named function with optioal parameters
function displayDetails(id: number , name : string, mailid?:string): void{ // :? put after the colon to make it optional
    console.log("ID",id);
    console.log("Name",name);
    if(mailid!==undefined){
        console.log("Email:",mailid);
    }
}

displayDetails(1,"Dinesh", "vdb@gmail.com");
displayDetails(2,"Suresh"); //optional parameter is not passed

// Example 6: Named function with Default parameters
function calculateDiscount(price:number, rate:number=0.50):void{
    let discount=price*rate;
    console.log("Discount amount:",discount);
}

calculateDiscount(1000,0.30); // Discount amount: 300
calculateDiscount(1000);// Discount amount: 500





