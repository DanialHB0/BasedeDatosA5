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

print("=== 3.2 READ ===");

// 3. Llista tots els productes
print("3. Tots els productes:");
db.productes.find().forEach(p => printjson(p));

// 4. Productes amb preu < 50€
print("4. Productes amb preu < 50€:");
db.productes.find({ preu: { $lt: 50 } }).forEach(p => printjson(p));

// 5. Productes d'una categoria amb estoc > 0
print("5. Productes de electrònica amb estoc > 0:");
db.productes.find({ categoria: "electrònica", estoc: { $gt: 0 } }).forEach(p => printjson(p));

// 6. Productes amb valoració >= 4.0 - projecció (nom, preu, valoració)
print("6. Productes valoració >= 4.0 (projecció):");
db.productes.find(
  { valoracio: { $gte: 4.0 } },
  { nom: 1, preu: 1, valoracio: 1, _id: 0 }
).forEach(p => printjson(p));

// 7. Productes per etiqueta
print("7. Productes amb etiqueta treball:");
db.productes.find({ etiquetes: "treball" }).forEach(p => printjson(p));