const { BWFilter } = require('./lib/bw_filter.js');

module.exports.BWFilter = require('./lib/bw_filter.js').BWFilter;

//console.log(module.exports.BWFilter.HasRegionalBadWord("You are 🇧 🇮 🇹 🇨 🇭  🇧 🇮 🇹 🇨 🇭 " ));

//console.log(module.exports.BWFilter.HasBadWord("f\nu\nc\nk\n"));


/*fs = require('fs');
fs.readFile("LICENSE.md", "utf8", function(e,d){
    console.log(BWFilter.FilterWhiteList(d,BWFilter.defaultWhiteList));
});*/
 

