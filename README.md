# js-delay-utils

helper functions for delaying

## Docs

https://puiutucutu.github.io/js-delay-utils/

## Usage

```
npm install js-delay-utils
```

## Examples

### delay

```js
import { delay } from "holdon";

// promise syntax
// note the callback fn supplied to `then()`,
// without it, the action  would execute immediately
delay(2000).then(function() {
  console.log("done");
});

// this will execute immediately
delay(2000).then(console.log("executes immediately"));

//=> "executes immediately"
//=> "done" (after 2 seconds)
```

Async example

```js
async function asyncExample() {
  await delay(2000);
  console.log("done (after awaiting delay)");
}

asyncExample(); //=> "done after awaiting delay" (after 2 seconds)
```

### waitBefore

```js
import { waitBefore } from "holdon";

function sayHelloTo(name) {
  console.log(`hello ${name}`);
}
 
const waitTwoSeconds = waitBefore (2000);
const sayHelloAfterTwoSeconds = waitTwoSeconds (sayHelloTo);
 
sayHelloAfterTwoSeconds ("John"); //=> (after 2 seconds) "hello John"
 
// one liner
waitBefore (2) (sayHelloTo) ("John"); //=> (after 2 seconds) "hello John"
```