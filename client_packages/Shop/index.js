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




function drawMenu(shopJSON){
    ui_List = new Menu("Shop", "", MenuPoint);
    ui_List.Visible = true;
      itemList = JSON.parse(shopJSON);
      itemList.forEach(shop => {
          let newItem = new UIMenuItem("" + shop.name, ""+shop.id);
          ui_List.AddItem(newItem);
          newItem.SetRightLabel(""+shop.price+"$");
      });
  
    // Auswertung Menuauswahl ausparken
    ui_List.ItemSelect.on((item, index) => {
        mp.events.callRemote("server:shop:buy", item.Description, item.Text);
    });
  }
  mp.events.add("client:shop:drawMenu", drawMenu);