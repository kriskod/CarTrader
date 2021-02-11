const mongoose = require("mongoose");
const config = require("config");

const connectDB = async () => {
  try {
    await mongoose.connect(config.get("mongoURI"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
mongoose.set("useFindAndModify", true);

module.exports = connectDB;
