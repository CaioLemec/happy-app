//Criando preferências para travar mapa na page orphanage.
const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

// pegando valor do html
const lat = document.querySelector("span[data-lat]").dataset.lat;
const lng = document.querySelector("span[data-lng]").dataset.lng;

//Criando Mapa com Leafletjs.com com as preferências criadas anteriormente.
const map = L.map("mapid", options).setView([lat, lng], 14);

//Criando Layer.
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//Criando e configurando o ícone.
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popAnchor: [170, 2],
});

//Adicionando a marcação no mapa.

L.marker([lat, lng], { icon }).addTo(map);

// Galeria de Imagens
function selectImage(event) {
  const button = event.currentTarget;
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach(removeActiveClass);
  function removeActiveClass(button) {
    button.classList.remove("active");
  }
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");
  imageContainer.src = image.src;
  button.classList.add("active");
}
