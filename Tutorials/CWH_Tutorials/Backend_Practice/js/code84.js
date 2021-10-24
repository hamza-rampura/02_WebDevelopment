//Updating data 

db.items.updateOne({name:"Samsung 50s"},{$set: {price: 2}})

db.items.updateMany({name:"Samsung 30s"},{$set: {price: 2}})
