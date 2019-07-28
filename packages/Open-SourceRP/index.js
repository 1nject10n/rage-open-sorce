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

loadStatus();
function loadStatus()
{
    gm.mysql.handle.query("UPDATE characters SET isOnline = '0' WHERE 1=1",[], function(err,res) {
        if(err) console.log("Error in Startup Onlinestatus; "+err);        
        gm.mysql.handle.query("UPDATE vehicles SET parked = '1' WHERE 1=1",[],function(err1,res1) {
            if (err1) console.log("Error in Update Vehicles: "+err1);
            console.log("Status geupdatet");
        });
    });
}

loadGarage();
function loadGarage()
{
    gm.mysql.handle.query("SELECT * FROM garage", [], function (error, results, fields) {
        if(error) console.log("Error in Load Garage: "+error);
        for(let i=0; i<results.length; i++) {
            conf.garage_params[i]['id'] = results[i].id;

            conf.garage_params[i]['id'] = results[i].id;
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
            conf.garage_params[i] = mp.markers.new(1,new mp.Vector3(conf.garage_params[i]['pedX'],conf.garage_params[i]['pedY'],conf.garage_params[i]['pedZ'],-0.979), 2, { color: [255,255,255,100],visible: true});
            
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

loadShop();
function loadShop()
{
    gm.mysql.handle.query("SELECT * FROM shops", [], function (error, results, fields) {
        if(error) console.log("Error in Load Garage: "+error);
        for(let i=0; i<results.length; i++) {
            conf.shop_params[i]['id'] = results[i].id;

            conf.shop_params[i]['id'] = results[i].id;
            conf.shop_params[i]['posX'] = results[i].posX;
            conf.shop_params[i]['posY'] = results[i].posY;
            conf.shop_params[i]['posZ'] = results[i].pedZ;
            conf.shop_params[i] = mp.blips.new(52, new mp.Vector3(conf.shop_params[i]['posX'],conf.shop_params[i]['posY'],conf.shop_params[i]['posZ']),
            {
                name: "Shop",
                color: 4,
                shortRange: true,
            });                 
        }
            
    })
}

loadBlip();
function loadBlip()
{
    gm.mysql.handle.query("SELECT * FROM blips", [], function (error, results, fields) {
        if(error) console.log("Error in Load Blips: "+error);
        for(let i=0; i<results.length; i++) {
            conf.blip_params[i]['posX'] = results[i].posX;
            conf.blip_params[i]['posY'] = results[i].posY;
            conf.blip_params[i]['name'] = results[i].name;
            conf.blip_params[i]['color'] = results[i].color;
            conf.blip_params[i]['blipid'] = results[i].blipid;
            conf.blip_params[i]['scale'] = results[i].scale;
            conf.blip_params[i] = mp.blips.new(conf.blip_params[i]['blipid'], new mp.Vector3(conf.blip_params[i]['posX'],conf.blip_params[i]['posY']),
            {
                name: conf.blip_params[i]['name'],
                color: conf.blip_params[i]['color'],
                shortRange: true,
                scale: conf.blip_params[i]['scale']
            });                 
        }
            
    })
}