/* ============================================================
   LESSON 8 — OBJECTS: FRESH EXERCISES
   ------------------------------------------------------------
   Tools: obj.key / obj[key], "key" in obj, delete, for..in,
   Object.keys / Object.values, { ...spread }. Plus everything before.

   Run:  node 8-objects.js
   Comparing objects: two objects are never === even when equal.
   To check in code, compare JSON.stringify(yours) to the expected.
   Each exercise: 3 TEST CASES, INPUT -> EXACT RETURN value.
   ============================================================ */

// ----- 1. Make a book -----
// Write `makeBook()` (no input) that RETURNS { title: "Dune", pages: 412 }.
// your code here

function makeBook() {
  return { title: "Dune", pages: 412 };
}

console.log(makeBook().title); 
console.log(makeBook().pages); 
console.log(typeof makeBook()); 


// console.log(makeBook());
// TEST 1:  makeBook().title       ->  "Dune"
// TEST 2:  makeBook().pages       ->  412
// TEST 3:  typeof makeBook()      ->  "object"

// ----- 2. Read a key -----
// Write `getTitle(book)` that RETURNS the title property.
// your code here

function getTitle(book) {
  return book.title;
}

console.log(getTitle({ title: "1984", pages: 328 }));
console.log(getTitle({ title: "It" }));
console.log(getTitle({ title: "" }));

// console.log(getTitle({ title: "1984", pages: 328 }));
// TEST 1:  getTitle({ title: "1984", pages: 328 })  ->  "1984"
// TEST 2:  getTitle({ title: "It" })                ->  "It"
// TEST 3:  getTitle({ title: "" })                  ->  ""

// ----- 3. Read by variable key -----
// Write `field(obj, key)` that RETURNS the value behind key (use brackets).
// your code here
function field(obj, key) {
  return obj[key];
}     

console.log(field({ a: 1, b: 2 }, "b"));
console.log(field({ city: "NYC" }, "city"));
console.log(field({ a: 1 }, "missing"));

// TEST 1:  field({ a: 1, b: 2 }, "b")        ->  2
// TEST 2:  field({ city: "NYC" }, "city")    ->  "NYC"
// TEST 3:  field({ a: 1 }, "missing")        ->  undefined

// ----- 4. Set a price (mutate) -----
// Write `setPrice(item, price)` that sets item.price = price and RETURNS item.
// your code here

function setPrice(item, price) {
  item.price = price;
  return item;
}

console.log(setPrice({ name: "pen" }, 3));
console.log(setPrice({ price: 1 }, 9));
console.log(setPrice({ name: "x" }, 0));


// console.log(setPrice({ name: "pen" }, 3));
// TEST 1:  setPrice({ name: "pen" }, 3).price  ->  3
// TEST 2:  setPrice({ price: 1 }, 9).price     ->  9
// TEST 3:  setPrice({ name: "x" }, 0).price    ->  0

// ----- 5. Has key? -----
// Write `hasKey(obj, key)` that RETURNS true when key exists in obj.
// your code here

function hasKey(obj, key) {
  return key in obj;
}

console.log(hasKey({ a: 1 }, "a"));
console.log(hasKey({ a: 1 }, "b"));
console.log(hasKey({ name: "x" }, "name"));

// TEST 1:  hasKey({ a: 1 }, "a")        ->  true
// TEST 2:  hasKey({ a: 1 }, "b")        ->  false
// TEST 3:  hasKey({ name: "x" }, "name") ->  true

// ----- 6. Remove a key (mutate) -----
// Write `removeKey(obj, key)` that deletes key from obj and RETURNS obj.
// your code here
function removeKey(obj, key) {
  delete obj[key];
  return obj;
}

console.log(removeKey({ a: 1, b: 2 }, "b"));
console.log(removeKey({ a: 1, b: 2 }, "a"));
console.log(removeKey({ x: 9 }, "x"));

// console.log(removeKey({ a: 1, b: 2 }, "b"));
// TEST 1:  "b" in removeKey({ a: 1, b: 2 }, "b")  ->  false
// TEST 2:  "a" in removeKey({ a: 1, b: 2 }, "b")  ->  true
// TEST 3:  removeKey({ x: 9 }, "x").x             ->  undefined

// ----- 7. Count the keys -----
// Write `keyCount(obj)` that RETURNS how many keys obj has.
// your code here
function keyCount(obj) {
  return Object.keys(obj).length;
}

console.log(keyCount({ a: 1, b: 2, c: 3 }));
console.log(keyCount({}));
console.log(keyCount({ only: true }));

// console.log(keyCount({ a: 1, b: 2, c: 3 }));
// TEST 1:  keyCount({ a: 1, b: 2, c: 3 })  ->  3
// TEST 2:  keyCount({})                    ->  0
// TEST 3:  keyCount({ only: true })        ->  1

// ----- 8. Sum the values -----
// Write `sumValues(obj)` (all values are numbers) that RETURNS their total.
// your code here
function sumValues(obj) {
  return Object.values(obj).reduce((sum, value) => sum + value, 0);
}

console.log(sumValues({ a: 1, b: 2, c: 3 }));
console.log(sumValues({ x: 10, y: 5 }));
console.log(sumValues({ only: 7 }));

// console.log(sumValues({ a: 1, b: 2, c: 3 }));
// TEST 1:  sumValues({ a: 1, b: 2, c: 3 })  ->  6
// TEST 2:  sumValues({ x: 10, y: 5 })       ->  15
// TEST 3:  sumValues({ only: 7 })           ->  7

// ----- 9. Merge two objects (copy) -----
// Write `merge(a, b)` that RETURNS a NEW object with both, b winning on
// shared keys. Do not change a or b.
// your code here
function merge(a, b) {
  return { ...a, ...b };
}

console.log(merge({ a: 1 }, { b: 2 }));
console.log(merge({ a: 1 }, { a: 9 }));
console.log(merge({}, { x: 5 }));

// console.log(merge({ a: 1 }, { b: 2 }));
// TEST 1:  merge({ a: 1 }, { b: 2 }).b         ->  2
// TEST 2:  merge({ a: 1 }, { a: 9 }).a         ->  9
// TEST 3:  keyCount(merge({ a: 1 }, { b: 2 })) ->  2

// ----- 10. Highest value key -----
// Write `topKey(scores)` (values are numbers) that RETURNS the key with the
// biggest value.
// your code here
function topKey(scores) {
  let maxKey = null;
  let maxValue = -Infinity;

  for (const key in scores) {
    if (scores[key] > maxValue) {
      maxValue = scores[key];
      maxKey = key;
    }
  }

  return maxKey;
}

console.log(topKey({ sam: 5, ada: 9, bo: 3 }));
console.log(topKey({ a: 1, b: 2 }));
console.log(topKey({ only: 7 }));

// console.log(topKey({ sam: 5, ada: 9, bo: 3 }));
// TEST 1:  topKey({ sam: 5, ada: 9, bo: 3 })  ->  "ada"
// TEST 2:  topKey({ a: 1, b: 2 })             ->  "b"
// TEST 3:  topKey({ only: 7 })                ->  "only"
