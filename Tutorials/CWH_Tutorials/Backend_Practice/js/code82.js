// searching for  data in mongo

use harryKart


//this query will return all objects with price 22200
db.items.find({price: 22200})

// custom filter params
db.items.find({rating: {$gte: 4}})

// And operator

db.items.find({rating: {$gte: 4}, price: {$gt: 25000}})

// OR operator

db.items.find({$or: [{rating: {$gte: 4}, price: {$gt: 25000}}]})