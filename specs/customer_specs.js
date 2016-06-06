var Store = require('../store_constructor')
var Record = require('../record_constructor')
var Customer = require('../customer_constructor')
var assert = require('chai').assert

beforeEach(function(){
  customer1 = new Customer('Chris', 100);
  record1 = new Record("tool", "lateralus", 19.00);
  record2 = new Record("RATM", "renagades", 18.00);
  })

it('has a name', function(){
  assert.equal("Chris", customer1.name)
})

it('has money', function(){
  assert.equal(100, customer1.money)
})

it('can add a record to records', function(){
  customer1.add(record1)
  assert.deepEqual({artist: "tool", title:  "lateralus", price: 19.00}, customer1.records[0])
})

it('should be able to find a record by name', function(){
  customer1.add(record1)
  console.log(customer1.records)
  result = customer1.find('lateralus')
  assert.deepEqual({artist: "tool", title:  "lateralus", price: 19.00}, result)
})

it('should be able to sell a record', function(){
  customer1.add(record1)
  customer1.sell('lateralus', store1)
  assert.deepEqual({artist: "tool", title:  "lateralus", price: 19.00}, store1.records[4])
})