

// object literal
// let cat ={
//     name: 'Mr Bean' ,
//     fur: 'grey, black, and white',
//     legs: 4,
//     age: 3,
//     favoriteThings: ['yarn', 'string', 'eat','hisToys'],
//     canSpeakFrench: false,
//     meow: function(){     //methods
//         console.log('meow')
//         },
//     purr: ()=>{
//         console.log('purr')
//     },
//     talk (){
// console.log('get up!')
//     }
// }

// console.log(cat.name)
// console.log(cat.fur)
// console.log(cat.legs)

//we can also acces properties with brakets
// console.log(cat['name'])
// console.log(cat['fur'])
// console.log(cat['legs'])


// cat.breed = 'calico'
// console.log(cat)
// cat.temperament = ['mild']
// cat.temperament.push('angry') //adding a string to the cat temperament properties
// console.log(cat)

// if(cat.canSpeakFrench === true){
// console.log('wi')
// }else{
// console.log('no')

// }

// for(let i=0; i<cat.legs; i++){
// console.log (legs)

// }

// cat.meow()
// cat.purr()
// cat.talk()
//

// let dog ={
//     name: 'Mitch' ,
//     fur: 'white, black, and brown',
//     legs: 4,
//     age: 2,
//     favoriteThings: ['eat', 'jump', ,'hisToys'],
    
//     bark: function(){     //methods
//         console.log('meow')
//         },

//         friends:[ {
//             name: 'Snake',
//             legs:5,
//             type: 'feline',
//         },
//         {
//             name: 'Snake',
//             legs:3,
//             type: 'reptile',
//         },
//         { name:'Rixio', //dog.friend[2].name
//             legs: 5,
//             type: 'feline',
//             friends: [
// {     name: 'Arthur',
//     fins: 2,
//     type:'fish',
// },
// {name: 'Hannibal',
//     legs: 4,
//     type: 'reptile',
// }
//             ]
//         }
//     ]

//     }
    
//    console.log(dog.friends[2]) 
   

//     let student = {
//         emotions: ['motivation', 'stress','happy', 'perseverance'],
//         age: ['18','19','20', '21', '22', '23', '24'],
//         tution: 'Free',
//         study: function(){

//             console.log('hard')
//         }   
//     }

//     console.log(dog)

// console.log(student)
//     console.log(student.tution)
//     student.study()
//**************Exercise*************/
// let str = ['Hello I am Groot']
// +
// const stAr = function(){
//     let arr = '';
//     let count =[];
   
// for(let i=0; i< arr.length; i++){

//     let count = arr[i];
//     if (count[arr]){
//         count [arr] ++;
//     }
// else {
//     count[arr] = 1;
// }
//     return count;

// }
// }
// stAr()

// let countC = {
// tr: 
// }

//********************Lab******************* */

const radio = {
stations:[{

name:'Candit',
songs: [

            { name:'Despasito',
             author: 'Luis Fonsi',
            },
            {
            name:'Mala',
            author: 'Marc Anthony',
            },
            {
            name:'In Da Club',
             author:'50 Cent',
            },

        ],
name: 'The X',
songs:[
             { name:'En Vida',
             author: 'Gerardo Moran',
            },
            {
                 name:'Culpable',
                author: 'Luis Miguel',
            },
            {
               name:'California Love',
                author:'2PAC',
            },

        ],

},

],

}   

function randomStation(){
let x = Math.floor(Math.random()*2)
let y = Math.floor(Math.random()*3)
let z = radio.stations[x].songs[y]
console.log(z)
}


randomStation()


