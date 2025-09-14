const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors= require("cors");

const userRoutes = require("./routes/userRoutes");
const bookRoutes = require("./routes/bookRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/feedback", feedbackRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));