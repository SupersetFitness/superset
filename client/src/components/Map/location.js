//google api location vars ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ //
const addressLat; //address selected from autocomplete searchbar latitude//
const addressLng; //address selected from autocomplete searchbar longitude//
const latitude; //latitude of users current location//
const longitude; //longitude of users current location//
const addressString; //string of address array from google api//
const googleInfoLatAndLong;

//gets users current latitude and longitude//↓ ↓ ↓ ↓
navigator.geolocation.getCurrentPosition(function(position) {
  console.log(position.coords.latitude, position.coords.longitude);
  const latitude=position.coords.latitude
  const lconstitude=position.coords.longitude
  initAutocomplete(latitude, longitude);
  getInfo(latitude,longitude)
});

//function for an onlick event to capture all information//
//↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ //
const getInfo =(addressLat, addressLng) => {
  console.log(addressLat, addressLng);
  console.log(addressString)
  console.log(longitude, latitude)
}



//initializes google api Autocomplete//
//↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ //
const initAutocomplete = (lat, long) => {
  console.log(lat, long)
  const map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: lat, lng: long},
    zoom: 13,
    mapTypeId: 'roadmap'
  });

  // Create the search box and link it to the UI element.
  // Create the search box and link it to the UI element.
  const input = document.getElementById('pac-input');
  const searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  //array of markers//
  //↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ //
  const markers = [];

  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.↓ ↓ ↓ ↓ ↓ ↓ ↓

  searchBox.addListener('places_changed', function() {
    const places = searchBox.getPlaces();
    console.log(places[0])
    googleInfoLatAndLong = {
      googleLat: places[0].geometry.location.lat(),
      googleLong: places[0].geometry.location.lng()
    }
    console.log(googleInfoLatAndLong);
    console.log(places[0].address_components)
    const addressComponents= places[0].address_components;
    console.log(places.address_components)

    addressString = places[0].address_components[0].long_name+ " " + places[0].address_components[1].long_name + " " + places[0].address_components[2].long_name + ", " + places[0].address_components[4].short_name + " " + places[0].address_components[6].long_name
    console.log(addressString);
    console.log(googleInfoLatAndLong);

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);

    });
    markers = [];

    // For each place, get the icon, name and location.
    const bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;

      }

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));


      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });

    //getting the lattitude and longitude of the  address searched//
    map.fitBounds(bounds);
    console.log(markers[0].position.lat());
    console.log(markers[0].position.lng());
    const addressLat = markers[0].position.lat();
    const addressLng = markers[0].position.lng();
  });
}
