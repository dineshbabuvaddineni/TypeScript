
let numbers:number[] =[1,2,3,4,5];
let fruites:string[]=["Apple","Banana","Mango","Orange"];

console.log("Numbers array: ",numbers);
console.log("Fruits array: ",fruites);

//Length- attribute(not a method)
console.log("Size of numbers array: ",numbers.length); //5
console.log("Size of fruits array: ",fruites.length); //4

// Methods
//1. push() - Adds single or multiple elements to the end of an array and returns the new length of the array.
numbers.push(6,7);
console.log("After push():",numbers); //[1,2,3,4,5,6,7]

//2. pop() - Removes the last element from an array and return the removed element.
//Syntax: array.pop()

let lastfruite=fruites.pop();
console.log("After pop():",fruites); //["Apple","Banana","Mango"]
console.log("Removed fruites: ",lastfruite); //orange

//3. shift() - Removes the first element from an array and returns the removed element.
//syntax: array.shift()

let firstNumber=numbers.shift();

console.log("After shift():",numbers);
console.log("Removed Number:",firstNumber);

//4. unshift() - Adds single/multiple elements to the beginning of an array and returns the new length of the array.
//syntax: array.unshift(element1,eleemnt2,....)

let firstnumbers:number=fruites.unshift("Strawberry","pineapple");
console.log("After unsift():",fruites);
console.log("New length of fruits array:",firstnumbers)

//5.Concat() - Combines two or More arrays and returns a new array without modifying the original arrays.
//syntax: array.concat(array2,array3,...,arrayN)
//note: this method does not support concatenation of two different types of arrays.
let combinedArray=numbers.concat([8,9],[10,11]);
console.log("After concat():",numbers); //[1,2,3,4,5,6,7]
console.log("Combined Array:",combinedArray); //

//6. slice() - Extracts a section of an array
//starting index starts from zero
//Ending index will be exclusive .Ex: If 3 is Ending index It will consider 2 (3-1=2)
//syntax :array.slice(start,end);

let extractedArray=fruites.slice(2,5);
console.log("After slice():",extractedArray); // [ 'Apple', 'Banana', 'Mango' ]

//7. splice() - Adds/removes elements from an array(from everywhere)
//syntax: array.splice(start,deleteCount,item1,.....,itemN)

console.log("Current elements in fruites array:",fruites); //[ 'Strawberry', 'pineapple', 'Apple', 'Banana', 'Mango' ]

//Ex1: elem only removing
let removedElements=fruites.splice(1,2); //here 1 is starting indexe, 2 is represent how many elements to be removed
console.log("After slice(1,2):",fruites); //['kiwi', 'banana', 'orange']
console.log("Removed Elements:", removedElements) //['pear','apple']

//Ex2: elem not removed but added
fruites.splice(1,0,'pineapple','grape');
console.log("After splice(1,0,'pineapple','grape')",fruites); // [ 'Strawberry', 'pineapple', 'grape', 'Banana', 'Mango' ]

//Ex:3 both removed
fruites.splice(1,2,'mango','cherry');
console.log("After splice(1,2,'mango','cherry'):",fruites); //[ 'Strawberry', 'mango', 'cherry', 'Banana', 'Mango' ]


//8.indexOf() -Finds the index of an element ,If element not found then return -1
//syntax: array.indexOf(searchElement) or array.indexOf(searchElement,sarting index)

//Ex1: 
let bananaIndex=fruites.indexOf("Banana");
console.log("Index of banana:",bananaIndex); //3

//Ex2:
let papayaIndex=fruites.indexOf("papaya");
console.log("Index of Papaya:", papayaIndex); //-1

//Ex3: 
bananaIndex=fruites.indexOf("Banana",2);
console.log("Index of banana:", bananaIndex); //3

//9.includes() -checks if an element exists
//True of false
//Syntax: array.includes(searchElement,frontIndex)

let isAppleExist=fruites.includes('apple');
console.log("Does fruites include apple?",isAppleExist); //false

let isBananaExist=fruites.includes('Banana');
console.log("Does fruites include apple?",isBananaExist); //true


//10. toString() -convert array to string
//syntax:array.toString()

console.log(numbers); //[2,3,4,5,6,7]

let numbersString=numbers.toString();
console.log("Converted Array to String: ",numbersString);  //  2,3,4,5,6,7

let myarray:string[]=['w','e','l','c','o','m','e']
console.log("Original myarray: ",myarray);

let str:string=myarray.toString();
console.log("converted string",str);









