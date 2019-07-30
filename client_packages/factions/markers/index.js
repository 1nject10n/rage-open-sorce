let markerone;
let markertwo;
let markerthree;
let markerfour;
let markerfive;
let markersix;
let markerseven;


mp.events.add("client:faction:delmarkers", () => {
	markerone.destroy();
	markertwo.destroy();
	markerfour.destroy();
	markerfive.destroy();
});
mp.events.add("LoadFactionDutyMarkers", (x,y,z) => {
	
	markerone = mp.markers.new(27, new mp.Vector3(x,y,z-0.97), 0.5, 
	{ 
		direction: new mp.Vector3(x,y,z), 
		rotation: 0, 
		color: [ 0, 0, 160, 255],
		visible: true,
		dimension: 0 
	});
	
});
mp.events.add("LoadFactionClothesMarkers", (x,y,z) => {
	
	markertwo = mp.markers.new(27, new mp.Vector3(x,y,z-0.97), 0.5, 
	{ 
		direction: new mp.Vector3(x,y,z), 
		rotation: 0, 
		color: [ 0, 0, 160, 255],
		visible: true,
		dimension: 0 
	});
});
mp.events.add("LoadFactionEquipMarkers", (x,y,z) => {
	markerfour = mp.markers.new(27, new mp.Vector3(x,y,z-0.97), 0.5, 
	{ 
		direction: new mp.Vector3(x,y,z), 
		rotation: 0, 
		color: [ 0, 0, 160, 255],
		visible: true,
		dimension: 0 
	});
});
mp.events.add("LoadFactionPCMarkers", (x,y,z) => {
	markerfive = mp.markers.new(27, new mp.Vector3(x,y,z-0.97), 0.5, 
	{ 
		direction: new mp.Vector3(x,y,z), 
		rotation: 0, 
		color: [ 0, 0, 160, 255],
		visible: true,
		dimension: 0 
	});
});
mp.events.add("LoadFactionChiefMarkers", (x,y,z) => {
	markerfive = mp.markers.new(27, new mp.Vector3(x,y,z-0.97), 0.5, 
	{ 
		direction: new mp.Vector3(x,y,z), 
		rotation: 0, 
		color: [ 0, 0, 160, 255],
		visible: true,
		dimension: 0 
	});
});

mp.events.add("LoadHousingInMarkers", (x,y,z) => {
	markerseven = mp.markers.new(27, new mp.Vector3(x,y,z-0.97), 0.5, 
	{ 
		direction: new mp.Vector3(x,y,z), 
		rotation: 0, 
		color: [ 0, 0, 160, 255],
		visible: true,
		dimension: -99
	});
});
mp.events.add("LoadHousingOutMarkers", (x,y,z) => {
	markersix = mp.markers.new(27, new mp.Vector3(x,y,z-0.97), 0.5, 
	{ 
		direction: new mp.Vector3(x,y,z), 
		rotation: 0, 
		color: [ 0, 0, 160, 255],
		visible: true,
		dimension: -99
	});
});
mp.events.add("LoadGaragenMarkers", (x,y,z) => {	
	markerseven = mp.colshapes.newSphere(x,y,z-0.979, 2);
	var markercol = mp.markers.new(1,new mp.Vector3(x,y,z-0.979), 2, { color: [255,255,255,100],visible: true});
});

mp.events.add("LoadTeleportMarkers", (x,y,z) => {	
	markerseven = mp.colshapes.newSphere(x,y,z-0.979, 2);
	var markercol = mp.markers.new(1,new mp.Vector3(x,y,z-0.979), 2, { color: [255,255,255,100],visible: true});
});

mp.events.add("LoadTeleport1Markers", (x,y,z) => {	
	markerseven = mp.colshapes.newSphere(x,y,z-0.979, 2);
	var markercol = mp.markers.new(1,new mp.Vector3(x,y,z-0.979), 2, { color: [255,255,255,100],visible: true});
});


mp.events.add("LoadShopMarkers", (x,y,z,r,ped) => {	
	position = mp.colshapes.newSphere(x,y,z-0.979, 2);
	let Ped = mp.peds.new(ped, new mp.Vector3( x, y, z), r, 0);
});

mp.events.add("LoadProcessMarkers", (x,y,z,r,ped) => {	
	position = mp.colshapes.newSphere(x,y,z-0.979, 2);
	let Ped = mp.peds.new(ped, new mp.Vector3( x, y, z), r, 0);
});

mp.events.add("LoadSellMarkers", (x,y,z,r,ped) => {	
	position = mp.colshapes.newSphere(x,y,z-0.979, 2);
	let Ped = mp.peds.new(ped, new mp.Vector3( x, y, z), r, 0);
});

mp.events.add("LoadFactionParkingMarkers", (x,y,z) => {
	
	markerthree = mp.colshapes.newSphere(x,y,z-0.979, 2);
	var markercol = mp.markers.new(1,new mp.Vector3(x,y,z-0.979), 2, { color: [255,255,0,100],visible: true});
});


mp.events.add("LoadGarageMarkers", (x,y,z) => {
	
	markerone = mp.markers.new(27, new mp.Vector3(x,y,z-0.97), 0.5, 
	{ 
		direction: new mp.Vector3(x,y,z), 
		rotation: 0, 
		color: [ 0, 0, 160, 255],
		visible: true,
		dimension: 0 
	});
	
});
