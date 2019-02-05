# js-delay-utils

## Examples

### delay

```js
```

### waitBefore

```js
function sayHello(toWho) {
  console.log("hello");
  console.log(toWho);
}

const awaitingArgs = waitBefore(2, sayingHell0); //=> anonymous function
awaitingArgs("world");

// after 2 seconds...
// => hello
// => world
```
