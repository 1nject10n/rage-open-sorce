global.gm = {};

gm.mysql = require('./mysql.js');
gm.auth = require('./auth.js');
gm.veh = require("./Vehicles/vehicles.js");
gm.clothes = require("./Clothes/index.js");

gm.mysql.connect(function() { });

require("./Player/pushE.js");
require("./Other/better.js");
require("./Vehicles/vehicles.js");
require("./Character");



//Commands
require("./Admin/coding-commands.js");


var conf = require("./config.js");



mp.events.add("playerChat", (player, text) =>
{
	mp.players.broadcast(`${player.name}: ${text}`);
});

setOnline();
function setOnline()
{
    gm.mysql.handle.query("UPDATE characters SET isOnline = '0' WHERE 1=1",[], function(err,res) {
        if(err) console.log("Error in Startup Onlinestatus; "+err);
        console.log("Onlinestatus geupdatet");
    });
}

loadGarage();
function loadGarage()
{
    gm.mysql.handle.query("SELECT * FROM garage", [], function (error, results, fields) {
        if(error) console.log("Error in Load Garage: "+error);
        for(let i=0; i<results.length; i++) {
            conf.garage_params[i]['id'] = results[i].id;

            conf.garage_params[i]['name'] = results[i].name;
            conf.garage_params[i]['pedX'] = results[i].pedx;
            conf.garage_params[i]['pedY'] = results[i].pedy;
            conf.garage_params[i]['pedZ'] = results[i].pedz;
            conf.garage_params[i]['pedR'] = results[i].pedr;

            conf.garage_params[i] = mp.blips.new(50, new mp.Vector3(conf.garage_params[i]['pedX'],conf.garage_params[i]['pedY'],conf.garage_params[i]['pedZ']),
            {
                name: conf.garage_params[i]['name'],
                color: 0,
                shortRange: true,
            });
            player.call("createPed",[conf.garage_params[i]['pedX'],conf.garage_params[i]['pedY'],conf.garage_params[i]['pedZ'],conf.garage_params[i]['pedR']])
            
        }
            
    })
}
loadAtm();
function loadAtm()
{
    gm.mysql.handle.query("SELECT * FROM atms", [], function (error, results, fields) {
        if(error) console.log("Error in Load Atm's: "+error);
        for(let i=0; i<results.length; i++) {
            conf.atms_params[i]['id'] = results[i].id;
            conf.atms_params[i]['posX'] = results[i].posX;
            conf.atms_params[i]['posY'] = results[i].posY;
            conf.atms_params[i]['posZ'] = results[i].posZ;
            conf.atms_params[i]['usable'] = results[i].usable;              
            conf.atms_params[i] = mp.blips.new(277, new mp.Vector3(conf.atms_params[i]['posX'], conf.atms_params[i]['posY'], 0),
            {
                name: 'ATM',
                color: 3,
                drawDistance: 10.0,
                shortRange: true,
            });           
        }        
    })
}