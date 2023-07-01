const  mongoose = require("mongoose");

const ConnectDB =  async () => {
  return mongoose.connect(process.env.MONGO_URL,{});
};

module.exports = ConnectDB;