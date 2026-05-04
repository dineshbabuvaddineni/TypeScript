//break
//print only from 1,2,3,4,-----,5
for(let i=1;i<=10;i++){
    //console.log(i); //5 also get prints
    if(i==5){
        break;
    }
    console.log(i);
}

console.log("******************************************************");
// Continue
for(let i=1;i<=10;i++){
    if(i==3 || i==5 || i==7){
        continue;
    }
    console.log(i);
}