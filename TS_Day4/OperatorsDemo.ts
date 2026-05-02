/* let a:number=10;
let b:number=20; */

let a:number=10,b:number=20;

//Arithmatic Operations
console.log(a+b);
console.log(b-a);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(5**2);


//Assignment Operators or short hand operators
a=10;
b=5;
a+=b; //a=a+b;
console.log(a);
console.log(a+=b); //a=a+b  ---->15
console.log(a-=b); //a=a-b  ---->10
console.log(a*=b); //a=a*b  ---->50
console.log(a/=b); //a=a/b  ---->10
console.log(a%=b); //a=a%b  ---->0


//Relational Operators
//Returns boolean - true/false
// > < >= <= == != ===(strict  equality) !==(strict inequality)
console.log("*********Relational Operators**********");
a=10;
b=20;

console.log(a>b);  //false
console.log(a<b);  //true
console.log(a>=b); //false
console.log(a<=b); //true
console.log(a==b); //false
console.log(a!=b); //true
console.log(a===b); //false
console.log(a!==b); //true

//Difference between ==(equality) and ===(strict equality)
console.log("********* difference between ==  === **********");
let num1:any=10; //number
let num2:any="10"; //string

console.log(num1==num2); //true(only compares values)
console.log(num1==num2); //false(compares the values and types)

//Logical Operators &&|| !
// returns true/false (boolean)
//works between boolean variables

//b1       b2      &&      ||        !b1
//--------------------------------------
//true    true    true     true     false 
//true    false   false    true     false
//false   true    true     true     true
//false   false   false    false    true

console.log("********* Logical Operators **********");
let b1:boolean=true;
let b2:boolean=false;

console.log(b1 && b2); //false
console.log(b1 || b2); //true
console.log(!b1); //false
console.log(!b2); //true

//Cobination of logical & Relational Operators
console.log("********* Mixing of logical & Relational Operators **********");
console.log(20>10 && 10>5); //true
console.log(10<20 || 5>10); //true 

