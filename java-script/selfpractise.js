//for loop
// var arr = [10, 20, 30, 40, 50,100];
// for(let i=0;i<arr.length;i++){
// arr[2].push(30);

// console.log(arr[i]);
// arr[1].push(90);
// console.log(arr[i])

// arr[i]=[arr[i]]
// arr[i].push(90);
// console.log(arr[i]);
// }

// for each loop
// var arr = [10, 20, 30, 40, 50];
// function print(a) {
//   console.log(a);
// }
// arr.forEach(print);
// arr.forEach(print);
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// arr.forEach((a,index) => {
//   console.log(index, a);
// });

// function mufun() {
//   console.log("hellow duniya");
// }

function mynum(mufun) {
  return mufun;
}
console.log(mufun(mynum));
let res = mynum(mufun);
console.log(res);
res( );

var city = [
  "harayana",
  "ludiyana",
  "punjab",
  "kanpur dihat",
  "meerut",
  "gujarat",
];
city.forEach((val, index) => {
  console.log(index, val.toUpperCase());
});

function myfun( ){
   city.forEach((val,index)=>{
        console.log(index,val);
   })
}
myfun(city);
 let arr=[3,4,5,6,7,2];
 arr.forEach(num=>{
    console.log(num*num);
 });
