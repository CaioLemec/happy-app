//Criando Mapa com Leafletjs.com
const map = L.map("mapid").setView([-22.8808, -43.1043], 14);

//Criando Layer que vai receber o mapa.
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//Inputando Ícone no Mapa.
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popAnchor: [170, 2],
});

function addMarker({ id, name, lat, lng }) {
  //Criando a Tag quando clica na marcação
  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
  }).setContent(
    `
        ${name}<a href="/orphanage?id=${id}">
          <img src="/images/arrow-white.svg">
        </a>
      `
  );

  //Criando a marcação no mapa.
  L.marker([lat, lng], { icon }).addTo(map).bindPopup(popup);
}

const orphanagesSpan = document.querySelectorAll(".orphanages span");
orphanagesSpan.forEach((span) => {
  const orphanage = {
    id: span.dataset.id,
    name: span.dataset.name,
    lat: span.dataset.lat,
    lng: span.dataset.lng,
  };
  addMarker(orphanage);
});
