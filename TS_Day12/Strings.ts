//String- Text value or a combination of characters

/* 
1. Single quote - String literal ('SigleQuote')
2. Double Quote - String literal ("DoubleQuote")
3. Backtick(``) - String template - when we try to use a string variable inside anoter string value ${Variable}


//index in string starts with 0

'' or "" or ``(backtick)
*/

//Declaration of strings

let str1:string='This is a string with single quote';
let str2:string="This is a string with double quote";
let str3:string=`This is a string with back tick`;

console.log(str1);
console.log(str2);
console.log(str3);

//when to use back tick ``

let num:number=10;

console.log("Number is:",num); //10  //valid
console.log('Number is :${num}'); //not valid
console.log("Number is :${num}"); //not valid
console.log(`Number is: ${num}`); //not valid

//String methods

let str:string="Hello, TypeScript!";

//1. length - find the length of the string(How many number od characters)
console.log("Length of a string: ",str.length); //18

//2. toUpperCase() and toLowerCase()
console.log(str.toUpperCase());     //HELLO, TYPESCRIPT!
console.log(str.toLowerCase());     //hello, typescript!

//3.charAt(inedx) and indexOf()
console.log(str.charAt(4)); //o
console.log(str.indexOf("Type"))//7

//4. substring(starting index, ending index)
//ending index is exclusive

//Hello, TypeScript!

console.log(str.substring(0,5)) //Hello

//5. includes(): returns true or false(boolean)
//string value is case sensitive
console.log(str.includes("abc")); //false
console.log(str.includes("TypeScript")); //true
console.log(str.includes("!")) //true
console.log(str.includes("TYPESCRIPT"));

//6.startsWith() and endsWith()    ---> returns boolean value(true/false)
console.log(str.startsWith("Hello")); //true
console.log("ends with:",str.endsWith("!")); //true
console.log("ends with abc:",str.endsWith("abc"));//false

//7. replace()
//"Hello,Typescript!"
console.log("Replaced string: ", str.replace("TypeScript","world")); //Hello, World!

//8. split() - break the string into multiple parts based on the delimiter, returns an array

let words:string[] = str.split(" ")
console.log("After splitting string:" ,words); // ['Hello', 'TypeScript!']

//Ex2:
let myString:string="abc@gmail.com,xyzabc";

let arr=myString.split(",");
console.log("email",arr[0]);
console.log("password:", arr[1]);

//9.trim(), trimStart(), trimEnd()

myString="   welcome to typecript :";
console.log("Original string :", myString); //welceome to typescript
console.log("trim string :", myString.trim()); // welcome to typescript
console.log("trimStart String :",myString.trimStart()); //welcome to typescript()   "
console.log("trim end string :",myString.trimEnd()); // Welcome to typescript

//10. concat()

str1="Welcome";
str2="to TypeScript";

console.log("After concatenation:", str1.concat(str2)); //welcome to typescript
console.log("After conacatenation:",str1+str2); //this is alternative butnot recommended
console.log("welcome".concat("to typescript")); //welcome to typescript
console.log(str1.concat(str2).concat(str3)); //welcome to typescript and java script

//concept of string immutability(immutable - cannot change original)

//num=10;

let res=num+5;

console.log(res); //15
console.log(num); //10

str1="welcome";
let modifiedstring=str1.concat("to typescript");
console.log(str1); //welcome

//multiline string

let multiline:string =`Welcome
                 to Typescript`;

console.log(multiline);

































