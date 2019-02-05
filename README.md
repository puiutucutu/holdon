# js-delay-utils

## Examples

### delay

```js

// note that it is important that the `then()` part of the code
// returns a function , otherwise it iwll execute immediately
delay(3).then(() => console.log("... ok waited 3 seconds"));

//=> ...after 3 seconds
//=> "... ok waited 3 seconds"

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
