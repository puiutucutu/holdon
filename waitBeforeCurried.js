/**
 * @param {Number} seconds
 * @param {Function} callback
 * @return {Function}
 */
function waitBeforeCurried(seconds) {
  return function(callback) {
    const milliseconds = seconds * 1000;
    return function(...args) {
      setTimeout(function() {
        callback(...args);
      }, milliseconds);
    };
  }
}

/*

const waitBeforeCurried = seconds => callback => (...args) =>
  setTimeout(() => callback(...args), seconds * 1000);
  
*/
