var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
  ];
  
 var addElementToBeginningOfArray = function(array, element) {
   return [element, ...array]
 }
 
 var destructivelyAddElementToBeginningOfArray = function(array, element) {
   return array.unshift()
 }
 
var addElementToEndOfArray = function(array, element) {
  return [...array, element]
}
 
 destructivelyAddElementToEndOfArray = function() {
   return array.push(element)
 }
 
 var accessElementInArray = function(array, index) {
   return array[index]
 }
 
 var destructivelyRemoveElementToBeginningOfArray = function(array) {
   return array.shift()
 }
 
 addElementToBeginningOfArray(array, element);
 destructivelyAddElementToBeginningOfArray(array, element);
 destructivelyAddElementToEndOfArray(array, element);
 addElementToEndOfArray(array, element);
 accessElementInArray(array, index);
 destructivelyRemoveElementToBeginningOfArray(array);