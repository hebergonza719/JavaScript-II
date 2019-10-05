// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

const myFavMusicians = [
  {id: 1, Name: "The Beatles", Song: "Dear Prudence"},
  {id: 2, Name: "Nirvana", Song: "Come as you are"},
  {id: 3, Name: "Bob Marley", Song: "Rebel Music"},
  {id: 4, Name: "Duke Ellington", Song: "In a sentimental mood"},
  {id: 5, Name: "David Bowie", Song: "Space Oddity"},
  {id: 6, Name: "The Rolling Stones", Song: "Beast of burden"}
]

let favArtistAndSong = [];

favArtistAndSong = myFavMusicians.map((item) => {
  return `${item.Name} - ${item.Song}`;
});

favArtistAndSong.forEach((item) => {
  console.log(item);
});


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function..
  let count = 0;
  function counter() {
    return ++count;
  }
  return(counter)
};

//Example usage: 
console.log('\n', "Below you will see test for challenge 2", '\n');
const myCounter = counterMaker();
console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter());
console.log(myCounter());


// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.
const counterMakerTwo = () => {
  let count = 0;
  function counter() {
    // if count is 1 - 4, it will ++count. Meaning it will display upto 5.
    if (count < 5) {
      return ++count;
    }
    else {
      count = 1;
      return count;
    }    
  }
  return(counter)
};

console.log('\n', "Below you will see test for challenge 3", '\n');
const myCounterTwo = counterMakerTwo();

for (let i = 0; i < 15; i++) {
  console.log(myCounterTwo());
}


// console.log(myCounterTwo());
// console.log(myCounterTwo());
// console.log(myCounterTwo());
// console.log(myCounterTwo());
// console.log(myCounterTwo());
// console.log(myCounterTwo());
// console.log(myCounterTwo());
// console.log(myCounterTwo());
// console.log(myCounterTwo());
// console.log(myCounterTwo());
// console.log(myCounterTwo());
// console.log(myCounterTwo());



// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
