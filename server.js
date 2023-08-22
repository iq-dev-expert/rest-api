const app = require("./app");
const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://Oleksandr:OnkNHKhi2gyV3bUY@cluster0.ptylwch.mongodb.net/db-contacts";

(async () => {
  try {
    await mongoose.connect(DB_HOST);
    console.log("Database connection successful");

    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000");
    });
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
})();
