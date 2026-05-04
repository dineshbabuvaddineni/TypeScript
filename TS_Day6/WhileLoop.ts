//While loop: A while loop executes as long as the condition is true

/*while(condition)
{
    statements;
}
*/

//Example1 : print 1............10;
let a:number=1;

while(a<=10){       //true
    console.log(a); //1,2,3,4,5,6,7,8,9,10
    a++; //2,3,4,5,6,7,8,9,10,11
}

// Example2: print even numbers 1..........10

//Method1
let b:number=2;
while(b<=10){
    console.log(b);
    b+=2; //4,6,8,10,12
}

//Method2
let c:number=1;
while(c<=10){
    if(c%2==0){
        console.log(c);
    }
    c++;
}

// Example 3: Print odd numbers 1........10
//Method1
let d:number=1;
while(d<=10){
    console.log(d);
    d+=2; //4,6,8,10,12
}

//Method2
let e:number=1;
while(e<=10){
    if(e%2==0){
        console.log(e);
    }
    e++;
}



// Example 4: print numbers 10 9 8 .............1

let f:number=10;
while(f>=1){
    console.log(f);
    f--;
}

//infinite loop - when the condition never becomes false then it will go to infinite loop
/*while(true){
    console.log(1);
}
*/
