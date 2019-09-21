/**
 * A promisified way to call some function after waiting for a fixed period of
 * time.
 *
 * Can be used to fire and forget or waited on since the function resolves to a
 * promise on completion.
 *
 * @param {Number} milliseconds The amount of time to wait before executing the
 *   callback function.
 * @return {function(callback: CallableFunction): Function} Returns a function
 *   that expects a callback function that will be called after pausing for the
 *   specified amount of `seconds`. The callback function provided will be
 *   supplied as many args as the caller provides.
 * @example
 *
 * ```
 * function sayHelloTo(name) {
 *   console.log(`hello ${name}`);
 * }
 *
 * const waitTwoSecondsBefore = waitBefore (2000);
 * const sayHelloAfterTwoSeconds = waitTwoSecondsBefore (sayHelloTo);
 *
 * sayHelloAfterTwoSeconds ("John"); //=> (after 2 seconds) "hello John"
 *
 * // one liner
 * waitBefore (2) (sayHello) ("John"); //=> (after 2 seconds) "hello John"
 * ```
 */
function waitBefore(milliseconds) {
  return function(callback) {
    return function(...args) {
      return new Promise(function(resolve) {
        setTimeout(function() {
          resolve(callback(...args));
        }, milliseconds);
      });
    };
  };
}

/*

// terse version
const waitBefore = milliseconds => callback => (...args) =>
  new Promise(resolve =>
    setTimeout(() => resolve(callback(...args)), milliseconds)
  );

*/

export { waitBefore };
