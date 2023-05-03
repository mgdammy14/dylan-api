import express from "express";
import config from "./config";

import participantsRoutes from "./routes/participants.routes";

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// settings
app.set("port", config.port);

//midelwares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(participantsRoutes);

export default app;
