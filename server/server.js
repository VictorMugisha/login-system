const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const crypto = require("crypto");
let uuid = crypto.randomUUID();
const { v4: uuidv4 } = require("uuid");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const UserModel = require("./models/UserModel.js");

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
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

// Creating a user
app.post("/signup", upload.single("profilePicture"), async (req, res) => {
  const { firstName, lastName, username, email, password } = req.body;

  const userId = uuidv4() + uuid;
  try {
    const user = new UserModel({
      userId,
      firstName,
      lastName,
      username,
      email,
      password,
    });
    await user.save();
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Error creating user", errorMessage: error.message });
  }
});

// Logging in the user
app.post("/signin", async (req, res) => {
  console.log(req.body);
  const { usernameOrEmail, password } = req.body;
  try {
    const user = await UserModel.findOne({
      $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
    });
    if (!user) {
      return res.status(401).json({ message: "User doesn't exist!" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Error logging in", errorMessage: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
