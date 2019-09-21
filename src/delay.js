/**
 * @param {Number} milliseconds
 * @return {Promise}
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
