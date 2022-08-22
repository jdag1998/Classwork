// Arrays 


// letOfStrs = firstName1,aplit('.')//string method
// for (let num of arr){


//     console.log(num)
// }
// let fruit = ['apple', 'orange','kiwi', 'banana']
// fruit.splice(1,0, 'blueberry')
// let fruit2 = fruit.slice(1,3)

// console.log(fruit)
// console.log(fruit2)
// //Strings

// let firstName = 'bob'
// for (let i=0; i < firstName.length;i++){

//     console.log(firstName.charAt(i).toUpperCase())



// Arrays adn Functions Lab 
// Ex 1

// function maxofthreeNumbers(a,b){

//     if(a>b){
// return a;
// }
// else if (a==b){
//     return a;
// }

// else {

//     return b;
// }

//     }
//     console.log(maxoftwoNumbers(2,3))
    
// Ex 2

// function maxoftwoNumbers(a,b){

//     if(a>b){
// return a;
// }
// else if (a==b){
//     return a;
// }

// else {

//     return b;
// }

//     }
//     console.log(maxofthreeNumbers(58,78,91))

    // //3 
    // function isCharAVowel(A,E,I,O,U)

    // if(){


    // // }

    // let vowel =['a','e', 'i', 'o', 'u']
    // function isChartAVowel(){
    //     if [ ]
    // }

// Ex:4

//  let sumArray = function(add){
// let  xyz = 0;
// for (let i=0; i < add.length; i++){
// xyz += add[i];
// }
// return xyz;
//  }
// console.log(sumArray(2,7,8))

//Ex 5 

// For each method on it 

let foods = ['arepa', 'encebollado', 'pizza', 'pasta']

//forEach (build-in array method)

// foods.forEach(function(item, index,arr){

// console.log(item)
// console.log(index)
// console.log(arr)

// })
// anonymus function
//()=>
// function(){}

// // callback functions 
// const myForEachFunction = function() {



// }
// let item;
// let newFoosArr = foods.filter((item,index))

// //map (built-in array method)
// brandNewArray= foods.map(function(item,index){
// // change the current item
//     return item
// })
// reduce (built-in array method)
// let numbers =[4, 10, 6, 5, 7]
// let results = numbers.reduce ((previouslyValue, currentValue)=>{
//     return currentValue + previouslyValue

// }, 0)

// console.log(results)

//**********Exercises*******
//Ex 1:
// function  one100(){

// for (let i=0;i<=100;i++){
// let check3= i % 3
// let check5 = i % 5

//  if (check3 === 0 && check5 === 0){

// console.log('FizzBuzz')
// }
// else if (check3 === 0 && check5 !==0){

//     console.log('Fizz')
// }

// else if (check5 ===0 && check3 !==0){
//  console.log('Buzz')
// console.log(i)
// }else {
//     console.log(i)
// }

// }}

// console.log(one100())

//Ex2

function nando(){
    let change = 24;
    

    for (let qrts=0; qrts <= change; qrts++){

        console.log(qrts)

    }
}
console.log(nando())