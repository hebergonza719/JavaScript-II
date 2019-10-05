// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/

//Number 1
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

const testGetLength = getLength(items, (num) => `${num} is the length of this array.`);
console.log(testGetLength);



//Number 2
function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}

function lastInArray(item) {
  return `${item} is the last item in this array.`;
}

const testLast = last(items, lastInArray);
console.log(testLast);



//Number 3
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y, x, y);
}

const testSumNums = sumNums(4, 5, (total, x, y) => {return `The sum of ${x} and ${y} is ${total}.`})
console.log(testSumNums);


//Number 4

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y, x, y);
}

function returnMultiResult(total, num1, num2) {
  return `${num1} times ${num2} is ${total}.`
}

const testMultiplyNums = multiplyNums(2, 5, returnMultiResult);
console.log(testMultiplyNums);



//Number 5
function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  
  // .includes() is a function that checks if an item is in an array,
  // then, it returns true or false
  const answer = list.includes(item);
  return cb(answer, item); 
}

const testContains = contains('Pencil', items, (answer, item) => `It is ${answer} that this array contains the word '${item}'`);

console.log(testContains);




/* STRETCH PROBLEM */

const itemsTwo = ['Pencil', 'Notebook', 'yo-yo', 'Gum', 'yo-yo', 'Gum'];


function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.

}

const testRemoveDuplicates = removeDuplicates(itemsTwo, )
console.log(testRemoveDuplicates);
