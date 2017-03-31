var StringFactory = require('./methods/core/string.js');

function Echo(){}
Echo.prototype = new StringFactory();

var echo = new Echo();