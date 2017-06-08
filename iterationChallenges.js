// For to While
//
// Re-write the following as a while loop:
//
// for (var i=0; i<10; i++) { console.log(i); }
// What is the value of i after the loop? Is it the same in both cases?

// comment added for GitHub

for (var i=0; i<10; i++) {
  console.log(i);
}

// at the end of the above for loop i= 10

var i = 0;
while (i < 10){
  console.log(i);
  i++;
}
// at the end of the above while loop i= 10


// .. and Back
//
// Re-write the following as a for loop:
//
// var a = 10;
// while (a > 0) {
//   console.log(a);
//   a = a - 1;
// }

for (var a= 10; a > 0; a--){
  console.log(a);
}
//a is zero after the loop


// Duplicate Array
//
// Write a Javascript function mergeArray that merges two arrays and removes all duplicate elements.
//
// mergeArray([1, 2, 3], [2, 30, 1]) should return [1, 2, 3, 30]
//
// Order does not matter.

var arrayOne = [1, 2, 3];
var arrayTwo = [2, 30, 1];
var removedNumArray = [];
var mergeArray = arrayOne.concat(arrayTwo);  // 1,2,3,2,30,1
var length = mergeArray.length;

for (length=0; length < mergeArray.length; length++){
    var tempArray = mergeArray.pop()  } //tempArray = 1,2,3,2,30
    if tempArray.includes(mergeArray[length]) //mergeArray[length] = 1



}


//amy's experiment:

var arrayOne = [1, 2, 3];
var arrayTwo = [2, 30, 1];
var removedNumArray = [];
var tempArray = [];
var mergeArray = arrayOne.concat(arrayTwo);  // 1,2,3,2,30,1
console.log("mergeArray is: " + mergeArray)
var length = mergeArray.length;
console.log("mergeArray.length is: " + length)

tempArray = mergeArray;
console.log("tempArray is: " + mergeArray)


for (i=0; i < mergeArray.length; i++){

   console.log("i is: " + i)
    tempArray.pop() //tempArray = 1,2,3,2,30
    console.log("tempArray after pop is: " + tempArray)

      if (tempArray.includes(mergeArray[0])){
        console.log ("do not push")
        //don't push on new array
      } else{
removedNumArray = mergeArray.push("Push")

      }

  }




//------------------------------------
var arrayOne = [1, 2, 3];
var arrayTwo = [2, 30, 1];
var removedNumArray = [];
var mergeArray = arrayOne.concat(arrayTwo); //1,2,3,2,30,1

for (i=0; i < mergeArray.length; i++){
    if (mergeArray[i] === mergeArray[(mergeArray.length-1)]){
      removedNumArray.push(mergeArray[i]);
    }

}

// Rithy's experiment
//
// var arrayOne = [1, 2, 3];
// var arrayTwo = [2, 30, 1];
// var removedNumArray = [];
// var tempArray = [];
// var mergeArray = arrayOne.concat(arrayTwo);  // 1,2,3,2,30,1
// var length = mergeArray.length;
//
// tempArray = mergeArray;
//
// for (length=0; length < mergeArray.length; length++){
//     var tempArray = tempArray.pop()  } //tempArray = 1,2,3,2,30
//     if tempArray.includes(mergeArray[length]) //mergeArray[length] = 1

//------------------------------------
var arrayOne = [1, 2, 3];
var arrayTwo = [2, 30, 1];
var uniqueNumArray = [];
//var mergeArray = arrayOne.concat(arrayTwo); //1,2,3,2,30,1

for (i = arrayOne.length-1; i >= 0; i--) {
    if (arrayOne[i] !== arrayTwo[(arrayTwo.length-1)]) {
      uniqueNumArray.push(arrayOne[i]);
    }
}
