mp.events.add("server:shop:loadmarker", (player) => {
	gm.mysql.handle.query('SELECT * FROM shops WHERE 1=1', [], function (error, results, fields) {
		for(let i = 0; i < results.length; i++) {
			player.call("LoadShopMarkers",[results[i].posX,results[i].posY,results[i].posZ]);				
		}
	});	
});


mp.events.add("server:shop:openShop",(player, id) => {
    console.log("ID: "+id)
    gm.mysql.handle.query("SELECT * FROM shop_items WHERE shopId = ?",[id],function(err,res) {
        if (err) console.log("Error in Select Shop Items: "+err);
        if (res.length > 0) {
            var i = 1;
            let ItemList = [];     
            console.log("Item: "+res)       
            res.forEach(function(shop) {
                let obj = {"name": String(shop.name), "price": String(shop.price), "id": String(shop.itemId)};
                console.log("Item: "+obj);
                ItemList.push(obj);                
                if (parseInt(i) == parseInt(res.length)) {
                    if(mp.players.exists(player)) player.call("client:shop:drawMenu", [JSON.stringify(ItemList)]);
                }
                i++;
            });
        } else {
            player.notify("~r~Der Shop hat keine Items");
        }
    });
});

mp.events.add("server:shop:buy",(player,itemId, name) => {
    gm.mysql.handle.query("SELECT * FROM user_items WHERE itemId = ? AND charId = ?",[itemId, player.data.charId],function (err,res) {
        if (res.length > 0) {
            //User hat das Item
            var newAm = parseInt(parseInt(res[0].amount) + parseInt(1));
            gm.mysql.handle.query("UPDATE user_items SET amount = ? WHERE itemId = ? AND charId = ?",[newAm, itemId, player.data.charId],function(err1,res1) {
                if (err1) console.log("Error in Update user_items: "+err1);
                player.notify("~g~Du hast 1x "+name+" gekauft");                             
            });
        } else {
            //User hat das Item Nicht!
            gm.mysql.handle.query("INSERT INTO user_items SET amount = '1', itemId = ?, charId = ?", [itemId, player.data.charId], function (err2,res2) {
                if (err2) console.log("Error in Inser user_items: "+err2);
                player.notify("~g~Du hast 1x "+name+" gekauft");                
            });
        }
    });
});