const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

const connectToDB = async () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((res) => console.log("CONNECTED TO DB"))
    .catch((err) => console.log(err.message));
};
module.exports = connectToDB;
