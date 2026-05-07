/*
- An array is a special type of variable that stores multiple values.
- The values can be of the same data type or different data types.
- Arrays are declared using '[]' or the generic Arrays<T>' type.
- Indexing starts from 0.
- Arrays are ordered collection of elements.
*/

//Approach 1:Using literal

let names1:string[] = []; //Declaration of an array of strings

//Initialization/assigning values
names1[0] ="John";
names1[1]="smith";
names1[2]="Alice";
names1[3]="scott";

let names2:string[]=["John","Smith","Alice","Scott"]; //Declaration and initialization of ana array of strings
console.log(names1);

//Approach 2: Using generic Array<T> type
let empNames: Array<string>=["John","Smith","Alice","Scott"];
let empIds: Array<number>=[101,102,103,104];
let data:Array<string | number>=["John",101,"smith",102,"Alice",103,"Scott",104];
let mixedData: Array<any>=[1,"johhn",true,null];

console.log(empNames);
console.log(empIds);
console.log(data);
console.log(mixedData);

//Indexing a particular value
console.log(mixedData[0]);

//Example1: Interating over ana array using a traditional for loop
console.log("size of an Array:",empNames.length); //4(How many values stored

//console.log("Employee Names........"));

for(let i=0; i<empIds.length;i++){  //empIds.length-1
    console.log(empNames[i]);  //i is representing an index
}


//Example2: Iterating over an array using 'for...in'(indexes)

console.log("Employee Ids........");
for(let i in empIds){
    console.log(empIds[i]);
}

//Example 3: Iterating using the 'for...of' loop(values)
console.log("Mixed Data........");
for(let value of mixedData){
    console.log(value);
}

//Example4 : Passing an array to the function
//Search an element in an array using function

function searchElement(ele:number, arr:number[]):boolean{
    for(let i=0;i<arr.length;i++){
        if(arr[i]==ele){
            return true;   //Element found
        }
    }

    return false;  //Element not found
}

let arr:number[]=[10,20,30,40,50];
console.log(searchElement(30,arr)); //true
console.log(searchElement(100,arr)); //false


//Example5 :A function takes an array and returns an array

function capitalizeWords(arr:string[]):string[]{
    let result:string[]=[];
    for(let i=0;i<arr.length;i++){
        result[i]=arr[i].toUpperCase();
    }
    return result;
}

let words:string[]=["hello","world","typescript"];

console.log(capitalizeWords(words));








