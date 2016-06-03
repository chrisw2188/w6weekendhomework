var Record = require('./record_constructor')
var _ = require('lodash');

var Store = function(name, city, balance){
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.records = [];
}

Store.prototype = {
  add: function(record){
    this.records.push(record);
  },
  find: function(title){
    return _.find(this.records, function(o) { return o.title === title; })
  },
  inventory: function(){
    for (record of this.records) {
      console.log(record)
    } 
  }



}
// store1 = new Store("Record Breakers", "Edinburgh", 1000);
// record1 = new Record("tool", "lateralus", 18.00);
// record2 = new Record("RATM", "renagades", 18.00);
// record3 = new Record("korn", "follow the leader", 18.00);
// record4 = new Record("a perfect circle", "thirteenth step", 18.00);
// store1.add(record1);
// store1.add(record2);
// store1.add(record3);
// store1.add(record4);

// store1.inventory()

module.exports = Store;