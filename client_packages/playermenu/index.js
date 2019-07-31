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
var checkHut = true;
var checkBrille = true;
var checkMaske = true;
var checkOberkoerper = true;
var checkHose = true;
var checkSchuhe = true;
var checkAtm = true;
var checkGaragen = false;
var checkJobs = false;
var checkOeffentlich = false;
var checkSecret = false;
var checkAccessoires = true;
let walkingStyles = null;
let currentItem = 0;

const ScreenRes = mp.game.graphics.getScreenResolution(0,0);
const MenuPoint = new Point(ScreenRes.x +150, 50);


mp.events.add("client:playermenu:mainMenu", (admin) => {
   let main = new Menu("Player", "Playermenu", MenuPoint);
    main.AddItem(new UIMenuItem("Animations","Open your animations."));
    main.AddItem(new UIMenuItem("Inventory","Open your inventory."));
    main.AddItem(new UIMenuItem("Wallet","Your money & documents."));
    main.AddItem(new UIMenuItem("Clothing","Take clothes on / off."));
    main.AddItem(new UIMenuItem("Interactions","Interact with other players."));
    main.AddItem(new UIMenuItem("Walkingstyles","Choose your walkingstyle."));
    main.AddItem(new UIMenuItem("Key Managment","Edit your keys."));
    main.AddItem(new UIMenuItem("Settings","Settings [Atm Blips etc.]"));
    if (admin > 0) {
      main.AddItem(new UIMenuItem("Administration","Be carefull what you do!"));
    }  
    main.AddItem( new UIMenuItem("Close", ""));
    main.Visible = true;

    main.ItemSelect.on((item, index, value) => {
    if (item.Text == "Clothing") {
      mp.events.callRemote("server:clothes:showKleidung");
      main.Close();
    } else if (item.Text == "Administration") {
      mp.events.callRemote("server:admin:openAdmin",admin);
      main.Close();   
    } else if (item.Text == "Inventory") {
      mp.events.callRemote("server:inventory:prepareMenu");
      main.Close();  
    } else if (item.Text == "Walkingstyles") {
        mp.events.callRemote("requestWalkingStyles");
        main.Close();  
    } else if (item.Text == "Animations") {
      mp.events.call("client:playermenu:openAnim");
      main.Close();   
    } else if (item.Text == "Key Managment") {
      mp.events.call("client:playermenu:openKeys");
      main.Close(); 
    } else if (item.Text == "Settings") {
      mp.events.call("client:playermenu:settings");
      main.Close(); 
    } else if (item.Text == "Interactions") {
      mp.events.callRemote("server:playermenu:interaction");
      main.Close(); 
    } else if (item.Text == "Close") {
      main.Close();
    }
  });
});
function setWalkingStyle(player, style) {
  if (!style) {
      player.resetMovementClipset(0.0);
  } else {
      if (!mp.game.streaming.hasClipSetLoaded(style)) {
          mp.game.streaming.requestClipSet(style);
          while(!mp.game.streaming.hasClipSetLoaded(style)) mp.game.wait(0);
      }

      player.setMovementClipset(style, 0.0);
  }
}

// create menu
let stylesMenu = new Menu("Walking Styles", "", MenuPoint);
stylesMenu.Visible = false;

stylesMenu.ItemSelect.on((item, index) => {
  mp.events.callRemote("setWalkingStyle", index);

  stylesMenu.MenuItems[currentItem].SetRightLabel("");
  item.SetRightLabel("Current");

  currentItem = index;
});

// events
mp.events.add("receiveWalkingStyles", (namesJSON) => {
  walkingStyles = JSON.parse(namesJSON);
  for (let i = 0; i < walkingStyles.length; i++) stylesMenu.AddItem(new UIMenuItem(walkingStyles[i], ""));

  stylesMenu.MenuItems[0].SetRightLabel("Current");
  stylesMenu.Visible = true;
});

mp.events.add("entityStreamIn", (entity) => {
  if (entity.type !== "player") return;
  setWalkingStyle(entity, entity.getVariable("walkingStyle"));
});

mp.events.addDataHandler("walkingStyle", (entity, value) => {
  if (entity.type === "player") setWalkingStyle(entity, value);
});

mp.events.add("client:playermenu:openAnim", () => {
  let ui_anim = new Menu("Animationen", "", MenuPoint);
  ui_anim.AddItem(new UIMenuItem("Create Shortcuts [NUMPAD]","Create & safe shortcuts"));
  ui_anim.AddItem(new UIMenuItem("Sit down","Chair animations etc."));
  ui_anim.AddItem(new UIMenuItem("Stand","Lean against the wall"));
  ui_anim.AddItem(new UIMenuItem("Dance","Nice dancemoves"));
  ui_anim.AddItem(new UIMenuItem("Sport","Move your body")); 
  ui_anim.AddItem( new UIMenuItem("Close", ""));
  ui_anim.Visible = true;

  ui_anim.ItemSelect.on((item, index, value) => {
    if (item.Text == "Create Shortcuts [NUMPAD]") {
      mp.events.callRemote("server:shortcut:openMenu");
      ui_anim.Close();
    } else if (item.Text == "Sit down") {
      mp.events.call("client:anim:sitzen");
      ui_anim.Close();    
    } else if (item.Text == "Close") {
    ui_anim.Close();
    }
  });
});

mp.events.add("client:playermenu:interaction", (waffena, waffenb, pkw, lkw, pilot, job,ergeben,fesseln) => {
  let ui_interaction = new Menu("Interactions", "", MenuPoint);
  ui_interaction.AddItem(new UIMenuItem("Show your ID",""));
  if (waffena == 1) {
    ui_interaction.AddItem(new UIMenuItem("Show gun license A",""));
  }
  if (waffenb == 1) {
    ui_interaction.AddItem(new UIMenuItem("Show gun license B",""));
  } 
  if (pkw == 1) {
    ui_interaction.AddItem(new UIMenuItem("Show car drivers license","")); 
  }
  if (lkw == 1) {
    ui_interaction.AddItem(new UIMenuItem("Show truck drivers license","")); 
  }
  if (pilot == 1) {
    ui_interaction.AddItem(new UIMenuItem("Show your fly license","")); 
  }
  if (job == 1) {
    ui_interaction.AddItem(new UIMenuItem("Show your work permit","")); 
  }  
  ui_interaction.AddItem(new UIMenuItem("Give money to target",""));
  if (ergeben == 1) {
    ui_interaction.AddItem(new UIMenuItem("Search through",""));
    if (fesseln == 0) {
      ui_interaction.AddItem(new UIMenuItem("Tie up your target",""));
    } else {
      ui_interaction.AddItem(new UIMenuItem("Unleash your target",""));
    }  
    ui_interaction.AddItem(new UIMenuItem("DO A ROB!",""));  
  }
  ui_interaction.AddItem( new UIMenuItem("Close", ""));
  ui_interaction.Visible = true;

  ui_interaction.ItemSelect.on((item, index, value) => {
    if (item.Text == "Show your ID") {
      mp.events.callRemote("server:playermenu:giveausweis");
      ui_interaction.Close();
    } else if (item.Text == "Show gun license A") {
      mp.events.callRemote("server:playermenu:giveweapona");
      ui_interaction.Close();  
    } else if (item.Text == "Show gun license B") {
      mp.events.callRemote("server:playermenu:giveweaponb");
      ui_interaction.Close();    
    } else if (item.Text == "Show car drivers license") {
      mp.events.callRemote("server:playermenu:giveweapona");
      ui_interaction.Close();  
    } else if (item.Text == "Show truck drivers license") {
      mp.events.callRemote("server:playermenu:giveweapona");
      ui_interaction.Close();  
    } else if (item.Text == "Show your fly license") {
      mp.events.callRemote("server:playermenu:giveweapona");
      ui_interaction.Close(); 
    } else if (item.Text == "Show your work permit") {
      mp.events.callRemote("server:playermenu:giveweapona");
      ui_interaction.Close();   
    } else if (item.Text == "Give money to target") {
      mp.events.callRemote("server:playermenu:giveweapona");
      ui_interaction.Close();  
    } else if (item.Text == "search through") {
      mp.events.callRemote("server:playermenu:giveweapona");
      ui_interaction.Close();  
    } else if (item.Text == "Tie up your target") {
      mp.events.callRemote("server:playermenu:giveweapona");
      ui_interaction.Close(); 
    } else if (item.Text == "Unleash your target") {
      mp.events.callRemote("server:playermenu:giveweapona");
      ui_interaction.Close(); 
    } else if (item.Text == "DO A ROB!") {
      mp.events.callRemote("server:playermenu:giveweapona");
      ui_interaction.Close();   
    } else if (item.Text == "Close") {
      ui_interaction.Close();
    }
  });
});

mp.events.add("client:playermenu:openKeys", () => {
  let ui_Key = new Menu("Key Managment", "", MenuPoint);
  ui_Key.AddItem(new UIMenuItem("Vehicle keys",""));
  ui_Key.AddItem(new UIMenuItem("House keys",""));
  ui_Key.AddItem( new UIMenuItem("Close", ""));
  ui_Key.Visible = true;

  ui_Key.ItemSelect.on((item, index, value) => {
    if (item.Text == "Vehicle keys") {
      mp.events.callRemote("server:vehKeys:openKeys");
      ui_Key.Close();
    } else if (item.Text == "House keys") {
      mp.events.callRemote("server:vehKeys:openKeys");
      ui_Key.Close();    
    } else if (item.Text == "Close") {
      ui_Key.Close();
    }
  });
});



mp.events.add("client:admin:openAdmin", (admin) => {
  let ui_admin = new Menu("Administration", "Be carefull what you do!", MenuPoint);
  ui_admin.AddItem(new UIMenuItem("Playerlist",""));
  ui_admin.AddItem(new UIMenuItem("Heal",""));
  ui_admin.AddItem(new UIMenuItem("Armor",""));
  ui_admin.AddItem(new UIMenuItem("Invisible",""));
  ui_admin.AddItem(new UIMenuItem("Vehicle Repair",""));
   if (admin > 1) {
    ui_admin.AddItem(new UIMenuItem("GODMODE","I FEEL LIKE HULK!"));
   }   
   if (admin > 2) {
    ui_admin.AddItem(new UIMenuItem("Weather for ban a playerr",""));
    ui_admin.AddItem(new UIMenuItem("Set Weather to normal",""));
   }  
   ui_admin.AddItem( new UIMenuItem("Close", ""));
   ui_admin.Visible = true;

   ui_admin.ItemSelect.on((item, index, value) => {
    let position = mp.players.local.position;
    let vehHandle = mp.game.vehicle.getClosestVehicle(position.x, position.y, position.z, 5, 0, 70);
      let vehicle = mp.vehicles.atHandle(vehHandle);
   if (item.Text == "Playerlist") {
     mp.events.callRemote("server:admin:playerlist");
     ui_admin.Close();
   } else if (item.Text == "Administration") {
     mp.events.callRemote("server:admin:openAdmin",admin);
     ui_admin.Close();  
   } else if (item.Text == "Weather for ban a player") {
      mp.events.callRemote("server:admin:banwetter");
      ui_admin.Close();   
   } else if (item.Text == "Set Weather to normal") {
      mp.events.callRemote("server:admin:banwetteraus");
      ui_admin.Close();   
    } else if (item.Text == "Heal a player") {
      mp.events.callRemote("server:admin:heal");
      ui_admin.Close();   
    } else if (item.Text == "Give player armor") {
      mp.events.callRemote("server:admin:armor");
      ui_admin.Close(); 
    } else if (item.Text == "Repair vehicle") {
      mp.events.callRemote("server:admin:repair",vehicle);
      ui_admin.Close(); 
   } else if (item.Text == "Close") {
    ui_admin.Close();
   }
 });
});

mp.events.add("client:admin:subMenu", (id) => {
  let ui_admin = new Menu("Administration", "Be carefull what you do!", MenuPoint);
  ui_admin.AddItem(new UIMenuItem("Go to player",""));
  ui_admin.AddItem(new UIMenuItem("Get player here",""));
  ui_admin.AddItem(new UIMenuItem("Kick from server.",""));
  ui_admin.AddItem(new UIMenuItem("Ban: Permanent",""));
  ui_admin.AddItem(new UIMenuItem("Heal player",""));

   ui_admin.AddItem( new UIMenuItem("Schließen", ""));
   ui_admin.Visible = true;

   ui_admin.ItemSelect.on((item, index, value) => {
   if (item.Text == "Go to player") {
     mp.events.callRemote("server:admin:tpto",id);
     ui_admin.Close();
   } else if (item.Text == "Get player here") {
     mp.events.callRemote("server:admin:tphere",id);
     ui_admin.Close();    
  } else if (item.Text == "Ban: Permanent") {
      mp.events.callRemote("server:admin:permban",id);
      ui_admin.Close(); 
    } else if (item.Text == "Kick from server.") {
      mp.events.callRemote("server:admin:kick",id);
      ui_admin.Close(); 
   } else if (item.Text == "Close") {
    ui_admin.Close();
   }
 });
});

function playerListDraw(playerJSON,id){
  ui_playerlist = new Menu("Playlist", "List of all players", MenuPoint);
  ui_playerlist.Visible = true;
  if (playerJSON != "none") {
    playerJSON = JSON.parse(playerJSON);
    playerJSON.forEach(players => {
        let newItem = new UIMenuItem("" + players.firstname+" "+players.lastname, ""+players.onlineid);
        ui_playerlist.AddItem(newItem);
        newItem.SetRightLabel("");
    });
  } else {
    ui_playerlist.AddItem( new UIMenuItem("No player online.", ""));
  }


  ui_playerlist.ItemSelect.on((item, index) => {
    mp.events.call("client:admin:subMenu",item.Description);
      ui_playerlist.Close();
  });
}
mp.events.add("client:admin:playerlist", playerListDraw);

// Kleidungssmenu
mp.events.add("client:playermenu:settings", (gender) => {
  ui_Kleidung = new Menu("Einstellungen", "", MenuPoint);
  ui_Kleidung.AddItem(new UIMenuItem("Auswählen", ""));
  ui_Kleidung.AddItem(new UIMenuCheckboxItem("ATM Blips", checked = checkAtm, Description = ""));
  ui_Kleidung.AddItem(new UIMenuCheckboxItem("Parking Blips", checked = checkGaragen, Description = ""));
  ui_Kleidung.AddItem(new UIMenuCheckboxItem("Job Blips", checked = checkJobs, Description = ""));
  ui_Kleidung.AddItem(new UIMenuCheckboxItem("Public Blips", checked = checkOeffentlich, Description = ""));
  ui_Kleidung.AddItem(new UIMenuCheckboxItem("Secret Blips", checked = checkSecret, Description = ""));

  ui_Kleidung.Visible = true;

  ui_Kleidung.MenuClose.on(() => {
    ui_Kleidung.RefreshIndex();
  });

  ui_Kleidung.CheckboxChange.on((checkbox, value) => {
    if (checkbox.Text === "ATM Blips"){
      if (value === true){
          checkAtm = true;
      } else {
          checkAtm = false;
      }
    } else if (checkbox.Text === "Parking Blips"){
      if (value === true){
        checkGaragen = true;
      } else {
        checkGaragen = false;
      }
    } else if (checkbox.Text === "Job Blips"){
      if (value === true){        
        checkJobs = true;
      } else {
        checkJobs = false;
      }
    } else if (checkbox.Text === "Public Blips"){
      if (value === true){            
        checkOeffentlich = true;
      } else {
        checkOeffentlich = false;
      }
    } else if (checkbox.Text === "Secret Blips") {
      if (value === true){
        checkSecret = true;
      } else {
        checkSecret = false;
      }
    }
  });
});

// Kleidungssmenu
mp.events.add("client:clothes:showKleidung", (gender) => {
    ui_Kleidung = new Menu("Kleidung", "", MenuPoint);
    ui_Kleidung.AddItem(new UIMenuItem("Auswählen", ""));
    ui_Kleidung.AddItem(new UIMenuCheckboxItem("Cap", checked = checkHut, Description = ""));
    ui_Kleidung.AddItem(new UIMenuCheckboxItem("Glasses", checked = checkBrille, Description = ""));
    ui_Kleidung.AddItem(new UIMenuCheckboxItem("Mask", checked = checkMaske, Description = ""));
    ui_Kleidung.AddItem(new UIMenuCheckboxItem("Shirt", checked = checkOberkoerper, Description = ""));
    ui_Kleidung.AddItem(new UIMenuCheckboxItem("Trousers", checked = checkHose, Description = ""));
    ui_Kleidung.AddItem(new UIMenuCheckboxItem("Shoes", checked = checkSchuhe, Description = ""));  
    ui_Kleidung.Visible = true;
  
    ui_Kleidung.MenuClose.on(() => {
      ui_Kleidung.RefreshIndex();
    });
  
    ui_Kleidung.CheckboxChange.on((checkbox, value) => {
      if (checkbox.Text === "Cap"){
        if (value === true){
            mp.events.callRemote("server:playermenu:setexistHut");
            checkHut = true;
        } else {
          if (gender == 0) {
            mp.events.callRemote("server:playermenu:setHut", 0, 121, 0);
          } else {
            mp.events.callRemote("server:playermenu:setHut", 0, 120, 0);
          }
          checkHut = false;
        }
      } else if (checkbox.Text === "Glasses"){
        if (value === true){
          mp.events.callRemote("server:playermenu:setexistEye");
          checkBrille = true;
        } else {
          if (gender == 0) {
            mp.events.callRemote("server:playermenu:setEye", 1, 0, 0);
          } else {
            mp.events.callRemote("server:playermenu:setEye", 1, 5, 0);
          }
          checkBrille = false;
        }
      } else if (checkbox.Text === "Mask"){
        if (value === true){        
          mp.events.callRemote("server:playermenu:setexistMask");
          checkMaske = true;
        } else {
          if (gender == 0) {
            mp.events.callRemote("server:playermenu:setMask", 1, 0, 0);
          } else {
            mp.events.callRemote("server:playermenu:setMask", 1, 0, 0);
          }
          checkMaske = false;
        }
      } else if (checkbox.Text === "Shirt"){
        if (value === true){         
            mp.events.callRemote("server:playermenu:setexistTorso");     
          checkOberkoerper = true;
        } else {
          if (gender == 0) {
            mp.events.callRemote("server:playermenu:setOberkörper", 11, 91, 0,8,15,0,3,15,0);
          } else {
            mp.events.callRemote("server:playermenu:setOberkörper", 11, 271, 0,8,14,0,3,15,0);
          }
          checkOberkoerper = false;
        }
      } else if (checkbox.Text === "Trousers") {
        if (value === true){
          mp.events.callRemote("server:playermenu:setexistLeg");
          checkHose = true;
        } else {
          if (gender == 0) {
            mp.events.callRemote("server:playermenu:setLeg", 4, 21, 0);
          } else {
            mp.events.callRemote("server:playermenu:setLeg", 4, 15, 0);
          }
          checkHose = false;
        }
      } else if (checkbox.Text === "Shoes"){
        if (value === true){
            mp.events.callRemote("server:playermenu:setexistShoe");  
          checkSchuhe = true;
        } else {
          if (gender == 0) {
            mp.events.callRemote("server:playermenu:setShoe", 6, 34, 0);
          } else {
            mp.events.callRemote("server:playermenu:setShoe", 6, 35, 0);
          }
          checkSchuhe = false;
        }
    }
    });
  });
  mp.keys.bind(0x5A, true, function() {
     mp.events.callRemote("server:playermenu:mainMenu");
 });

 mp.events.add('entityStreamIn', (entity) => {
  if (entity.getType() == 4 || entity.getType() == 5) {
    mp.events.callRemote("server:syncedPlayer:syncClothes", entity);
  }
});