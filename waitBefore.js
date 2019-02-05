/**
 * @param {Number} seconds
 * @param {Function} callback
 * @return {Function}
 */
function waitBefore(seconds, callback) {
  const milliseconds = seconds * 1000;
  return function(...args) {
    setTimeout(function() {
      callback(...args);
    }, milliseconds);
  };
}

/*

const waitBefore = (seconds, callback) => (...args) =>
  setTimeout(() => callback(...args), seconds * 1000);
  
*/
