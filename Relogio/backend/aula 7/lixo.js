let map;
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -23.4205, lng: -51.4250 }, // Coordenadas aproximadas de Arapongas-PR
        zoom: 13
    });
}

function addMarker() {
    navigator.geolocation.getCurrentPosition((position) => {
        let userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };

        new google.maps.Marker({
            position: userLocation,
            map: map,
            title: "Local reportado"
        });

        alert("Local adicionado com sucesso!");
    }, () => {
        alert("Erro ao obter a localização.");
    });
}
