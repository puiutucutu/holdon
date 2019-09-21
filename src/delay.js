/**
 * @param {Number} milliseconds
 * @return {Promise} A promise that will resolve after `milliseconds` of time has elapsed.
 * @example
 *
 * // using the async/await syntax
 * async function asyncExample() {
 *   await delay(2000);
 *   console.log("done (after awaiting delay)");
 * }
 *
 * // using promise syntax
 * //
 * // note, the callback inside the `then()` is a function,
 * // without it, the action would execute immediately
 * delay(2000).then(function() {
 *   console.log("done");
 * });
 *
 * // this will execute immediately
 * delay(2000).then(console.log("executes immediately"));
 *
 * // this will execute after 2 seconds
 * asyncExample();
 *
 * //=> "executes immediately"
 * //=> "done" (after 2 seconds)
 * //=> "done awaiting delay" (after 2 seconds)
 *
 */
function delay(milliseconds) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve();
    }, milliseconds);
  });
}

/*

// terser
const delay = milliseconds =>
  new Promise(resolve => setTimeout(resolve, milliseconds));

*/

export { delay };
