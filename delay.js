/**
 * @param {Number} seconds
 * @return {Promise}
 */
function delay(seconds) {
  const milliseconds = seconds * 1000;
  return new Promise(function(resolve) {
    setTimeout(resolve, milliseconds);
  });
}

/*

/**
 * @param {Number} seconds
 * @return {Promise}
 */
const delay = seconds => new Promise(resolve => setTimeout(resolve, seconds * 1000));

*/
