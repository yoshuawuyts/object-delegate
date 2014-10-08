/**
 * Module dependencies
 */

var assert = require('assert');

/**
 * Expose `delegate()`.
 */

module.exports = Delegate;

/**
 * Delegate prototype.
 */

var delegate = Delegate.prototype;

/**
 * Create a new `Delegate`.
 *
 * @param {Object} obj
 * @return {Delegate} self
 * @api private
 */

function Delegate(obj) {
  if (!(this instanceof Delegate)) return new Delegate(obj);
  assert.equal(typeof obj, 'object', 'object-delegate: obj should be an object');

  this._obj = obj;
  return this;
}

/**
 * Delegate a new method to the object.
 *
 * @param {String} namespace
 * @param {Function} fn
 * @return {Delegate} self
 * @api public
 */

delegate.method = function(namespace, fn) {
  var obj = this._obj;

  assert.equal(typeof namespace, 'string', 'object-delegate: namespace should be a string');
  assert.equal(typeof fn, 'function', 'object-delegate: fn should be a function');

  obj[namespace] = fn;
  return this;
}
