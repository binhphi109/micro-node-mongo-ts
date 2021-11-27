import path from "path";
import { getGlobbedPaths } from "./utils/path";

export default {
  app: {
    title: "Sample API",
    version: "1.0.0",
    description: ""
  },
  port: 3000,
  db: {
    uri: process.env.DB_URI || '',
  },
  tokenSecret: process.env.TOKEN_SECRET || "sEcReT",
  tokenExpiresIn: process.env.TOKEN_EXPIRES_IN || 5356800, // in seconds
  tokenAlgorithms: [],
  // Setting Globbed route files
  files: {
    routes: getGlobbedPaths(path.join(__dirname, "../routes/**/*.{ts,js}")),
    resolvers: getGlobbedPaths(path.join(__dirname, "../resolvers/**/*.{ts,js}")),
    handlers: getGlobbedPaths(path.join(__dirname, "../handlers/**/*.{ts,js}")),
    models: getGlobbedPaths(path.join(__dirname, "../models/**/*.{ts,js}")),
  },
};
