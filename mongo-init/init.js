db = db.getSiblingDB('botiga');

db.productes.insertMany([
  { nom: "Portàtil UltraBook Pro 15", preu: 899.99, categoria: "electrònica", estoc: 12, valoracio: 4.7, actiu: true, etiquetes: ["laptop", "treball"], creat_el: new Date("2025-01-10") },
  { nom: "Auriculars Bluetooth SoundMax", preu: 59.99, categoria: "electrònica", estoc: 35, valoracio: 4.2, actiu: true, etiquetes: ["àudio", "música"], creat_el: new Date("2025-02-05") },
  { nom: "Samarreta de cotó orgànic", preu: 19.99, categoria: "roba", estoc: 80, valoracio: 4.0, actiu: true, etiquetes: ["sostenible", "bàsic"], creat_el: new Date("2025-01-20") },
  { nom: "Jaqueta impermeable TrailRun", preu: 129.95, categoria: "esport", estoc: 18, valoracio: 4.8, actiu: true, etiquetes: ["running", "exterior"], creat_el: new Date("2025-03-01") },
  { nom: "Cafetera d'espresso Deluxe", preu: 249.00, categoria: "llar", estoc: 7, valoracio: 4.5, actiu: true, etiquetes: ["cafè", "cuina"], creat_el: new Date("2025-02-15") },
  { nom: "Pantalons de ioga FlexFit", preu: 34.99, categoria: "esport", estoc: 50, valoracio: 3.9, actiu: true, etiquetes: ["ioga", "confort"], creat_el: new Date("2025-01-25") },
  { nom: "Llum LED d'escriptori SmartLight", preu: 44.99, categoria: "llar", estoc: 0, valoracio: 3.5, actiu: true, etiquetes: ["llum", "estudi"], creat_el: new Date("2025-03-10") },
  { nom: "Ratolí ergonòmic ErgoMouse", preu: 39.95, categoria: "electrònica", estoc: 22, valoracio: 4.3, actiu: true, etiquetes: ["perifèric", "treball"], creat_el: new Date("2025-02-28") },
  { nom: "Sabatilles esportives AirStep", preu: 89.90, categoria: "esport", estoc: 0, valoracio: 4.6, actiu: true, etiquetes: ["córrer", "comoditat"], creat_el: new Date("2025-01-30") },
  { nom: "Joc de tovalloles Premium", preu: 29.99, categoria: "llar", estoc: 40, valoracio: 4.1, actiu: true, etiquetes: ["bany", "suau"], creat_el: new Date("2025-03-05") }
]);

const clients = [];
db.clients.insertMany([
  { nom: "Anna", cognoms: "Garcia Puig", email: "anna.garcia@email.cat", telefon: "600111222", adreca: { carrer: "Carrer Major 12", ciutat: "Barcelona", cp: "08001" }, data_registre: new Date("2024-06-01"), actiu: true },
  { nom: "Marc", cognoms: "López Roca", email: "marc.lopez@email.cat", telefon: "611223344", adreca: { carrer: "Avinguda Diagonal 200", ciutat: "Barcelona", cp: "08029" }, data_registre: new Date("2024-07-15"), actiu: true },
  { nom: "Júlia", cognoms: "Martínez Vera", email: "julia.martinez@email.es", telefon: "622334455", adreca: { carrer: "Plaça Catalunya 3", ciutat: "Girona", cp: "17001" }, data_registre: new Date("2024-08-20"), actiu: true },
  { nom: "Pere", cognoms: "Fernández Tous", email: "pere.fernandez@email.cat", telefon: "633445566", adreca: { carrer: "Carrer Nou 45", ciutat: "Tarragona", cp: "43001" }, data_registre: new Date("2024-09-10"), actiu: true },
  { nom: "Marta", cognoms: "Soler Mas", email: "marta.soler@email.cat", telefon: "644556677", adreca: { carrer: "Rambla Principal 7", ciutat: "Lleida", cp: "25001" }, data_registre: new Date("2024-10-05"), actiu: true },
  { nom: "Jordi", cognoms: "Pons Vila", email: "jordi.pons@email.cat", telefon: "655667788", adreca: { carrer: "Carrer del Pi 22", ciutat: "Manresa", cp: "08240" }, data_registre: new Date("2024-11-01"), actiu: false },
  { nom: "Laia", cognoms: "Camps Bosch", email: "laia.camps@email.cat", telefon: "666778899", adreca: { carrer: "Carrer Ample 9", ciutat: "Vic", cp: "08500" }, data_registre: new Date("2024-11-20"), actiu: true },
  { nom: "David", cognoms: "Ribas Tort", email: "david.ribas@email.es", telefon: "677889900", adreca: { carrer: "Passeig de Gràcia 80", ciutat: "Barcelona", cp: "08008" }, data_registre: new Date("2024-12-01"), actiu: true },
  { nom: "Núria", cognoms: "Esteve Miró", email: "nuria.esteve@email.cat", telefon: "688990011", adreca: { carrer: "Carrer Sant Pere 14", ciutat: "Sabadell", cp: "08201" }, data_registre: new Date("2025-01-10"), actiu: true },
  { nom: "Pau", cognoms: "Comas Figueres", email: "pau.comas@email.cat", telefon: "699001122", adreca: { carrer: "Carrer Lleida 5", ciutat: "Terrassa", cp: "08221" }, data_registre: new Date("2025-02-14"), actiu: true }
]);

const c = db.clients.find().toArray();

db.comandes.insertMany([
  { client_id: c[0]._id, data_comanda: new Date("2025-03-01"), estat: "entregada", adreca_entrega: c[0].adreca, productes: [{ nom: "Auriculars Bluetooth SoundMax", preu_unitari: 59.99, quantitat: 1 }, { nom: "Ratolí ergonòmic ErgoMouse", preu_unitari: 39.95, quantitat: 2 }], total: 139.89 },
  { client_id: c[1]._id, data_comanda: new Date("2025-03-05"), estat: "en_curs", adreca_entrega: c[1].adreca, productes: [{ nom: "Portàtil UltraBook Pro 15", preu_unitari: 899.99, quantitat: 1 }], total: 899.99 },
  { client_id: c[2]._id, data_comanda: new Date("2025-03-08"), estat: "pendent", adreca_entrega: c[2].adreca, productes: [{ nom: "Samarreta de cotó orgànic", preu_unitari: 19.99, quantitat: 3 }, { nom: "Pantalons de ioga FlexFit", preu_unitari: 34.99, quantitat: 1 }], total: 94.96 },
  { client_id: c[3]._id, data_comanda: new Date("2025-03-10"), estat: "entregada", adreca_entrega: c[3].adreca, productes: [{ nom: "Cafetera d'espresso Deluxe", preu_unitari: 249.00, quantitat: 1 }], total: 249.00 },
  { client_id: c[4]._id, data_comanda: new Date("2025-03-12"), estat: "entregada", adreca_entrega: c[4].adreca, productes: [{ nom: "Jaqueta impermeable TrailRun", preu_unitari: 129.95, quantitat: 1 }, { nom: "Sabatilles esportives AirStep", preu_unitari: 89.90, quantitat: 1 }], total: 219.85 },
  { client_id: c[5]._id, data_comanda: new Date("2025-03-15"), estat: "cancel·lada", adreca_entrega: c[5].adreca, productes: [{ nom: "Llum LED d'escriptori SmartLight", preu_unitari: 44.99, quantitat: 2 }], total: 89.98 },
  { client_id: c[6]._id, data_comanda: new Date("2025-03-18"), estat: "en_curs", adreca_entrega: c[6].adreca, productes: [{ nom: "Joc de tovalloles Premium", preu_unitari: 29.99, quantitat: 2 }, { nom: "Cafetera d'espresso Deluxe", preu_unitari: 249.00, quantitat: 1 }], total: 308.98 },
  { client_id: c[7]._id, data_comanda: new Date("2025-03-20"), estat: "entregada", adreca_entrega: c[7].adreca, productes: [{ nom: "Portàtil UltraBook Pro 15", preu_unitari: 899.99, quantitat: 1 }, { nom: "Ratolí ergonòmic ErgoMouse", preu_unitari: 39.95, quantitat: 1 }], total: 939.94 },
  { client_id: c[8]._id, data_comanda: new Date("2025-03-22"), estat: "pendent", adreca_entrega: c[8].adreca, productes: [{ nom: "Auriculars Bluetooth SoundMax", preu_unitari: 59.99, quantitat: 2 }], total: 119.98 },
  { client_id: c[9]._id, data_comanda: new Date("2025-03-25"), estat: "entregada", adreca_entrega: c[9].adreca, productes: [{ nom: "Samarreta de cotó orgànic", preu_unitari: 19.99, quantitat: 2 }, { nom: "Jaqueta impermeable TrailRun", preu_unitari: 129.95, quantitat: 1 }], total: 169.93 }
]);

print("Base de dades 'botiga' inicialitzada correctament!");