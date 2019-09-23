import { performance } from "perf_hooks";
import tap from "tap";
import { waitBefore } from "../src";
import { getPrototype, roundTo } from "./helpers";

tap.test("waitBefore called for 500 ms", async function(t) {
  const ms = 500;
  const id = x => x;

  t.equal(
    getPrototype(waitBefore(ms)),
    "[object Function]",
    "should return a callable function after partially applying one argument"
  );

  t.equal(
    getPrototype(waitBefore(ms)(id)),
    "[object Function]",
    "should return a callable function after partially applying two arguments"
  );

  const start = performance.now();
  await waitBefore(ms)(id)("John");
  const end = performance.now();

  const elapsedTime = end - start;
  const tolerance = 0.01;
  const toleranceMilliseconds = ms * tolerance;
  const minTolerance = elapsedTime - toleranceMilliseconds;
  const maxTolerance = elapsedTime + toleranceMilliseconds;

  t.equal(
    ms >= minTolerance && ms <= maxTolerance,
    true,
    `callback fn called after ${roundTo(2)(elapsedTime)} ms (within ${tolerance * 100}% of duration — between ${roundTo(2)(minTolerance)} ms and ${roundTo(2)(maxTolerance)} ms)` // prettier-ignore
  );

  t.end();
});
