// let pencilprice = 10;
// let eraserprice = 29;
// console.log( `hello ${pencilprice + eraserprice} hy how are you`);

// let age = 18;
// console.log(ag
// let color = "red";



//  if(color == "red"){
//     console.log("wait sir");
//  }
//  if(color == "yellow"){
//     console.log("slow down man");

//  }
//  if(color == "green"){
//     console.log("ready to go yo");
//  }
// let age = 5;
// if(age => 18){
//     console.log("you can vote");
// }
// else if(age < 18){
//     console.log('you are not eligible');
// }

// let size = 'e';

// if(size === 'xl'){
//     console.log("price is 250 ruppe")
// }
// else if(size === "l"){
//     console.log('price is 200');

// }
//  else if(size === "M"){
//     console.log("price is 100");
//  }
//  else if(size === "s"){
//     console.log("price is 50");
//  }
//  else{
//     console.log("invalid ammoount");
//  }

//  let ring ="all";
// if(ring[0] === "a" || ring.length >= 3 ){
//    console.log("its a good string");
// }



// let color = "red";

// switch (color){
//    case "red":
//       console.log("stop");
//       break
//    case "green":
//       console.log("green");
//    case "yellow":
//       console.log("wait");
//    default:
//       console.log("light is broken");
// }

// let num = 2;

// switch (num){
//    case 1:
//       console.log("monday");
//       break;
//    case 2:
//    console.log("tuesday" );
//    break;

//    case 3:
//       console.log("wednesday");
//       break;
//    case 4:
//       console.log("thursday");
//       break;

//    case 5:
//       console.log("friday");
//       break;
//    case 6:
//       console.log("saterday");
//       break;

//    case 7:
//       console.log("sunday");
//       break;
// }


// let password = "   hello  ";
// let newpassword = password.trim();
// console.log(password)


// let str = "gangar";
// let str2 = "bankaai";
// console.log(str2.toUpperCase());
// let newstr = str.toUpperCase();
// console.log(newstr);

//method chaining -----------------//
// let msg = "  hellow   ";
// let newmsg = msg.trim().toUpperCase();
// console.log(newmsg);


// let str = "i love coding";
// let newstr = str.trim().toUpperCase();
// console.log(newstr); 


// let car = ["maruti", "honda", "tata", "hyundai"];



// array methods --------//



// let months = ["januray", "july", "march", "august"];
 

// let cars = ["audi", "bmw", 'maruti', "toyota"];

// let car = ["volkswagen", "nissan", "supra"

// ];

// console.log(cars)


//slicing in arrays----------//

// let colors = ["red,", "yellow", "blue", "orange", "pink", "white"];



//splice method in javascript ------------------//



//nested array in javascript------------------//

// let nums = [['x', "null", 'o'],['null', 'x','null'],['0', 'null','x']];


// for(let i = 10; i >= 1; i=i-2){
//     console.log(i, "hello");

// }  

// let n = prompt("enter a number");
//  n = parseInt(n);

// for (let i = n; i<=n*10; i = i+n){
//     console .log(i)
// // }

// let arr = [1, 2, 3, 4, 5];

// // map → create new array
// let doubled = arr.map(x => x * 2);

// // filter → condition based
// let even = arr.filter(x => x % 2 === 0);

// // find → first match
// let firstEven = arr.find(x => x % 2 === 0);

// console.log(doubled);
// console.log(even);
// console.log(firstEven);


// Creating an array
let arr = [10, 20, 30, 40, 50];

console.log("Original Array:", arr);

// 1. Add elements
arr.push(60);        // add at end
arr.unshift(5);      // add at beginning
console.log("After push & unshift:", arr);

// 2. Remove elements
arr.pop();           // remove last
arr.shift();         // remove first
console.log("After pop & shift:", arr);

// 3. Length of array
console.log("Length:", arr.length);

// 4. Access elements
console.log("First element:", arr[0]);
console.log("Last element:", arr[arr.length - 1]);

// 5. Loop through array
console.log("Using for loop:");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 6. forEach method
console.log("Using forEach:");
arr.forEach(function(value, index) {
    console.log(index, value);
});

// 7. Map (create new array)
let doubled = arr.map(num => num * 2);
console.log("Doubled array:", doubled);

// 8. Filter (condition)
let greaterThan25 = arr.filter(num => num > 25);
console.log("Greater than 25:", greaterThan25);

// 9. Reduce (sum of elements)
let sum = arr.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);

// 10. Find element
let found = arr.find(num => num > 25);
console.log("First number > 25:", found);

// 11. Includes
console.log("Contains 30?", arr.includes(30));

// 12. IndexOf
console.log("Index of 40:", arr.indexOf(40));

// 13. Slice (copy part of array)
let part = arr.slice(1, 4);
console.log("Slice(1,4):", part);

// 14. Splice (add/remove in middle)
arr.splice(2, 1, 99);  // remove 1 element at index 2 and add 99
console.log("After splice:", arr);

// 15. Reverse & Sort
let nums = [5, 2, 9, 1, 7];

nums.sort((a, b) => a - b);   // ascending sort
console.log("Sorted:", nums);

nums.reverse();
console.log("Reversed:", nums);

// 16. Merge arrays
let arr2 = [100, 200];
let merged = arr.concat(arr2);
console.log("Merged:", merged);

// 17. Convert array to string
console.log("Join:", arr.join("-"));
