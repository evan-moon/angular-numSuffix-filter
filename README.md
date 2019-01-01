[npm-image]: https://img.shields.io/npm/v/simple-number-suffix.svg
[npm-url]: https://www.npmjs.com/package/simple-number-suffix

# simple-number-suffix [![npm][npm-image]][npm-url]
module that adds a suffix by rounding down the number.

## Installation
```shell
npm install simple-number-suffix
```

## Usage (with CommonJS)
```javascript
const filter = require('simple-number-suffix');

filter(999); // 999
filter(1234); // 1k
filter(1002928); // 1M
filter(2249284291); // 2G
filter(Number.MAX_SAFE_INTEGER); // 9P
```