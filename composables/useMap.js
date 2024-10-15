export const useMap = () => {
    let clickedLat = ref(null);
    let clickedLng = ref(null);
    let marker = null;
  
    async function initMap() {
        if(process.client){
          const { Map } = await google.maps.importLibrary("maps");
          const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");
          let mapDom = document.getElementById("map-fund");
          console.log(mapDom);
          if(mapDom){
            const map = new google.maps.Map(mapDom, {
              zoom: 4,
              center: { lat: 24.7136, lng: 46.6753 },
              mapId: "DEMO_MAP_ID",
            });
      
            const marker = new AdvancedMarkerElement({
              map,
              position: { lat: 24.7136, lng: 46.6753 },
            });
      
            map.addListener("click", (e) => {
              placeMarkerAndPanTo(e.latLng, map);
            });
          }
        }
      }
  
  
      function placeMarkerAndPanTo(latLng, map) {
        // Remove the old marker if it exists
        if (marker) {
          marker.setMap(null);
        }
  
        // Create a new marker
        marker = new google.maps.Marker({
          position: latLng,
          map: map,
        });
  
        // Pan the map to the clicked location
        map.panTo(latLng);
  
        // Get the latitude and longitude
        clickedLat.value = latLng.lat();
        clickedLng.value = latLng.lng();
        // formData.value.lat = clickedLat.value;
        // formData.value.long = clickedLng.value;
        // Do whatever you want with the latitude and longitude variables
        console.log("Latitude:", clickedLat.value);
        console.log("Longitude:", clickedLng.value);
      }
  
    return { initMap, placeMarkerAndPanTo, clickedLat, clickedLng , marker };
  };