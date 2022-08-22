// class Vehicle{

//     // vin and make in the case are arguments 

//     constructor(vin, country){
//             this.vin = vin;
//             this.country = country;
//             this.running = false;
//                 console.log('creating a new instance of Vehicle')
// }

//     maxSpeed() {
//     console.log('Max Speed')
//     }

//     start(){
//         this.running = true;
//         console.log('running')
//         this.running = false; 
//         console.log('stop')
//             }
//     stop(){
//         this.running = false; 
//         console.log('stop')

//     }

//     toString(){
//         return 'Vehicle {' + this.vin + '} is manufactured at ' + this.country
//     }

// }

// const toyota = new Vehicle('X123Y', 'JAPAN')
// const tesla = new Vehicle('ART67','USA')
// //v1 is the instance of the class. The whole process at above line its instansiation 
// console.log(toyota, tesla)

// let arr = [1,2,3]
// // arr.forEach()
// let arr2 = new Array(1, 2, 3)

// console.log(arr2)

// toyota.stop()


// console.log(toyota.toString())

//Person Exercise

// class Person {
//     constructor(name,age, height, weight, mood, bankAccount){
//         this.name = name;
//         this.age = age = 0;
//         this.height = height = 0;
//         this.weight = weight = 0;
//         this.mood = mood = 0 ;
//         this.hamsters = [];
//         this.bankAccount = bankAccount = 0;

//     }

//     getName(){

// return this.name

//     }

//     getAge(){

//         return this.age
//     }
// getWeight(){

// return this.weight

// }

// greet(){

// return console.log('Hi ' + this.name)

// }

// eat(){

// return this.weight ++, this.mood ++;


// }

// exercise(){

// return this.weight--;


// }

// ageUp(){

//     this.age++;
//     this.weight++;
//     this.height++;
//     this.mood--;
//     this.bankAccount +=10;    
// }

// buyHamster(hamster1){
//     this.hamsters.push(hamster1)
//     this.mood =+ 10
//     this.bankAccount -=thid.getPrice()



// }





// }

// //1
// const timmy  = new Person ('Timmy')
// //2

// timmy.ageUp()
// timmy.ageUp()
// timmy.ageUp()
// timmy.ageUp()
// timmy.ageUp()

// //3
// timmy.eat() 
// timmy.eat() 
// timmy.eat() 

// //4
// timmy.exercise()
// timmy.exercise()
// timmy.exercise()
// timmy.exercise()
// timmy.exercise()

// //5 
// for (let i=0; i<9; i++){

//     timmy.ageUp()
// }

// //6 
// const hamster1 = new Hamster('Gus')

// //7 
//  this.owner = "Gus"

//  //8 
//  timmy.buyHamster(hamster1)

//  //9
//  for (let i=0; i<15; i++){
// timmy.ageUp()

//  }
// //10 
// timmy.eat()
// timmy.eat()
// //11
// timmy.exercise()
// timmy.exercise()
// console.log(timmy)
// Add the hamster class to make everything work

// Exercise 2 

class Dinner {
    constructor(appetizer, entree, dessert) {

        this.appetizer = appetizer 
        this.entree = entree 
        this.dessert = dessert 
    }

}

class Chef {

   
newDinner(app, ent, dess){

    return new Dinner (app, ent, dess)
        
    }

}

const pepe = new Chef()
 pepe.newDinner('Pizza', 'Raviollies', 'Canoli')

console.log(pepe)


