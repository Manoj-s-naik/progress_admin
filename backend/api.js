const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
dotenv.config({ path: "./.env" });

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const DB_Username = process.env.DB_Username;
const DB_Password = process.env.DB_Password;

const dblink = `mongodb+srv://manojnaik4work:QDbri1AmJnjY71Ar@cluster0.ebbbk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

mongoose
  .connect(dblink)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.error("DB connection error:", err.message);
  });
