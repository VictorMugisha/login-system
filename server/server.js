const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const UserModel = require("./models/UserModel.js");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const CONNECTION_URI =
  "mongodb+srv://victormugisha:victormugisha123@nodenetninja.hd6g2.mongodb.net/login-system?retryWrites=true&w=majority&appName=NodeNetNinja";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log(error);
  });

// Routes
app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = new UserModel({ username, password });
    await user.save();
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
