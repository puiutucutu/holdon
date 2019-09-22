/**
 * A promisified way to execute a function at some future point in time.
 *
 * Can be used to fire and forget or waited on since the function resolves to a
 * promise on completion.
 *
 * @param {Number} milliseconds
 *
 *  The amount of time to wait before executing the callback function.
 *
 * @return {function(callback: CallableFunction): function(...args): Promise<callback>}
 *
 *   Returns a function that expects a function (the `callback` fn) that
 *   returns a function that expects a list of arguments to supply to the
 *   callback function.
 *
 *   Finally, returns the now promisified callback function after waiting for
 *   `milliseconds` of time.
 *
 * @example
 *
 * import { waitBefore } from "holdon";
 *
 * function sayHelloTo(name) {
 *   console.log(`hello ${name}`);
 * }
 *
 * const waitTwoSeconds = waitBefore (2000);
 * const sayHelloAfterTwoSeconds = waitTwoSeconds (sayHelloTo);
 *
 * sayHelloAfterTwoSeconds ("John"); //=> (after 2 seconds) "hello John"
 *
 * // one liner
 * waitBefore (2) (sayHelloTo) ("John"); //=> (after 2 seconds) "hello John"
 *
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
