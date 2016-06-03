var Store = require('../store_constructor')
var Record = require('../record_constructor')
var assert = require('chai').assert

  beforeEach(function(){
    store1 = new Store("Record Breakers", "Edinburgh", 1000);
    record1 = new Record("tool", "lateralus", 18.00);
  }),

  it('has a name', function(){
    assert.equal("Record Breakers", store1.name)
  }),

  it('has a city', function(){
    assert.equal("Edinburgh", store1.city)
  })

  it('has a balance', function(){
    assert.equal(1000, store1.balance)
  })

  it('adds a record to a store', function(){
    store1.add(record1)
    assert.deepEqual({artist: "tool", title:  "lateralus", price: 18.00}, store1.records[0])
  })

