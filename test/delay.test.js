import { performance } from "perf_hooks";
import tap from "tap";
import { delay } from "../src";
import { getPrototype, roundTo } from "./helpers";

tap.test("delay called for 1000 ms", function(t) {
  const ms = 1000;
  const start = performance.now();

  t.equal(
    getPrototype(delay(ms)),
    "[object Promise]",
    "should return a Promise after partially applying one argument"
  );

  delay(ms).then(function() {
    const end = performance.now();
    const elapsedTime = end - start;
    const tolerance = 0.01;
    const toleranceInMs = ms * tolerance;
    const minTolerance = elapsedTime - toleranceInMs;
    const maxTolerance = elapsedTime + toleranceInMs;

    t.equal(
      ms >= minTolerance && ms <= maxTolerance,
      true,
      `delay elapsed ${roundTo(2)(elapsedTime)} ms (within ${tolerance * 100}% of duration — between ${roundTo(2)(minTolerance)} ms and ${roundTo(2)(maxTolerance)} ms)` // prettier-ignore
    );

    t.end();
  });
});
