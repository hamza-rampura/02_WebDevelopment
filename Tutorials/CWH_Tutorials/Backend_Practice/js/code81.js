// inserting data in mongo

use harryKart
db.items.insertOne({name: "Samsung 30s", price: 22200, rating:4.5, quantity: 100, sold: 40})

db.items.insertMany([{name: "Samsung 30s", price: 22200, rating:4.5, quantity: 100, sold: 40},
{name: "Samsung 40s", price: 58200, rating:4.1, quantity: 100, sold: 80},
{name: "Samsung 50s", price: 40200, rating:5.0, quantity: 100, sold: 10}])