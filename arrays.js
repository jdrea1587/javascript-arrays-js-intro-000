
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
var newArray = array;
newArray.push(element);
return newArray
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return newArray;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift;
  return array;
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}
