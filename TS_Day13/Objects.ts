//Object - object contans properties and behaviour
//Objects contains variables and & methods
//Objects is collection of key and value pairs


//Ex:

//employee -- name, designation, sal, dep
//              bonus(),getemdetails(),setDetails()

//student - name,sid,grade
            //getDetails(),setDetails()

//Different ways to create an object in JS/TS.
//1. Using 'Object' type- Directly define the values for variable(JS/TS)
//2. Inline Type Object - We also define the datatype of the keys(TS)
//3. Using type aliases(JS/TS)
//4. USing the classes(JS ES16/TS)

//1. Using 'Object' type -Directly define the values for variables
//The typescript 'object' type represents all values that are not in primitive types.

Ex:1
let employee:object={
        name:"John",
        age:30,
        salary:50000,
        job:"Engineer"
}

let employee1={
        name1:"John",
        age:30,
        salary:50000,
        job:"Engineer",
        getDetails:function(){
                //console.log(this.name1,this.age,this.salary,this.job)
                return `${this.name1} is a ${this.job} earning ${this.salary}`

        }
}


 


