/* ============================================================
   LESSON 3 — OPERATORS: FRESH EXERCISES
   ------------------------------------------------------------
   Tools: < > <= >= === !== , && || ! , % , + - * / .
   Every answer RETURNS a value (often true/false). No if needed.

   Run:  node 3-operators.js
   Each exercise: 3 TEST CASES, INPUT -> EXACT RETURN value.
   ============================================================ */

// ----- 1. Is it bigger? -----
// Write `isBigger(a, b)` that RETURNS true when a is greater than b.
// your code here

function isBigger(a, b) {
  return a > b
}

console.log(isBigger(10, 3));
console.log(isBigger(3, 10));
console.log(isBigger(5, 5));
// TEST 1:  isBigger(10, 3)  ->  true
// TEST 2:  isBigger(3, 10)  ->  false
// TEST 3:  isBigger(5, 5)   ->  false

// ----- 2. Exactly equal -----
// Write `sameValueAndType(a, b)` that RETURNS true only when a === b.
// your code here


function sameValueAndType(a, b) {
  return a === b
}

console.log(sameValueAndType(5, 5));
console.log(sameValueAndType(5, "5"));
console.log(sameValueAndType("a", "a"));

// console.log(sameValueAndType(5, 5));
// TEST 1:  sameValueAndType(5, 5)     ->  true
// TEST 2:  sameValueAndType(5, "5")   ->  false
// TEST 3:  sameValueAndType("a", "a") ->  true

// ----- 3. In working hours -----
// Write `isWorkHour(hour)` that RETURNS true when hour is >= 9 AND < 17.
// your code here

function isWorkHour(hour) {
  return hour >= 9 && hour < 17
}

console.log(isWorkHour(10));
console.log(isWorkHour(17));
console.log(isWorkHour(8));

// console.log(isWorkHour(10));
// TEST 1:  isWorkHour(10)  ->  true
// TEST 2:  isWorkHour(17)  ->  false
// TEST 3:  isWorkHour(8)   ->  false

// ----- 4. Weekend day -----
// Write `isWeekend(day)` that RETURNS true when day is "Sat" OR "Sun".
// your code here

function isWeekend(day) {
  return day === "Sat" || day === "Sun"
}

console.log(isWeekend("Sat"));
console.log(isWeekend("Sun"));
console.log(isWeekend("Mon"));

// console.log(isWeekend("Sat"));
// TEST 1:  isWeekend("Sat")  ->  true
// TEST 2:  isWeekend("Sun")  ->  true
// TEST 3:  isWeekend("Mon")  ->  false

// ----- 5. Flip it -----
// Write `flip(value)` that RETURNS the NOT of value (the opposite boolean).
// your code here

function flip(value) {
  return !value
}

console.log(flip(true));
console.log(flip(false));
console.log(flip(0));

// console.log(flip(true));
// TEST 1:  flip(true)   ->  false
// TEST 2:  flip(false)  ->  true
// TEST 3:  flip(0)      ->  true

// ----- 6. Even number -----
// Write `isEven(n)` that RETURNS true when n divides evenly by 2 (use %).
// your code here

function isEven(n) {
  return n % 2 === 0
}        

console.log(isEven(8));
console.log(isEven(7));
console.log(isEven(0));
// TEST 1:  isEven(8)   ->  true
// TEST 2:  isEven(7)   ->  false
// TEST 3:  isEven(0)   ->  true

// ----- 7. In range (inclusive) -----
// Write `inRange(n)` that RETURNS true when n is between 50 and 100 inclusive.
// your code here

function inRange(n) {
  return n >= 50 && n <= 100
}

console.log(inRange(75));
console.log(inRange(50));
console.log(inRange(101));

// console.log(inRange(75));
// TEST 1:  inRange(75)   ->  true
// TEST 2:  inRange(50)   ->  true
// TEST 3:  inRange(101)  ->  false

// ----- 8. Default fallback -----
// Write `displayName(nick)` that RETURNS nick, OR "Guest" when nick is empty.
// (Use the || operator.)
// your code here

function displayName(nick) {
  return nick || "Guest"
}

console.log(displayName(""));
console.log(displayName("Sam"));
console.log(displayName("x"));

// console.log(displayName(""));
// TEST 1:  displayName("")     ->  "Guest"
// TEST 2:  displayName("Sam")  ->  "Sam"
// TEST 3:  displayName("x")    ->  "x"

// ----- 9. Leap-ish check -----
// Write `divisibleByBoth(n)` that RETURNS true when n divides evenly by
// BOTH 3 and 5.
// your code here

function divisibleByBoth(n) {
  return n % 3 === 0 && n % 5 === 0
}           

console.log(divisibleByBoth(15));
console.log(divisibleByBoth(9));
console.log(divisibleByBoth(30));



// console.log(divisibleByBoth(15));
// TEST 1:  divisibleByBoth(15)  ->  true
// TEST 2:  divisibleByBoth(9)   ->  false
// TEST 3:  divisibleByBoth(30)  ->  true

// ----- 10. Access granted -----
// Write `canEnter(pinOk, isAdmin)` that RETURNS true when pinOk is true
// OR isAdmin is true.
// your code here

function canEnter(pinOk, isAdmin) {
   return pinOk || isAdmin    
}     



console.log(canEnter(false, true));
console.log(canEnter(true, false));
console.log(canEnter(false, false));


// TEST 1:  canEnter(false, true)   ->  true
// TEST 2:  canEnter(true, false)   ->  true
// TEST 3:  canEnter(false, false)  ->  false
