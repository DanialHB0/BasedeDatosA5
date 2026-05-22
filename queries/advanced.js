db = db.getSiblingDB('botiga');

print("=== 4.1 CONSULTES AVANÇADES ===");

// 1. $and - productes actius amb preu entre 20€ i 100€
print("1. Productes actius amb preu entre 20 i 100€:");
db.productes.find({
  $and: [
    { actiu: true },
    { preu: { $gte: 20 } },
    { preu: { $lte: 100 } }
  ]
}).forEach(p => printjson(p));

// 2. $or - categoria electronica o valoració >= 4.5
print("2. Electronica o valoració >= 4.5:");
db.productes.find({
  $or: [
    { categoria: "electrònica" },
    { valoracio: { $gte: 4.5 } }
  ]
}).forEach(p => printjson(p));

// 3. $regex - productes amb paraula clau al nom
print("3. Productes amb Pro al nom:");
db.productes.find({
  nom: { $regex: "Pro", $options: "i" }
}).forEach(p => printjson(p));

// 4. sort + limit - top 5 productes més cars
print("4. Top 5 productes més cars:");
db.productes.find().sort({ preu: -1 }).limit(5).forEach(p => printjson(p));

// 5. $group - recompte per categoria
print("5. Nombre de productes per categoria:");
db.productes.aggregate([
  { $group: { _id: "$categoria", total: { $sum: 1 } } },
  { $sort: { total: -1 } }
]).forEach(r => printjson(r));

// 6. $group + $avg - preu mitjà per categoria
print("6. Preu mitjà per categoria:");
db.productes.aggregate([
  {
    $group: {
      _id: "$categoria",
      preu_mitja: { $avg: "$preu" },
      num_productes: { $sum: 1 }
    }
  },
  { $sort: { preu_mitja: -1 } }
]).forEach(r => printjson(r));

// 7. Total gastat per client ($lookup + $group)
print("7. Total gastat per client:");
db.comandes.aggregate([
  {
    $group: {
      _id: "$client_id",
      total_gastat: { $sum: "$total" },
      num_comandes: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: "clients",
      localField: "_id",
      foreignField: "_id",
      as: "info_client"
    }
  },
  {
    $project: {
      _id: 0,
      client: { $arrayElemAt: ["$info_client.nom", 0] },
      total_gastat: 1,
      num_comandes: 1
    }
  },
  { $sort: { total_gastat: -1 } }
]).forEach(r => printjson(r));