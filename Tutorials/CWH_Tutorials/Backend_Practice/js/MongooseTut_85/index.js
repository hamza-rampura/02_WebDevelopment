// getting-started.js

// mongoose.connect('mongodb://localhost:27017/myapp');

/* const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/harryKart'); */
// const MyModel = mongoose.model('Test', new Schema({ name: String }));
// Works
// MyModel.findOne(function(error, result) { /* ... */ });

const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/harryKart");
  const kittySchema = new mongoose.Schema({
    name: String,
  });
  // NOTE: methods must be added to the schema before compiling it with mongoose.model()
  kittySchema.methods.speak = function speak() {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  };
  const Kitten = mongoose.model("hamzaKitty", kittySchema);

  const fluffy = new Kitten({ name: "Silence" });
  const fluffy1 = new Kitten({ name: "Silence1" });
  console.log(fluffy.name);
  fluffy.speak();

  await fluffy.save();
  await fluffy1.save();
  fluffy.speak();
  const kittens = await Kitten.find({name:"Silence"});
  console.log(kittens);
}
