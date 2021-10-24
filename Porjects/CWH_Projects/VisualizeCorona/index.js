function updateMap() {
    fetch("data.json")
    .then(response => response.json())
    .then(rsp => {
        rsp.data.forEach(element => {
            let longitude  = element.longitude;
            let latitude = element.latitude;
            let color;

            let cases = element.infected;
            if (cases>255) {
                color = "rgb(255,0,0)"
            }
            else {
                color = `rgb(${cases%255},0,0)`
            }

            //locate on Map
            const marker = new mapboxgl.Marker({
                draggable: false,
                color: color
              })
                .setLngLat([longitude, latitude])
                .addTo(map);
        });
    })
}

setInterval(updateMap, 2000);