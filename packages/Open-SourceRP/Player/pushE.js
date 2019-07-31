
var conf = require("./../config.js");
mp.Vector3.Distance = function (v1, v2){
	return Math.abs(Math.sqrt(Math.pow((v2.x - v1.x),2) +
									Math.pow((v2.y - v1.y),2)+
									Math.pow((v2.z - v1.z),2)));
}	
mp.Vector3.Distance2D = function (v1, v2){
	return Math.abs(Math.sqrt(Math.pow((v2.x - v1.x),2) +
									Math.pow((v2.y - v1.y),2)));
}
mp.events.add("PushE", (player) => {
    if(player.data.faction != "Civillian") {
    gm.mysql.handle.query('SELECT * FROM faction WHERE name = ?', [player.data.faction], function (error, results, fields) {
	for(let i = 0; i < results.length; i++) {
		if(player.data.faction == results[i].name)
		{
            let distance = mp.Vector3.Distance2D(player.position,new mp.Vector3(parseFloat(results[i].dutyX), parseFloat(results[i].dutyY), parseFloat(results[i].dutyZ)));
            let distance2 = mp.Vector3.Distance2D(player.position,new mp.Vector3(parseFloat(results[i].clothesX), parseFloat(results[i].clothesY), parseFloat(results[i].clothesZ)));
            let distance3 = mp.Vector3.Distance2D(player.position,new mp.Vector3(parseFloat(results[i].equipX), parseFloat(results[i].equipY), parseFloat(results[i].equipZ)));
			let distance4 = mp.Vector3.Distance2D(player.position,new mp.Vector3(parseFloat(results[i].pcX), parseFloat(results[i].pcY), parseFloat(results[i].pcZ)));
			let distance5 = mp.Vector3.Distance2D(player.position,new mp.Vector3(parseFloat(results[i].chiefX), parseFloat(results[i].chiefY), parseFloat(results[i].chiefZ)));
			let distance6 = mp.Vector3.Distance2D(player.position,new mp.Vector3(parseFloat(results[i].vehicleX), parseFloat(results[i].vehicleY), parseFloat(results[i].vehicleZ)));
			let distance7 = mp.Vector3.Distance2D(player.position,new mp.Vector3(parseFloat(results[i].parkX), parseFloat(results[i].parkY), parseFloat(results[i].parkZ)));
			let distance8 = mp.Vector3.Distance2D(player.position,new mp.Vector3(parseFloat(results[i].pedX), parseFloat(results[i].pedY), parseFloat(results[i].pedZ),parseInt(results[i].id)));
             
            if(distance <= 1)
            {
                mp.events.call("server:faction:duty", player);
            }
            else if(distance2 <=1)
            {
                player.call("client:lspd:clothes");
            }
            else if(distance3 <=1)
            {
                player.call("client:lspd:openWeapon");
			}
			else if(distance4 <=1)
			{
				player.call("client:lspd:createOfficeComputer",[player.data.factionrang]);
				player.call("client:lspd:openofficeComputer");
			}
			else if(distance5 <=1)
			{
				if (player.data.factionrang >= 6) {
					player.call("client:lspd:createChiefMenu");
				}
			}
			else if(distance6 <=1)
			{
				player.call("client:lspd:createVeichleMenu",[player.data.factionrang]);
			}
			else if(distance7 <=1)
			{
				mp.events.call("server:lspd:parkin",(player));
			}	
        }
    }
	});	
	} 
	gm.mysql.handle.query('SELECT * FROM garage WHERE 1=1', [], function (error, results, fields) {
	for(let i = 0; i < results.length; i++) {
		let distance = mp.Vector3.Distance2D(player.position,new mp.Vector3(parseFloat(results[i].pedx), parseFloat(results[i].pedy), parseFloat(results[i].pedz),parseInt(results[i].id)));				
		if(distance <= 1)
		{
			var garageid = results[i].id;
			player.call("client:garage:openmenu",[garageid]);
		}		
	}	
	});	

	gm.mysql.handle.query('SELECT * FROM atms WHERE 1=1', [], function (error, results, fields) {
	for(let i = 0; i < results.length; i++) {
		let distance = mp.Vector3.Distance2D(player.position,new mp.Vector3(parseFloat(results[i].posX), parseFloat(results[i].posY), parseFloat(results[i].posZ),parseInt(results[i].id)));				
		if(distance <= 1.5)
		{
			if (results[i].usable == 0) {
				mp.events.call("server:bank:konten",player,results[i].id);
			} else {
				player.notify("~r~Der ATM ist kaputt!");
			}
		}		
	}	
	});	  
	gm.mysql.handle.query("SELECT * FROM shops WHERE 1=1",[],function(err,res) {
		if (err) console.log("Error in Select Shops: "+err);
		for(let i = 0; i < res.length; i++) {
			let distance = mp.Vector3.Distance2D(player.position, new mp.Vector3(parseFloat(res[i].posX), parseFloat(res[i].posY), parseFloat(res[i].posZ), parseInt(res[i].id), parseInt(res[i].type)));
			if (distance <= 2) {
				mp.events.call("server:shop:openShop",player,res[i].id);
			}
		}
	});

	gm.mysql.handle.query("SELECT * FROM carshops WHERE 1=1",[],function(err,res) {
		if (err) console.log("Error in Select Shops: "+err);
		for(let i = 0; i < res.length; i++) {
			let distance = mp.Vector3.Distance2D(player.position, new mp.Vector3(parseFloat(res[i].posX), parseFloat(res[i].posY), parseFloat(res[i].posZ), parseInt(res[i].id)));
			if (distance <= 4) {
				mp.events.call("server:carshop:openShop",player,res[i].id,res[i].type);
			}
		}
	});
	
	gm.mysql.handle.query("SELECT * FROM teleporter WHERE 1=1",[],function(err,res) {
		if (err) console.log("Error in Select Shops: "+err);
		for(let i = 0; i < res.length; i++) {
			let distance = mp.Vector3.Distance2D(player.position, new mp.Vector3(parseFloat(res[i].pos1X), parseFloat(res[i].pos1Y), parseFloat(res[i].pos1Z), parseInt(res[i].id)));
			let distance2 = mp.Vector3.Distance2D(player.position, new mp.Vector3(parseFloat(res[i].pos2X), parseFloat(res[i].pos2Y), parseFloat(res[i].pos2Z), parseInt(res[i].id)));
			if (distance <= 2) {
				mp.events.call("server:teleporter:port1",player,res[i].id);
			}
			if (distance2 <= 2) {
				mp.events.call("server:teleporter:port2",player,res[i].id);
			}
		}
	});
	gm.mysql.handle.query("SELECT * FROM housing WHERE 1=1",[],function(err,res) {
		if (err) console.log("Error in Select Shops: "+err);	
		for(let i = 0; i < res.length; i++) {
			let distance = mp.Vector3.Distance2D(player.position, new mp.Vector3(parseFloat(res[i].outX), parseFloat(res[i].outY), parseFloat(res[i].outZ), parseInt(res[i].id)));
			let distance1 = mp.Vector3.Distance2D(player.position, new mp.Vector3(parseFloat(res[i].inX), parseFloat(res[i].inY), parseFloat(res[i].inZ), parseInt(res[i].id)));
			if (distance <= 2) {
				mp.events.call("server:housing:openMenu",player,res[i].id);
			}
			if (distance1 <= 2) {
				mp.events.call("server:housing:openInMenu",player,res[i].id);
			}
		}
	});
	gm.mysql.handle.query("SELECT * FROM farming WHERE 1=1",[],function(err,res) {
		if (err) console.log("Error in Select Shops: "+err);
		for(let i = 0; i < res.length; i++) {
			let distance = mp.Vector3.Distance2D(player.position, new mp.Vector3(parseFloat(res[i].farmX), parseFloat(res[i].farmY), parseFloat(res[i].farmZ), parseInt(res[i].id), parseInt(res[i].farmItem)));
			let distance2 = mp.Vector3.Distance2D(player.position, new mp.Vector3(parseFloat(res[i].processorsX), parseFloat(res[i].processorsY), parseFloat(res[i].processorsZ), parseInt(res[i].id), parseInt(res[i].processorsneedItem), parseInt(res[i].processorsgiveItem)));
			let distance3 = mp.Vector3.Distance2D(player.position, new mp.Vector3(parseFloat(res[i].sellX), parseFloat(res[i].sellY), parseFloat(res[i].sellZ), parseInt(res[i].id), parseInt(res[i].sellneedItem), parseInt(res[i].sellPrice)));			
			if (distance <= 30) {
				mp.events.call("server:farming:farm",player,res[i].id,res[i].farmItem);
			}
			if (distance2 <= 5) {
				mp.events.call("server:farming:processing",player,res[i].id,res[i].processorsneedItem,res[i].processorsgiveItem);
			}
			if (distance3 <= 5) {
				mp.events.call("server:farming:selling",player,res[i].id,res[i].sellneedItem,res[i].sellPrice);
			}
		}
	});
});
var currentTarget = null;
mp.events.add("server:faction:interaction", (player) => {
    if(player.data.faction == "LSPD" && player.data.factionDuty == 1)
    {
	currentTarget = null;
	function getNearestPlayer(player, range)
	{
		let dist = range;
		mp.players.forEachInRange(player.position, range,
			(_player) => {
				if(player != _player)
				{
					let _dist = _player.dist(player.position);
					if(_dist < dist)
					{
						currentTarget = _player;
						dist = _dist;
						const pos = currentTarget.position;
						//mp.colshapes.newSphere(post, 1.0, 0);
					}
				}
			}
		);
	}
    getNearestPlayer(player, 2);
    if(currentTarget)
	{
        player.call("client:lspd:openMainMenu",[player.data.factionrang]);
        
        //player.call("client:", (player, currentTarget));
		player.data.target = currentTarget;

    }
}
});


