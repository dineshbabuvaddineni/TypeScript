// ========= forEach(),map(),filter(),reduce(),some(),every() ============

//1. forEach() - Executes a function once for each array element
//It takes function as a parameter

//syntax:array.forEach(function(currentValue,index,array){})

//It takes function as a parameter
//syntax:array.forEach(function(currentValue,index,array){})

//currentValue - The current element being processed in the array
//index(optional) - The index of the current element being processed in the array
//array(optional) - The array the current element belongs to.

//Ex1: Get index of all the fruites along with the value
let fruites:string[] =['apple','banana','orange','mango','kiwi'];
console.log("Printing fruites along with index using for loop.....");

for(let i in fruites ){
    console.log(i,fruites[i]);
}

console.log("Printing fruites along with index using for...each method ......");

fruites.forEach(function(element,index){
    console.log(`${index}`, `${element}`);
})

//using arrow function
fruites.forEach((element,index)=>{
    console.log(`${index}`, `${element}`);
})

//Ex2: 
fruites.forEach((element)=>{
    console.log(element.toUpperCase());
});


 // 2.map() - creates a new array with the result of calling the function on every element of an array
 //It takes function as a parameter.
 //Returns the same number of elements that we have in original array.

 //syntax: array.map((function(currentValue,index,array){})

 //Ex1: Get square of all the numbers in ana array.Ex: [1,2,3] then result should be [1,4,9]

 let numbers:number[]=[1,2,3,4,5,6]

 let squareNumbers=numbers.map(function(element){
    return element*element;
 })

 console.log(squareNumbers)

 //Ex2: Double each Number [1,2,3] ------>  [ 2, 4, 6 ]

 let doubledNumbers=numbers.map((element)=>{
    return element*2;
 }); 
 console.log("Doubled Numbers: ",doubledNumbers);

 let doubledValues=numbers.map((element)=> element*2); //If you have single return statement inside the arrow function then {} and 'return' are optional
 console.log("Doubled Values: ",doubledValues); // [ 2, 4, 6,8,10 ]


 //3. filter() -Creates a new array with all the elements that pass/satisfy the function.
 //It takes function as a parameter
 //Returns either same or fewer number of elements compared to original array

 //synatx: array.filter(function(currentValue,index,array){})
 //Ex1: Get the only even numbers from an array

 let evenNumbers=numbers.filter((num)=>{
    return (num%2==0);
 })
 console.log(evenNumbers)

 let evenNumbers1=numbers.filter(num=>num%2==0);
 console.log(evenNumbers1)

 //Ex2: Get the only numbers greater than 3 from an array
 let filteredNumbers=numbers.filter((num)=>num>3);
 console.log("Numbers greater than 3:",filteredNumbers); //[ 4, 5, 6 ]

 //4 .reduce() - Applies a function on every element of an array and returns a single value.

 //Syntax: array.reduce(function(accumulator,currentValue,index,array){})

 //acuumulator - the accumaulated value from previous iteration
 //currentValue - The current element being processed

 //Ex1: Get total(sum) of all the elements in an array

 let total=0;

 for(let i=0; i<numbers.length;i++){
    total=total+numbers[i];
 }

console.log("sum of all the numbers:",total); //21

//Using reducing method

let reduceResult=numbers.reduce((total,element)=>{
    return (total+element);
},0); //Here 0 is the default value of accumulator
console.log("Sum of array:",reduceResult); //15

let reduceResult1=numbers.reduce((total,element)=>(total+element),0); //Here 0 is the default value of accumulator
console.log("Sum of elements in array:", reduceResult1); 



//5 .some() - cheks if any element satisfies a condition
//Return true if atleast one element passes the condition, else false

//syntax:array.some(function(currentValue,index,array){})

//Ex1: Check array contains negative values
let hasNegative=numbers.some((element)=>element<0);
console.log("Does array contains negtives?",hasNegative); //false

//Ex2: Check array contains positive values
let hasPositive=numbers.some((element)=> element>0);
console.log("Does array contains positives?",hasPositive); //true

//6.every() - checks if all elements satisfy a condition
//Returns true if all the elements pass the condition else false

//Syntax: array.every(function(currentValue,index,array(){}))

//Ex1:
let allEven=numbers.every((element)=>element%2==0);
console.log("Are all numbers are even?",allEven); //false

//Ex2:
let allGreaterThanOne =numbers.every((element)=>element>=1);
console.log("Are all the numbers greater than or equal to one?", allGreaterThanOne);//true

//Ex3:
let allPositive=numbers.every((element)=>element>0);
console.log("Are all the numbers positve?",allPositive);//true














  
