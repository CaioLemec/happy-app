const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  await saveOrphanage(db, {
    lat: "-22.8808",
    lng: "-43.1043",
    name: "Orphanato 2",
    about: "Presta assistência 2.",
    whatsapp: "22222222",
    images: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ].toString(),
    instructions: "Venha 2",
    opening_hours: "Horário de visitas Das 18h até 8h.",
    open_on_weekends: "0",
  });

  // Pesquisando todos
  const selectedOphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOphanages);
  // Pesquisa por ID
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id ="13"');
  console.log(orphanage);
  // // remover dado da tabela pelo id
  // await db.run ("DELETE FROM orphanages WHERE id = '4'")
  // // remover todos dados
  // await db.run ("DELETE FROM orphanages")
});
