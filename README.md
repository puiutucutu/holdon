# js-delay-utils

## Examples

### delay

```js
// note that the callback inside the `then()` is a function,
// without it, the action would execute immediately
delay(3).then(() => console.log("done"));

// this will execute immediately
delay(3).then(console.log("executes immediately");

//=> "executes immediately"
//=> ...after 3 seconds
//=> "done"
```

Async example

```js
async function asynchronousExample() {
  await delay(3);
  console.log("done");
}

asynchronousExample();

//=> ...after 3 seconds
//=> "done"
```

### waitBefore

```js
function sayingHello(toWho) {
  console.log("hello");
  console.log(toWho);
}

const awaitingArgs = waitBefore(2, sayingHello); //=> anonymous function
awaitingArgs("world");

// or one line 
waitBefore(2, sayingHello)("to you");

//=> ...after 2 seconds
//=> hello
//=> world
//=> hello
//=> to you
```
