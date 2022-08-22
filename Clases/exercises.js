//**************Classes************** */
//Exercise 1************************************************************************8
// class Cat {

//     constructor(eat, age, color){
//         this.eat = eat
//         this.age = age
//         this.color = color
//         this.eating = true


//     }
//     eatSpeed(){

//         console.log('2 minutes')
//     }
//     jumpHeigth(){

//         console.log('1 meter')

//      }

//     isEating(){
//         this.eating = true
//         return "He is eating right now" 


//      }

// }

// const harry = new Cat('3min', '2', 'yellow')
// const pepe = new Cat('1min', '5', 'black')

// console.log(pepe.isEating())

// // Exercise 2  *****************************************************************************

// class Pirate {

//     constructor(name1, crime, years){
//         this.name1= name1;
//         this.crime = crime;
//         this.years = years;
//         this.navegating = true;


//     }
//     shipSpeed(){

//         console.log('35 nodes per hour')
//     }
//     robRate(){

//         console.log('10 treasuries per month')

//      }

//     isUp(){
//         this.navegating = true
//         return "Let's steals some piers" 

//      }
//     isDown(){

//         this.navegating = false
//         return 'Lets drink and eat there is nothing much to do today'

//     }

// }

// let blackpearl=  [new Pirate('Jack', 'High', 28), new Pirate('Salazar', 'Low', 45), new Pirate ('Juan', 'Medium', 24)]
// // let venganzaana =  [new Pirate ['Tom', 'High', 36], new Pirate['Barbosa', 'High', 55],new Pirate['Peter','High', 27]]
// // let imperial = [new Pirate['Jugo', 'High', 37], new Pirate ['Cruz', 'Medium', 39],new Pirate['Rex', 'High', 18]]

// blackpearl[0].isUp()
// // Parent classes and child classes

// class Character {
//     constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
//       this.legs = 2;
//       this.arms = 2;
//       this.name = name;
//       this.age = age;
//       this.eyes = eyes;
//       this.hair = hair;
//       this.lovesCats = lovesCats;
//       this.lovesDogs = lovesDogs || false;  // short-circuit evaluation
// ​
//       console.log('inside of Character constructor...')
//     }
//     greet (otherCharacter) {
//       console.log('hi ' + otherCharacter + '!');
//     }
//     classyGreeting (otherClassyCharacter) {
//       console.log('Howdy ' + otherClassyCharacter.name + '!');
//     }
//     setHair (hairColor) {
//       this.hair = hairColor;
//     }
// ​
//     smite () {
//       console.log('i smited thee.');
//     }

//   }
// ​
// child class and/or sub class
// use extend to inherit properties and methods 
// from parent and/or super class
// class Hobbit extends Character {
//     constructor(name, age, eyes, hair, height, weight) { // setup parameters...
//         super(name, age, eyes, hair) // pass them as arguments...
//         this.height = height
//         this.weight = weight
//         this.funds = funds; 
//         console.log('inside of Hobbit constructor...')
//     }
//     static steal() {
//         console.log('woohoo!')
//     }
//     greet(name) {
//         console.log('teeheee hi ' + name)
//         super.smite()
// ​

//     }
// }
// ​
// const frodo = new Hobbit('Frodo', 30, 'brown', 'black', 10, 100)
// console.log(frodo)
// frodo.greet('Sam')

//************ Parent Class and Child Classes */
//Exercise 1:
// class Governor {
//     constructor(name2, age, party, incumbent, reelect,) {
//         this.name2 = name2;
//         this.age = age,
//             this.party = party;
//         this.incumbent = incumbent;
//         this.reelect = reelect

//     }
//     passVote() {
//         console.log('Yes!!!')
//     }
//     goCorrupt() {
//         console.log('No way!!')
//     }
//     fundRaiser(funds) {
//         funds += 10
//         console.log(funds)


//     }

// }

// let gov = new Governor('Johnson', '56', 'republican', false, true, 100)


// gov.fundRaiser(100)

//Exercise 2:

class Person {
    constructor(name, age, carrer, income) {
        this.name = name;
        this.age = age;
        this.carrer = carrer;
        this.income = income;


    }

    retired() {

        if (this.age > 65) {
            console.log('Ready to retire')
        } else {
            console.log('Keep working')
        }
    }

    payincrease(increase) {

        increase = increase + this.income
        console.log(increase)

    }

}

p1 = new Person('John', 67, 'Electrian', 75000)
p2 = new Person('Gaby', 25, 'PM', 59000)

p1.retired()
p1.payincrease(800)
p2.retired()
console.log(p1, p2)









