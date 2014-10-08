/*eslint no-unused-expressions: 0*/

/**
 * Module dependencies
 */

var delegate = require('./index');

/**
 * Test
 */

describe('object-delegate', function() {
  it('should assert argument types', function() {
    delegate.bind(delegate, 123)
      .should.throw('object-delegate: obj should be an object');

    delegate.bind(delegate, {})
      .should.not.throw('object-delegate: obj should be an object');
  });

  it('should create a new context', function() {
    var obj = {foo: 'bar'};
    var nw = delegate(obj);

    nw._obj.should.eql(obj);
  });
});

describe('.method()', function() {
  it('should assert argument types', function() {
    var nw = delegate({})
      .method.bind(nw, 123)
      .should.throw('object-delegate: namespace should be a string');

    var nww = delegate({})
      .method.bind(nww, 'foo', 123)
      .should.throw('object-delegate: fn should be a function');
  });

  it('should attach methods to an object', function() {
    var nm = 0;
    var obj = {};

    delegate(obj)
      .method('foo', function() {nm ++})
      .method('bar', function() {nm ++});

    obj.bar.should.be.of.type('function');
    obj.foo.should.be.of.type('function');

    obj.foo();
    obj.bar();

    nm.should.eql(2);
  });
});
