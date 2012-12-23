(function(root, factory) {
  if (typeof exports === 'object') {
    // CommonJS
    factory(require('sasl-external'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['sasl-external'], factory);
  }
}(this, function(saslplain) {

  describe('sasl-external', function() {
    
    it('should export Mechanism', function() {
      expect(saslplain.Mechanism).to.be.a('function');
    });
    
    it('should export Mechanism via module', function() {
      expect(saslplain).to.equal(saslplain.Mechanism);
    });
    
  });
  
  return { name: 'test.sasl-external' };
  
}));
