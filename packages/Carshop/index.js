mp.events.add("server:shop:loadmarker", (player) => {
	gm.mysql.handle.query('SELECT * FROM carshops WHERE 1=1', [], function (error, results, fields) {
		for(let i = 0; i < results.length; i++) {
			player.call("LoadCarShopMarkers",[results[i].posX,results[i].posY,results[i].posZ,results[i].posR,results[i].ped]);				
		}
	});	
});


mp.events.add("server:carshop:openShop",(player, id, type) => {
    gm.mysql.handle.query("SELECT * FROM carshop_cars WHERE type = ?",[type],function(err,res) {
        if (err) console.log("Error in Select Carshop Cars: "+err);
        if (res.length > 0) {
            gm.mysql.handle.query("SELECT * FROM carshops WHERE id = ?",[id], function (err1,res1) {
                if (err1) console.log("Error in Select Carshoüs: "+err1);
                var i = 1;
                let CarList = [];        
                res.forEach(function(shop) {
                    let obj = {"price": String(shop.price), "model": String(shop.model), "id": String(shop.id)};
                    CarList.push(obj);                
                    if (parseInt(i) == parseInt(res.length)) {
                        if(mp.players.exists(player)) player.call("client:carshop:drawMenu", [JSON.stringify(CarList),res1[0].name]);
                    }
                    i++;
                });
            });            
        } else {
            player.notify("~r~Der Shop hat keine Fahrzeuge");
        }
    });
});


mp.events.add("server:carshop:buy",(player, id, name) => {
    gm.mysql.handle.query("SELECT * FROM carshop_cars WHERE id = ?", [id], function (err,res) {
        if (err) console.log("Error in Select Vehicle Cars: "+err);
        if (res.length > 0) {
            gm.mysql.handle.query("SELECT * FROM bank_konten WHERE ownerId = ?",[player.data.charId], function(err1,res1) {
                if (err1) console.log("error in select bank_konten on carshop: "+err1);
                if (res1.length > 0) {
                    if (res1[0].amount > res[0].price) {
                        gm.mysql.handle.query("SELECT * FROM carshops WHERE type = ?",[res[0].type], function (err2,res2) {
                            if (err2) console.log("Error in Select Carshop Type: "+err2);
                            const one = new mp.Vector3(res2[0].spawnX, res2[0].spawnY, res2[0].spawnZ);
                             const onehead = res2[0].spawnR; 
                                if (getVehicleFromPosition(one, 3).length > 0) {
                                    player.notify("~r~The Spawn is not Free"); 
                                } else {
                                    var newAm = parseFloat(player.data.bank - parseFloat(res[0].price)).toFixed(2);  
                                    gm.mysql.handle.query("UPDATE bank_konten SET amount = ? WHERE ownerId = ?",[newAm,player.data.charId],function(err3,res3) {
                                        if (err3) console.log("Error in Update bank: "+err3);
                                        player.data.bank = newAm;
                                        gm.mysql.handle.query("INSERT INTO vehicles SET model = ?, charId = ?, numberPlate = 'NOLIC', parked = '0', impounded = '0'",[name, player.data.charId], function (err4,res4) {
                                            if (err4) console.log("Error in Insert Vehicles: "+err4);
                                            var veh = mp.vehicles.new(name, one, {
                                                heading: onehead,
                                                numberPlate: "NOLIC",
                                                locked: true,
                                                engine: false,
                                                dimension: 0
                                            }); 
                                            gm.mysql.handle.query("SELECT * FROM vehicles WHERE charID = ? ORDER BY id DESC LIMIT 1;",[player.data.charId],function(err5,res5) {
                                                if (err5) console.log("Error in Select last ID: "+err5);                                                
                                                gm.mysql.handle.query("INSERT INTO vehicleKeys (vehID, keyOwner, amount, isActive) VALUES (?,?,'2','Y')", [res5[0].id, player.data.charId], function(err6, res6) {
                                                    if (err3) console.log("Error in Insert Vehiclekeys: "+err3);
                                                    var currentKeys = player.getVariable("currentKeys");
                                                    currentKeys = JSON.parse(currentKeys);
                                                    var newList = [];
                                                    currentKeys.forEach(function(key) {
                                                      newList.push(key);
                                                    });
                                                    var obj = {"vehid": parseInt(res5[0].id), "active": "Y"};
                                                    newList.push(obj);
                                                    newList = JSON.stringify(newList);
                                                    player.setVariable("currentKeys",newList);

                                                    veh.numberPlate = "NOLIC";
                                                    veh.setVariable("vehId", res5[0].id);
                                                    player.notify("~g~You have buy a "+name+" for "+res[0].price+"$");
                                                });
                                            });                                    
                                        });
                                    });                                                           
                                }
                            });
                    } else {
                        player.notify("~r~You have not anought Bank Money");
                    }
            
                } else {
                    player.notify("~r~You have not a Bank Konto");
                }
            });
        }
    });
});

function getVehicleFromPosition(position, range) {
    const returnVehicles = [];

    mp.vehicles.forEachInRange(position, range,
        (vehicle) => {
            returnVehicles.push(vehicle);
        }
    );
    return returnVehicles;
}