let name="Juan"
const play = "Soccer"
// Camel Case
//myFavoriteDessert

//Pascel Case 
//MyFavortieDessert

//Kebab Case
//my-favorite-desert

//Logical Operators 
// AND &&
// OR ||
// NOT !

let fire = 0
fire -= 10
fire --//incrementing by 1
fire ++ //decrementing by 1
fire = fire -10

console.log(fire) 

//Srict Comparison 
// === (3 equal signs)

//Loose Comparison
// (2 equal signs)

//Assigment Operator
// = (1 equal sign)

//!== !=

let x = 6
let y=3

console.log(x<10 && y>1)
console.log(x==5 || y==5)
console.log(!(x==y))

//Ex 1:
let a = 1
let b = 2
let c = a + b

console.log("Exercise 1",c)

//Ex 2: 

let d = 3
let e = 4
let f = d-e

console.log("Exercise 2",f)

// Ex 3:

let g = 10
let h = 5
let i = 6 
let j= 14
let sum1 = a+b+c+d+e 
let avg1 = sum1/5
let sum2 = f+g+h+i+j
let avg2 = sum2/5
let sum3 =avg1+ avg2
let avg3 = sum3/2
console.log("Exercise 3")
console.log(avg1)
console.log(avg2)
console.log(avg3)

//Ex 4: 
const arr1 = [4,10,22,-30,55]
const sum4 = 4+10+22-30+55
const avg4 = sum4/arr1.length
const arr2 = [68,7,-22,9,100]
const sum5 = 68+7-22+9+100
const avg5 = sum5/arr2.length

console.log("Exercise 4")
console.log(avg4)
console.log(avg5)

//Ex 5: 
let box1 = "Hello"
let box2 = "Class"
let box3 
box3 = box1 
box1 = box2 
box2 = box3
console.log(box2,box1)
//Conditionals 
//Ex1:
console.log("Ex 1 Conditionals")
let num = 4
if (num >0) {//false 
console.log("The number is positive ")
}
else{ if(num<0)
console.log("The number is negative")
}
//Ex2
console.log("Ex 2 Conditionals")
let num2 = -7
if (num2 >0) {//false 
console.log("The number is positive ")
}
else{ if(num2<0)
console.log("The number is negative")
}

//Ex3: 
console.log("Ex 3 Conditionals")
const age= 16
if (age > 18) {//false 
console.log("You can enter the site ")
}
else{ if(age < 18)
console.log("You are not allowed to enter the site")
}
//Nested Conditions
//Ex 1 Nested Conditionals
let nun = 128
console.log("Ex 1 Nested Conditionals")
if (nun >0) {
    if (nun>100){
console.log("The number is positive and greater than 100")
}
    if (nun<100){
        
console.log("The number is positive and less than 100")
    }
}
else{ if(nun<0)
console.log("The number is negative")
}

//Ex 2 Nested Conditionals

console.log("Ex 2 Nested Conditionals")
let grd = 70
if (grd>=90) {
    console.log("A")
  if (grd >= 80){
        
    console.log("B")
    }
    else if ( grd >= 70){
        
        console.log("C")
}
     else if ( grd >= 55){
        
    console.log("D")
}
}

else{ if(grd<55)
console.log("F")
}
//outter if statement
blockScoped="block"
if (true) {
    let blockScoped = "block"
    console.log(blockScoped)
}
//inner (nested)
if (true){
    let nestedBlockScope = "nest"
    console.log(nestedBlockScope)
    console.log(blockScoped)
}

let integral = 3
    switch (integral) {
        case 1:
console.log("Inside of case 1")
    break;
    case 2:
        console.log("Inside of case 2")
            break;
            case 3:
                console.log("Inside of case 3")
                    break;
    }
//ternary operator (Three Parts)
let lighting = 'dark'
lighting === 'dark' ? 'night time' : 'day time' // Tern

//Ex1 Ternary

let A=0, E=1, I=2, O=3, U=4
let letter = A
switch (letter) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
console.log("Vowel")
break;
default:
    console.log("Consonant")
        break;
}

//Ex2: 

let number
