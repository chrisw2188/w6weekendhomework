var Record = require('../record_constructor')
var assert = require('chai').assert 

describe('Record', function(){

  beforeEach(function(){
    record1 = new Record("tool", "lateralus", 18.00)
  })


  it('has a artist', function(){
    assert.equal("tool", record1.artist)
  })

  it('has a title', function(){
    assert.equal("lateralus", record1.title)
  })

  it('has a price', function(){
    assert.equal(18.00, record1.price)
  })






})