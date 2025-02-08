const express = require("express");
const app = express();
const { connectDB } = require("./config/db");
const formSchema = require("./schema/FormSchema");
const cors = require("cors");

connectDB();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("helooooo");
});

app.post("/form", async (req, res) => {
  console.log(req.body);
  let payload = await formSchema.create(req.body);
  res
    .status(201)
    .json({ sucess: true, message: "Succesfully Created", payload });
});

app.listen(8080, (err) => {
  if (err) {
    console.log(err.message);
  }
  console.log("server running on port 8080");
});
