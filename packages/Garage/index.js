mp.events.add("server:garage:loadmarker", (player) => {
	gm.mysql.handle.query('SELECT * FROM garage WHERE 1=1', [], function (error, results, fields) {
		for(let i = 0; i < results.length; i++) {
			player.call("LoadGaragenMarkers",[results[i].pedx,results[i].pedy,results[i].pedz]);				
		}
	});	
});

mp.events.add("server:garage:parkoutmenu",(player,id) => {
 gm.mysql.handle.query("SELECT * FROM vehicles WHERE charId = ? AND parked = '1' AND impounded = '0'",[player.data.charId],function(err,res) {
    if(err) console.log("Error in Select vehicles :"+err);
    if (res.length > 0) {
        var i = 1;
        let VehList = [];
        res.forEach(function(veh) {
            let obj = {"numberPlate": String(veh.numberPlate), "model": String(veh.model), "id": String(veh.id)};
            VehList.push(obj);
            if (parseInt(i) == parseInt(res.length)) {
                if(mp.players.exists(player)) player.call("client:garage:parkoutmenu", [JSON.stringify(VehList),id]);
            }
            i++;
        });
    } else {
        player.notify("~r~You have not Vehicles");
    }
 });
});


mp.events.add("server:garage:parkout",(player,vehid,id) => {
    gm.mysql.handle.query("SELECT * FROM garage WHERE id = ?",[id], function (err,res) {
        if (err) console.log("Error in Select Garage: "+err);
        gm.mysql.handle.query("SELECT * FROM vehicles WHERE id = ?",[vehid],function(err1,res1) {
            if (err1) console.log("Error in Select Vehicles on Garage: "+err);
            if (res.length > 0) {
                const one = new mp.Vector3(res[0].spawn1x, res[0].spawn1y, res[0].spawn1z);
                const onehead = res[0].spawn1r;
                const two = new mp.Vector3(res[0].spawn2x, res[0].spawn2y, res[0].spawn2z);
                const twohead = res[0].spawn2r;    
                if (getVehicleFromPosition(one, 3).length > 0) {    
                    if (getVehicleFromPosition(two, 3).length > 0) {
                        var veh = mp.vehicles.new(res1[0].model, two, {
                            heading: twohead,
                            numberPlate: res1[0].numberPlate,
                            locked: true,
                            engine: false,
                            dimension: 0
                    });    
                        player.notify("~g~You Vehicle stand on Park 2");
                        veh.setVariable("vehId",res1[0].id);
                        gm.mysql.handle.query("UPDATE vehicles SET parked = '0' WHERE id = ?",[vehid],function (err2,res2) {
                            if (err2) console.log("Error in Update vehicles: "+err);
                        });
                    }  else {
                        player.notify("~r~Spawn is not Free");
                    }
                } else {
                    var veh = mp.vehicles.new(res1[0].model, one, {
                        heading: onehead,
                        numberPlate: res1[0].numberPlate,
                        locked: true,
                        engine: false,
                        dimension: 0
                });  
                gm.mysql.handle.query("UPDATE vehicles SET parked = '0' WHERE id = ?",[vehid],function (err2,res2) {
                    if (err2) console.log("Error in Update vehicles: "+err);
                });
                    player.notify("~g~You Vehicle stand on Park 1");  
                    veh.setVariable("vehId",res1[0].id);
                }                      
            }
        });
        
    });
});

mp.events.add("server:garage:parkin", (player,id) => {
    gm.mysql.handle.query("SELECT * FROM garage WHERE id = ?",[id], function (err,res) {
        if (err) console.log("Error in Select garages: "+err);
        garage = res[0];
        const pos = new mp.Vector3(garage.pedx, garage.pedy, garage.pedz);
        const veh = getVehicleFromPosition(pos, 15)[0];

        if (mp.vehicles.exists(veh)) {
        if (veh === null) {
            player.notify("~r~Kein Fahrzeug in der Einfahrt");
            return;
        }
        gm.mysql.handle.query("SELECT * FROM vehicles WHERE id = ?",[veh.getVariable("vehId")], function(err1,res1) {
            if (err1) console.log("Error in Select Vehicles: "+err1);
            if (res1[0].charId == player.data.charId) {                
                gm.mysql.handle.query("UPDATE vehicles SET parked = '1' WHERE id = ?",[veh.getVariable("vehId")], function(err2,res2) {
                    if (err2) console.log("Error in Update Vehicles: "+err2);
                    veh.destroy();
                });
            } else {
                player.notify("~r~Hier ist kein Fahrzeug von dir");
            }
        })
        
    }
});
});

mp.events.add("server:lspd:parkin",(player,x,y,z) => {
    const pos = new mp.Vector3(player.position);
    console.log("Test: "+pos);
    const veh = getVehicleFromPosition(pos, 2)[0];
    console.log("Test: "+veh);
    veh.destroy();
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