// var price=11;
// var quantity=1;
// console.log(price * quantity);

var egg = 10;
var quantity = 5;
var total = egg * quantity;
console.log(total);

egg = egg + 20;
console.log(egg);

// short headed for adding in variable 

egg -= 5;
console.log(egg);

// string adding 

var name1 = "shamim";
var name2 = "hossain";

console.log(name1 + name2);

// space between strings 
console.log(name1 + " " + name2);

// convert string in to number 

var price = '10';
console.log(price);

// integer number 
var priceNumber = parseInt(price);
console.log(priceNumber);

// floating number 
var gpa = "3.54";
console.log(gpa);

var gpaPoint = parseFloat(gpa);
console.log(gpaPoint);

console.log(typeof price);


// Decimal Fixed 

var num1 = 0.1;
var num2 = 0.2;
var sum = (num1 + num2);
sum= sum.toFixed(1);
sum = parseFloat(sum);


console.log(sum);