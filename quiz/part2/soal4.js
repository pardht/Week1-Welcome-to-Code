// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);

let firstWordLength = exampleFirstWord4.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);

// code 

let secondWord4 = word4.substring(4, 14);
let thirdWord4 = word4.substring(15, 17);
let fourthWord4 = word4.substring(18, 20);
let fifthWord4 = word4.substring(21, 25);

let secondWordLength = secondWord4.length;
let thirdWordLength = thirdWord4.length;
let fourthWordLength = fourthWord4.length;
let fifthWordLength = fifthWord4.length;

console.log('Second Word: ' + secondWord4  + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord4  + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord4  + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord4  + ', with length: ' + fifthWordLength);
