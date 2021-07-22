function initMap() {
  var propertiPeta = {
      center:new google.maps.LatLng(-6.606588937138558, 107.41421520163674),
      zoom:9,
      mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  
  var peta = new google.maps.Map(document.getElementById("googleMap"), propertiPeta);
  }

  // event jendela di-load  
  google.maps.event.addDomListener(window, 'load', initMap);