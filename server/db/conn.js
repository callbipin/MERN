const mongoose = require("mongoose");

const Db = process.env.Atlas_URI

mongoose.connect(Db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }).then(() => { 
    console.log(`Sucessfully connected to MongoDB`);
  }).catch((err) => console.log(`no connection`));
  