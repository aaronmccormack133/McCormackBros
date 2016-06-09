function init_map(){
	var var_location = new google.maps.LatLng(53.5667, 7.7667);
	
	var var_mapoptions = {
		center: var_location,
		zoom: 20
	};
	
	var var_marker = new google.maps.Marker({
		position: var_location,
		map: var_map,
		title:"Ballymahon"
	});
	
	var var_map = new google.maps.Map(document.getElementById("map"),
		var_mapoptions);
		
	var_marker.setMap(var_map);
	
	google.maps.event.addDomListener(window, 'load', init_map);
}
