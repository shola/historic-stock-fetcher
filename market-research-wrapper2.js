#!/usr/bin/env node
// Example of using market-research.js as a module
var mr = require('./market-research2.js');

var FIVE_YEARS_AGO  = stringifyFiveYearsAgo();
var IPO_DATES       = ["&a=04&b=18&c=2012"];  
var SYMBOLS			= [ {s: "FB", d: "&a=04&b=18&c=2012"}, 
                        {s: "GOOG", d: '&a=7&b=6&c=2008'}, 
                        {s: "AAPL", d: '&a=7&b=6&c=2008'},  
                        {s: "YHOO", d: '&a=7&b=6&c=2008'}, 
                        {s: "MSFT", d: '&a=7&b=6&c=2008'}, 
                        {s: "LNKD", d: "&a=04&b=19&c=2011"}, 
                        {s: "CRM", d: '&a=7&b=6&c=2008'}];

function stringifyFiveYearsAgo() {
    today = new Date();
    return ("&a=" + today.getMonth() + "&b=" + today.getDate() + "&c=" + (today.getFullYear() - 5));
}

for (var i = 0; i < SYMBOLS.length; i++) {
	mr.marketResearch(SYMBOLS[i]);
}	

// mr.marketResearch(SYMBOLS[0]);
