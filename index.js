
import express from "express";
import cors    from "cors";
import ProvinceRouter from "./src/controllers/province-controller.js"
const app = express(); 

app.use(cors());
app.use(express.json()); 

app.use("/api/province", ProvinceRouter);

const port = 3000;
app.listen(port, () => {

console.log(`Example app listening on port ${port}`)
})