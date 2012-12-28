(function(root, factory) {
  if (typeof exports === 'object') {
    // CommonJS
    factory(require('../lib/mechanism'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['sasl-external/lib/mechanism'], factory);
  }
}(this, function(Mechanism) {

  describe('Mechanism', function() {
    var mech = new Mechanism();
    
    it('should be named EXTERNAL', function() {
      expect(mech.name).to.equal('EXTERNAL');
    });
    
    it('should be client first', function() {
      expect(mech.clientFirst).to.equal(true);
    });
    
    it('should encode credentials', function() {
      expect(mech.response({})).to.equal('');
    });
    
    it('should encode credentials with authzid', function() {
      expect(mech.response({ authzid: 'fred@example.com' })).to.equal('fred@example.com');
    });
    
    it('should have challenge function', function() {
      expect(mech.challenge).to.be.a('function');
    });
    
  });
  
  return { name: 'test.sasl-external.mechanism' };
  
}));
