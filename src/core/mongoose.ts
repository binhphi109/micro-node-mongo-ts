import mongoose, { Mongoose } from 'mongoose';
import path from 'path';
import config from './config';

export type MongooseCBFunc = (db: Mongoose) => void

export default {
  connect: function (callback?: MongooseCBFunc) {
    
    config.files.models.forEach(modelPath => {
      require(path.resolve(modelPath));
    });

    mongoose.connect(config.db.uri).then((db) => {
      console.log('Connection has been established successfully.');
      if (callback) callback(db);
    }).catch(err => {
      console.error('Unable to connect to the database:', err);
    });
  }
};