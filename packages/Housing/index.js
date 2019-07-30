mp.events.add("server:housing:loadmarker", (player) => {
	gm.mysql.handle.query('SELECT * FROM housing WHERE 1=1', [], function (error, results, fields) {
		for(let i = 0; i < results.length; i++) {
            player.call("LoadHousingOutMarkers",[results[i].outX,results[i].outY,results[i].outZ]);	
            player.call("LoadHousingInMarkers",[results[i].inX,results[i].inY,results[i].inZ]);		
		}
	});	
});

mp.events.add("server:housing:openMenu",(player,id) => {
    gm.mysql.handle.query("SELECT * FROM housing WHERE id = ?",[id], function(err1,res1) {
        if (err1) console.log("Error in Select Housing: "+err1);       
        gm.mysql.handle.query("SELECT * FROM user_houses WHERE houseId = ? AND charId = ?",[id,player.data.charId], function(err,res) {
            if (err) console.log("Error in Select User Houses: "+err);
            if (res.length > 0) {                
                player.call("client:housing:ownedHouse",[res[0].id,res1[0].sellprice, id]);           
            } else {
                player.call("client:housing:openMenu",[id,res1[0].price]);
            }   
        });
    }); 
});

mp.events.add("server:housing:openInMenu",(player) => {
    gm.mysql.handle.query("SELECT * FROM user_houses WHERE id = ?", [player.dimension], function(err,res) {
        if (err) console.log("Error in Select Houses: "+err);
        if (res.length > 0) {
            player.call("client:housing:innen", [res[0].id]);
        }
    });
});


mp.events.add("server:housing:sellhouse",(player,id) => {
    gm.mysql.handle.query("SELECT * FROM user_houses WHERE id = ?",[id], function(err,res) {
        if (err) console.log("Error in Select user houses: "+err);
        if (res.length > 0) {
            gm.mysql.handle.query("SELECT * FROM housing WHERE id = ?", [res[0].houseId], function(err1,res1) {
                if (err1) console.log("Error in Select Housing: "+err1);
                if (res1.length > 0) {
                    gm.mysql.handle.query("DELETE FROM user_houses WHERE id = ?",[id], function (err2,res2) {
                        if (err2) console.log("Error in Delete Houses: "+err2);
                        var newAm = parseFloat(res1[0].sellprice + parseFloat(player.data.bank)).toFixed(2);  
                        gm.mysql.handle.query("UPDATE bank_konten SET amount = ? WHERE ownerId = ?",[newAm,player.data.charId], function(err3,res3){
                            if (err3) console.log("Error in Update Bank_Konten: "+err3);
                            player.notify("~g~You have selled youre House for: "+res1[0].sellprice+" $");
                            player.data.bank = newAm;
                        });                        
                    });
                }
            });
        } else {
            player.notify("~r~You dont Own this House");
        }
    });
});

mp.events.add("server:housing:buyhouse",(player,id) => {
    gm.mysql.handle.query("SELECT * FROM housing WHERE id = ?",[id],function(err,res) {
        if (err) console.log("Error in Select Housing: "+err);
        if (res.length > 0) {
            gm.mysql.handle.query("SELECT COUNT(houseid) AS counter FROM user_houses WHERE houseid = ?",[id], function(err1,res1) {
                if (err1) console.log("Error in Select user houses: "+err1);
                if (res1[0].counter <= res[0].maxBuy) {
                    gm.mysql.handle.query("SELECT * FROM bank_konten WHERE ownerId = ?",[player.data.charId],function(err2,res2) {
                        if (err2) console.log("Error in Select Bank Konten: "+err3);
                        if (res2.length > 0) {
                            if (res2[0].amount > res[0].price) {    
                                var sign = ""+player.data.firstname+" "+player.data.lastname;
                                gm.mysql.handle.query("INSERT INTO user_houses SET houseId = ?, charId = ?, locked = '0', sign = ?",[id, player.data.charId,sign], function (err3,res3) {
                                    if (err3) console.log("Error in Insert Houses: "+err3);
                                    var newAm = parseFloat(player.data.bank - parseFloat(res[0].price)).toFixed(2);    
                                    gm.mysql.handle.query("UPDATE bank_konten SET amount = ? WHERE ownerId = ?",[newAm,player.data.charId],function(err4,res4) {
                                        if (err4) console.log("Error in Update Bank konten: "+err4);
                                        player.data.bank = newAm;
                                        player.notify("~g~You have buy a new House :)");
                                    });
                                });
                            } else {
                                player.notify("~r~You have not anought Money off youre Bank");
                            }
                        } else {
                            player.notify("~r~You have not Bank Konto");
                        }
                    });
                } else {
                    player.notify("~r~This House is Full");
                }
            });
        }
    });
});

mp.events.add("server:housing:enterHouse",(player,id) => {
    gm.mysql.handle.query("SELECT * FROM user_houses WHERE id = ?", [id], function(err,res) {
        if (err) console.log("Error in Select User Houses: "+err);
        if (res.length > 0) {
            gm.mysql.handle.query("SELECT * FROM housing WHERE id = ?",[res[0].houseId], function(err1,res1) {
                if (err1) console.log("Error in Select housing: "+err1);
                player.position = new mp.Vector3(res1[0].inX,res1[0].inY,res1[0].inZ);
                player.dimension = res[0].id;
            });
        }
    });
});

mp.events.add("server:housing:leave",(player,id) => {
    console.log("Test"+id)
    gm.mysql.handle.query("SELECT * FROM user_houses WHERE id = ?",[id], function(err,res) {
        if (err) console.log("Error in Select user houses: "+err);
        console.log("Test"+id)
        if (res.length > 0) {
            console.log("Test"+id)
            gm.mysql.handle.query("SELECT * FROM housing WHERE id = ?",[res[0].houseId], function(err1,res1) {
                if (err1) console.log("Error in Select Houses: "+err1);
                player.position = new mp.Vector3(res1[0].outX,res1[0].outY,res1[0].outZ);
                player.dimension = 0;
            });
        }
    });
});

mp.events.add("server:housing:resident",(player, id) => {
    gm.mysql.handle.query("SELECT * FROM user_houses WHERE houseId = ?", [id], function(err,res) {
        if (err) console.log("Error in Select user houses: "+err);
        if (res.length > 0) {
            var i = 1;
            let HouseList = [];          
            res.forEach(function(house) {
                let obj = {"name": String(house.sign), "id": String(house.id)};
                HouseList.push(obj);                
                if (parseInt(i) == parseInt(res.length)) {
                    if(mp.players.exists(player)) player.call("client:housing:resident", [JSON.stringify(HouseList)]);
                }
                i++;
            });
        } else {
            player.notify("~r~Here is not Person");
        }
    });
});

mp.events.add("server:housing:subMenu",(player, id) => {
    gm.mysql.handle.query("SELECT * FROM user_houses WHERE id = ?",[id], function(err,res) {
        if (err) console.log("Error in Select user houses: "+err);
        player.call("client:housing:subMenu",[id, res[0].locked]);
    });
});

mp.events.add("server:housing:lock",(player,id) => {
    gm.mysql.handle.query("SELECT * FROM user_houses WHERE id = ?", [id], function(err,res) {
        if (err) console.log("Error in Select House. "+err);
        if (res[0].locked == 0) {
            gm.mysql.handle.query("UPDATE user_houses SET locked = '1' WHERE id = ?",[id], function (err1,res1) {
                if (err1) console.log("Error in Update Locked Status: "+err1);
                player.notify("~g~You Unlock the House");
            });
        } else {
            gm.mysql.handle.query("UPDATE user_houses SET locked = '0' WHERE id = ?",[id], function (err2,res2) {
                if (err2) console.log("Error in Update Locked Status: "+err2);
                player.notify("~g~You Lock the House");
            });
        }
    });
});