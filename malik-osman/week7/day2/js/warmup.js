// The goal of this exercise is to manipulate arrays by creating a function that can reverse an array and by creating a function that can flatten an array. Do not use any libraries to complete this task - write this stuff from scratch using standard JS methods and objects.
//
// Make two functions
// reverse
// flatten


// let array1 = [ '1', '2', '3', '4', '5']
//
// const reverseArray = function (array){
//
//   let reverse = [];
//
//   for ( let i = array.length -1; i>=0; i){
//     reverse.push(array[i])
//     console.log(i);
//     console.log(reverse);
//   }
//
//
//   for (let i = 0; i < array.length; i++) {
//     reverse.unshift(array[i])
//     console.log(reverse);
//   }
//   console.log('reverse', array.reverse);
// }
//   reverseArray(array1)





  const array2 = ['one', 'two', 'three', 'four']

  const flattenArray = function(array){
    let flatten = [];

    for (let i = 0; i < array.length; i++) {

      if (array[i] instanceof Array){

        for (let j=0; j < array[i].length; j++){
          flatten.push(array[i][j])
        }


      }else {
        flatten.push(array[i])
      }
  flattenArray( array2 )
    }
  }
