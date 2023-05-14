//* syntax of arrow function 

const hello=(a,b)=>{
    console.log(a+b);
    // arrow functions return the result of the single line
}
hello(10,20)
const obj ={
    name:"John",
    sayHello:function(){
        // using regular function
        setTimeout(function(){
            console.log("Hello "+this.name);//the output become "Hello undefined"
        },1000);
        // using arrow function
        setTimeout(()=>{
            console.log("Hello "+this.name);//Output become Hello John
        },1000)
    }
}
obj.sayHello()//calling the function

//* Map() method in react 
let array=[1,2,3,4,5,6];
const data =array.map((item)=>{
    return item%2;//returning the reminder in array formats
})
console.log(data,"OOO");

//*destructuring  object

const object ={//creating object for the destructuring
    name:"John",
    age:20,
    place:"NewYork"
}
console.log("hello");
console.log(object.name);
console.log(object.age);
console.log(object.place);

// * filter() in js
const array1 = [1,2,3,4,5,6,7,8,9];
const details =array1.filter((data)=>{return data%2===0})//returning the output of the condition
console.log(details);

//* Reduce() in js
const array2 = [1,2,3,4,5,6,7,8,9];
const sum = array2.reduce((acc,curr)=>{//reduce takes two arguments accumulator and current value
    return acc+curr;
},0)

console.log(sum,"this is the sum");