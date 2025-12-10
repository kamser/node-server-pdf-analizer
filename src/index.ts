import express from "express";
const app = express();
const port = process.env.PORT ?? "9001";
//const port = "3000";

app.get("/", (req, res) => {
  res.send("Hello World test!");
  console.log("Response sent");
});

app.listen(port, () => {
  console.log(`Example app listening on ported ${port}`);
});