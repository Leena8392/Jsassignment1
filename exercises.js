//Do not change any of the function names

function multiplyByTen(num) {
  var multiply = num * 10;
  return multiply;
  //return num after multiplying it by ten
  //code here
}

function subtractFive(num) {
  var subtract = num - 5;
  return subtract;
  //return num after subtracting five
  //code here
}

function areSameLength(str1, str2) {
  if(str1.length === str2.length){
    return true;
  }
    return false;
  //return true if the two strings have the same length
  //otherwise return false
  //code here
}

function areEqual(x, y) {
  if( x == y){
    return true;
  }
  return false;
  //return true if x and y are the same
  //otherwise return false
  //code here
}
areEqual(3,4);

function lessThanNinety(num) {
  if(num < 90){
    return true;
  }
  return false;
  //return true if num is less than ninety
  //otherwise return false
  //code here
}
lessThanNinety(56);

function greaterThanFifty(num) {
  if(num > 50){
    return true;
  }
  return false;
  //return true if num is greater than fifty
  //otherwise return false
  //code here
}
greaterThanFifty(60);

function add(x, y) {
  var z = x + y;
  return z;
  //add x and y together and return the value
  //code here
}
add(3,4);

function subtract(x, y) {
  var z = x - y;
  return z;
  //subtract y from x and return the value
  //code here
}
subtract(7,8);

function divide(x, y) {
  var z = x / y;
  return z;
  //divide x by y and return the value
  //code here
}
divide(4,2);

function multiply(x, y) {
  var z = x * y;
  return z;
  //multiply x by y and return the value
  //code here
}
multiply(3, 6);

function getRemainder(x, y) {
  var z = x % y;
  return z;
  //return the remainder from dividing x by y
  //code here
}
getRemainder(6,7);

function isEven(num) {
  if(num%2 == 0){
    return true;
  }
  return false;
  //return true if num is even
  //otherwise return false
  //code here
}

function isOdd(num) {
  if(num%2 == 1){
    return true;
  }
  return false;
  //return true if num is false
  //otherwise return false
  //code here
}

function square(num) {
  return num * num;
  //square num and return the new value
  //code here
}



function cube(num) {
  return num * num * num;
  //cube num and return the new value
  //code here
}

function raiseToPower(num, exponent) {
  var exp = Math.pow(num,exponent);
  return exp;
  //raise num to whatever power is passed in as exponent
  //code here
}


function roundNumber(num) {
  var a = Math.round(num);
  return a;

  //round num and return it
  //code here
}

function roundUp(num) {
  return Math.ceil(num);
  //round num up and return it
  //code here
}

function addExclamationPoint(str) {
  //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
  //code here
 var text = str + '!';
  return text;
}



function combineNames(firstName, lastName) {
 return firstName + ' ' + lastName;
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
  //code here
}
combineNames('Lambda', 'School');


function getGreeting(name) {
  return 'Hello ' + name + '!';
  
  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
  //code here
}
getGreeting('Sam!');

//If you can't remember these area formulas then head over to Google or look at the test code.
 
function getRectangleArea(length, width) {
  var area = length * width;
  return area;
  //return the area of the rectangle by using length and width
  //code here
}

function getTriangleArea(base, height) {
  var area = base * height / 2;
  return area;
  //return the area of the triangle by using base and height
  //code here
}

function getCircleArea(radius) {
  return Math.round(Math.PI * Math.pow(radius,2));
  //return the rounded area of the circle given the radius
  //code here
}

function getRectangularPrismVolume(length, width, height) {
  var prism_area= length*width*height;
  return prism_area;
  //return the area of the 3D rectangular prism given the length, width, and height
  //code here
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
