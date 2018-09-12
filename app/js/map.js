/* global google mapBounds */
// stops eslint error (no-undef) on google and mapBounds

/* Places */
const places = ['Montreal, Canada', 'Doha, Qatar']
const zoomLevel = 1
let map
// Tracking if any infoWindows are already open
let lastInfoWindowOpened

/**
 * Initializes and creates Google Map with markers of known locations
 *
 */
function initializeMap() {
  const mapOptions = {
    disableDefaultUI: true,
  }

  // Create map and append to div.map element
  map = new google.maps.Map(
    document.querySelector('.map--container'),
    mapOptions
  )

  /**
   * Reads Google Places search results to create map markers
   *
   * @param {Object} placeData object returned from search results containing information about a single location
   */
  function createMapMarker(placeData) {
    const name = placeData.formatted_address // name of place from the place service
    const bounds = window.mapBounds // current boundaries of map window

    // marker is an object with additional data about the pin for a single location
    const marker = new google.maps.Marker({
      map,
      position: placeData.geometry.location,
      title: name,
    })

    // info window (displays location in window when clicked on)
    const infoWindow = new google.maps.InfoWindow({
      content: name,
    })

    google.maps.event.addListener(marker, 'click', () => {
      if (lastInfoWindowOpened) {
        lastInfoWindowOpened.close()
      }
      infoWindow.open(map, marker)
      lastInfoWindowOpened = infoWindow
    })

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(marker.getPosition())
    // fit the map to the new marker
    map.fitBounds(bounds)
    // Apply zoom level for map (1 = world)
    map.setZoom(zoomLevel)
    // center the map
    map.setCenter(bounds.getCenter())
  }

  /**
   * Makes sure location search returns results.
   * If so, it creates a new map marker for that location
   *
   * @param {Array} results Array containing location search results
   * @param {Object} status Object with status code of search
   */
  function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (let result = 0; result < results.length; result++) {
        createMapMarker(results[result])
      }
    }
  }

  /**
   * Takes in an array of places and fires off Google Place
   * search for each location
   *
   * @param {Array} places Array of places strings
   */
  function pinPoster(places) {
    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    const service = new google.maps.places.PlacesService(map)

    // Create a search object for each location
    places.forEach((place) => {
      // the search request object
      const request = {
        query: place,
      }

      // Search the Google Maps API for location data and run callback
      // function with the search results after each search.
      service.textSearch(request, callback)
    })
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds()

  // pinPoster(places) creates markers on the map for each location in
  // the places array
  pinPoster(places)
}

window.addEventListener('load', initializeMap)

// Listen for resizing of the window and adjust map bounds
window.addEventListener('resize', function(e) {
  // Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds)
  map.setZoom(zoomLevel) // To keep zoom level the same
})
