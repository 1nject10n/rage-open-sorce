mp.events.add("server:farming:loadmarker", (player) => {
	gm.mysql.handle.query('SELECT * FROM farming WHERE 1=1', [], function (error, results, fields) {
		for(let i = 0; i < results.length; i++) {
            player.call("LoadProcessMarkers",[results[i].processorsX,results[i].processorsY,results[i].processorsZ,results[i].processorsR,results[i].processorsPed]);		
            player.call("LoadSellMarkers",[results[i].sellX,results[i].sellY,results[i].sellZ,results[i].sellR,results[i].sellPed]);		
		}
	});	
});

mp.events.add("server:farming:farm",(player, id, itemid) => {
    player.playAnimation("amb@medic@standing@kneel@base","base",1,33);
    setTimeout(_ => {
        if (mp.players.exists(player)) {
            player.stopAnimation();
            gm.mysql.handle.query("SELECT * FROM items WHERE id = ?", [itemid],function(err,res) {
                if (err) console.log("Error in Select Farm Items: "+err);
                if (res.length > 0) {
                    gm.mysql.handle.query("SELECT * FROM user_items WHERE itemId = ? AND charId = ?",[itemid,player.data.charId], function (err1,res1) {
                        if (err1) console.log("Error in Select user items: "+err1);
                        if (res1.length > 0) {
                            var newAm = parseInt(parseInt(res1[0].amount) + parseInt(1));
                            gm.mysql.handle.query("UPDATE user_items SET amount = ? WHERE charId = ? AND itemId = ?",[newAm, player.data.charId, itemid], function (err2,res2) {
                                if (err2) console.log("Error in Update User Items on Farming: "+err2);
                                player.notify("~g~You have farmed 1x "+res[0].itemName);
                            });
                        } else {
                            gm.mysql.handle.query("INSERT INTO user_items SET amount = '1', itemId = ?, charId = ?",[itemid,player.data.charId], function (err3,res3) {
                                if (err3) console.log("Error in Insert Items on Farming: "+err3);
                                player.notify("~g~You have farmed 1x "+res[0].itemName);
                            });
                        }
                    });
                }
            });
        }
      }, 5000);
});

mp.events.add("server:farming:processing",(player, id, oldItem, newItem) => {
    gm.mysql.handle.query("SELECT * FROM items WHERE id = ?",[oldItem], function (err, res) {
        if (err) console.log("Error in Select Items on Farming: "+err);
        gm.mysql.handle.query("SELECT * FROM user_items WHERE itemId = ? AND charId = ?",[oldItem, player.data.charId], function (err1,res1) {
            if (err1) console.log("Error in Select User Items: "+err1);
            if (res1.length > 0) {
                player.call('progress:start', [120, "Verarbeite: "+res[0].itemName]);
                setTimeout(_ => {                    
                    var itemAmount = res1[0].amount;
                    gm.mysql.handle.query("DELETE FROM user_items WHERE itemId = ? AND charId = ? ",[oldItem,player.data.charId],function(err2,res2) {
                        if (err2) console.log("Error in Delete user_items: "+err2);
                        gm.mysql.handle.query("SELECT * FROM user_items WHERE itemId = ? AND charId = ?",[newItem,player.data.charId], function(err3,res3) {
                            if (err3) console.log("Error in Select new Item: "+err3);
                            if (res3.length > 0) {
                                var newAm = parseInt(parseInt(res3[0].amount) + parseInt(itemAmount));
                                gm.mysql.handle.query("UPDATE user_items SET amount = ? WHERE itemId = ? AND charId = ?", [newAm,newItem, player.data.charId], function (err4,res4) {
                                    if (err4) console.log("Error in Update new Item; "+err4);
                                    player.notify("~g~You have Processing "+itemAmount+" x "+res[0].itemName);
                                });
                            } else {
                                gm.mysql.handle.query("INSERT INTO user_items SET amount = ?, charId = ?, itemId = ?",[itemAmount,player.data.charId,newItem], function(err5,res5) {
                                    if (err5) console.log("Error in Insert user Items: "+err5);
                                    player.notify("~g~You have Processing "+itemAmount+" x "+res[0].itemName);
                                });
                            }
                        });
                    });
                }, 120000)
            } else {
                player.notify("~r~You habe not "+res[0].itemName);
            }
        });
    });
});

mp.events.add("server:farming:selling",(player,id,item,price) => {
    gm.mysql.handle.query("SELECT * FROM items WHERE id = ?",[item], function(err,res) {
        if (err) console.log("Error in Select items: "+err);
        if (res.length > 0) {
            gm.mysql.handle.query("SELECT * FROM user_items WHERE itemId = ? AND charId = ?", [item, player.data.charId],function(err3,res3) {
                if (err3) console.log("Error in Select selling items: "+err3);
                if (res3.length > 0) {
                    var itemAmount = res3[0].amount;
                    var itemprice = price;
                    var total = parseFloat(itemAmount * itemprice);
                    var newAm = parseFloat(total + parseFloat(player.data.money)).toFixed(2);                
                    gm.mysql.handle.query("DELETE FROM user_items WHERE itemId = ? AND charId = ?",[item, player.data.charId], function(err2,res2) {
                        if (err2) console.log("Error in Delete items on selling: "+err2);
                        gm.mysql.handle.query("UPDATE characters SET money = ? WHERE id = ?", [newAm,player.data.charId], function(err4,res4) {
                            if (err4) console.log("Error in Update characters: "+err4);
                            player.data.money = newAm;
                            player.call("changeValue", ['money', player.data.money]); 
                            player.notify("~g~You have selling "+itemAmount+"x "+res[0].itemName+" for "+total+" $");
                        });
                
                    });
                } else {
                    player.notify("~r~You have not "+res3[0].itemName);                        
                }                 
            });
        } else {
            player.notify("~r~You have not ");
        }
    });
});




