# murmurhash-v3 [![Build Status](https://travis-ci.org/ajoslin/murmurhash-v3.svg?branch=master)](https://travis-ci.org/ajoslin/murmurhash-v3)

This is a port of [perezd/node-murmurhash](https://github.com/perezd/node-murmurhash) which only includes murmurhash v3 for as few bytes as possible.

## Install

```
$ npm install --save murmurhash-v3
```

## Usage

```js
var hash = require('murmurhash-v3')

hash('string input') // => numeric hash
```

MIT © [Andrew Joslin](http://ajoslin.com)
