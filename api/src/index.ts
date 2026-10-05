import express from "express";
import productRouter from "./routes/products/index";

const port = process.env.PORT || 3001;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/products", productRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
