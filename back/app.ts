import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.listen(5500, () =>
  console.log(`Server is Listing on Port http://localhost:5500`)
);
