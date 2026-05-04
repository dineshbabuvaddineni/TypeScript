//for loop: A for loop is typically used when the number of iterations is known forehand.

/*syntax:

for(intialization; condition; increment/decrement){
    //statements;
};*/

//Example 1:print 1......10;
for(let i=1;i<=10;i++){
    console.log(i);
}

//Example 2: print even numbers from 1.....10;

//method 1:
for (let j=2;j<=10;j+=2){
    console.log(j);
}

//Method 2:
for (let k=1;k<=10;k++){
    if(k%2==0){
        console.log(k);
    }
}


//Example 3: print numbers from 10 ......1;
for(let m=10;m>=1;m--){
    console.log(m);
}

//Example 4: 
let n:number;
for(n=1;n<=5;n++){
    console.log(n);
}
console.log(n);

/* let p:number;
for(let p=1;p<=5;p++){
    console.log(p);
}
console.log(p); //compilation error */ 

//Example 5: 
let q:number;
for(q=1;q<=5;q++);
console.log(q); //6
