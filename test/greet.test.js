let assert = require("assert");
var greet = require('../greet');

describe('The greet  function', function(){

    it('should greet Zoe correctly', function(){
        assert.equal('Hello, Zoe', greet('Zoe'));
    });
    it('should greet Zande correctly', function(){
        // this test will fail - can you fix it?
        assert.equal('Hello, Zande', greet('Zande'));
    });
});