const myArray = [33, 56, 22, 11, 88, 44, 15];

function myEvery(number, arr) {
  for( i = 0; i < arr.length; i++ ) {
    if ((arr[i] > number)) {
      return true;
    }
  }
  return false;
} 
var number = 9;
console.log( myEvery(number, myArray ) );