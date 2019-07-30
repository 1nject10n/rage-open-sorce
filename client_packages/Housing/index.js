const NativeUI = require("nativeui");
const Menu = NativeUI.Menu;
const UIMenuItem = NativeUI.UIMenuItem;
const UIMenuListItem = NativeUI.UIMenuListItem;
const UIMenuCheckboxItem = NativeUI.UIMenuCheckboxItem;
const UIMenuSliderItem = NativeUI.UIMenuSliderItem;
const BadgeStyle = NativeUI.BadgeStyle;
const Point = NativeUI.Point;
const ItemsCollection = NativeUI.ItemsCollection;
const Color = NativeUI.Color;
const ListItem = NativeUI.ListItem;
let selectedNumPlate = null;

const ScreenRes = mp.game.graphics.getScreenResolution(0,0);
const MenuPoint = new Point(ScreenRes.x +150, 50);


mp.events.add("client:housing:openMenu",(id,price) => {
    const ui_sub = new Menu("Housing", "", MenuPoint);
    ui_sub.AddItem( new UIMenuItem("Resident", ""+id));
    ui_sub.AddItem( new UIMenuItem("Price: ", ""+id));
    ui_sub.AddItem( new UIMenuItem("Buy House", ""+id));

    ui_sub.ItemSelect.on((item, index, value) => {
        if (item.Text == "Buy House") {
          mp.events.callRemote("server:housing:buyhouse",item.Description);   
          ui_sub.Close();   
        } else if (item.Text == "Resident") {
            mp.events.callRemote("server:housing:resident",item.Description);
            ui_sub.Close();
        } else {            
            ui_sub.Close();
        }      
    });
});

mp.events.add("client:housing:ownedHouse",(id,sellprice,id2) => {
    const ui_owner = new Menu("Housing", "", MenuPoint);
    ui_owner.AddItem( new UIMenuItem("Resident", ""+id2));
    ui_owner.AddItem( new UIMenuItem("Go in House", ""+id));
    ui_owner.AddItem( new UIMenuItem("Lock/Unlock House", ""+id));
    ui_owner.AddItem( new UIMenuItem("Sell House", ""+id));

    ui_owner.ItemSelect.on((item, index, value) => {
        if (item.Text == "Sell House") {
          mp.events.callRemote("server:housing:sellhouse",item.Description);   
          ui_owner.Close();   
        } else if (item.Text == "Go in House") {
            mp.events.callRemote("server:housing:enterHouse",item.Description);
        ui_owner.Close(); 
        } else if (item.Text == "Resident") {
        mp.events.callRemote("server:housing:resident",item.Description);  
        ui_owner.Close(); 
        } else if (item.Text == "Lock/Unlock House") {
        mp.events.callRemote("server:housing:lock",item.Description);  
        ui_owner.Close(); 
        } else {            
            ui_owner.Close();
        }      
    });
});

mp.events.add("client:housing:innen",(id) => {
    const ui_owner = new Menu("Housing", "", MenuPoint);
    ui_owner.AddItem( new UIMenuItem("Leave House", ""+id));

    ui_owner.ItemSelect.on((item, index, value) => {
        if (item.Text == "Leave House") {
          mp.events.callRemote("server:housing:leave",item.Description);   
          ui_owner.Close();   
        } else {            
            ui_owner.Close();
        }      
    });
});


function drawMenu(houseJSON){
    ui_List = new Menu("Residents", "", MenuPoint);
    ui_List.Visible = true;
      itemList = JSON.parse(houseJSON);
      itemList.forEach(house => {
          let newItem = new UIMenuItem("" + house.name, ""+house.id);
          ui_List.AddItem(newItem);
      });
  
    // Auswertung Menuauswahl ausparken
    ui_List.ItemSelect.on((item, index) => {
        mp.events.callRemote("server:housing:subMenu", item.Description);
        ui_List.Close();
    });
  }
  mp.events.add("client:housing:resident", drawMenu);


  mp.events.add("client:housing:subMenu",(id,locked) => {
    const ui_subMenu = new Menu("Housing", "", MenuPoint);
    if (locked == 1) {
        ui_subMenu.AddItem( new UIMenuItem("Go in House", ""+id));
    }    
    ui_subMenu.AddItem( new UIMenuItem("Close", ""));

    ui_subMenu.ItemSelect.on((item, index, value) => {   
        if (item.Text == "Go in House") {
            mp.events.callRemote("server:housing:enterHouse",item.Description);
            ui_subMenu.Close(); 
        } else if (item.Text == "Close") { 
        ui_subMenu.Close(); 
        } else {            
            ui_owner.Close();
        }      
    });
  });


