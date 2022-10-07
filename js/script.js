  function initMap() {

    const CENTER = { lat: 50.433535625228124, lng: 30.522252965466034 };
    const MAP = new google.maps.Map(document.getElementById("map"), {
        center: CENTER,
        zoom: 13
      });


    const LOCATIONS = [
        [50.44865969234811, 30.513278342532963, 'Golden Gate', `
        <h2>Golden Gate</h2>
        <p>
          <ul style="list-style: none; padding: 0;">
            <li style="margin-bottom: 10px;">
                <a href="tel:(044)279-22-56">(044)279-22-56</a>
            </li>
            <li>
               <img id="img" src="https://lh5.googleusercontent.com/p/AF1QipNR37aeEzFQ7JCTunXlDrLf3v-1ZtT6_fjzY05p=w408-h544-k-no" width="160px" height="160px">
            </li>
          </ul>
        </p>
        <a href="https://goo.gl/maps/1GaQadDpbYTdWSe66">Get direction</a>
        `],
        [50.44849874786098, 30.538263857523386, 'Mariyinsky Palace', `
        <h2>Mariyinsky Palace</h2>
        <p>
          <ul style="list-style: none; padding: 0;">
            <li style="margin-bottom: 10px;">
                <a href="tel:(098)5494671">(098)5494671</a>
            </li>
            <li>
                <img src="https://lh5.googleusercontent.com/p/AF1QipNbtDauWHVu8qFIppWghihp0JQ0DwSW263Bg0HN=w408-h274-k-no" width="160px" height="160px">
            </li>
          </ul>
        </p>
        <a href="https://goo.gl/maps/id7zPKrdAXJ6q4QeA">Get direction</a>
        `],
        [50.42703290812657, 30.518375499851512, 'St. Nicholas Cathedral', `
        <h2>St. Nicholas Cathedralk</h2>
        <p>
          <ul style="list-style: none; padding: 0;">
            <li style="margin-bottom: 10px;">
                <a href="tel:(044)5295044">(044)5295044</a>
            </li>
            <li>
                <img src="https://lh5.googleusercontent.com/p/AF1QipO2aZ_6mkow4wKaqLQniQ7f-g4SE2N99b1OQb8k=w408-h510-k-no" width="160px" height="160px">
            </li>
          </ul>
        </p>
        <a href="https://goo.gl/maps/zBmnZXzqBZ6xgL319">Get direction</a>
        `],
        [50.433535625228124, 30.522252965466034, 'National Sports Complex “Olympiyskiy”', `
        <h2>National Sports <br> Complex “Olympiyskiy”</h2>
        <p>
          <ul style="list-style: none; padding: 0;">
            <li style="margin-bottom: 10px;">
                <a href="tel:(044)5906751">(044)5906751</a>
            </li>
            <li>
                <img src="https://lh5.googleusercontent.com/p/AF1QipPjssSNkS2yu6szXVwfSYx9X0Te6Af97iwCu9eY=w433-h240-k-no" width="160px" height="160px">
            </li>
          </ul>
        </p>
        <a href="https://goo.gl/maps/JztoaNm1JNhe5LQG7">Get direction</a>
        `]
    ];

  document.getElementById('lists').addEventListener('click', changeCenter);



    let marker;

    const SVG_MARKER = {
        path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
        fillColor: "yellow",
        fillOpacity: 0.6,
        strokeWeight: 0.5,
        rotation: 0,
        scale: 2,
        anchor: new google.maps.Point(0, 35),
      };

    
    for (let i = 0; i <= LOCATIONS.length; i++) {
    marker = new google.maps.Marker({
      position: { lat: LOCATIONS[i][0], lng: LOCATIONS[i][1] },
      map: MAP,
      icon: SVG_MARKER,
      title: LOCATIONS[i][2],
      animation: google.maps.Animation.DROP
    });
    infoMessage(marker, LOCATIONS[i][3], MAP);
  }


  function changeCenter(center) {
      MAP.zoom = 16;
    if (center.target.id === 'one') {
      center = { lat: LOCATIONS[0][0], lng: LOCATIONS[0][1] };
      MAP.setCenter(center);
    } else if (center.target.id === 'two') {
      center = { lat: LOCATIONS[1][0], lng: LOCATIONS[1][1] };
      MAP.setCenter(center);
    } else if (center.target.id === 'three') {
      center = { lat: LOCATIONS[2][0], lng: LOCATIONS[2][1] };
      MAP.setCenter(center);
    } else {
      center = { lat: LOCATIONS[3][0], lng: LOCATIONS[3][1] };
      MAP.setCenter(center);
    }
};




  function infoMessage(marker, message, map) {
    let infoWindow = new google.maps.InfoWindow({
      content: message
    });
    infoWindow.addListener('closeclick', () => {
      toggleBounce(marker, infoWindow);
    });
    marker.addListener("click", () => {
      infoWindow.open({
        anchor: marker,
        map
      });
      toggleBounce(marker, infoWindow);
    });
  }


  function toggleBounce(marker, infoWindow) {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
      infoWindow.close();
    }
    else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }


}


















