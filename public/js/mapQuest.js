function initMap() {
	// add your code here
  L.mapquest.key = '8MiFcF9GImQQBbto5ZP70UaPPAGPI2Rd';

  // 'map' refers to a <div> element with the ID map
  var map = L.mapquest.map('map', {
    center: [32.8785203, -117.2380747],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12,
    zoomControl: false
  });

  L.marker([32.8785203, -117.2380747], {
          icon: L.mapquest.icons.marker(),
          draggable: false
        }).addTo(map);
}
