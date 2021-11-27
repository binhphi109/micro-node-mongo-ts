import config from "./core/config";
import mongoose from "./core/mongoose";
import app from "./app";

mongoose.connect((db) => {

  app.listen(config.port, () => {
    console.log("--");
    console.log(config.app.title);
    console.log("Port:     " + config.port);
    console.log("Database: " + config.db.uri);
    console.log("--");
  });
});
