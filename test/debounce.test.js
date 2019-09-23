import { performance } from "perf_hooks";
import tap from "tap";
import { delay } from "../src/delay";
import { debounce } from "../src/debounce.js";
import { getPrototype, roundTo } from "./helpers";

tap.test("debounce", async function(t) {
  t.equal(
    getPrototype(debounce(10)),
    "[object Function]",
    "should return a callable function after partially applying one argument"
  );

  t.equal(
    getPrototype(debounce(10)(() => {})),
    "[object Function]",
    "should return a callable function after partially applying two arguments"
  );

  t.equal(
    getPrototype(debounce(10)(() => {})()),
    "[object Promise]",
    "should return a promise after applying three arguments"
  );

  // these values will be set from within the debounced callback fn
  let debouncedCallbackValue = [];
  let end = null;

  function addName(name) {
    debouncedCallbackValue.push(`hello ${name}`);
    end = performance.now();
  }

  const debounceFor = 1000;
  const addNameDebounced = debounce(debounceFor)(addName); // prettier-ignore

  const start = performance.now();
  addNameDebounced("John");
  addNameDebounced("John");
  addNameDebounced("John");

  // intercept just before the debounced callback fn should be invoked
  await delay(900);
  t.equal(debouncedCallbackValue.length, 0, "calling the debounced function repeatedly does not invoke the callback until the internal delay timer of the last invocation expires"); // prettier-ignore

  // intercept right after the debounced fn should have been invoked
  await delay(100);
  const runtime = end - start;
  const tolerance = 0.01;
  const toleranceInMs = debounceFor * tolerance;
  const minTolerance = runtime - toleranceInMs;
  const maxTolerance = runtime + toleranceInMs;

  await t.equal(
    runtime >= 900 && runtime <= 1100,
    true,
    `debounced function invoked at the correct time after ${roundTo(2)(runtime)} ms (within ${tolerance * 100}% of duration — between ${roundTo(2)(minTolerance)} ms and ${roundTo(2)(maxTolerance)} ms)` // prettier-ignore
  );

  await t.deepEquals(
    debouncedCallbackValue,
    ["hello John"],
    "debounced function executed only once when invoked multiple times"
  );

  t.end();
});
