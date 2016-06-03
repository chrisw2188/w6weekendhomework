var Store = function(name, city, balance){
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.records = [];
}

Store.prototype = {
  add: function(record){
    this.records.push(record);
  }
}

module.exports = Store;