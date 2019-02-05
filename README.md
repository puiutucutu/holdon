# js-delay-utils

## Examples

### delay

```js
```

### waitBefore

```js
function sayingHello(toWho) {
  console.log("hello");
  console.log(toWho);
}

const awaitingArgs = waitBefore(2, sayingHello); //=> anonymous function
awaitingArgs("world");

// after 2 seconds...
// => hello
// => world
```
