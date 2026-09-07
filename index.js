
import express from "express";
import cors    from "cors";
import ProvinceRouter from "./src/controllers/province-controller.js"

//SWAGGER
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./src/configs/swagger.js";

const app = express(); 
const port = 3000;
///
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));




app.use(cors());
app.use(express.json()); 

app.use("/api/province", ProvinceRouter); 
app.listen(port, () => {   
console.log('Servidor corriendo en http://localhost:3000');
  console.log('Documentación Swagger en http://localhost:3000/api-docs');
})