var Store = require('../store_constructor')
var Record = require('../record_constructor')
var assert = require('chai').assert

  beforeEach(function(){
    store1 = new Store("Record Breakers", "Edinburgh", 1000);
    record1 = new Record("tool", "lateralus", 18.00);
    record2 = new Record("RATM", "renagades", 18.00);
    record3 = new Record("korn", "follow the leader", 18.00);
    record4 = new Record("a perfect circle", "thirteenth step", 18.00);
    store1.add(record1);
    store1.add(record2);
    store1.add(record3);
    store1.add(record4);

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
    assert.deepEqual({artist: "tool", title:  "lateralus", price: 18.00}, store1.records[0])
  })

  it('should be able to find a record', function(){
    result = store1.find("renagades")
    assert.deepEqual({artist: "RATM",title: "renagades",price: 18.00
  }, result)
  })

  it('should be able to a record', function(){
    store1.sell("renagades")
  })

