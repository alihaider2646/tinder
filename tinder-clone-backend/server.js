import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import cors from "cors";
// App Config
const app = express();
const port = process.env.PORT || 8000;
const connection_url = `mongodb+srv://root:admin@cluster0.ytzmi.mongodb.net/tinder?retryWrites=true&w=majority`;

// Middlewares
app.use(cors());
app.use(express.json());

// DB Config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// API Endpoints
app.get("/", (req, res) => {
  res.status(200).send("Hello Clever Programmers");
});

app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;
  Cards.create(dbCard, (error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/tinder/cards", (req, res) => {
  Cards.find((error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(data);
    }
  });
});

// Listener
app.listen(port, () => console.log(`listening on localhost : ${port}`));
