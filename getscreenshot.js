var page = require('webpage').create();
var system = require('system');

page.open(system.args[1], function() {
    page.render("/opt/spark/dump/"+system.args[1]+".png");
    phantom.exit();
});