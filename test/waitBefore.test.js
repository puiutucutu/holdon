import { performance } from "perf_hooks";
import test from "tape";
import { waitBefore } from "../src";

const getPrototype = x => Object.prototype.toString.call(x);
const roundTo = significantFigures => x =>
  Number.prototype.toFixed.call(parseFloat(x), significantFigures);

test("waitBefore called for 500 ms", function(assert) {
  const ms = 500;
  const id = x => x;

  assert.equal(
    getPrototype(waitBefore(ms)),
    "[object Function]",
    "should return a callable function after partially applying one argument"
  );

  assert.equal(
    getPrototype(waitBefore(ms)(id)),
    "[object Function]",
    "should return a callable function after partially applying two arguments"
  );

  const start = performance.now();
  waitBefore(ms)(id)("John").then(function() {
    const end = performance.now();
    const elapsedTime = end - start;
    const tolerance = 0.01;
    const toleranceInMs = ms * tolerance;
    const minTolerance = elapsedTime - toleranceInMs;
    const maxTolerance = elapsedTime + toleranceInMs;

    assert.equal(
      ms >= minTolerance && ms <= maxTolerance,
      true,
      `callback fn called after ${roundTo(2)(elapsedTime)} ms (within ${tolerance * 100}% of duration — between ${roundTo(2)(minTolerance)} ms and ${roundTo(2)(maxTolerance)} ms)` // prettier-ignore
    );
  });

  assert.end();
});
