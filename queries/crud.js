db = db.getSiblingDB('botiga');

print("=== 3.1 CREATE ===");

// 1. Insereix un nou producte individual amb insertOne()
const res1 = db.productes.insertOne({
  nom: "Teclat mecànic RGB ProType",
  preu: 79.99,
  categoria: "electrònica",
  estoc: 15,
  valoracio: 4.4,
  actiu: true,
  etiquetes: ["teclat", "mecànic", "gaming"],
  creat_el: new Date()
});
print("1. insertOne() - Documents inserits: " + res1.insertedId);

// 2. Insereix 3 productes nous de la categoria 'ofertes' amb insertMany()
const res2 = db.productes.insertMany([
  { nom: "Funda portàtil 15''", preu: 14.99, categoria: "ofertes", estoc: 100, valoracio: 3.8, actiu: true, etiquetes: ["oferta", "accessori"], creat_el: new Date() },
  { nom: "Cable USB-C 2m", preu: 8.99, categoria: "ofertes", estoc: 200, valoracio: 3.6, actiu: true, etiquetes: ["oferta", "cable"], creat_el: new Date() },
  { nom: "Suport per a mòbil de cotxe", preu: 12.50, categoria: "ofertes", estoc: 75, valoracio: 4.0, actiu: true, etiquetes: ["oferta", "cotxe"], creat_el: new Date() }
]);
print("2. insertMany() - Documents inserits: " + res2.insertedIds.length);