# holdon

helper functions for delaying

## Docs

https://puiutucutu.github.io/holdon/

## Usage

```
npm install @puiutucutu/holdon
```

## Functions

* `waitBefore(milliseconds: Number): function (callback: CallableFunction): function (...args): Promise<callback>`
* `delay(milliseconds: Number): Promise`
* `debounce(msToWaitForRequests: Number): function (callback: CallableFunction): function (...args): Promise<callback>`