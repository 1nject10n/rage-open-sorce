require("login.js");
require("nativeui");
require("other/keys.js"); // Key Binds
require("other/index.js");
require("other/finger.js");
require("other/noclip"); // No Clip
require("other/betternotifs");
require("charchooser")
require("playermenu");
require("CharCreator");
require("ClothesMenu");
require("vehKeys");
require("VehicleMenu");
require("shortcut");
require("deathscreen");
require("playerlocation");
require("Inventory");
require("scaleform_messages");
require("factions/markers");
require("factions/lspd");
require("factions/medic");
require("Bank");
require('AnimPlayer');
require('CarTuner');
require('Licenseshop');
require('Passenger');
require('Hud');
require('clothingshops');
require('Garage');
require('Shop');
require('progress');
require('Housing');
require('Carshop');

mp.gui.chat.show(true);
mp.gui.chat.activate(false);
mp.nametags.enabled = false;

mp.game.streaming.requestIpl("vw_casino_main");

mp.events.call('setDiscordStatus', 'Visit: RageMP', 'Open Source Roleplay');