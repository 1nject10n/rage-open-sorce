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


mp.events.add("client:garage:openmenu",(id) => {
    const ui_sub = new Menu("Garage", "Park in or Out", MenuPoint);
    ui_sub.AddItem( new UIMenuItem("Park out", ""+id));
    ui_sub.AddItem( new UIMenuItem("Park in", ""+id));

    ui_sub.ItemSelect.on((item, index, value) => {
        if (item.Text == "Park out") {
          mp.events.callRemote("server:garage:parkoutmenu",item.Description);   
          ui_sub.Close();          
        } else if (item.Text == "Park in") {
            mp.events.callRemote("server:garage:parkin",id);  
            ui_sub.Close(); 
        } else {            
            ui_sub.Close();
        }      
    });
});

function drawMenu(vehJSON,id){
    // Menu für Fahrzeugliste anlegen
    ui_List = new Menu("Vehicles", "You Vehicles", MenuPoint);
    ui_List.Visible = true;
      vehList = JSON.parse(vehJSON);
      vehList.forEach(veh => {
          let newItem = new UIMenuItem("" + veh.model, ""+veh.id);
          ui_List.AddItem(newItem);
          newItem.SetRightLabel(""+veh.numberPlate);
      });
  
    // Auswertung Menuauswahl ausparken
    ui_List.ItemSelect.on((item, index) => {
        mp.events.callRemote("server:garage:parkout", item.Description,id);
        ui_List.Close();
    });
  }
  mp.events.add("client:garage:parkoutmenu", drawMenu);