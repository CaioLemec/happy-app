// importando dependencias
const express = require("express");
const path = require("path");
const pages = require("./pages.js");

// iniciando o express
const server = express();

server
  // utilizar o body do req
  .use(express.urlencoded({ extended: true }))

  // usando arquivos estáticos
  .use(express.static("public"))

  // config template engine
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  // Rotas
  .get("/", pages.index)
  .get("/orphanage", pages.orphanage)
  .get("/orphanages", pages.orphanages)
  .get("/create-orphanage", pages.createOrphanage)
  .post("/save-orphanage", pages.saveOrphanage);

//ligando server
server.listen(5500);
