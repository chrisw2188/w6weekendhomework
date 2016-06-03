var _ = require('lodash').assert;

var Record = function(artist, title, price){
  this.artist = artist;
  this.title = title;
  this.price = price;
}

module.exports = Record;