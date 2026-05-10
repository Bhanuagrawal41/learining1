// let student ={
//     name : "bhanu blinders",
// }
// creating the object literal object literal having the key and value pair name bhanu agrawal name is key and value is bahnu blindeer

/// createing a thread or twidter post 
// const post = {
//     username : "bhanu agrawal",
//     content : "funny topic",
//     likes: 1000,
//     tags: ["apna college", "best friend"]

// }



//--------------what a object literal code is in java script--------------//
// const name = {
//      aman : {
//         name : "aman",
//         age : 32,
//         class : "first class"
//      },
//      shradha : {
//         name : "sharadha mam",
//         age :  30

//      }

// }
//---------------------------///


//now learning the math random thing in javascript
// console.log(Math.random()) // it will give us the random number between 0 and 1
// console.log(Math.random()*10) // it will give us the random number between 0 and 10
// console.log(Math.floor(Math.random()*10)) // it will give us the random number between 0 and 9 because of floor function it will round down the number to the nearest integer


//------------------creating a random number between 1 and 100------------------//
// console.log(Math.floor(Math.random()*100)+1) // it will give us the random number between 1 and 100 because of floor function it will round down the number to the nearest integer and we are adding 1 to make it between 1 and 100       




// function diceroll(){
//    let rand =  (Math.random() *6) + 1;
//    console.log(Math.floor(rand))  ;  
// }

// diceroll();


// function avg(a,b,c){
//     return (a+b+c)/3;
// }


// function table(n){
//     for(let i = 1; i <=10; i++){
//         let ans = n * i;
//         console.log(ans);
//     }

    
// }

// console.log(table(4));

// function sum(n){
//     let sum = 0;
//     for(let i = 1; i <= n; i++){
//          sum = sum + i;

//     }
//     return sum;
// }
// //  console.log(sum(6));
// for(let i =1; i<=5; i++){
//     console.log(i);
// }


// function outerFunc(){
//     let x = 5;
//     let y = 6;
//     function innerfunc(){
//         console.log(x+y);
//     }
//     innerfunc();
// }
// outerFunc();



// let greet = "hello";
// function ChangeGreet(){
//     let greet  = "namaste";
//     console.log(greet);

//     function innerGreet(){
//         console.log(greet);
//     }
// }
// console.log(greet);
// ChangeGreet();

///funciton expression//


// let name = "bhanu";
// let sum = function(a, b){
//     return a+b;
// }


// high oreder funciton 

// function which takes or eat function in argumeent means in fucntion argument taking the fucntion as an argument//
// function mutlipleGreet(func, count){
//     for(let i=1; i<=count; i++){
//         func();
//     }
// }



// let greet = function(){
//     console.log("hello");
    
// }

// mutlipleGreet(function() { console.log("namaste")}, 1000);



 



// function oddOrEvenFactory(request){
//     if(request == "odd"){
//         let odd = function(n){
//     console.log(!(n%2 == 0));
//     return odd;

// }
//     }


//     else if(request == "even"){
//         let even = function(n){
//     console.log(n%2 == 0);
//        }
//      return even;
//     }else{
//         console.log("wrong request");
//     }
// }


// let request = "odd";




// const Calculator = {
//     add: function(a,b){
//         return a+b;
//     },

//     multiply: function(a,b){
//         return a*b;
//     }
// }


// const student = {
//     name: "bhanu",
//     age: 23,
//     eng: 99,
//     math: 98,
//     phy: 95,
//     getAvg(){
//         let avg = (this.eng + this.math + this.phy)/3;
//         console.log(avg);
//     }

// }



// error handling in javascript //


// console.log("hello");
// console.log("hello");

// try{
//     console.log(a);
// }catch{
//     console.log("cought an error... a is not defined");
// }

// console.log("hello2");





//Miscellaneous Topics //

const sum = (a,b) => {
    console.log(a+b);
};



const cube = (n) => {
    return n*n*n;
};