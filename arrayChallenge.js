


//find highest number (works)
var max = 0;
var array = [-0.4, 4, 78, 12, -11]

array.forEach(function(element){

  if (element>max){
    max = element;
  }

})

console.log(max);

//find lowest number


var array = [-0.4, 4, 78, -0.8, 12, -11]
var low = 0;
array.forEach(function(element){

  if (element<low){
    low = element;
  }

})

console.log(low);



//This works! Finds the number closest to zero

var array = [-111, 12, 43, -0.06, -10, -0.5, 0.55, 0.03];
var newArray = [];

array.forEach(
              function(element){

              if (element<0){
                var diffFromZero = (element * -1)
                //run this code for negitive numbers
              } else {
                var diffFromZero =  element
                //do this code for positive numbers
              }

              newArray.push(diffFromZero);
            }
)

var low = newArray[0];
var index = 0
newArray.forEach(function(element){

  if (element<low){
    low = element;
    index = newArray.indexOf(low)

  }

})

console.log("the number closest to zero is: " + array[index]);



//Create a function that calculate the sum.
//
// sum([1,2,3]) should return 6
// sum([]) should return 0

var sumArray = [10, 30, 20];
var sum = 0;
sumArray.forEach(function(element) {
    sum = sum + element;
})

console.log(sum);

//
// Create a function that calculate the mean value.
//
// mean([1,2,3]) should return 2

var sumArray = [10, 30, 20, 40];
var sum = 0;
sumArray.forEach(function(element) {
    sum = sum + element;
})

console.log(sum/sumArray.length);

// Create a function that finds the index of the highest number.
//
// indexHighestNumber([1,4,2]) should return 1
// indexHighestNumber([-1,-2,-4]) should return 0

var max = 0;
var array = [-0.4, 4, 78, 12, -11]
var index = 0;
array.forEach(function(element){

  if (element>max){
    max = element;
    index = array.indexOf(max);
  }

});

console.log(index);

// Arrays of Strings
//
// Create an array with your siblings names, and an array with your parents names.
//
// Sort your siblings names in alphabetical order.
//
// Sort your parents names in reverse alphabetical order.
//
// Sort all the names in alphabetical order.
//
// Hint: Combine the arrays into a single array.

// Sort all the names in reverse alphabetical order.
//
// Create a function that determines if a given name is amongst the names.

//create array for siblings and parents

var arraySib = ["Lisa", "Joe", "Zach", "Amy", "Amanda"];
var arrayParent = ["Xavier", "Tom", "Brad", "Kelly", "Tammy"];

arraySib.sort();

arrayParent.sort().reverse();

var arrayCombine = arraySib.concat(arrayParent);
arrayCombine.sort();
arrayCombine.sort().reverse();
arrayCombine.includes("Tom")


// Create a function that returns an array with only the even elements from the array.
//
// evenElements([1,2,3,4]) should return [2,4]
// Hint: use the % operator
// What happens if there are no even numbers?

var array = [1, 2, 3, 4, 5, 6, 7, 8];
var evenNumsArray = [];

array.forEach(function evenNums(num) {
  if (num%2 === 0) {
    evenNumsArray.push(num);
  }
});

//see if it works with a pop This does NOT work!

var array = [1, 2, 3, 4, 5, 6, 7, 8];

array.forEach(function evenNums(num) {
  if (num%2 === 1) {
    array.pop(num);
  }
});

// Create a function that returns an array with only the odd elements from the array.
//
// oddElements([1,2,3,4]) should return [1,3]
// oddElements([2,2,6,4]) should return []

var array = [1, 2, 3, 4, 5, 6, 7, 8];
var oddNumsArray = [];

array.forEach(function oddNums(num) {
  if (num%2 === 1) {
    oddNumsArray.push(num);
  }
});
//
// Create a function that take an array and a function, and returns a new array with return value of the function on each of the elements of the array.
//
// mapArray([5,6], function(x) { return 2*x; }) should return [10,12]
// Hint: function mapArray(array, fun) { var returnArray = []; ... return returnArray; }
// Hint: use forEach on the given array to append the return value of the function applied to each element

var mapArray = [5,6];
var returnArray = [];

// function multTwo(num) {
//   return 2*num;
// }
function multTwoArray(array){

  var length = mapArray.length;
  for (i=0; i < mapArray.length; i++){
    returnArray.push(mapArray[i]*2)
  }

}

// Create a function that take an array and a function, and returns a new array with only the elements for which the function returns true.
//
// filterArray([5,6,7], function(x) { return x>=6; }) should return [6,7]
// Hint: create a new array and use forEach on the given array, only appending the element if the function returns true


var mapArray = [5,6, 7];
var returnArray = [];


function greaterThan5Array(array){

  var length = mapArray.length;
  for (i=0; i < mapArray.length; i++){

    if (mapArray[i] >= 6) {
    returnArray.push(mapArray[i])
  }

}
}




// function(num, function(num){
//     //djfan
// }){
//     //djfan
// }
