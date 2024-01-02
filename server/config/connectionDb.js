const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = async () => {
  try {
    const CONNECTION_URL = process.env.CONNECTION_URL;

    await mongoose.connect(`${CONNECTION_URL}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;

// const mongoose = require("mongoose");

// const connectDb = () => {
//   try {
//     const connect = mongoose.connect(`mongodb://0.0.0.0:27017/assessment`);

//     if (connect) {
//       console.log(
//         "database is connected"
//         //   connect.connection.host,
//         //   connect.connection.name
//       );
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// module.exports = connectDb;
