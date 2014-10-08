# object-delegate
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

Delegate methods to a target object's context. Does not return a new object.
Pretty similar to [`delegate`][delegate] but without the specific namespaces.

## Installation
```bash
npm install object-delegate
```

## Usage
```js
var delegate = require('object-delegate');

var obj = {};

delegate(obj)
  .method('foo', function foo() {})
  .method('something', function bar() {})
  .method('okBaz', function baz() {});
```

## API
#### delegate(obj)
Set the target of the delegation. Returns its own context to allow method
chaining.
```js
var myObj = {
  foo: function() {
    console.log('cats are soft');
  }
}

delegate(myObj);
```

#### .method(namespace, fn)
Delegate a method to the object
```js
delegate({})
  .method('foo', function foo() {})
  .method('cat', function cat() {})
  .method('dog', function dog() {});
```

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/object-delegate.svg?style=flat-square
[npm-url]: https://npmjs.org/package/object-delegate
[travis-image]: https://img.shields.io/travis/yoshuawuyts/object-delegate.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/object-delegate
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/object-delegate.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/object-delegate?branch=master
[downloads-image]: http://img.shields.io/npm/dm/object-delegate.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/object-delegate

[delegate]: https://github.com/visionmedia/delegate
