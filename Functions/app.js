//function declaration / definition
function sayHello () {

return 'Hello'

}

//function expression

const sayHi = function (){
return 'Hi'

}

// arrow function

const sayHey = () => 'Hey!'

console.log(sayHello())
console.log(sayHi())
console.log(sayHey())

function add(num1, num2)
{
    return num1 + num2
}

console.log(add(2,3))
console.log(add(5,8))
console.log(add(7,5))
console.log(add(9,4))
console.log(add(21,2))

// Ex1 Functions 
function computeArea(width, height){
    
    return 'The Area of a rectangle with a width of ' + width +' mand a height of ' + height + 'is'+width*height+'square units'

}
console.log(computeArea(30,40)) 

//Ex2 Functions
 function planetHasWater (planet){
if (planet=="Earth"|| planet=='Mars'){
return true;}
else{
return false;
}

 }

 console.log(planetHasWater("Earth"))