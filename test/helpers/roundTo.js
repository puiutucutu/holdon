function roundTo(significantFigures) {
  return function(x) {
    return Number.prototype.toFixed.call(parseFloat(x), significantFigures);
  };
}

export { roundTo };
