//----------------------------------------- Practice Problem 2------------------------------------

// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and
// Bangla of a student.

// Input:
// The first line of the input is the marks of the five subjects mentioned above, respectively.

// Output:
// Print the result in 2 decimal places.

// Sample Input: 75.25, 65, 80, 35.45, 99.50

// Output: 71.04

var Mathematics = 75.25;
var Biology = 65;
var Chemistry = 80;
var Physics = 35.45
var Bangla = 99.50

var total= (Mathematics + Biology +Chemistry+Physics+Bangla);
var average= total/5;
average= average.toFixed(2);
average= parseFloat(average);

console.log(average);

