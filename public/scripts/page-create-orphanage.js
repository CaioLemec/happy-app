//Criando Mapa com Leafletjs.com
const map = L.map("mapid").setView([-22.8808, -43.1043], 15);

//Criando Layer que vai receber o mapa.
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//Inputando Ícone no Mapa.
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

// criando e adicionando marca

let marker; //iniciando vazia

map.on("click", (event) => {
  // Event = {originalEvent: MouseEvent, containerPoint: k, layerPoint: k, latlng: D, type: "click", …}
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;
  //enviando para o html valores do lat e lng:
  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;
  //deixando só o último marcado:
  marker && map.removeLayer(marker);
  // adicionando icon na marcação:
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// Campos para adicionar o campo de fotos

function addPhotoField() {
  //Selecionar container fotos pelo ID com QuerySelector.
  const container = document.querySelector("#images");
  //Pegar todos os elementos que tem a class new-upload e retornar em um object.
  const fieldsContainer = document.querySelectorAll(".new-upload");
  //Realizar o clone do ultimo elemento do object criado.
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);
  // Se valor vazio não duplicar.
  const input = newFieldContainer.children[0];
  if (input.value == "") {
    return;
  }
  //Limpando o field do clone.
  input.value = "";
  //Adicionando o clone ao container fotos.
  container.appendChild(newFieldContainer);
}

//Criando uma função para remover o field em um evento de click
function deleteField(event) {
  const span = event.currentTarget;
  const fieldsContainer = document.querySelectorAll(".new-upload");
  if (fieldsContainer.length < 2) {
    //limpar campo
    span.parentNode.children[0].value = "";
    return;
  }
  // deletar campo
  span.parentNode.remove();
}

// Trocando class active dos botões sim e não

function toggleSelect(event) {
  // retirar a class .active dos botões
  document
    .querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove("active"));
  // pegando qual botão com event e adicionando a class active
  const button = event.currentTarget;
  button.classList.add("active");
  // atualizar input hidden com valor selecionado
  const input = document.querySelector('[name="open_on_weekends"]');
  // verificar se é sim ou não. Se sim value =1 Se não value =0.
  input.value = button.dataset.value;
}

function validade(event) {
  if (
    document.querySelector("[name=lat]").value == "" &&
    document.querySelector("[name=lng]").value == ""
  ) {
    event.preventDefault();
    alert("Clique no mapa para adicionar a localização");
  }
}
