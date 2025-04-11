// 1. Find the length of the   longest word in a sentence;
// function calcLength(arr) {
//   // arr-> formal parameter      // parameter
//   let arr2 = arr.split(" ");
//   let arr3 = arr2.map((oneword) => oneword.length);
//   return Math.max(...arr3); // ... spread method ...   // math.max mathematical formulas
// }
// let res = calcLength("Hellow my name is a abhishek shrivastav"); // actual parameter argument
// console.log(res);
// 3.find the smallest number in an array
// function findSmallest(arr) {
//   arr.reduce((acc, num) => {
//     if (acc > num) {
//       return num;
//     }
//     return acc;
//   }, acc[0]);
// }
// let res = findSmallest([25, 45, 65, 4, 34, 7, 71, 22, 12, 17, 92, 9]);
// console.log(res);;

// 2.write a function to convert Celsius to farenhite
// function temp(c) {
//   let f = (c * 9) / 5 + 32; // c*9/5+32
//   return f;
// }
// let res = temp(78);
// console.log(res);

// 4.Find the indehx of an elements in an array
// function findIndex(arr) {
//   return arr.indexOf(2);
// }
// let res = findIndex([2, 36, 8, 4, 7]);
// console.log(res);

//5.Swap the two numbers

// 7. Find the sum of all odd numbers in an array
// function sumCal(arr) {
//   return arr.reduce((acc, num) => {
//     if (num % 2 !== 0) {
//       //   acc.push(num);
//       return acc + num;
//     }
//     return acc;
//   }, 0);
// }
// let res = sumCal([
//   4, 6, 7, 2, 9, 44, 23, 1, 2, 3, 5, 8, 10, 11, 12, 13, 14, 15, 16,
// ]);
// console.log(res);

//6. Count the number of words in a string
// function countSting( arr){
//         for(let i=0;i<arr.length-1;i++){
//             return arr[ i];
//         }
// }
// let res= countSting("abhishek");
// console.log(res);
// function sumCal(arr) {
//   return arr.reduce((acc, num) => {
//     if (num % 2 == 0) {
//        acc.push(num);
//     }
//     return acc;
//   }, []);
// }
// let res = sumCal([
//   4, 6, 7, 2, 9, 44, 23, 1, 2, 3, 5, 8, 10, 11, 12, 13, 14, 15, 16,
// ]);
// console.log(res);
//6. Count the number of words in a string
// function countSting(arr) {
//   return arr.split("").length;
// }
// let res = countSting("abhishek");
// console.log(res);

// Q7. swap the value of two variables
// let a = 98;
// let b = 34;
// let temp = a;
// a = b;
// b = temp;
// console.log("a=", a, "b=", b);

// Q8. remove all false value from an array(false,0,"",null,undefine,NaN)
// Q9.check if an array contain a specific element
// Q10.Write a function to check if a string start with a specific character
