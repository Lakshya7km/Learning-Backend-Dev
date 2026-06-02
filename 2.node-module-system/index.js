//root file
//module.exports ->export functionality
//require ->import functionality
//node js use common JS
// import a from './first-module' 
const firstModule = require('./first-module')

console.log(firstModule)//object
/*
{
  add: [Function: add],
  substract: [Function: substract],
  devide: [Function: devide]
}*/


console.log(firstModule.add(3, 4));
console.log(firstModule.substract(3, 4));



try {

    console.log('trying to devide by zero')
    console.log(firstModule.devide(0, 90));
} catch (error) {
    console.log("caught an error", error.message)
}


//module wrapper
// (
//     function(exports,require,module,__filename,__dirname){
// ///your module code goes here
//     }
// )