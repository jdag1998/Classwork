/* Loops
Inside parehtesis we have:three statemetns: 
Statement 1: Declare initialize a variable scoped to the floor loop
Statement 2: A condition that when true runs the code in the for loop
Statement 3: Incrementing of the variable in order to eventually break the lopp */

for (let i=0; i<10 ; i++){
    console.log(i) 
    }
// 1:declare and initilalize variable
//2: check if condition is true
//3: console.log() runs and prints 0
//4: the variable i incrments from 0 to 1 
//5: repeat step 2
//6: repeat step 3
//7: repeat step 4

//break


for (let i=0; ;i++){
    
    if (i>10) {
        break;
    }
    console.log(i)
    }
// continue
for (let i=0;i<10 ;i++){
    
    if (i===7) {
        continue;
    }
    console.log(i)
    console.log(i)
    console.log(i)
    console.log(i)

    }
//Loops Examples
    //Ex1: 
    console.log('Ex1')
for (let i=10;i>0;i--){
console.log(i)

}

    //Ex2:
    console.log('Ex2')
for(let i=1;i<10; i+=2) {
console.log(i)

}
for(let i=2; i<=10; i+=2) {
    console.log(i)
   

}
//Ex 3
console.log('Ex3')
for(let i=3; i<=60; i+=3) {
    console.log(i)
    
}
//Ex 4:
console.log('Ex4')
let str = ' '
 
for(let i=1; i<=7; i++){
    str += '#'
    console.log(str)
}

//While Loops

//Ex1 
console.log('Ex 1')
let i=1
while ( i<35 ) {
console.log(i)
i+=2

}

//Ex2
console.log('Ex 2')
let j=5
while ( j<100 ) {
console.log(j)
j+=5
}

//Ex3 

