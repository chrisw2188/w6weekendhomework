var Record = require('./record_constructor');
var Store = require('./store_constructor');
var _ = require('lodash');

var Customer = function(name, money){
  this.name = name;
  this.money = money;
  this.records = []
}

Customer.prototype = {
  add: function(record){
    this.records.push(record)
  },
  find: function(title){
    return _.find(this.records, function(r){
      return r.title === title; })
  },
  sell: function(title, store){
    var find = this.find(title);
    var index = this.records.indexOf(find);
    var record = this.records.splice(index, 1)[0]
    this.money += record.price;
    store.changeBalance(-record.price)
    store.add(record)
    return record
  }

}


module.exports = Customer;