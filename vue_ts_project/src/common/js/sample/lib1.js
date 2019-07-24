export var Hello = (function() {
  function Hello(a) {
    this.valueA = a;
  }
  Object.defineProperty(Hello.prototype, "a", {
    get: function() {
      return this.valueA;
    },
    enumerable: true,
    configurable: true
  });
  Hello.initClass = function() {
    Hello.instCount = 0;
  };
  /**
   * 假设这是一个重载函数，支持多种调用方式
   */
  Hello.prototype.setup = function(x, b) {
    if (b === void 0) {
      b = null;
    }
    return false;
  };
  return Hello;
})();
